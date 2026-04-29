import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CourseCard } from '../components/CourseCard'
import { PathToTake } from '../components/PathToTake'
import { courses } from '../data/courses'
import { getCourseAvailability } from '../lib/courseAvailability'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import { buildPathExplanationToCourse } from '../lib/pathPlanner'
import { useStudentStore } from '../stores/useStudentStore'

export function EligibleCoursesPage() {
  const [pathCourseCode, setPathCourseCode] = useState<string>()
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const currentTerm = useStudentStore((state) => state.currentTerm)
  const availabilityByCode = new Map(
    courses.map((course) => [course.code, getCourseAvailability(course, completedCourses)]),
  )
  const eligibleCourses = courses.filter((course) => availabilityByCode.get(course.code)?.canTake)
  const unavailableCourses = courses.filter((course) => !availabilityByCode.get(course.code)?.canTake)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Eligibility</h1>
        <p className="mt-2 text-slate-600">
          Based on your completed course record.
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
        {unavailableCourses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-slate-600">
            No blocked or already-covered courses found.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {unavailableCourses.map((course) => {
            const availability = availabilityByCode.get(course.code)
            const pathExplanation = buildPathExplanationToCourse(
              course,
              courses,
              completedCourses,
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
                <div className="mt-4">
                  <PathToTake explanation={pathExplanation} />
                </div>
              ) : null}
            </div>
            )
            })}
          </div>
        )}
      </section>
    </div>
  )
}
