import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import * as cheerio from 'cheerio'
import { courses as existingCourses } from '../src/data/courses'
import { degrees } from '../src/data/programs'
import type { Course } from '../src/types/course'
import type { Program, ProgramCategory, ProgramRequirement } from '../src/types/program'

const catalogId = '67e557ed6ed2fe2bd3a38956'
const catalogBaseUrl = 'https://uwaterloocm.kuali.co/api/v1/catalog'
const catalogPageUrl = 'https://uwaterloo.ca/academic-calendar/undergraduate-studies/catalog'
const mathFacultyName = 'Faculty of Mathematics'

type KualiProgramSummary = {
  id: string
  pid: string
  title: string
  code?: string
}

type KualiProgramDetail = KualiProgramSummary & {
  additionalConstraints?: string
  courseRequirementsNoUnits?: string
  facultyCalendarDisplay?: {
    name?: string
  }
  undergraduateCredentialType?: {
    name?: string
  }
  requirements?: string
  specializationIsAvailableForStudentsInTheFollowingMajorsRules?: string
}

type KualiCourseDetail = {
  description?: string
  prerequisites?: string
  subjectCode?: {
    name?: string
  }
  title?: string
}

type CourseLink = {
  code: string
  courseId: string
  name: string
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

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
  )

  return results
}

function stripHtml(value: string | undefined): string | undefined {
  if (!value) {
    return undefined
  }

  const text = cheerio.load(value).text().replace(/\s+/g, ' ').trim()

  return text.length > 0 ? text : undefined
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function normalizeCourseCode(value: string): string {
  return value.replace(/\s+/g, '').toUpperCase()
}

function getCourseSubject(code: string): string {
  return code.match(/^[A-Z]+/)?.[0] ?? code
}

function getCourseLevel(code: string): number {
  return Number(code.match(/\d/)?.[0] ?? 0) * 100
}

function getProgramCategory(program: KualiProgramDetail): ProgramCategory {
  const credentialType = program.undergraduateCredentialType?.name
  const code = program.code ?? ''
  const title = program.title

  if (credentialType === 'Minor') {
    return 'minor'
  }

  if (credentialType === 'Specialization') {
    return 'specialization'
  }

  if (credentialType === 'Option') {
    return 'option'
  }

  if (credentialType === 'Degree Requirements' || code.startsWith('Degree Reqs:')) {
    return 'degree-requirement'
  }

  if (code.startsWith('JH-') || title.includes('Joint Honours')) {
    return 'joint'
  }

  if (title.includes('Double Degree') || code.includes('Double Degree')) {
    return 'double-degree'
  }

  return 'major'
}

function getDegreeIds(program: KualiProgramDetail): string[] | undefined {
  const text = `${program.title} ${program.code ?? ''}`
  const degreeIds: string[] = []

  if (text.includes('Bachelor of Mathematics') || text.includes('BMath')) {
    degreeIds.push('bmath')
  }

  if (text.includes('Bachelor of Computer Science') || text.includes('BCS')) {
    degreeIds.push('bcs')
  }

  return degreeIds.length > 0 ? degreeIds : undefined
}

function getRequiredCount(text: string): number | undefined {
  const normalized = text.replace(/\s+/g, ' ')
  const completeMatch = normalized.match(/Complete\s+(\d+)\s+of\s+the\s+following/i)
  const atLeastMatch = normalized.match(/at\s+least\s+(\d+)\s+of\s+the\s+following/i)

  return Number(completeMatch?.[1] ?? atLeastMatch?.[1]) || undefined
}

function getRequirementType(text: string): Pick<ProgramRequirement, 'requiredCount' | 'type'> {
  const requiredCount = getRequiredCount(text)

  if (requiredCount) {
    return {
      type: 'chooseN',
      requiredCount,
    }
  }

  return {
    type: 'allOf',
  }
}

function parseCourseLinksFromNode($: cheerio.CheerioAPI, node: cheerio.Element): CourseLink[] {
  const links = new Map<string, CourseLink>()

  $(node)
    .find('a[href*="#/courses/view/"]')
    .each((_, link) => {
      const href = $(link).attr('href') ?? ''
      const courseId = href.match(/courses\/view\/([a-f0-9]+)/i)?.[1]
      const code = normalizeCourseCode($(link).text())
      const name = $(link)
        .parent()
        .text()
        .replace(/\([^)]*\)/g, ' ')
        .replace(code, ' ')
        .replace(/\s+-\s+/, ' ')
        .replace(/\s+/g, ' ')
        .trim()

      if (courseId && code) {
        links.set(code, {
          code,
          courseId,
          name,
        })
      }
    })

  return [...links.values()]
}

function parseProgramCodes(value: string | undefined): string[] | undefined {
  if (!value) {
    return undefined
  }

  const $ = cheerio.load(value)
  const codes = new Set<string>()

  $('a[href*="#/programs/view/"]').each((_, link) => {
    const code = $(link).text().replace(/\s+/g, ' ').trim()

    if (code) {
      codes.add(code)
    }
  })

  return codes.size > 0 ? [...codes] : undefined
}

