import { useMemo, useState } from 'react'
import { Badge } from '../components/Badge'
import { courses } from '../data/courses'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import { satisfiesPrerequisite } from '../lib/prerequisites'
import { useStudentStore } from '../stores/useStudentStore'
import type { CompletedCourse, PlannedTerm } from '../types/student'

const termOrder = { Winter: 0, Spring: 1, Fall: 2 }
const terms = ['Fall', 'Winter', 'Spring'] as const

function compareTerms(left: PlannedTerm, right: PlannedTerm): number {
  if (left.year !== right.year) {
    return left.year - right.year
  }

  return termOrder[left.term] - termOrder[right.term]
}

function getCompletedBeforeTerm(
  targetTerm: PlannedTerm,
  plannedTerms: PlannedTerm[],
  completedCourses: CompletedCourse[],
): CompletedCourse[] {
  const earlierPlannedCourses = plannedTerms
    .filter((plannedTerm) => compareTerms(plannedTerm, targetTerm) < 0)
    .flatMap((plannedTerm) => plannedTerm.courseCodes)
    .map((courseCode) => ({ courseCode }))

  return [...completedCourses, ...earlierPlannedCourses]
}

export function PlannerPage() {
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const plannedTerms = useStudentStore((state) => state.plannedTerms)
  const addPlannedTerm = useStudentStore((state) => state.addPlannedTerm)
  const removePlannedTerm = useStudentStore((state) => state.removePlannedTerm)
  const addCourseToPlannedTerm = useStudentStore((state) => state.addCourseToPlannedTerm)
  const removeCourseFromPlannedTerm = useStudentStore((state) => state.removeCourseFromPlannedTerm)
  const [term, setTerm] = useState<(typeof terms)[number]>('Fall')
  const [year, setYear] = useState('2026')
  const [courseInputs, setCourseInputs] = useState<Record<string, string>>({})
  const sortedTerms = useMemo(() => [...plannedTerms].sort(compareTerms), [plannedTerms])
  const allPlannedCodes = plannedTerms.flatMap((plannedTerm) => plannedTerm.courseCodes)
  const completedCodes = completedCourses.map((course) => normalizeCourseCode(course.courseCode))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Term planner</h1>
        <p className="mt-2 text-slate-600">
          Create future terms and run basic prerequisite, offering, and antirequisite checks.
        </p>
      </div>

      <form
        className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[160px_160px_auto]"
        onSubmit={(event) => {
          event.preventDefault()
          addPlannedTerm({
            id: crypto.randomUUID(),
            term,
            year: Number(year),
            courseCodes: [],
          })
        }}
      >
        <select
          className="h-11 rounded-xl border border-slate-300 px-3"
          value={term}
          onChange={(event) => setTerm(event.target.value as (typeof terms)[number])}
        >
          {terms.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <input
          className="h-11 rounded-xl border border-slate-300 px-3"
          min="2024"
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
        <button className="h-11 rounded-xl bg-slate-950 px-5 font-semibold text-white">
          Add term
        </button>
      </form>

      <div className="grid gap-4">
        {sortedTerms.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-slate-600">
            No planned terms yet.
          </div>
        ) : (
          sortedTerms.map((plannedTerm) => {
            const completedBeforeTerm = getCompletedBeforeTerm(
              plannedTerm,
              sortedTerms,
              completedCourses,
            )

            return (
              <section
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                key={plannedTerm.id}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold">
                    {plannedTerm.term} {plannedTerm.year}
                  </h2>
                  <button
                    className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium"
                    type="button"
                    onClick={() => removePlannedTerm(plannedTerm.id)}
                  >
                    Remove term
                  </button>
                </div>

                <form
                  className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]"
                  onSubmit={(event) => {
                    event.preventDefault()
                    const input = courseInputs[plannedTerm.id] ?? ''

                    if (!input.trim()) {
                      return
                    }

                    addCourseToPlannedTerm(plannedTerm.id, input)
                    setCourseInputs((current) => ({ ...current, [plannedTerm.id]: '' }))
                  }}
                >
                  <input
                    className="h-11 rounded-xl border border-slate-300 px-3"
                    placeholder="Add course, e.g. STAT 231"
                    value={courseInputs[plannedTerm.id] ?? ''}
                    onChange={(event) =>
                      setCourseInputs((current) => ({
                        ...current,
                        [plannedTerm.id]: event.target.value,
                      }))
                    }
                  />
                  <button className="h-11 rounded-xl bg-slate-950 px-5 font-semibold text-white">
                    Add course
                  </button>
                </form>

                <div className="mt-4 space-y-3">
                  {plannedTerm.courseCodes.length === 0 ? (
                    <p className="text-sm text-slate-600">No courses in this term yet.</p>
                  ) : (
                    plannedTerm.courseCodes.map((courseCode) => {
                      const course = courses.find((item) => item.code === normalizeCourseCode(courseCode))
                      const prerequisitesSatisfied = course
                        ? satisfiesPrerequisite(course.prerequisite, completedBeforeTerm)
                        : false
                      const offeredInTerm = course?.termsOffered?.includes(plannedTerm.term) ?? false
                      const antirequisiteConflict =
                        course?.antirequisites?.some((antirequisite) => {
                          const normalizedAntirequisite = normalizeCourseCode(antirequisite)

                          return (
                            completedCodes.includes(normalizedAntirequisite) ||
                            allPlannedCodes.includes(normalizedAntirequisite)
                          )
                        }) ?? false

                      return (
                        <div
                          className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                          key={courseCode}
                        >
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                              <strong>{formatCourseCode(courseCode)}</strong>
                              <p className="mt-1 text-sm text-slate-600">
                                {course?.name ?? 'Course not found in local data.'}
                              </p>
                            </div>
                            <button
                              className="text-sm font-medium text-slate-600 hover:text-slate-950"
                              type="button"
                              onClick={() =>
                                removeCourseFromPlannedTerm(plannedTerm.id, courseCode)
                              }
                            >
                              Remove
                            </button>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Badge variant={prerequisitesSatisfied ? 'eligible' : 'blocked'}>
                              {prerequisitesSatisfied ? 'Prereqs satisfied' : 'Prereqs blocked'}
                            </Badge>
                            <Badge variant={offeredInTerm ? 'term' : 'blocked'}>
                              {offeredInTerm ? `Offered ${plannedTerm.term}` : 'Not usually offered'}
                            </Badge>
                            {antirequisiteConflict ? (
                              <Badge variant="blocked">Antirequisite conflict</Badge>
                            ) : null}
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>
              </section>
            )
          })
        )}
      </div>
    </div>
  )
}
