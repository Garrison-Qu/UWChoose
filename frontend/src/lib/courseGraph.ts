import { normalizeCourseCode } from './courseCodes'
import type { Course, Prerequisite } from '../types/course'

export type CourseGraphNode = {
  code: string
  label: string
  subject: string
  level: number
}

export type CourseGraphEdge = {
  id: string
  source: string
  target: string
}

export type CourseGraph = {
  nodes: CourseGraphNode[]
  edges: CourseGraphEdge[]
}

function uniqueCodes(courseCodes: string[]): string[] {
  return [...new Set(courseCodes.map(normalizeCourseCode))]
}

export function getDirectPrerequisiteCourseCodes(
  prerequisite: Prerequisite | undefined,
): string[] {
  if (!prerequisite) {
    return []
  }

  if (prerequisite.type === 'course') {
    return [normalizeCourseCode(prerequisite.courseCode)]
  }

  return uniqueCodes(prerequisite.requirements.flatMap(getDirectPrerequisiteCourseCodes))
}

export function buildCourseGraph(courses: Course[]): CourseGraph {
  const nodes = courses.map((course) => ({
    code: course.code,
    label: course.code,
    subject: course.subject,
    level: course.level,
  }))
  const courseCodes = new Set(courses.map((course) => course.code))
  const edges = courses.flatMap((course) =>
    getDirectPrerequisiteCourseCodes(course.prerequisite)
      .filter((prerequisiteCode) => courseCodes.has(prerequisiteCode))
      .map((prerequisiteCode) => ({
        id: `${prerequisiteCode}-${course.code}`,
        source: prerequisiteCode,
        target: course.code,
      })),
  )

  return {
    nodes,
    edges: [...new Map(edges.map((edge) => [edge.id, edge])).values()],
  }
}

export function getRecursivePrerequisiteCodes(
  targetCourseCode: string,
  courses: Course[],
): string[] {
  const courseByCode = new Map(courses.map((course) => [course.code, course]))
  const visited = new Set<string>()
  const result: string[] = []

  function visit(courseCode: string) {
    const course = courseByCode.get(normalizeCourseCode(courseCode))

    if (!course) {
      return
    }

    getDirectPrerequisiteCourseCodes(course.prerequisite).forEach((prerequisiteCode) => {
      if (visited.has(prerequisiteCode)) {
        return
      }

      visited.add(prerequisiteCode)
      result.push(prerequisiteCode)
      visit(prerequisiteCode)
    })
  }

  visit(targetCourseCode)

  return result
}

export function getRecursiveDependentCodes(targetCourseCode: string, courses: Course[]): string[] {
  const graph = buildCourseGraph(courses)
  const normalizedTargetCode = normalizeCourseCode(targetCourseCode)
  const visited = new Set<string>()
  const result: string[] = []

  function visit(courseCode: string) {
    graph.edges
      .filter((edge) => edge.source === courseCode)
      .forEach((edge) => {
        if (visited.has(edge.target)) {
          return
        }

        visited.add(edge.target)
        result.push(edge.target)
        visit(edge.target)
      })
  }

  visit(normalizedTargetCode)

  return result
}

export function filterCourseGraph(graph: CourseGraph, visibleCourseCodes: string[]): CourseGraph {
  const visibleCodes = new Set(visibleCourseCodes.map(normalizeCourseCode))

  return {
    nodes: graph.nodes.filter((node) => visibleCodes.has(node.code)),
    edges: graph.edges.filter(
      (edge) => visibleCodes.has(edge.source) && visibleCodes.has(edge.target),
    ),
  }
}

export function buildPrerequisitePathGraph(
  targetCourseCode: string,
  courses: Course[],
): CourseGraph {
  const normalizedTargetCode = normalizeCourseCode(targetCourseCode)
  const fullGraph = buildCourseGraph(courses)
  const visibleCourseCodes = [
    ...getRecursivePrerequisiteCodes(normalizedTargetCode, courses),
    normalizedTargetCode,
  ]

  return filterCourseGraph(fullGraph, visibleCourseCodes)
}

export function buildCourseFlowGraph(targetCourseCode: string, courses: Course[]): CourseGraph {
  const normalizedTargetCode = normalizeCourseCode(targetCourseCode)
  const fullGraph = buildCourseGraph(courses)
  const visibleCourseCodes = [
    ...getRecursivePrerequisiteCodes(normalizedTargetCode, courses),
    normalizedTargetCode,
    ...getRecursiveDependentCodes(normalizedTargetCode, courses),
  ]

  return filterCourseGraph(fullGraph, visibleCourseCodes)
}

export function buildLocalCourseFlowGraph(targetCourseCode: string, courses: Course[]): CourseGraph {
  const normalizedTargetCode = normalizeCourseCode(targetCourseCode)
  const fullGraph = buildCourseGraph(courses)
  const oneStepPrerequisites = fullGraph.edges
    .filter((edge) => edge.target === normalizedTargetCode)
    .map((edge) => edge.source)
  const twoStepPrerequisites = fullGraph.edges
    .filter((edge) => oneStepPrerequisites.includes(edge.target))
    .map((edge) => edge.source)
  const directDependents = fullGraph.edges
    .filter((edge) => edge.source === normalizedTargetCode)
    .map((edge) => edge.target)
  const visibleCourseCodes = [
    ...twoStepPrerequisites,
    ...oneStepPrerequisites,
    normalizedTargetCode,
    ...directDependents,
  ]
  const visibleCodes = new Set(visibleCourseCodes.map(normalizeCourseCode))
  const allowedEdgeIds = new Set([
    ...fullGraph.edges
      .filter(
        (edge) =>
          twoStepPrerequisites.includes(edge.source) && oneStepPrerequisites.includes(edge.target),
      )
      .map((edge) => edge.id),
    ...fullGraph.edges
      .filter(
        (edge) =>
          oneStepPrerequisites.includes(edge.source) && edge.target === normalizedTargetCode,
      )
      .map((edge) => edge.id),
    ...fullGraph.edges
      .filter(
        (edge) =>
          edge.source === normalizedTargetCode && directDependents.includes(edge.target),
      )
      .map((edge) => edge.id),
  ])

  return {
    nodes: fullGraph.nodes.filter((node) => visibleCodes.has(node.code)),
    edges: fullGraph.edges.filter((edge) => allowedEdgeIds.has(edge.id)),
  }
}
