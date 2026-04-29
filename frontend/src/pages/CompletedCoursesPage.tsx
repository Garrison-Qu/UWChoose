import { useState } from 'react'
import { Badge } from '../components/Badge'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import { useStudentStore } from '../stores/useStudentStore'

export function CompletedCoursesPage() {
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const addCompletedCourse = useStudentStore((state) => state.addCompletedCourse)
  const removeCompletedCourse = useStudentStore((state) => state.removeCompletedCourse)
  const updateCompletedCourse = useStudentStore((state) => state.updateCompletedCourse)
  const [courseCode, setCourseCode] = useState('')
  const [grade, setGrade] = useState('')
  const [termTaken, setTermTaken] = useState('')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Completed courses</h1>
        <p className="mt-2 text-slate-600">Saved locally in your browser with Zustand persistence.</p>
      </div>

      <form
        className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_160px_1fr_auto]"
        onSubmit={(event) => {
          event.preventDefault()

          if (!courseCode.trim()) {
            return
          }

          addCompletedCourse({
            courseCode: normalizeCourseCode(courseCode),
            grade: grade === '' ? undefined : Number(grade),
            termTaken: termTaken.trim() === '' ? undefined : termTaken.trim(),
          })
          setCourseCode('')
          setGrade('')
          setTermTaken('')
        }}
      >
        <input
          className="h-11 rounded-xl border border-slate-300 px-3"
          placeholder="Course code, e.g. MATH 137"
          value={courseCode}
          onChange={(event) => setCourseCode(event.target.value)}
        />
        <input
          className="h-11 rounded-xl border border-slate-300 px-3"
          max="100"
          min="0"
          placeholder="Grade"
          type="number"
          value={grade}
          onChange={(event) => setGrade(event.target.value)}
        />
        <input
          className="h-11 rounded-xl border border-slate-300 px-3"
          placeholder="Term taken, e.g. Fall 2025"
          value={termTaken}
          onChange={(event) => setTermTaken(event.target.value)}
        />
        <button className="h-11 rounded-xl bg-slate-950 px-5 font-semibold text-white">Add</button>
      </form>

      <div className="space-y-3">
        {completedCourses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-slate-600">
            No completed courses yet.
          </div>
        ) : (
          completedCourses.map((course) => (
            <div
              className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_140px_1fr_auto]"
              key={course.courseCode}
            >
              <div className="flex items-center gap-3">
                <Badge variant="completed">Completed</Badge>
                <strong>{formatCourseCode(course.courseCode)}</strong>
              </div>
              <input
                className="h-10 rounded-xl border border-slate-300 px-3"
                max="100"
                min="0"
                placeholder="Grade"
                type="number"
                value={course.grade ?? ''}
                onChange={(event) =>
                  updateCompletedCourse(course.courseCode, {
                    grade: event.target.value === '' ? undefined : Number(event.target.value),
                  })
                }
              />
              <input
                className="h-10 rounded-xl border border-slate-300 px-3"
                placeholder="Term taken"
                value={course.termTaken ?? ''}
                onChange={(event) =>
                  updateCompletedCourse(course.courseCode, {
                    termTaken: event.target.value === '' ? undefined : event.target.value,
                  })
                }
              />
              <button
                className="h-10 rounded-xl border border-slate-300 px-4 font-medium text-slate-700 hover:bg-slate-50"
                type="button"
                onClick={() => removeCompletedCourse(course.courseCode)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
