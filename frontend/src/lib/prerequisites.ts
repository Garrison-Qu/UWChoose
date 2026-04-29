import { formatCourseCode, normalizeCourseCode } from './courseCodes'
import type { Course, CourseRequirement, Prerequisite } from '../types/course'
import type { CompletedCourse } from '../types/student'

function findCompletedCourse(courseCode: string, completedCourses: CompletedCourse[]) {
  const normalizedCode = normalizeCourseCode(courseCode)

  return completedCourses.find(
    (completedCourse) => normalizeCourseCode(completedCourse.courseCode) === normalizedCode,
  )
}

function satisfiesCourseRequirement(
  requirement: CourseRequirement,
  completedCourses: CompletedCourse[],
): boolean {
  const completedCourse = findCompletedCourse(requirement.courseCode, completedCourses)

  if (!completedCourse) {
    return false
  }

  if (requirement.minGrade === undefined) {
    return true
  }

  return completedCourse.grade !== undefined && completedCourse.grade >= requirement.minGrade
}

export function satisfiesPrerequisite(
  prerequisite: Prerequisite | undefined,
  completedCourses: CompletedCourse[],
): boolean {
  if (!prerequisite) {
    return true
  }

  if (prerequisite.type === 'course') {
    return satisfiesCourseRequirement(prerequisite, completedCourses)
  }

  if (prerequisite.type === 'allOf') {
    return prerequisite.requirements.every((requirement) =>
      satisfiesPrerequisite(requirement, completedCourses),
    )
  }

  return prerequisite.requirements.some((requirement) =>
    satisfiesPrerequisite(requirement, completedCourses),
  )
}

export function getEligibleCourses(
  availableCourses: Course[],
  completedCourses: CompletedCourse[],
): Course[] {
  return availableCourses.filter((course) =>
    satisfiesPrerequisite(course.prerequisite, completedCourses),
  )
}

export function getBlockedCourses(
  availableCourses: Course[],
  completedCourses: CompletedCourse[],
): Course[] {
  return availableCourses.filter(
    (course) => !satisfiesPrerequisite(course.prerequisite, completedCourses),
  )
}

function describeCourseRequirement(requirement: CourseRequirement): string {
  const formattedCode = formatCourseCode(requirement.courseCode)

  if (requirement.minGrade === undefined) {
    return formattedCode
  }

  return `${formattedCode} with at least ${requirement.minGrade}%`
}

function summarizeRequirement(requirement: Prerequisite): string {
  if (requirement.type === 'course') {
    return describeCourseRequirement(requirement)
  }

  const separator = requirement.type === 'allOf' ? ' and ' : ', or '

  return requirement.requirements.map(summarizeRequirement).join(separator)
}

function getUnsatisfiedReason(
  prerequisite: Prerequisite,
  completedCourses: CompletedCourse[],
): string[] {
  if (satisfiesPrerequisite(prerequisite, completedCourses)) {
    return []
  }

  if (prerequisite.type === 'course') {
    return [`Need ${describeCourseRequirement(prerequisite)}.`]
  }

  if (prerequisite.type === 'allOf') {
    return prerequisite.requirements.flatMap((requirement) =>
      getUnsatisfiedReason(requirement, completedCourses),
    )
  }

  return [`Need one of ${prerequisite.requirements.map(summarizeRequirement).join(', or ')}.`]
}

export function getBlockedReasons(
  course: Course,
  completedCourses: CompletedCourse[],
): string[] {
  if (!course.prerequisite || satisfiesPrerequisite(course.prerequisite, completedCourses)) {
    return []
  }

  return getUnsatisfiedReason(course.prerequisite, completedCourses)
}
