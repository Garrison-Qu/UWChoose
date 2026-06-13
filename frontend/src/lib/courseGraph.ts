import { normalizeCourseCode } from './courseCodes'
import type { Course, Prerequisite } from '../types/course'

export type CourseGraphNode = {
  code: string
  label: string
  subject: string
  level: number
  isPlaceholder?: boolean
}

export type CourseGraphEdge = {
  id: string
  source: string
  target: string
}

export type CourseGraphGroup = {
  id: string
  courseCodes: string[]
  label: string
  target: string
  type: 'required' | 'choice'
}

export type CourseGraph = {
  nodes: CourseGraphNode[]
  edges: CourseGraphEdge[]
  displayEdges: CourseGraphEdge[]
  groups: CourseGraphGroup[]
}

export type CourseGraphLayoutOptions = {
  courseNodeHeight: number
  courseNodeWidth: number
  groupLabelOffsetY: number
  groupPaddingX: number
  groupPaddingY: number
}

export type CourseGraphGroupBox = {
  group: CourseGraphGroup
  position: {
    x: number
    y: number
  }
  size: {
    height: number
    width: number
  }
}

const groupLayoutUnitGap = 56
const graphRankSpacing = 400
const groupedCourseColumnSpacing = 184
const ungroupedCourseColumnSpacing = 172
const graphRowSpacing = 126

function uniqueCodes(courseCodes: string[]): string[] {
  return [...new Set(courseCodes.map(normalizeCourseCode))]
}

function getCourseCodeParts(courseCode: string) {
  const normalizedCode = normalizeCourseCode(courseCode)
  const match = normalizedCode.match(/^([A-Z]+)(\d+)/)

  return {
    level: match ? Number(`${match[2][0]}00`) : 0,
    subject: match?.[1] ?? normalizedCode,
  }
}

