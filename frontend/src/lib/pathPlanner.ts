import { formatCourseCode, normalizeCourseCode } from './courseCodes'
import { getCreditConflictReasons } from './courseAvailability'
import { findNextOfferedTerm, formatAcademicTerm, getNextAcademicTerm } from './terms'
import { satisfiesPrerequisite } from './prerequisites'
import type { Course, CourseRequirement, Prerequisite } from '../types/course'
import type { CompletedCourse, CurrentTerm } from '../types/student'

export type PathPlanStep = {
  termLabel: string
  courseCodes: string[]
}

export type PathRequirementOption = {
  courseCode: string
  label: string
}

export type PathRequirementStep = {
  title: string
  options: PathRequirementOption[]
}

export type PathExplanation =
  | {
      status: 'path'
      title: string
      steps: PathRequirementStep[]
      finalCourseCode: string
      schedule: PathPlanStep[]
    }
  | {
      status: 'already-completed' | 'blocked-by-antirequisite' | 'already-satisfied' | 'no-path'
      title: string
      reasons: string[]
      schedule: PathPlanStep[]
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

function requirementOption(requirement: CourseRequirement): PathRequirementOption {
  const minGradeLabel =
    requirement.minGrade === undefined ? '' : ` with grade at least ${requirement.minGrade}%`

  return {
    courseCode: normalizeCourseCode(requirement.courseCode),
    label: `${formatCourseCode(requirement.courseCode)}${minGradeLabel}`,
  }
}

function summarizeOptions(prerequisite: Prerequisite): PathRequirementOption[] {
  if (prerequisite.type === 'course') {
    return [requirementOption(prerequisite)]
  }

  return prerequisite.requirements.flatMap(summarizeOptions)
}

function buildRequirementSteps(
  prerequisite: Prerequisite | undefined,
  completedCourses: CompletedCourse[],
): PathRequirementStep[] {
  if (!prerequisite || satisfiesPrerequisite(prerequisite, completedCourses)) {
    return []
  }

  if (prerequisite.type === 'course') {
    return [{ title: 'Take:', options: [requirementOption(prerequisite)] }]
  }

  if (prerequisite.type === 'allOf') {
    return prerequisite.requirements.flatMap((requirement) =>
      buildRequirementSteps(requirement, completedCourses),
    )
  }

  return [
    {
      title: 'Take one of:',
      options: prerequisite.requirements.flatMap(summarizeOptions),
    },
  ]
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

export function buildPathExplanationToCourse(
  targetCourse: Course,
  courses: Course[],
  completedCourses: CompletedCourse[],
  currentTerm: CurrentTerm,
): PathExplanation {
  const schedule = buildFastestPathToCourse(targetCourse, courses, completedCourses, currentTerm)
  const creditConflictReasons = getCreditConflictReasons(targetCourse, completedCourses)

  if (hasCompleted(targetCourse.code, completedCourses)) {
    return {
      status: 'already-completed',
      title: `${formatCourseCode(targetCourse.code)} is already completed.`,
      reasons: creditConflictReasons,
      schedule,
    }
  }

  if (creditConflictReasons.length > 0) {
    return {
      status: 'blocked-by-antirequisite',
      title: `${formatCourseCode(targetCourse.code)} is blocked by completed credit.`,
      reasons: creditConflictReasons,
      schedule,
    }
  }

  if (satisfiesPrerequisite(targetCourse.prerequisite, completedCourses)) {
    return {
      status: 'already-satisfied',
      title: `You can take ${formatCourseCode(targetCourse.code)} now.`,
      reasons: [],
      schedule,
    }
  }

  const steps = buildRequirementSteps(targetCourse.prerequisite, completedCourses)

  if (steps.length === 0) {
    return {
      status: 'no-path',
      title: `No path found for ${formatCourseCode(targetCourse.code)}.`,
      reasons: ['The prerequisite data may be incomplete.'],
      schedule,
    }
  }

  return {
    status: 'path',
    title: `To take ${formatCourseCode(targetCourse.code)}:`,
    steps,
    finalCourseCode: targetCourse.code,
    schedule,
  }
}
