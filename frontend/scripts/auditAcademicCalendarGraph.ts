import { pathToFileURL } from 'node:url'
import * as cheerio from 'cheerio'
import type { Element } from 'domhandler'
import { courses as localCourses } from '../src/data/courses'
import { normalizeCourseCode } from '../src/lib/courseCodes'
import {
  buildPrerequisitePathGraph,
  getDirectDependentCodes,
  getDirectPrerequisiteCourseCodes,
  type CourseGraph,
  type CourseGraphEdge,
} from '../src/lib/courseGraph'
import type { Course, Prerequisite } from '../src/types/course'

const catalogId = '67e557ed6ed2fe2bd3a38956'
const catalogBaseUrl = 'https://uwaterloocm.kuali.co/api/v1/catalog'
const catalogPageUrl = 'https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog'

type KualiCourseSummary = {
  __catalogCourseId: string
  id: string
  pid: string
  title: string
  subjectCode?: {
    name?: string
  }
}

type KualiCourseDetail = {
  prerequisites?: string
  subjectCode?: {
    name?: string
  }
  title?: string
}

type ParsedPrerequisite = {
  nonCourseConditionCount: number
  prerequisite?: Prerequisite
}

type AuditMismatch = {
  actual: unknown
  courseCode: string
  expected: unknown
  field: string
  sourceUrl: string
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

async function mapWithConcurrency<T, U>(
  items: T[],
  concurrency: number,
  mapper: (item: T) => Promise<U>,
): Promise<U[]> {
  const results: U[] = []
  let nextIndex = 0

  async function worker() {
    for (;;) {
      const index = nextIndex
      nextIndex += 1

      if (index >= items.length) {
        return
      }

      results[index] = await mapper(items[index])
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, () => worker()))

  return results
}

function getMinimumGrade(text: string): number | undefined {
  return Number(text.match(/minimum grade of\s+(\d+)%/i)?.[1]) || undefined
}

function getRequiredCount(text: string): number | undefined {
  const normalized = text.replace(/\s+/g, ' ')
  const completeMatch = normalized.match(/Complete\s+(\d+)\s+of\s+the\s+following/i)
  const atLeastMatch = normalized.match(/at\s+least\s+(\d+)\s+of\s+the\s+following/i)

  return Number(completeMatch?.[1] ?? atLeastMatch?.[1]) || undefined
}

function getCourseRequirementType(
  text: string,
  requirements: Prerequisite[],
): Prerequisite | undefined {
  if (requirements.length === 0) {
    return undefined
  }

  if (requirements.length === 1) {
    return requirements[0]
  }

  const requiredCount = getRequiredCount(text)

  if (requiredCount && requiredCount > 1) {
    return {
      type: 'chooseN',
      requiredCount: Math.min(requiredCount, requirements.length),
      requirements,
    }
  }

  if (requiredCount === 1 || /one\s+of|any\s+of|at\s+least\s+1/i.test(text)) {
    return {
      type: 'anyOf',
      requirements,
    }
  }

  return {
    type: 'allOf',
    requirements,
  }
}

function simplifyRequirement(requirement: Prerequisite | undefined): Prerequisite | undefined {
  if (!requirement || requirement.type === 'course') {
    return requirement
  }

  const requirements = requirement.requirements
    .map(simplifyRequirement)
    .filter((item): item is Prerequisite => Boolean(item))

  if (requirements.length === 0) {
    return undefined
  }

  if (requirements.length === 1) {
    return requirements[0]
  }

  if (requirement.type === 'chooseN') {
    return {
      ...requirement,
      requiredCount: Math.min(requirement.requiredCount, requirements.length),
      requirements,
    }
  }

  return {
    ...requirement,
    requirements,
  }
}

function parseCourseLinksFromNode($: cheerio.CheerioAPI, node: Element) {
  const links = new Map<string, { code: string }>()

  $(node)
    .find('a[href*="#/courses/view/"]')
    .each((_, link) => {
      const code = normalizeCourseCode($(link).text())

      if (code) {
        links.set(code, { code })
      }
    })

  return [...links.values()]
}

function parseLeafRequirement($: cheerio.CheerioAPI, node: cheerio.Cheerio<Element>) {
  const result = node.children('div[data-test$="-result"]').first()
  const resultNode = result.get(0)

  if (!resultNode) {
    return {
      nonCourseConditionCount: 0,
      prerequisite: undefined,
    }
  }

  const text = result.text().replace(/\s+/g, ' ').trim()
  const links = parseCourseLinksFromNode($, resultNode)

  if (links.length === 0) {
    return {
      nonCourseConditionCount: text ? 1 : 0,
      prerequisite: undefined,
    }
  }

  const minGrade = getMinimumGrade(text)
  const requirements: Prerequisite[] = links.map((link) => ({
    type: 'course',
    courseCode: link.code,
    ...(minGrade === undefined ? {} : { minGrade }),
  }))

  return {
    nonCourseConditionCount: 0,
    prerequisite: getCourseRequirementType(text, requirements),
  }
}

function parseRequirementElement(
  $: cheerio.CheerioAPI,
  element: Element,
): ParsedPrerequisite {
  const node = $(element)

  if ((node.attr('data-test') ?? '').startsWith('ruleView-')) {
    return parseLeafRequirement($, node)
  }

  const groupLabel = node.children('span').first().text().replace(/\s+/g, ' ').trim()
  const children =
    /Complete\s+(all|\d+)/i.test(groupLabel) ?
      node.children('ul').first().children('li, div, ul').toArray()
    : node.children('li, div, ul').toArray()
  const parsedChildren = children.map((child) => parseRequirementElement($, child))
  const requirements = parsedChildren
    .map((item) => item.prerequisite)
    .filter((item): item is Prerequisite => Boolean(item))
  const nonCourseConditionCount = parsedChildren.reduce(
    (total, item) => total + item.nonCourseConditionCount,
    0,
  )

  if (/Complete\s+(all|\d+)/i.test(groupLabel)) {
    return {
      nonCourseConditionCount,
      prerequisite: simplifyRequirement(getCourseRequirementType(groupLabel, requirements)),
    }
  }

  return {
    nonCourseConditionCount,
    prerequisite: simplifyRequirement({
      type: 'allOf',
      requirements,
    }),
  }
}

export function parseAcademicCalendarPrerequisiteHtml(
  value: string | undefined,
): ParsedPrerequisite {
  if (!value) {
    return {
      nonCourseConditionCount: 0,
      prerequisite: undefined,
    }
  }

  const $ = cheerio.load(value)
  const parsedRequirements = $('body')
    .children()
    .toArray()
    .map((node) => parseRequirementElement($, node as Element))
  const requirements = parsedRequirements
    .map((item) => item.prerequisite)
    .filter((item): item is Prerequisite => Boolean(item))

  return {
    nonCourseConditionCount: parsedRequirements.reduce(
      (total, item) => total + item.nonCourseConditionCount,
      0,
    ),
    prerequisite: simplifyRequirement({
      type: 'allOf',
      requirements,
    }),
  }
}

function normalizeRequirementForComparison(
  prerequisite: Prerequisite | undefined,
): unknown {
  if (!prerequisite) {
    return undefined
  }

  if (prerequisite.type === 'course') {
    return {
      courseCode: normalizeCourseCode(prerequisite.courseCode),
      type: 'course',
    }
  }

  const requirements = prerequisite.requirements
    .map(normalizeRequirementForComparison)
    .sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)))

  if (prerequisite.type === 'chooseN') {
    return {
      requiredCount: prerequisite.requiredCount,
      requirements,
      type: prerequisite.type,
    }
  }

  return {
    requirements,
    type: prerequisite.type,
  }
}