function buildPlaceholderNode(courseCode: string): CourseGraphNode {
  const normalizedCode = normalizeCourseCode(courseCode)
  const { level, subject } = getCourseCodeParts(normalizedCode)

  return {
    code: normalizedCode,
    isPlaceholder: true,
    label: normalizedCode,
    level,
    subject,
  }
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
    displayEdges: [...new Map(edges.map((edge) => [edge.id, edge])).values()],
    groups: [],
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

function getPreferredSameSubjectCodes(
  courseCodes: string[],
  course: Course,
  courseByCode: Map<string, Course>,
) {
  const normalizedCodes = uniqueCodes(courseCodes)
  const sameSubjectCodes = normalizedCodes.filter(
    (courseCode) => courseByCode.get(courseCode)?.subject === course.subject,
  )

  return sameSubjectCodes.length > 0 ? sameSubjectCodes : normalizedCodes
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

export function getDirectDependentCodes(targetCourseCode: string, courses: Course[]): string[] {
  const graph = buildCourseGraph(courses)
  const normalizedTargetCode = normalizeCourseCode(targetCourseCode)

  return uniqueCodes(
    graph.edges
      .filter((edge) => edge.source === normalizedTargetCode)
      .map((edge) => edge.target),
  )
}

function getVisibleDirectDependentCodes(
  targetCourseCode: string,
  courses: Course[],
  limit = 5,
) {
  const normalizedTargetCode = normalizeCourseCode(targetCourseCode)
  const directDependentCodes = getDirectDependentCodes(normalizedTargetCode, courses)
  const courseByCode = new Map(courses.map((course) => [course.code, course]))
  const targetCourse = courseByCode.get(normalizedTargetCode)

  if (!targetCourse) {
    return directDependentCodes.slice(0, limit)
  }

  return getPreferredSameSubjectCodes(directDependentCodes, targetCourse, courseByCode)
    .slice(0, limit)
}

export function filterCourseGraph(graph: CourseGraph, visibleCourseCodes: string[]): CourseGraph {
  const visibleCodes = new Set(visibleCourseCodes.map(normalizeCourseCode))

  return {
    nodes: graph.nodes.filter((node) => visibleCodes.has(node.code)),
    edges: graph.edges.filter(
      (edge) => visibleCodes.has(edge.source) && visibleCodes.has(edge.target),
    ),
    displayEdges: graph.displayEdges.filter(
      (edge) => visibleCodes.has(edge.source) && visibleCodes.has(edge.target),
    ),
    groups: [],
  }
}

function getPrerequisiteGroupLabel(prerequisite: Exclude<Prerequisite, { type: 'course' }>) {
  if (prerequisite.type === 'allOf') {
    return 'All required'
  }

  if (prerequisite.type === 'chooseN') {
    return `Choose ${prerequisite.requiredCount} of`
  }

  return 'One of'
}

function getPrerequisiteGroupType(
  prerequisite: Exclude<Prerequisite, { type: 'course' }>,
): CourseGraphGroup['type'] {
  return prerequisite.type === 'allOf' ? 'required' : 'choice'
}

function getDirectCourseChildCodes(prerequisite: Exclude<Prerequisite, { type: 'course' }>) {
  return uniqueCodes(
    prerequisite.requirements.flatMap((requirement) =>
      requirement.type === 'course' ? [requirement.courseCode] : [],
    ),
  )
}

function getPrerequisiteGroupsForCourse(
  course: Course,
  visibleCodes: Set<string>,
): CourseGraphGroup[] {
  const groups: CourseGraphGroup[] = []

  function visit(prerequisite: Prerequisite | undefined, path: number[]) {
    if (!prerequisite || prerequisite.type === 'course') {
      return
    }

    const courseCodes = getDirectCourseChildCodes(prerequisite).filter((courseCode) =>
      visibleCodes.has(courseCode),
    )

    if (courseCodes.length > 1) {
      groups.push({
        id: `group-${course.code}-${path.join('-')}`,
        courseCodes,
        label: getPrerequisiteGroupLabel(prerequisite),
        target: course.code,
        type: getPrerequisiteGroupType(prerequisite),
      })
    }

    prerequisite.requirements.forEach((requirement, index) => {
      visit(requirement, [...path, index])
    })
  }

  visit(course.prerequisite, [0])

  return groups
}

function buildPrerequisiteGroups(
  courses: Course[],
  visibleCodes: Set<string>,
  visibleEdges: CourseGraphEdge[],
): CourseGraphGroup[] {
  const visibleEdgeIds = new Set(visibleEdges.map((edge) => edge.id))
  const groups = courses
    .filter((course) => visibleCodes.has(course.code))
    .flatMap((course) => getPrerequisiteGroupsForCourse(course, visibleCodes))
    .map((group) => ({
      ...group,
      courseCodes: group.courseCodes.filter((courseCode) =>
        visibleEdgeIds.has(`${courseCode}-${group.target}`),
      ),
    }))
    .filter((group) => group.courseCodes.length > 1)

  return filterNestedGroups([...new Map(groups.map((group) => [group.id, group])).values()])
}

function isStrictSubset(left: string[], right: string[]) {
  const rightCodes = new Set(right)

  return left.length < right.length && left.every((courseCode) => rightCodes.has(courseCode))
}

function isSameSet(left: string[], right: string[]) {
  const rightCodes = new Set(right)

  return left.length === right.length && left.every((courseCode) => rightCodes.has(courseCode))
}

function filterNestedGroups(groups: CourseGraphGroup[]) {
  return groups.filter(
    (group) =>
      !groups.some(
        (otherGroup) =>
          otherGroup.id !== group.id &&
          otherGroup.target === group.target &&
          (isStrictSubset(otherGroup.courseCodes, group.courseCodes) ||
            (isSameSet(otherGroup.courseCodes, group.courseCodes) &&
              otherGroup.id.startsWith(`${group.id}-`))),
      ),
  )
}

function buildDisplayEdges(edges: CourseGraphEdge[], groups: CourseGraphGroup[]) {
  const groupedPrerequisiteEdges = new Set(
    groups.flatMap((group) =>
      group.courseCodes.map((courseCode) => `${courseCode}-${group.target}`),
    ),
  )
  const groupEdges = groups.map((group) => ({
    id: `${group.id}-${group.target}`,
    source: group.id,
    target: group.target,
  }))

  return [
    ...edges.filter((edge) => !groupedPrerequisiteEdges.has(edge.id)),
    ...groupEdges,
  ]
}

function getAverageNeighborIndex(
  courseCode: string,
  neighborCodes: string[],
  direction: 'incoming' | 'outgoing',
  graph: CourseGraph,
) {
  const neighborIndexes = new Map(neighborCodes.map((neighborCode, index) => [neighborCode, index]))
  const connectedIndexes = graph.edges
    .filter((edge) =>
      direction === 'incoming'
        ? edge.target === courseCode && neighborIndexes.has(edge.source)
        : edge.source === courseCode && neighborIndexes.has(edge.target),
    )
    .map((edge) =>
      direction === 'incoming'
        ? (neighborIndexes.get(edge.source) ?? 0)
        : (neighborIndexes.get(edge.target) ?? 0),
    )

  if (connectedIndexes.length === 0) {
    return undefined
  }

  return connectedIndexes.reduce((total, index) => total + index, 0) / connectedIndexes.length
}

function getVisiblePrerequisiteCount(courseCode: string, graph: CourseGraph) {
  return graph.edges.filter((edge) => edge.target === courseCode).length
}

function sortRankByNeighbors(
  courseCodes: string[],
  neighborCodes: string[] | undefined,
  direction: 'incoming' | 'outgoing',
  graph: CourseGraph,
) {
  if (!neighborCodes) {
    return [...courseCodes].sort((left, right) => {
      const prerequisiteCountDifference =
        getVisiblePrerequisiteCount(right, graph) - getVisiblePrerequisiteCount(left, graph)

      if (prerequisiteCountDifference !== 0) {
        return prerequisiteCountDifference
      }

      return left.localeCompare(right)
    })
  }

  const originalIndexes = new Map(courseCodes.map((courseCode, index) => [courseCode, index]))

  return [...courseCodes].sort((left, right) => {
    const prerequisiteCountDifference =
      getVisiblePrerequisiteCount(right, graph) - getVisiblePrerequisiteCount(left, graph)

    if (prerequisiteCountDifference !== 0) {
      return prerequisiteCountDifference
    }

    const leftAverage = getAverageNeighborIndex(left, neighborCodes, direction, graph)
    const rightAverage = getAverageNeighborIndex(right, neighborCodes, direction, graph)

    if (leftAverage !== undefined && rightAverage !== undefined && leftAverage !== rightAverage) {
      return leftAverage - rightAverage
    }

    if (leftAverage !== undefined && rightAverage === undefined) {
      return -1
    }

    if (leftAverage === undefined && rightAverage !== undefined) {
      return 1
    }

    return (originalIndexes.get(left) ?? 0) - (originalIndexes.get(right) ?? 0)
  })
}

function orderGraphRanks(nodesByRank: Map<number, string[]>, graph: CourseGraph) {
  const orderedRanks = [...nodesByRank.keys()].sort((left, right) => left - right)
  const orderedNodesByRank = new Map<number, string[]>(
    orderedRanks.map((rank) => [rank, [...(nodesByRank.get(rank) ?? [])].sort()]),
  )

  for (let sweep = 0; sweep < 4; sweep += 1) {
    orderedRanks.slice(1).forEach((rank) => {
      orderedNodesByRank.set(
        rank,
        sortRankByNeighbors(
          orderedNodesByRank.get(rank) ?? [],
          orderedNodesByRank.get(rank - 1),
          'incoming',
          graph,
        ),
      )
    })

    orderedRanks
      .slice(0, -1)
      .reverse()
      .forEach((rank) => {
        orderedNodesByRank.set(
          rank,
          sortRankByNeighbors(
            orderedNodesByRank.get(rank) ?? [],
            orderedNodesByRank.get(rank + 1),
            'outgoing',
            graph,
          ),
        )
      })
  }

  return orderedNodesByRank
}

function getGroupGridColumnCount(courseCount: number) {
  if (courseCount <= 2) {
    return courseCount
  }

  if (courseCount <= 4) {
    return 2
  }

  return 3
}

function getPrimaryGroupByCourseCode(graph: CourseGraph) {
  const sortedGroups = [...graph.groups].sort((left, right) => {
    const sizeDifference = right.courseCodes.length - left.courseCodes.length

    if (sizeDifference !== 0) {
      return sizeDifference
    }

    return left.id.localeCompare(right.id)
  })
  const groupByCourseCode = new Map<string, CourseGraphGroup>()

  sortedGroups.forEach((group) => {
    group.courseCodes.forEach((courseCode) => {
      if (!groupByCourseCode.has(courseCode)) {
        groupByCourseCode.set(courseCode, group)
      }
    })
  })

  return groupByCourseCode
}

function createRankLayoutUnits(courseCodes: string[], graph: CourseGraph) {
  const primaryGroupByCourseCode = getPrimaryGroupByCourseCode(graph)
  const usedCourseCodes = new Set<string>()
  const rankCourseCodes = new Set(courseCodes)
  const units: string[][] = []

  courseCodes.forEach((courseCode) => {
    if (usedCourseCodes.has(courseCode)) {
      return
    }

    const group = primaryGroupByCourseCode.get(courseCode)
    const groupCourseCodeSet = new Set(group?.courseCodes ?? [])
    const groupCourseCodes = courseCodes.filter(
      (rankCourseCode) =>
        rankCourseCodes.has(rankCourseCode) && groupCourseCodeSet.has(rankCourseCode),
    )

    if (groupCourseCodes && groupCourseCodes.length > 1) {
      groupCourseCodes.forEach((groupCourseCode) => usedCourseCodes.add(groupCourseCode))
      units.push(groupCourseCodes)
      return
    }

    usedCourseCodes.add(courseCode)
    units.push([courseCode])
  })

  return units
}

export function getCourseFlowPositions(graph: CourseGraph, targetCourseCode: string) {
  const ranks = new Map<string, number>([[targetCourseCode, 0]])
  const queue = [targetCourseCode]

  for (let index = 0; index < queue.length; index += 1) {
    const courseCode = queue[index]
    const currentRank = ranks.get(courseCode) ?? 0

    graph.edges
      .filter((edge) => edge.target === courseCode)
      .forEach((edge) => {
        const prerequisiteRank = currentRank - 1
        const existingRank = ranks.get(edge.source)

        if (existingRank === undefined || prerequisiteRank > existingRank) {
          ranks.set(edge.source, prerequisiteRank)
          queue.push(edge.source)
        }
      })
  }

  graph.edges
    .filter((edge) => edge.source === targetCourseCode)
    .forEach((edge) => {
      ranks.set(edge.target, 1)
    })

  const nodesByRank = new Map<number, string[]>()

  graph.nodes.forEach((node) => {
    const rank = ranks.get(node.code) ?? 0
    const nodes = nodesByRank.get(rank) ?? []

    nodes.push(node.code)
    nodesByRank.set(rank, nodes)
  })

  const orderedNodesByRank = orderGraphRanks(nodesByRank, graph)
  const positions = new Map<string, { x: number; y: number }>()

  orderedNodesByRank.forEach((nodeCodes, rank) => {
    const units = createRankLayoutUnits(nodeCodes, graph)
    const unitHeights = units.map((unit) => {
      const columns = getGroupGridColumnCount(unit.length)
      const rows = Math.ceil(unit.length / columns)

      return rows * graphRowSpacing
    })
    const totalGap = Math.max(0, units.length - 1) * groupLayoutUnitGap
    const totalHeight = unitHeights.reduce((total, height) => total + height, 0) + totalGap
    let currentTop = -totalHeight / 2

    units.forEach((unit, unitIndex) => {
      const columns = getGroupGridColumnCount(unit.length)
      const unitHeight = unitHeights[unitIndex]
      const unitCenterY = currentTop + unitHeight / 2

      unit.forEach((courseCode, index) => {
        const row = Math.floor(index / columns)
        const column = index % columns
        const rowCount = Math.ceil(unit.length / columns)
        const columnCount = Math.min(columns, unit.length)
        const columnSpacing =
          unit.length > 1 ? groupedCourseColumnSpacing : ungroupedCourseColumnSpacing

        positions.set(courseCode, {
          x: rank * graphRankSpacing + (column - (columnCount - 1) / 2) * columnSpacing,
          y: unitCenterY + (row - (rowCount - 1) / 2) * graphRowSpacing,
        })
      })

      currentTop += unitHeight + groupLayoutUnitGap
    })
  })

  return positions
}

export function getGroupBoxPositions(
  graph: CourseGraph,
  nodePositions: Map<string, { x: number; y: number }>,
  options: CourseGraphLayoutOptions,
): CourseGraphGroupBox[] {
  return graph.groups.flatMap((group) => {
    const positions = group.courseCodes
      .map((courseCode) => nodePositions.get(courseCode))
      .filter((position): position is { x: number; y: number } => Boolean(position))

    if (positions.length === 0) {
      return []
    }

    const minX = Math.min(...positions.map((position) => position.x)) - options.courseNodeWidth / 2
    const maxX = Math.max(...positions.map((position) => position.x)) + options.courseNodeWidth / 2
    const minY =
      Math.min(...positions.map((position) => position.y)) - options.courseNodeHeight / 2
    const maxY =
      Math.max(...positions.map((position) => position.y)) + options.courseNodeHeight / 2

    return [
      {
        group,
        position: {
          x: (minX + maxX) / 2,
          y: (minY + maxY) / 2 + options.groupLabelOffsetY / 2,
        },
        size: {
          height: maxY - minY + options.groupPaddingY * 2 - options.groupLabelOffsetY,
          width: maxX - minX + options.groupPaddingX * 2,
        },
      },
    ]
  })
}

function buildDirectPrerequisiteEdgesForCourse(course: Course, visibleCodes: Set<string>) {
  return getDirectPrerequisiteCourseCodes(course.prerequisite)
    .filter((prerequisiteCode) => visibleCodes.has(prerequisiteCode))
    .map((prerequisiteCode) => ({
      id: `${prerequisiteCode}-${course.code}`,
      source: prerequisiteCode,
      target: course.code,
    }))
}

export function buildPrerequisitePathGraph(
  targetCourseCode: string,
  courses: Course[],
): CourseGraph {
  const normalizedTargetCode = normalizeCourseCode(targetCourseCode)
  const fullGraph = buildCourseGraph(courses)
  const courseByCode = new Map(courses.map((course) => [course.code, course]))
  const targetCourse = courseByCode.get(normalizedTargetCode)
  const directPrerequisiteCodes = targetCourse
    ? getDirectPrerequisiteCourseCodes(targetCourse.prerequisite)
    : []
  const secondLevelPrerequisiteCodes = uniqueCodes(
    directPrerequisiteCodes.flatMap((courseCode) => {
      const course = courseByCode.get(courseCode)

      return course ? getDirectPrerequisiteCourseCodes(course.prerequisite) : []
    }),
  )
  const visibleSecondLevelPrerequisiteCodes =
    secondLevelPrerequisiteCodes.length < 5 ? secondLevelPrerequisiteCodes : []
  const prerequisiteCodes = [
    ...visibleSecondLevelPrerequisiteCodes,
    ...directPrerequisiteCodes,
  ]
  const visiblePrerequisitePathCodes = new Set([...prerequisiteCodes, normalizedTargetCode])
  const directDependentCodes = getVisibleDirectDependentCodes(normalizedTargetCode, courses)
  const visibleCourseCodes = [
    ...prerequisiteCodes,
    normalizedTargetCode,
    ...directDependentCodes,
  ]
  const visibleCodes = new Set(visibleCourseCodes.map(normalizeCourseCode))
  const knownNodes = fullGraph.nodes.filter((node) => visibleCodes.has(node.code))
  const knownNodeCodes = new Set(knownNodes.map((node) => node.code))
  const placeholderNodes = [...visibleCodes]
    .filter((courseCode) => !knownNodeCodes.has(courseCode))
    .map(buildPlaceholderNode)
  const nodes = [...knownNodes, ...placeholderNodes]
  const directPrerequisiteCourses = directPrerequisiteCodes.flatMap((courseCode) => {
    const course = courseByCode.get(courseCode)

    return course ? [course] : []
  })
  const targetPrerequisiteEdges = targetCourse
    ? buildDirectPrerequisiteEdgesForCourse(targetCourse, visiblePrerequisitePathCodes)
    : []
  const secondLevelPrerequisiteEdges =
    visibleSecondLevelPrerequisiteCodes.length > 0
      ? directPrerequisiteCourses.flatMap((course) =>
          buildDirectPrerequisiteEdgesForCourse(course, visiblePrerequisitePathCodes),
        )
      : []
  const directDependentEdges = directDependentCodes.map((courseCode) => ({
    id: `${normalizedTargetCode}-${courseCode}`,
    source: normalizedTargetCode,
    target: courseCode,
  }))
  const edges = [
    ...new Map(
      [
        ...secondLevelPrerequisiteEdges,
        ...targetPrerequisiteEdges,
        ...directDependentEdges,
      ].map((edge) => [edge.id, edge]),
    ).values(),
  ]
  const groups = buildPrerequisiteGroups(courses, visibleCodes, edges)

  return {
    nodes,
    edges,
    displayEdges: groups.length > 0 ? buildDisplayEdges(edges, groups) : edges,
    groups,
  }
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
    displayEdges: fullGraph.edges.filter((edge) => allowedEdgeIds.has(edge.id)),
    groups: [],
  }
}
