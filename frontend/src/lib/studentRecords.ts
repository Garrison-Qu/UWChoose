import { normalizeCourseCode } from './courseCodes'
import type { CompletedCourse, PlannedTerm } from '../types/student'

export function isFinishedTerm(plannedTerm: PlannedTerm): boolean {
  return plannedTerm.status === 'finished'
}

export function getEffectiveCompletedCourses(completedCourses: CompletedCourse[]): CompletedCourse[] {
  const completedByCode = new Map<string, CompletedCourse>()

  completedCourses.forEach((completedCourse) => {
    completedByCode.set(normalizeCourseCode(completedCourse.courseCode), {
      ...completedCourse,
      courseCode: normalizeCourseCode(completedCourse.courseCode),
    })
  })

  return Array.from(completedByCode.values())
}
