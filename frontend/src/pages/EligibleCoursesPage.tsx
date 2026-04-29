import { CourseCard } from '../components/CourseCard'
import { courses } from '../data/courses'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import { getBlockedCourses, getBlockedReasons, getEligibleCourses } from '../lib/prerequisites'
import { useStudentStore } from '../stores/useStudentStore'

export function EligibleCoursesPage() {
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const completedCodes = completedCourses.map((course) => normalizeCourseCode(course.courseCode))
  const eligibleCourses = getEligibleCourses(courses, completedCourses).filter(
    (course) => !completedCodes.includes(course.code),
  )
  const blockedCourses = getBlockedCourses(courses, completedCourses)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Eligibility</h1>
        <p className="mt-2 text-slate-600">
          Based on the completed courses and grades saved in your browser.
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
        <h2 className="text-xl font-semibold">Blocked courses</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {blockedCourses.map((course) => (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" key={course.code}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-rose-700">{formatCourseCode(course.code)}</p>
                  <h3 className="mt-1 font-semibold">{course.name}</h3>
                </div>
                <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-200 ring-inset">
                  Blocked
                </span>
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
                {getBlockedReasons(course, completedCourses).map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