function sortedCodes(courseCodes: string[]) {
  return [...new Set(courseCodes.map(normalizeCourseCode))].sort()
}

function sortedEdgeIds(edges: CourseGraphEdge[]) {
  return edges.map((edge) => `${edge.source}->${edge.target}`).sort()
}

function groupSignatureById(graph: CourseGraph) {
  return new Map(
    graph.groups.map((group) => [
      group.id,
      `${group.target}:${group.label}:${group.type}:${sortedCodes(group.courseCodes).join(',')}`,
    ]),
  )
}

function groupSignatures(graph: CourseGraph) {
  return [...groupSignatureById(graph).values()].sort()
}

function displayEdgeSignatures(graph: CourseGraph) {
  const groupById = groupSignatureById(graph)

  return graph.displayEdges
    .map((edge) => {
      if (edge.source.startsWith('group-')) {
        return `group:${groupById.get(edge.source) ?? edge.source}->${edge.target}`
      }

      return `course:${edge.source}->${edge.target}`
    })
    .sort()
}

function nodeSignatures(graph: CourseGraph) {
  return graph.nodes
    .map((node) => `${node.code}:${node.isPlaceholder ? 'placeholder' : 'course'}`)
    .sort()
}

function valuesMatch(left: unknown, right: unknown) {
  return JSON.stringify(left) === JSON.stringify(right)
}

function getSourceUrl(courseSummary: KualiCourseSummary | undefined) {
  return courseSummary ? `${catalogPageUrl}#/courses/${courseSummary.pid}` : catalogPageUrl
}

function addMismatch(
  mismatches: AuditMismatch[],
  courseCode: string,
  field: string,
  expected: unknown,
  actual: unknown,
  sourceUrl: string,
) {
  if (valuesMatch(expected, actual)) {
    return
  }

  mismatches.push({
    actual,
    courseCode,
    expected,
    field,
    sourceUrl,
  })
}

function buildSourceCourse(
  localCourse: Course,
  detail: KualiCourseDetail | undefined,
  parsedPrerequisite: Prerequisite | undefined,
): Course {
  return {
    ...localCourse,
    name: detail?.title ?? localCourse.name,
    prerequisite: parsedPrerequisite,
    subject: detail?.subjectCode?.name ?? localCourse.subject,
  }
}

