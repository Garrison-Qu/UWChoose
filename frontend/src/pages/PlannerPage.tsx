import { useMemo, useState } from 'react'
import { Badge } from '../components/Badge'
import { courses } from '../data/courses'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import { getPlannedTermWarnings } from '../lib/plannerWarnings'
import { satisfiesPrerequisite } from '../lib/prerequisites'
import { getEffectiveCompletedCourses } from '../lib/studentRecords'
import { compareAcademicTerms, sortPlannedTerms, terms } from '../lib/terms'
import { useStudentStore } from '../stores/useStudentStore'
import type { CompletedCourse, PlannedTerm } from '../types/student'

function getCompletedBeforeTerm(
  targetTerm: PlannedTerm,
  plannedTerms: PlannedTerm[],
  completedCourses: CompletedCourse[],
): CompletedCourse[] {
  const earlierPlannedCourses = plannedTerms
    .filter((plannedTerm) => compareAcademicTerms(plannedTerm, targetTerm) < 0)
    .flatMap((plannedTerm) => plannedTerm.courseCodes)
    .map((courseCode) => ({ courseCode }))

  return [...completedCourses, ...earlierPlannedCourses]
}

export function PlannerPage() {
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const plannedTerms = useStudentStore((state) => state.plannedTerms)
  const currentTerm = useStudentStore((state) => state.currentTerm)
  const setCurrentTerm = useStudentStore((state) => state.setCurrentTerm)
  const addPlannedTerm = useStudentStore((state) => state.addPlannedTerm)
  const removePlannedTerm = useStudentStore((state) => state.removePlannedTerm)
  const updatePlannedTermStatus = useStudentStore((state) => state.updatePlannedTermStatus)
  const addCourseToPlannedTerm = useStudentStore((state) => state.addCourseToPlannedTerm)
  const removeCourseFromPlannedTerm = useStudentStore((state) => state.removeCourseFromPlannedTerm)
  const [term, setTerm] = useState<(typeof terms)[number]>('Fall')
  const [year, setYear] = useState('2026')
  const [courseInputs, setCourseInputs] = useState<Record<string, string>>({})
  const sortedTerms = useMemo(() => sortPlannedTerms(plannedTerms), [plannedTerms])
  const allPlannedCodes = plannedTerms.flatMap((plannedTerm) => plannedTerm.courseCodes)
  const effectiveCompletedCourses = getEffectiveCompletedCourses(completedCourses, plannedTerms)
  const completedCodes = effectiveCompletedCourses.map((course) => normalizeCourseCode(course.courseCode))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Term planner</h1>
        <p className="mt-2 text-slate-600">
          Create finished and future terms. Finished terms automatically count as taken courses.
        </p>
      </div>

      <section className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[1fr_auto_auto]">
        <div>
          <h2 className="font-semibold">Current term</h2>
          <p className="mt-1 text-sm text-slate-600">Used as the starting point for path planning.</p>
        </div>
        <select
          className="h-11 rounded-xl border border-slate-300 px-3"
          value={currentTerm.term}
          onChange={(event) =>
            setCurrentTerm({ ...currentTerm, term: event.target.value as (typeof terms)[number] })
          }
        >
          {terms.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <input
          className="h-11 rounded-xl border border-slate-300 px-3"
          min="2024"
          type="number"
          value={currentTerm.year}
          onChange={(event) => setCurrentTerm({ ...currentTerm, year: Number(event.target.value) })}
        />
      </section>

      <form
        className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[160px_160px_auto]"
        onSubmit={(event) => {
          event.preventDefault()
          addPlannedTerm({
            id: crypto.randomUUID(),
            term,
            year: Number(year),
            courseCodes: [],
            status: 'future',
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
        <button className="h-11 rounded-xl bg-slate-200 px-5 font-semibold text-slate-950 hover:bg-slate-300">
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
            const termWarnings = getPlannedTermWarnings(
              plannedTerm,
              sortedTerms,
              completedCourses,
              courses,
            )

            return (
              <section
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                key={plannedTerm.id}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {plannedTerm.term} {plannedTerm.year}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      {plannedTerm.status === 'finished'
                        ? 'Finished term: courses count as taken.'
                        : 'Future term: courses are only planned.'}
                    </p>
                    <div className="mt-2">
                      {termWarnings.warningCount > 0 ? (
                        <Badge variant="blocked">
                          {termWarnings.warningCount} warning
                          {termWarnings.warningCount === 1 ? '' : 's'}
                        </Badge>
                      ) : (
                        <Badge variant="eligible">Valid</Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className={`rounded-xl px-3 py-2 text-sm font-medium ${
                        plannedTerm.status === 'finished'
                          ? 'bg-slate-200 text-slate-950'
                          : 'border border-slate-300 text-slate-700'
                      }`}
                      type="button"
                      onClick={() => updatePlannedTermStatus(plannedTerm.id, 'finished')}
                    >
                      Finished
                    </button>
                    <button
                      className={`rounded-xl px-3 py-2 text-sm font-medium ${
                        plannedTerm.status !== 'finished'
                          ? 'bg-slate-200 text-slate-950'
                          : 'border border-slate-300 text-slate-700'
                      }`}
                      type="button"
                      onClick={() => updatePlannedTermStatus(plannedTerm.id, 'future')}
                    >
                      Future
                    </button>
                    <button
                      className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium"
                      type="button"
                      onClick={() => removePlannedTerm(plannedTerm.id)}
                    >
                      Remove term
                    </button>
                  </div>
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
                  <button className="h-11 rounded-xl bg-slate-200 px-5 font-semibold text-slate-950 hover:bg-slate-300">
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
                          {termWarnings.courseWarnings.find(
                            (warning) => warning.courseCode === normalizeCourseCode(courseCode),
                          )?.warnings.length ? (
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-rose-700">
                              {termWarnings.courseWarnings
                                .find(
                                  (warning) =>
                                    warning.courseCode === normalizeCourseCode(courseCode),
                                )
                                ?.warnings.map((warning) => <li key={warning}>{warning}</li>)}
                            </ul>
                          ) : null}
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
