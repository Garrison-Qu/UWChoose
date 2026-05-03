import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCatalog } from '../lib/catalogContext'
import { CourseCard } from '../components/CourseCard'
import { getCourseAvailability } from '../lib/courseAvailability'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import { getEffectiveCompletedCourses } from '../lib/studentRecords'
import { isFinishedByDate } from '../lib/terms'
import { useStudentStore } from '../stores/useStudentStore'

const levels = ['All', '100', '200', '300', '400']
const statuses = ['All', 'Eligible', 'Blocked', 'Covered', 'Completed', 'Planned', 'Override']

export function CoursesPage() {
  const { courses } = useCatalog()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const [subject, setSubject] = useState('All')
  const [level, setLevel] = useState('All')
  const [status, setStatus] = useState('All')
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const plannedTerms = useStudentStore((state) => state.plannedTerms)
  const prerequisiteOverrides = useStudentStore((state) => state.prerequisiteOverrides)
  const currentTerm = useStudentStore((state) => state.currentTerm)
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
          .filter((plannedTerm) => !isFinishedByDate(plannedTerm, currentTerm))
          .flatMap((plannedTerm) => plannedTerm.courseCodes.map(normalizeCourseCode)),
      ),
    [currentTerm, plannedTerms],
  )
  const subjects = useMemo(
    () => ['All', ...Array.from(new Set(courses.map((course) => course.subject))).sort()],
    [courses],
  )

  const availabilityByCode = useMemo(
    () =>
      new Map(
        courses.map((course) => [
          course.code,
          getCourseAvailability(course, effectiveCompletedCourses, prerequisiteOverrides),
        ]),
      ),
    [courses, effectiveCompletedCourses, prerequisiteOverrides],
  )

  const filteredCourses = useMemo(() => {
    const normalizedQuery = normalizeCourseCode(query)

    return courses.filter((course) => {
      const courseText = normalizeCourseCode(
        `${course.code} ${formatCourseCode(course.code)} ${course.name}`,
      )
      const matchesQuery = normalizedQuery === '' || courseText.includes(normalizedQuery)
      const matchesSubject = subject === 'All' || course.subject === subject
      const matchesLevel = level === 'All' || course.level === Number(level)
      const availability = availabilityByCode.get(course.code)
      const isCompleted = completedCodes.has(course.code)
      const isPlanned = plannedCodes.has(course.code)
      const hasOverride = availability?.hasPrerequisiteOverride
      const isCovered = availability?.reasons.some(
        (reason) => reason.includes('already') || reason.includes('antirequisite'),
      )
      const matchesStatus =
        status === 'All' ||
        (status === 'Eligible' && availability?.canTake) ||
        (status === 'Blocked' && !availability?.canTake && !isCovered) ||
        (status === 'Covered' && isCovered) ||
        (status === 'Completed' && isCompleted) ||
        (status === 'Planned' && isPlanned) ||
        (status === 'Override' && hasOverride)

      return matchesQuery && matchesSubject && matchesLevel && matchesStatus
    })
  }, [availabilityByCode, completedCodes, courses, level, plannedCodes, query, status, subject])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <p className="mt-2 text-slate-600">Search the course catalog.</p>
      </div>

      <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_auto_auto_auto]">
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
        <select
          className="h-11 rounded-xl border border-slate-300 px-3"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          {statuses.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between text-sm text-slate-600">
        <span>{filteredCourses.length} courses</span>
      </div>

      {filteredCourses.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-slate-600">
          No courses match your search.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredCourses.map((course) => (
            (() => {
              const availability = availabilityByCode.get(course.code)
              const isCovered = availability?.reasons.some(
                (reason) => reason.includes('already') || reason.includes('antirequisite'),
              )
              const cardStatus = completedCodes.has(course.code)
                ? 'completed'
                : plannedCodes.has(course.code)
                  ? 'planned'
                : availability?.hasPrerequisiteOverride && availability.canTake
                  ? 'override'
                : availability?.canTake
                  ? 'eligible'
                  : isCovered
                    ? 'covered'
                    : 'blocked'

              return (
                <CourseCard
                  course={course}
                  key={course.code}
                  reasons={availability?.canTake ? [] : availability?.reasons}
                  status={cardStatus}
                />
              )
            })()
          ))}
        </div>
      )}
    </div>
  )
}
