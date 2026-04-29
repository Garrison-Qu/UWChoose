import { Link, useParams } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { PrerequisiteTree } from '../components/PrerequisiteTree'
import { courses } from '../data/courses'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'

export function CourseDetailPage() {
  const { code } = useParams()
  const course = courses.find((item) => item.code === normalizeCourseCode(code ?? ''))

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
          </div>
        </div>

        {course.description ? (
          <p className="mt-5 max-w-3xl leading-7 text-slate-600">{course.description}</p>
        ) : null}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Requires</h2>
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