function parseRequirements(program: KualiProgramDetail, courseLinksByCode: Map<string, CourseLink>): ProgramRequirement[] {
  const html = program.courseRequirementsNoUnits ?? program.requirements

  if (!html) {
    return []
  }

  const $ = cheerio.load(html)
  const requirements: ProgramRequirement[] = []

  $('li[data-test^="ruleView-"]').each((_, node) => {
    const courses = parseCourseLinksFromNode($, node)

    if (courses.length === 0) {
      return
    }

    courses.forEach((course) => courseLinksByCode.set(course.code, course))

    const result = $(node).children('div[data-test$="-result"]').first()
    const rawName = result.text().replace(/\s+/g, ' ').trim()
    const requirementShape = getRequirementType(rawName)
    const id = `${slugify(program.title)}-${requirements.length + 1}-${slugify(rawName).slice(0, 70)}`

    requirements.push({
      id,
      name: rawName.slice(0, 180),
      category: 'program',
      courses: courses.map((course) => course.code),
      ...requirementShape,
    })
  })

  return requirements
}

function buildProgram(
  program: KualiProgramDetail,
  courseLinksByCode: Map<string, CourseLink>,
  id: string,
): Program {
  const sourceUrl = `${catalogPageUrl}#/programs/${program.pid}`

  return {
    id,
    name: program.title,
    degreeIds: getDegreeIds(program),
    category: getProgramCategory(program),
    code: program.code,
    credentialType: program.undergraduateCredentialType?.name,
    faculty: program.facultyCalendarDisplay?.name,
    sourcePid: program.pid,
    sourceId: program.id,
    sourceUrl,
    parentProgramCodes: parseProgramCodes(program.specializationIsAvailableForStudentsInTheFollowingMajorsRules),
    requirements: parseRequirements(program, courseLinksByCode),
  }
}

function buildCourseFromLink(link: CourseLink, detail?: KualiCourseDetail): Course {
  return {
    code: link.code,
    name: detail?.title ?? link.name,
    subject: detail?.subjectCode?.name ?? getCourseSubject(link.code),
    level: getCourseLevel(link.code),
    description: detail?.description,
    prerequisiteRawText: stripHtml(detail?.prerequisites),
  }
}

function formatTsValue(value: unknown): string {
  return JSON.stringify(value, null, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, '"')
}

async function main() {
  const summaries = await fetchJson<KualiProgramSummary[]>(`${catalogBaseUrl}/programs/${catalogId}`)
  const details = await Promise.all(
    summaries.map((summary) =>
      fetchJson<KualiProgramDetail>(`${catalogBaseUrl}/program/${catalogId}/${summary.pid}`),
    ),
  )
  const mathPrograms = details
    .filter((program) => program.facultyCalendarDisplay?.name === mathFacultyName)
    .sort((left, right) => left.title.localeCompare(right.title))
  const courseLinksByCode = new Map<string, CourseLink>()
  const baseIdCounts = mathPrograms.reduce<Record<string, number>>((counts, program) => {
    const id = slugify(program.title)

    counts[id] = (counts[id] ?? 0) + 1

    return counts
  }, {})
  const programs = mathPrograms.map((program) => {
    const baseId = slugify(program.title)
    const id = baseIdCounts[baseId] > 1 ? slugify(`${program.code} ${program.title}`) : baseId

    return buildProgram(program, courseLinksByCode, id)
  })
  const existingCourseByCode = new Map(existingCourses.map((course) => [course.code, course]))
  const missingCourseLinks = [...courseLinksByCode.values()].filter(
    (course) => !existingCourseByCode.has(course.code),
  )
  const courseDetails = new Map<string, KualiCourseDetail>()

  await mapWithConcurrency(missingCourseLinks, 12, async (link) => {
    try {
      courseDetails.set(
        link.code,
        await fetchJson<KualiCourseDetail>(`${catalogBaseUrl}/course/byId/${catalogId}/${link.courseId}`),
      )
    } catch (error) {
      console.warn(`Could not fetch ${link.code}: ${error instanceof Error ? error.message : String(error)}`)
    }
  })

  const courses = [
    ...existingCourses,
    ...missingCourseLinks.map((link) => buildCourseFromLink(link, courseDetails.get(link.code))),
  ].sort((left, right) => left.code.localeCompare(right.code))

  const programsSource = `import type { Degree, Program } from "../types/program";

export const degrees: Degree[] = ${formatTsValue(degrees)};

export const programs: Program[] = ${formatTsValue(programs)};
`

  const coursesSource = `import type { Course } from "../types/course";

export const courses: Course[] = ${formatTsValue(courses)};
`

  await writeFile(resolve('src/data/programs.ts'), programsSource)
  await writeFile(resolve('src/data/courses.ts'), coursesSource)

  console.log(`Imported ${programs.length} Faculty of Mathematics programs.`)
  console.log(`Added ${missingCourseLinks.length} courses; catalog now has ${courses.length} courses.`)
}

await main()
