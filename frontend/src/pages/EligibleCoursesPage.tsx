import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CourseCard } from '../components/CourseCard'
import { courses } from '../data/courses'
import { getCourseAvailability } from '../lib/courseAvailability'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import { buildFastestPathToCourse } from '../lib/pathPlanner'
import { getEffectiveCompletedCourses } from '../lib/studentRecords'
import { useStudentStore } from '../stores/useStudentStore'

export function EligibleCoursesPage() {
  const [pathCourseCode, setPathCourseCode] = useState<string>()
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const plannedTerms = useStudentStore((state) => state.plannedTerms)
  const currentTerm = useStudentStore((state) => state.currentTerm)
  const effectiveCompletedCourses = getEffectiveCompletedCourses(completedCourses, plannedTerms)
  const availabilityByCode = new Map(
    courses.map((course) => [course.code, getCourseAvailability(course, effectiveCompletedCourses)]),
  )
  const eligibleCourses = courses.filter((course) => availabilityByCode.get(course.code)?.canTake)
  const unavailableCourses = courses.filter((course) => !availabilityByCode.get(course.code)?.canTake)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Eligibility</h1>
        <p className="mt-2 text-slate-600">
          Based on manual completed courses plus planner terms marked finished.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Eligible courses</h2>
        {eligibleCourses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-slate-600">
            Add completed courses to see eligible next steps.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {eligibleCourses.map((course) => (
              <CourseCard course={course} key={course.code} status="eligible" />
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Blocked or already covered</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {unavailableCourses.map((course) => {
            const availability = availabilityByCode.get(course.code)
            const pathPlan = buildFastestPathToCourse(
              course,
              courses,
              effectiveCompletedCourses,
              currentTerm,
            )
            const showPath = pathCourseCode === course.code
            const hasPrerequisiteReason = availability?.reasons.some((reason) =>
              reason.startsWith('Need '),
            )

            return (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" key={course.code}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-rose-700">{formatCourseCode(course.code)}</p>
                  <Link
                    className="mt-1 block font-semibold text-slate-950 hover:text-emerald-700"
                    to={`/courses/${normalizeCourseCode(course.code)}`}
                  >
                    {course.name}
                  </Link>
                </div>
                <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-200 ring-inset">
                  Unavailable
                </span>
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
                {availability?.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
              {hasPrerequisiteReason ? (
                <button
                  className="mt-4 rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-300"
                  type="button"
                  onClick={() =>
                    setPathCourseCode((current) => (current === course.code ? undefined : course.code))
                  }
                >
                  Path to take
                </button>
              ) : null}
              {showPath ? (
                <div className="mt-4 rounded-xl bg-slate-50 p-4">
                  {pathPlan.length === 0 ? (
                    <p className="text-sm text-slate-600">No extra course path is needed.</p>
                  ) : (
                    <ol className="space-y-3">
                      {pathPlan.map((step) => (
                        <li key={step.termLabel}>
                          <strong>{step.termLabel}</strong>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {step.courseCodes.map((courseCode) => (
                              <Link
                                className="rounded-full bg-white px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-slate-200 hover:text-emerald-800"
                                key={courseCode}
                                to={`/courses/${courseCode}`}
                              >
                                {formatCourseCode(courseCode)}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              ) : null}
            </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
