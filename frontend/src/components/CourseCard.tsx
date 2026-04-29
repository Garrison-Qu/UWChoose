import { Link } from 'react-router-dom'
import { Badge } from './Badge'
import { formatCourseCode } from '../lib/courseCodes'
import type { Course } from '../types/course'

type CourseCardProps = {
  course: Course
  status?: 'eligible' | 'blocked' | 'completed'
}

export function CourseCard({ course, status }: CourseCardProps) {
  return (
    <Link
      className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
      to={`/courses/${course.code}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-emerald-700">{formatCourseCode(course.code)}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-950">{course.name}</h3>
        </div>
        {status ? <Badge variant={status}>{status}</Badge> : null}
      </div>

      {course.description ? (
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{course.description}</p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge>{course.subject}</Badge>
        <Badge>{course.level}-level</Badge>
        {course.termsOffered?.map((term) => (
          <Badge key={term} variant="term">
            Offered {term}
          </Badge>
        ))}
      </div>
    </Link>
  )
}
