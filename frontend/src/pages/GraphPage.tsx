import cytoscape from 'cytoscape'
import { useEffect, useMemo, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { courses } from '../data/courses'
import { buildLocalCourseFlowGraph } from '../lib/courseGraph'
import { getCourseAvailability } from '../lib/courseAvailability'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import { getEffectiveCompletedCourses } from '../lib/studentRecords'
import { isFinishedByDate } from '../lib/terms'
import { useStudentStore } from '../stores/useStudentStore'
import type { CurrentTerm, PlannedTerm } from '../types/student'

type GraphCourseStatus = 'completed' | 'finished' | 'available' | 'blocked'

const statusStyles: Record<
  GraphCourseStatus,
  {
    label: string
    color: string
    border: string
    text: string
    badge: 'completed' | 'eligible' | 'blocked' | 'term'
  }
> = {
  completed: {
    label: 'Completed',
    color: '#eff6ff',
    border: '#2563eb',
    text: '#1d4ed8',
    badge: 'completed',
  },
  finished: {
    label: 'Finished',
    color: '#fffbeb',
    border: '#d97706',
    text: '#92400e',
    badge: 'term',
  },
  available: {
    label: 'Available',
    color: '#ecfdf5',
    border: '#059669',
    text: '#047857',
    badge: 'eligible',
  },
  blocked: {
    label: 'Blocked',
    color: '#fff1f2',
    border: '#e11d48',
    text: '#be123c',
    badge: 'blocked',
  },
}

function getFinishedCourseCodes(plannedTerms: PlannedTerm[], currentTerm: CurrentTerm) {
  return new Set(
    plannedTerms
      .filter((term) => isFinishedByDate(term, currentTerm))
      .flatMap((term) => term.courseCodes.map(normalizeCourseCode)),
  )
}

function getAverageNeighborIndex(
  courseCode: string,
  neighborCodes: string[],
  direction: 'incoming' | 'outgoing',
  graph: ReturnType<typeof buildLocalCourseFlowGraph>,
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

function sortRankByNeighbors(
  courseCodes: string[],
  neighborCodes: string[] | undefined,
  direction: 'incoming' | 'outgoing',
  graph: ReturnType<typeof buildLocalCourseFlowGraph>,
) {
  if (!neighborCodes) {
    return [...courseCodes].sort()
  }

  const originalIndexes = new Map(courseCodes.map((courseCode, index) => [courseCode, index]))

  return [...courseCodes].sort((left, right) => {
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

function orderGraphRanks(
  nodesByRank: Map<number, string[]>,
  graph: ReturnType<typeof buildLocalCourseFlowGraph>,
) {
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

function getCourseFlowPositions(
  graph: ReturnType<typeof buildLocalCourseFlowGraph>,
  targetCourseCode: string,
) {
  const ranks = new Map<string, number>([[targetCourseCode, 0]])

  function visitPrerequisites(courseCode: string, depth: number) {
    graph.edges
      .filter((edge) => edge.target === courseCode)
      .forEach((edge) => {
        const rank = -depth
        const currentRank = ranks.get(edge.source)

        if (currentRank === undefined || rank < currentRank) {
          ranks.set(edge.source, rank)
          visitPrerequisites(edge.source, depth + 1)
        }
      })
  }

  function visitDependents(courseCode: string, depth: number) {
    graph.edges
      .filter((edge) => edge.source === courseCode)
      .forEach((edge) => {
        const currentRank = ranks.get(edge.target)

        if (edge.target === targetCourseCode || (currentRank !== undefined && currentRank >= depth)) {
          return
        }

        ranks.set(edge.target, depth)
        visitDependents(edge.target, depth + 1)
      })
  }

  visitPrerequisites(targetCourseCode, 1)
  visitDependents(targetCourseCode, 1)

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
    nodeCodes.forEach((courseCode, index) => {
      positions.set(courseCode, {
        x: rank * 280,
        y: (index - (nodeCodes.length - 1) / 2) * 126,
      })
    })
  })

  return positions
}

export function GraphPage() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const graphRef = useRef<cytoscape.Core | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const courseFromUrl = normalizeCourseCode(searchParams.get('course') ?? '')
  const selectedCourseCode = courses.some((course) => course.code === courseFromUrl)
    ? courseFromUrl
    : (courses[0]?.code ?? '')
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const plannedTerms = useStudentStore((state) => state.plannedTerms)
  const prerequisiteOverrides = useStudentStore((state) => state.prerequisiteOverrides)
  const currentTerm = useStudentStore((state) => state.currentTerm)
  const selectedCourse = courses.find((course) => course.code === selectedCourseCode)

  const effectiveCompletedCourses = useMemo(
    () => getEffectiveCompletedCourses(completedCourses, plannedTerms, currentTerm),
    [completedCourses, currentTerm, plannedTerms],
  )
  const directlyCompletedCodes = useMemo(
    () => new Set(completedCourses.map((course) => normalizeCourseCode(course.courseCode))),
    [completedCourses],
  )
  const finishedCodes = useMemo(
    () => getFinishedCourseCodes(plannedTerms, currentTerm),
    [currentTerm, plannedTerms],
  )
  const pathGraph = useMemo(
    () => buildLocalCourseFlowGraph(selectedCourseCode, courses),
    [selectedCourseCode],
  )
  const nodePositions = useMemo(
    () => getCourseFlowPositions(pathGraph, selectedCourseCode),
    [pathGraph, selectedCourseCode],
  )
  const nodeStatusByCode = useMemo(() => {
    return new Map(
      pathGraph.nodes.map((node) => {
        const course = courses.find((item) => item.code === node.code)
        const availability = course
          ? getCourseAvailability(course, effectiveCompletedCourses, prerequisiteOverrides)
          : undefined
        const status: GraphCourseStatus = directlyCompletedCodes.has(node.code)
          ? 'completed'
          : finishedCodes.has(node.code)
            ? 'finished'
            : availability?.canTake
              ? 'available'
              : 'blocked'

        return [node.code, status]
      }),
    )
  }, [directlyCompletedCodes, effectiveCompletedCourses, finishedCodes, pathGraph.nodes, prerequisiteOverrides])

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    graphRef.current?.destroy()

    const graph = cytoscape({
      container: containerRef.current,
      elements: [
        ...pathGraph.nodes.map((node) => {
          const status = nodeStatusByCode.get(node.code) ?? 'blocked'
          const style = statusStyles[status]
          const position = nodePositions.get(node.code)

          return {
            data: {
              id: node.code,
              label: formatCourseCode(node.code),
              backgroundColor: style.color,
              borderColor: style.border,
              textColor: style.text,
              isTarget: node.code === selectedCourseCode ? 'yes' : undefined,
            },
            position,
          }
        }),
        ...pathGraph.edges.map((edge) => ({
          data: {
            id: edge.id,
            source: edge.source,
            target: edge.target,
          },
        })),
      ],
      layout: {
        name: 'preset',
        animate: false,
      },
      maxZoom: 2,
      minZoom: 0.35,
      wheelSensitivity: 0.18,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': 'data(backgroundColor)',
            'border-color': 'data(borderColor)',
            'border-width': 2,
            color: 'data(textColor)',
            'font-size': 13,
            'font-weight': 800,
            height: 62,
            label: 'data(label)',
            'overlay-opacity': 0,
            shape: 'round-rectangle',
            'text-halign': 'center',
            'text-valign': 'center',
            width: 132,
          },
        },
        {
          selector: 'node[isTarget]',
          style: {
            'background-color': '#f8fafc',
            'border-color': '#0f172a',
            'border-width': 4,
            color: '#0f172a',
            height: 74,
            width: 152,
          },
        },
        {
          selector: 'edge',
          style: {
            'curve-style': 'straight',
            'line-color': '#cbd5e1',
            'target-arrow-color': '#64748b',
            'target-arrow-shape': 'triangle',
            width: 2,
          },
        },
      ],
    })

    graph.on('tap', 'node', (event) => {
      const courseCode = event.target.id()

      setSearchParams({ course: courseCode })
    })
    graph.on('mouseover', 'node', () => {
      if (containerRef.current) {
        containerRef.current.style.cursor = 'pointer'
      }
    })
    graph.on('mouseout', 'node', () => {
      if (containerRef.current) {
        containerRef.current.style.cursor = 'default'
      }
    })

    graph.fit(undefined, 56)
    graphRef.current = graph

    return () => {
      graph.destroy()
      graphRef.current = null
    }
  }, [nodePositions, nodeStatusByCode, pathGraph, selectedCourseCode, setSearchParams])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Course graph</h1>
        <p className="mt-2 text-slate-600">
          Shows prerequisite depth 2 and direct next courses.
        </p>
      </div>

      <section className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[1fr_auto]">
        <div>
          <label className="text-sm font-medium text-slate-600" htmlFor="graph-course">
            Target course
          </label>
          <select
            className="mt-1 h-11 w-full rounded-xl border border-slate-300 bg-white px-3"
            id="graph-course"
            value={selectedCourseCode}
            onChange={(event) => {
              setSearchParams({ course: event.target.value })
            }}
          >
            {courses.map((course) => (
              <option key={course.code} value={course.code}>
                {formatCourseCode(course.code)} - {course.name}
              </option>
            ))}
          </select>
        </div>
        <button
          className="self-end rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          type="button"
          onClick={() => graphRef.current?.fit(undefined, 36)}
        >
          Fit graph
        </button>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
          <div className="flex flex-wrap items-center gap-2">
            {Object.entries(statusStyles).map(([status, style]) => (
              <Badge key={status} variant={style.badge}>
                {style.label}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            {pathGraph.nodes.length} courses in this tree
          </p>
        </div>

        <div className="bg-slate-50 p-3">
          <div
            className="h-[560px] min-h-[420px] rounded-xl border border-slate-200 bg-white"
            ref={containerRef}
          />
        </div>
      </section>

      {selectedCourse ? (
        <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div>
            <p className="text-sm font-semibold text-emerald-700">
              {formatCourseCode(selectedCourse.code)}
            </p>
            <h2 className="mt-1 text-lg font-semibold">{selectedCourse.name}</h2>
          </div>
          <Link
            className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-300"
            to={`/courses/${selectedCourse.code}`}
          >
            Open course detail
          </Link>
        </section>
      ) : null}
    </div>
  )
}
