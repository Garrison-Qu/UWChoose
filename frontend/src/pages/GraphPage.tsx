import { useState } from 'react'
import { PrerequisiteTree } from '../components/PrerequisiteTree'
import { courses } from '../data/courses'
import { formatCourseCode } from '../lib/courseCodes'

export function GraphPage() {
  const [courseCode, setCourseCode] = useState('CO367')
  const course = courses.find((item) => item.code === courseCode)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Prerequisite graph</h1>
        <p className="mt-2 text-slate-600">
          First version: text-based prerequisite tree. Cytoscape.js can be added after the checker is
          stable.
        </p>
      </div>

      <select
        className="h-11 rounded-xl border border-slate-300 bg-white px-3"
        value={courseCode}
        onChange={(event) => setCourseCode(event.target.value)}
      >
        {courses.map((item) => (
          <option key={item.code} value={item.code}>
            {formatCourseCode(item.code)} - {item.name}
          </option>
        ))}
      </select>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          {course ? `${formatCourseCode(course.code)}: ${course.name}` : 'Course not found'}
        </h2>
        <div className="mt-5">
          <PrerequisiteTree prerequisite={course?.prerequisite} />
        </div>
      </section>
    </div>
  )
}
