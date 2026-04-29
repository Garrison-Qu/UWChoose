import { formatCourseCode, normalizeCourseCode } from './courseCodes'
import { getBlockedReasons, satisfiesPrerequisite } from './prerequisites'
import type { Course } from '../types/course'
import type { CompletedCourse } from '../types/student'

export type CourseAvailability = {
  canTake: boolean
  reasons: string[]
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
): CourseAvailability {
  const reasons = [
    ...getCreditConflictReasons(course, completedCourses),
    ...getBlockedReasons(course, completedCourses),
  ]

  return {
    canTake: reasons.length === 0 && satisfiesPrerequisite(course.prerequisite, completedCourses),
    reasons,
  }
}
