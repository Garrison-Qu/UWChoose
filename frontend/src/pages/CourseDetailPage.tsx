import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { PathToTake } from '../components/PathToTake'
import { PrerequisiteTree } from '../components/PrerequisiteTree'
import { courses } from '../data/courses'
import { getCourseAvailability } from '../lib/courseAvailability'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import { buildPathExplanationToCourse } from '../lib/pathPlanner'
import { getEffectiveCompletedCourses } from '../lib/studentRecords'
import { formatAcademicTerm, getRecentAcademicTermOptions } from '../lib/terms'
import { useStudentStore } from '../stores/useStudentStore'

export function CourseDetailPage() {
  const { code } = useParams()
  const [showPath, setShowPath] = useState(false)
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const plannedTerms = useStudentStore((state) => state.plannedTerms)
  const prerequisiteOverrides = useStudentStore((state) => state.prerequisiteOverrides)
  const currentTerm = useStudentStore((state) => state.currentTerm)
  const addCompletedCourse = useStudentStore((state) => state.addCompletedCourse)
  const removeCompletedCourse = useStudentStore((state) => state.removeCompletedCourse)
  const recentCompletionTerms = getRecentAcademicTermOptions(currentTerm)
  const [completionTerm, setCompletionTerm] = useState(
    formatAcademicTerm(recentCompletionTerms[0] ?? currentTerm),
  )
  const course = courses.find((item) => item.code === normalizeCourseCode(code ?? ''))
  const effectiveCompletedCourses = getEffectiveCompletedCourses(
    completedCourses,
    plannedTerms,
    currentTerm,
  )

  if (!course) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-semibold">Course not found</h1>
        <Link className="mt-4 inline-flex text-emerald-700 hover:text-emerald-800" to="/courses">
          Back to courses
        </Link>
      </div>
    )
  }

  const availability = getCourseAvailability(course, effectiveCompletedCourses, prerequisiteOverrides)
  const pathExplanation = buildPathExplanationToCourse(
    course,
    courses,
    effectiveCompletedCourses,
    currentTerm,
  )
  const hasPrerequisiteReason = availability.reasons.some((reason) => reason.startsWith('Need '))
  const isDirectlyCompleted = completedCourses.some(
    (completedCourse) => normalizeCourseCode(completedCourse.courseCode) === course.code,
  )
  const isCompleted = effectiveCompletedCourses.some(
    (completedCourse) => normalizeCourseCode(completedCourse.courseCode) === course.code,
  )
  const hasPrerequisiteOverride = prerequisiteOverrides
    .map(normalizeCourseCode)
    .includes(course.code)

  return (
    <div className="space-y-6">
      <Link className="text-sm font-medium text-emerald-700 hover:text-emerald-800" to="/courses">
        Back to courses
      </Link>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-emerald-700">{formatCourseCode(course.code)}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">{course.name}</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>{course.subject}</Badge>
            <Badge>{course.level}-level</Badge>
            {isCompleted ? <Badge variant="completed">Completed</Badge> : null}
            {hasPrerequisiteOverride ? <Badge variant="override">Override</Badge> : null}
            {!isCompleted ? (
              <Badge variant={availability.canTake ? 'eligible' : 'blocked'}>
                {availability.canTake ? 'Available' : 'Blocked'}
              </Badge>
            ) : null}
          </div>
        </div>

        {course.description ? (
          <p className="mt-5 max-w-3xl leading-7 text-slate-600">{course.description}</p>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-2">
          {!isDirectlyCompleted ? (
            <select
              className="h-10 rounded-xl border border-slate-300 bg-white px-3 text-sm"
              value={completionTerm}
              onChange={(event) => setCompletionTerm(event.target.value)}
            >
              {recentCompletionTerms.map((termOption) => {
                const value = formatAcademicTerm(termOption)

                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                )
              })}
            </select>
          ) : null}
          <button
            className={
              isDirectlyCompleted
                ? 'rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50'
                : 'rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-300'
            }
            type="button"
            onClick={() => {
              if (isDirectlyCompleted) {
                removeCompletedCourse(course.code)
                return
              }

              addCompletedCourse({ courseCode: course.code, termTaken: completionTerm })
            }}
          >
            {isDirectlyCompleted ? 'Remove from completed' : 'Add to completed'}
          </button>

        </div>
      </section>

      {!isCompleted && !availability.canTake ? (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold">Why this course is blocked</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                {availability.reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>
            {hasPrerequisiteReason ? (
              <button
                className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-300"
                type="button"
                onClick={() => setShowPath((current) => !current)}
              >
                Path to take
              </button>
            ) : null}
          </div>

          {showPath ? (
            <div className="mt-5">
              <PathToTake explanation={pathExplanation} />
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">Requires</h2>
            {course.prerequisite ? (
              <Link
                className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-300"
                to={`/graph?course=${course.code}`}
              >
                View graph
              </Link>
            ) : null}
          </div>
          <div className="mt-4">
            <PrerequisiteTree prerequisite={course.prerequisite} />
          </div>
          {course.prerequisiteRawText ? (
            <p className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
              Raw text: {course.prerequisiteRawText}
            </p>
          ) : null}
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Antirequisites</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {course.antirequisites?.length ? (
                course.antirequisites.map((item) => <Badge key={item}>{formatCourseCode(item)}</Badge>)
              ) : (
                <p className="text-slate-600">None listed.</p>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Terms offered</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {course.termsOffered?.length ? (
                course.termsOffered.map((term) => (
                  <Badge key={term} variant="term">
                    Offered {term}
                  </Badge>
                ))
              ) : (
                <p className="text-slate-600">No term data yet.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
