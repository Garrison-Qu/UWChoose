import cytoscape from 'cytoscape'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { courses } from '../data/courses'
import {
  buildCourseGraph,
  filterCourseGraph,
  getDirectPrerequisiteCourseCodes,
  getRecursiveDependentCodes,
  getRecursivePrerequisiteCodes,
} from '../lib/courseGraph'
import { getCourseAvailability } from '../lib/courseAvailability'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import { getEffectiveCompletedCourses } from '../lib/studentRecords'
import { isFinishedByDate } from '../lib/terms'
import { useStudentStore } from '../stores/useStudentStore'

type GraphMode = 'all' | 'focus' | 'prerequisites' | 'unlocks'

const graphModes: { value: GraphMode; label: string }[] = [
  { value: 'all', label: 'Full catalog' },
  { value: 'focus', label: 'Focused course' },
  { value: 'prerequisites', label: 'Prerequisites' },
  { value: 'unlocks', label: 'Unlocked courses' },
]

const subjectColors = new Map([
  ['MATH', '#2563eb'],
  ['PMATH', '#7c3aed'],
  ['CS', '#059669'],
  ['CO', '#d97706'],
  ['STAT', '#dc2626'],
])

function getNodeColor(subject: string) {
  return subjectColors.get(subject) ?? '#475569'
}

function getVisibleCourseCodes(mode: GraphMode, selectedCourseCode: string): string[] {
  if (mode === 'all') {
    return courses.map((course) => course.code)
  }

  if (mode === 'focus') {
    const directPrerequisites =
      courses
        .find((course) => course.code === selectedCourseCode)
        ?.prerequisite
    const directDependents = buildCourseGraph(courses).edges
      .filter((edge) => edge.source === selectedCourseCode)
      .map((edge) => edge.target)

    return [
      selectedCourseCode,
      ...getDirectPrerequisiteCourseCodes(directPrerequisites),
      ...directDependents,
    ]
  }

  if (mode === 'prerequisites') {
    return [selectedCourseCode, ...getRecursivePrerequisiteCodes(selectedCourseCode, courses)]
  }

  return [selectedCourseCode, ...getRecursiveDependentCodes(selectedCourseCode, courses)]
}

