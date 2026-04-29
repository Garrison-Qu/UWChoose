import { normalizeCourseCode } from './courseCodes'
import { findNextOfferedTerm, formatAcademicTerm, getNextAcademicTerm } from './terms'
import { satisfiesPrerequisite } from './prerequisites'
import type { Course, Prerequisite } from '../types/course'
import type { CompletedCourse, CurrentTerm } from '../types/student'

export type PathPlanStep = {
  termLabel: string
  courseCodes: string[]
}

function hasCompleted(courseCode: string, completedCourses: CompletedCourse[]): boolean {
  const normalizedCode = normalizeCourseCode(courseCode)

  return completedCourses.some(
    (completedCourse) => normalizeCourseCode(completedCourse.courseCode) === normalizedCode,
  )
}

function getCourse(courseCode: string, courses: Course[]): Course | undefined {
  const normalizedCode = normalizeCourseCode(courseCode)

  return courses.find((course) => course.code === normalizedCode)
}

function getMissingDirectRequirements(
  prerequisite: Prerequisite | undefined,
  completedCourses: CompletedCourse[],
): string[] {
  if (!prerequisite || satisfiesPrerequisite(prerequisite, completedCourses)) {
    return []
  }

  if (prerequisite.type === 'course') {
    return [normalizeCourseCode(prerequisite.courseCode)]
  }

  if (prerequisite.type === 'allOf') {
    return prerequisite.requirements.flatMap((requirement) =>
      getMissingDirectRequirements(requirement, completedCourses),
    )
  }

  const options = prerequisite.requirements
    .map((requirement) => getMissingDirectRequirements(requirement, completedCourses))
    .sort((left, right) => left.length - right.length)

  return options[0] ?? []
}

function buildNeededCourseSequence(
  courseCode: string,
  courses: Course[],
  completedCourses: CompletedCourse[],
  seen = new Set<string>(),
): string[] {
  const normalizedCode = normalizeCourseCode(courseCode)

  if (hasCompleted(normalizedCode, completedCourses) || seen.has(normalizedCode)) {
    return []
  }

  seen.add(normalizedCode)

  const course = getCourse(normalizedCode, courses)

  if (!course) {
    return [normalizedCode]
  }

  const missingRequirements = getMissingDirectRequirements(course.prerequisite, completedCourses)
  const prerequisiteSequence = missingRequirements.flatMap((requirementCode) =>
    buildNeededCourseSequence(requirementCode, courses, completedCourses, seen),
  )

  return [...new Set([...prerequisiteSequence, normalizedCode])]
}

export function buildFastestPathToCourse(
  targetCourse: Course,
  courses: Course[],
  completedCourses: CompletedCourse[],
  currentTerm: CurrentTerm,
): PathPlanStep[] {
  const neededCourseCodes = buildNeededCourseSequence(targetCourse.code, courses, completedCourses)
  const steps: PathPlanStep[] = []
  let cursor = currentTerm

  neededCourseCodes.forEach((courseCode) => {
    const course = getCourse(courseCode, courses)
    const scheduledTerm = findNextOfferedTerm(cursor, course?.termsOffered)
    const termLabel = formatAcademicTerm(scheduledTerm)
    const existingStep = steps.find((step) => step.termLabel === termLabel)

    if (existingStep) {
      existingStep.courseCodes.push(courseCode)
    } else {
      steps.push({ termLabel, courseCodes: [courseCode] })
    }

    cursor = getNextAcademicTerm(scheduledTerm)
  })

  return steps
}
