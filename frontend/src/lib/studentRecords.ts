import { normalizeCourseCode } from './courseCodes'
import { isFinishedByDate } from './terms'
import type { CompletedCourse, CurrentTerm, PlannedTerm } from '../types/student'

export function isFinishedTerm(plannedTerm: PlannedTerm, currentTerm: CurrentTerm): boolean {
  return isFinishedByDate(plannedTerm, currentTerm)
}

export function getEffectiveCompletedCourses(
  completedCourses: CompletedCourse[],
  plannedTerms: PlannedTerm[] = [],
  currentTerm?: CurrentTerm,
): CompletedCourse[] {
  const completedByCode = new Map<string, CompletedCourse>()

  completedCourses.forEach((completedCourse) => {
    completedByCode.set(normalizeCourseCode(completedCourse.courseCode), {
      ...completedCourse,
      courseCode: normalizeCourseCode(completedCourse.courseCode),
    })
  })

  if (currentTerm) {
    plannedTerms
      .filter((plannedTerm) => isFinishedTerm(plannedTerm, currentTerm))
      .forEach((plannedTerm) => {
        plannedTerm.courseCodes.forEach((courseCode) => {
          const normalizedCode = normalizeCourseCode(courseCode)

          if (!completedByCode.has(normalizedCode)) {
            completedByCode.set(normalizedCode, {
              courseCode: normalizedCode,
              termTaken: `${plannedTerm.term} ${plannedTerm.year}`,
            })
          }
        })
      })
  }

  return Array.from(completedByCode.values())
}