export function GraphPage() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const graphRef = useRef<cytoscape.Core | null>(null)
  const [mode, setMode] = useState<GraphMode>('all')
  const [selectedCourseCode, setSelectedCourseCode] = useState(courses[0]?.code ?? '')
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const plannedTerms = useStudentStore((state) => state.plannedTerms)
  const prerequisiteOverrides = useStudentStore((state) => state.prerequisiteOverrides)
  const currentTerm = useStudentStore((state) => state.currentTerm)
  const selectedCourse = courses.find((course) => course.code === selectedCourseCode)
  const effectiveCompletedCourses = useMemo(
    () => getEffectiveCompletedCourses(completedCourses, plannedTerms, currentTerm),
    [completedCourses, currentTerm, plannedTerms],
  )
  const completedCodes = useMemo(
    () => new Set(effectiveCompletedCourses.map((course) => normalizeCourseCode(course.courseCode))),
    [effectiveCompletedCourses],
  )
  const plannedCodes = useMemo(
    () =>
      new Set(
        plannedTerms
          .filter((term) => !isFinishedByDate(term, currentTerm))
          .flatMap((term) => term.courseCodes.map(normalizeCourseCode)),
      ),
    [currentTerm, plannedTerms],
  )

  const fullGraph = useMemo(() => buildCourseGraph(courses), [])
  const visibleGraph = useMemo(() => {
    const visibleCourseCodes = getVisibleCourseCodes(mode, selectedCourseCode)

    return filterCourseGraph(fullGraph, visibleCourseCodes)
  }, [fullGraph, mode, selectedCourseCode])

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    graphRef.current?.destroy()

    const graph = cytoscape({
      container: containerRef.current,
      elements: [
        ...visibleGraph.nodes.map((node) => ({
          data: {
            id: node.code,
            label: formatCourseCode(node.code),
            subject: node.subject,
            color: getNodeColor(node.subject),
            isSelected: node.code === selectedCourseCode,
            isCompleted: completedCodes.has(node.code),
            isPlanned: plannedCodes.has(node.code),
          },
        })),
        ...visibleGraph.edges.map((edge) => ({
          data: {
            id: edge.id,
            source: edge.source,
            target: edge.target,
          },
        })),
      ],
      layout: {
        name: visibleGraph.nodes.length > 10 ? 'cose' : 'breadthfirst',
        directed: true,
        padding: 28,
        spacingFactor: 1.2,
        animate: false,
      },
      maxZoom: 2.5,
      minZoom: 0.25,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': 'data(color)',
            'border-color': '#ffffff',
            'border-width': 2,
            color: '#0f172a',
            'font-size': 12,
            'font-weight': 700,
            height: 38,
            label: 'data(label)',
            'overlay-opacity': 0,
            'text-background-color': '#ffffff',
            'text-background-opacity': 0.86,
            'text-background-padding': '3px',
            'text-margin-y': -8,
            width: 38,
          },
        },
        {
          selector: 'node[isSelected]',
          style: {
            'border-color': '#111827',
            'border-width': 4,
            height: 48,
            width: 48,
          },
        },
        {
          selector: 'node[isCompleted]',
          style: {
            shape: 'round-rectangle',
          },
        },
        {
          selector: 'node[isPlanned]',
          style: {
            'border-color': '#7c3aed',
          },
        },
        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'line-color': '#94a3b8',
            'target-arrow-color': '#94a3b8',
            'target-arrow-shape': 'triangle',
            width: 2,
          },
        },
      ],
    })

    graph.on('tap', 'node', (event) => {
      setSelectedCourseCode(event.target.id())
    })

    graphRef.current = graph

    return () => {
      graph.destroy()
      graphRef.current = null
    }
  }, [completedCodes, plannedCodes, selectedCourseCode, visibleGraph])

  const availability = selectedCourse
    ? getCourseAvailability(selectedCourse, effectiveCompletedCourses, prerequisiteOverrides)
    : undefined
  const selectedPrerequisiteCount = selectedCourse
    ? getRecursivePrerequisiteCodes(selectedCourse.code, courses).length
    : 0
  const selectedDependentCount = selectedCourse
    ? getRecursiveDependentCodes(selectedCourse.code, courses).length
    : 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Prerequisite graph</h1>
        <p className="mt-2 text-slate-600">
          Explore how local catalog courses depend on each other.
        </p>
      </div>

      <section className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-[1fr_220px_220px]">
        <div>
          <label className="text-sm font-medium text-slate-600" htmlFor="graph-course">
            Course
          </label>
          <select
            className="mt-1 h-11 w-full rounded-xl border border-slate-300 bg-white px-3"
            id="graph-course"
            value={selectedCourseCode}
            onChange={(event) => setSelectedCourseCode(event.target.value)}
          >
            {courses.map((course) => (
              <option key={course.code} value={course.code}>
                {formatCourseCode(course.code)} - {course.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600" htmlFor="graph-mode">
            View
          </label>
          <select
            className="mt-1 h-11 w-full rounded-xl border border-slate-300 bg-white px-3"
            id="graph-mode"
            value={mode}
            onChange={(event) => setMode(event.target.value as GraphMode)}
          >
            {graphModes.map((graphMode) => (
              <option key={graphMode.value} value={graphMode.value}>
                {graphMode.label}
              </option>
            ))}
          </select>
        </div>
        <button
          className="self-end rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          type="button"
          onClick={() => graphRef.current?.fit(undefined, 28)}
        >
          Fit graph
        </button>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
            <div className="flex flex-wrap gap-2">
              <Badge>{visibleGraph.nodes.length} courses</Badge>
              <Badge>{visibleGraph.edges.length} links</Badge>
            </div>
            <p className="text-sm text-slate-500">Drag, zoom, and click nodes.</p>
          </div>
          <div className="h-[560px] min-h-[420px]" ref={containerRef} />
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          {selectedCourse ? (
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-emerald-700">
                  {formatCourseCode(selectedCourse.code)}
                </p>
                <h2 className="mt-1 text-xl font-semibold">{selectedCourse.name}</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge>{selectedCourse.subject}</Badge>
                <Badge>{selectedCourse.level}-level</Badge>
                {completedCodes.has(selectedCourse.code) ? <Badge variant="completed">Completed</Badge> : null}
                {plannedCodes.has(selectedCourse.code) ? <Badge variant="planned">Planned</Badge> : null}
                {availability && !completedCodes.has(selectedCourse.code) ? (
                  <Badge variant={availability.canTake ? 'eligible' : 'blocked'}>
                    {availability.canTake ? 'Available' : 'Blocked'}
                  </Badge>
                ) : null}
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-slate-500">Prerequisites</p>
                  <strong className="mt-1 block text-lg">{selectedPrerequisiteCount}</strong>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-slate-500">Unlocks</p>
                  <strong className="mt-1 block text-lg">{selectedDependentCount}</strong>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-700">Terms offered</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedCourse.termsOffered?.length ? (
                    selectedCourse.termsOffered.map((term) => (
                      <Badge key={term} variant="term">
                        {term}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-sm text-slate-600">No term data yet.</p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-700">Antirequisites</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedCourse.antirequisites?.length ? (
                    selectedCourse.antirequisites.map((courseCode) => (
                      <Badge key={courseCode}>{formatCourseCode(courseCode)}</Badge>
                    ))
                  ) : (
                    <p className="text-sm text-slate-600">None listed.</p>
                  )}
                </div>
              </div>

              <Link
                className="inline-flex rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-300"
                to={`/courses/${selectedCourse.code}`}
              >
                Open course detail
              </Link>
            </div>
          ) : (
            <p className="text-slate-600">Select a course to inspect it.</p>
          )}
        </aside>
      </section>
    </div>
  )
}
