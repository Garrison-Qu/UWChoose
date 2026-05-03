import { courses } from '../../frontend/src/data/courses.ts'
import { programs } from '../../frontend/src/data/programs.ts'
import type { Course } from '../../frontend/src/types/course.ts'
import type { Program } from '../../frontend/src/types/program.ts'

export function normalizeCourseCode(value: string): string {
  return value.replace(/\s+/g, '').toUpperCase()
}

export function getCourses(): Course[] {
  return courses
}

export function getPrograms(): Program[] {
  return programs
}

export function findCourseByCode(courseCode: string): Course | undefined {
  const normalizedCode = normalizeCourseCode(courseCode)

  return courses.find((course) => course.code === normalizedCode)
}

export function findProgramById(programId: string): Program | undefined {
  return programs.find((program) => program.id === programId)
}
