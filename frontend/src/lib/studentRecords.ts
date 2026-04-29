import { normalizeCourseCode } from './courseCodes'
import { formatAcademicTerm } from './terms'
import type { CompletedCourse, PlannedTerm } from '../types/student'

export function isFinishedTerm(plannedTerm: PlannedTerm): boolean {
  return plannedTerm.status === 'finished'
}

export function getEffectiveCompletedCourses(
  completedCourses: CompletedCourse[],
  plannedTerms: PlannedTerm[],
): CompletedCourse[] {
  const completedByCode = new Map<string, CompletedCourse>()

  completedCourses.forEach((completedCourse) => {
    completedByCode.set(normalizeCourseCode(completedCourse.courseCode), {
      ...completedCourse,
      courseCode: normalizeCourseCode(completedCourse.courseCode),
    })
  })

  plannedTerms.filter(isFinishedTerm).forEach((plannedTerm) => {
    plannedTerm.courseCodes.forEach((courseCode) => {
      const normalizedCode = normalizeCourseCode(courseCode)

      if (!completedByCode.has(normalizedCode)) {
        completedByCode.set(normalizedCode, {
          courseCode: normalizedCode,
          termTaken: formatAcademicTerm(plannedTerm),
        })
      }
    })
  })

  return Array.from(completedByCode.values())
}
