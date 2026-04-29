import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CourseCard } from '../components/CourseCard'
import { courses } from '../data/courses'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'

const subjects = ['All', ...Array.from(new Set(courses.map((course) => course.subject))).sort()]
const levels = ['All', '100', '200', '300', '400']

export function CoursesPage() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const [subject, setSubject] = useState('All')
  const [level, setLevel] = useState('All')

  const filteredCourses = useMemo(() => {
    const normalizedQuery = normalizeCourseCode(query)

    return courses.filter((course) => {
      const courseText = normalizeCourseCode(
        `${course.code} ${formatCourseCode(course.code)} ${course.name}`,
      )
      const matchesQuery = normalizedQuery === '' || courseText.includes(normalizedQuery)
      const matchesSubject = subject === 'All' || course.subject === subject
      const matchesLevel = level === 'All' || course.level === Number(level)

      return matchesQuery && matchesSubject && matchesLevel
    })
  }, [level, query, subject])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <p className="mt-2 text-slate-600">Search the local sample course catalog.</p>
      </div>

      <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_auto_auto]">
        <input
          className="h-11 rounded-xl border border-slate-300 px-3 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          placeholder="Search by code or name"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select
          className="h-11 rounded-xl border border-slate-300 px-3"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        >
          {subjects.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select
          className="h-11 rounded-xl border border-slate-300 px-3"
          value={level}
          onChange={(event) => setLevel(event.target.value)}
        >
          {levels.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between text-sm text-slate-600">
        <span>{filteredCourses.length} courses</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredCourses.map((course) => (
          <CourseCard course={course} key={course.code} />
        ))}
      </div>
    </div>
  )
}