export async function auditAcademicCalendarGraph() {
  const summaries = await fetchJson<KualiCourseSummary[]>(`${catalogBaseUrl}/courses/${catalogId}`)
  const summaryByCode = new Map(summaries.map((summary) => [summary.__catalogCourseId, summary]))
  const localCodes = localCourses.map((course) => course.code)
  const detailEntries = await mapWithConcurrency(localCourses, 12, async (localCourse) => {
    const summary = summaryByCode.get(localCourse.code)

    if (!summary) {
      return [localCourse.code, undefined] as const
    }

    return [
      localCourse.code,
      await fetchJson<KualiCourseDetail>(`${catalogBaseUrl}/course/byId/${catalogId}/${summary.id}`),
    ] as const
  })
  const detailByCode = new Map(detailEntries)
  const parsedByCode = new Map(
    localCourses.map((localCourse) => [
      localCourse.code,
      parseAcademicCalendarPrerequisiteHtml(detailByCode.get(localCourse.code)?.prerequisites),
    ]),
  )
  const sourceCourses = localCourses.map((localCourse) =>
    buildSourceCourse(
      localCourse,
      detailByCode.get(localCourse.code),
      parsedByCode.get(localCourse.code)?.prerequisite,
    ),
  )
  const mismatches: AuditMismatch[] = []
  let nonCourseConditionCount = 0

  localCourses.forEach((localCourse) => {
    const courseCode = localCourse.code
    const sourceUrl = getSourceUrl(summaryByCode.get(courseCode))
    const parsed = parsedByCode.get(courseCode)
    const sourcePrerequisite = parsed?.prerequisite

    nonCourseConditionCount += parsed?.nonCourseConditionCount ?? 0

    if (!summaryByCode.has(courseCode)) {
      mismatches.push({
        actual: 'missing from live catalog',
        courseCode,
        expected: 'course present in live catalog',
        field: 'calendarCourse',
        sourceUrl,
      })
      return
    }

    addMismatch(
      mismatches,
      courseCode,
      'prerequisiteTree',
      normalizeRequirementForComparison(sourcePrerequisite),
      normalizeRequirementForComparison(localCourse.prerequisite),
      sourceUrl,
    )
    addMismatch(
      mismatches,
      courseCode,
      'directPrerequisiteCodes',
      sortedCodes(getDirectPrerequisiteCourseCodes(sourcePrerequisite)),
      sortedCodes(getDirectPrerequisiteCourseCodes(localCourse.prerequisite)),
      sourceUrl,
    )
    addMismatch(
      mismatches,
      courseCode,
      'directDependentCodes',
      sortedCodes(getDirectDependentCodes(courseCode, sourceCourses)),
      sortedCodes(getDirectDependentCodes(courseCode, localCourses)),
      sourceUrl,
    )

    const sourceGraph = buildPrerequisitePathGraph(courseCode, sourceCourses)
    const localGraph = buildPrerequisitePathGraph(courseCode, localCourses)

    addMismatch(
      mismatches,
      courseCode,
      'graphNodes',
      nodeSignatures(sourceGraph),
      nodeSignatures(localGraph),
      sourceUrl,
    )
    addMismatch(
      mismatches,
      courseCode,
      'graphEdges',
      sortedEdgeIds(sourceGraph.edges),
      sortedEdgeIds(localGraph.edges),
      sourceUrl,
    )
    addMismatch(
      mismatches,
      courseCode,
      'graphGroups',
      groupSignatures(sourceGraph),
      groupSignatures(localGraph),
      sourceUrl,
    )
    addMismatch(
      mismatches,
      courseCode,
      'graphDisplayEdges',
      displayEdgeSignatures(sourceGraph),
      displayEdgeSignatures(localGraph),
      sourceUrl,
    )
  })

  return {
    auditedCourseCount: localCodes.length,
    mismatches,
    nonCourseConditionCount,
  }
}

function printMismatch(mismatch: AuditMismatch) {
  console.error(`- ${mismatch.courseCode} ${mismatch.field}`)
  console.error(`  Source: ${mismatch.sourceUrl}`)
  console.error(`  Expected: ${JSON.stringify(mismatch.expected)}`)
  console.error(`  Actual:   ${JSON.stringify(mismatch.actual)}`)
}

async function main() {
  const result = await auditAcademicCalendarGraph()

  if (result.mismatches.length > 0) {
    console.error(
      `Academic calendar graph audit failed with ${result.mismatches.length} mismatch(es).`,
    )
    result.mismatches.slice(0, 80).forEach(printMismatch)

    if (result.mismatches.length > 80) {
      console.error(`...and ${result.mismatches.length - 80} more mismatch(es).`)
    }

    console.error(
      `Checked ${result.auditedCourseCount} local courses. Ignored ${result.nonCourseConditionCount} non-course calendar condition(s).`,
    )
    process.exit(1)
  }

  console.log(
    `Academic calendar graph audit passed for ${result.auditedCourseCount} courses. Ignored ${result.nonCourseConditionCount} non-course calendar condition(s).`,
  )
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main()
}
