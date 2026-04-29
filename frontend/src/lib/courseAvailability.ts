import { formatCourseCode, normalizeCourseCode } from './courseCodes'
import { getBlockedReasons, satisfiesPrerequisite } from './prerequisites'
import type { Course } from '../types/course'
import type { CompletedCourse } from '../types/student'

export type CourseAvailability = {
  canTake: boolean
  reasons: string[]
  hasPrerequisiteOverride: boolean
}

function hasCompleted(courseCode: string, completedCourses: CompletedCourse[]): boolean {
  const normalizedCode = normalizeCourseCode(courseCode)

  return completedCourses.some(
    (completedCourse) => normalizeCourseCode(completedCourse.courseCode) === normalizedCode,
  )
}

export function getCreditConflictReasons(
  course: Course,
  completedCourses: CompletedCourse[],
): string[] {
  if (hasCompleted(course.code, completedCourses)) {
    return [`${formatCourseCode(course.code)} is already in your completed or finished-term record.`]
  }

  const completedAntirequisites =
    course.antirequisites?.filter((antirequisite) => hasCompleted(antirequisite, completedCourses)) ?? []

  return completedAntirequisites.map(
    (antirequisite) =>
      `Credit is already covered by antirequisite ${formatCourseCode(antirequisite)}.`,
  )
}

export function getCourseAvailability(
  course: Course,
  completedCourses: CompletedCourse[],
  prerequisiteOverrides: string[] = [],
): CourseAvailability {
  const hasPrerequisiteOverride =
    Boolean(course.prerequisite) && prerequisiteOverrides.map(normalizeCourseCode).includes(course.code)
  const creditConflictReasons = getCreditConflictReasons(course, completedCourses)
  const prerequisiteReasons = hasPrerequisiteOverride
    ? []
    : getBlockedReasons(course, completedCourses)
  const reasons = [
    ...creditConflictReasons,
    ...prerequisiteReasons,
  ]

  return {
    canTake:
      creditConflictReasons.length === 0 &&
      (hasPrerequisiteOverride || satisfiesPrerequisite(course.prerequisite, completedCourses)),
    hasPrerequisiteOverride,
    reasons,
  }
}
