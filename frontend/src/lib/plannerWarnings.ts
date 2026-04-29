import { getCreditConflictReasons } from './courseAvailability'
import { normalizeCourseCode } from './courseCodes'
import { getBlockedReasons, satisfiesPrerequisite } from './prerequisites'
import { compareAcademicTerms } from './terms'
import type { Course, Prerequisite } from '../types/course'
import type { CompletedCourse, PlannedTerm } from '../types/student'

export type PlannedCourseWarning = {
  courseCode: string
  warnings: string[]
}

export type PlannedTermWarnings = {
  termId: string
  courseWarnings: PlannedCourseWarning[]
  warningCount: number
}

function findCourse(courseCode: string, courses: Course[]): Course | undefined {
  const normalizedCode = normalizeCourseCode(courseCode)

  return courses.find((course) => course.code === normalizedCode)
}

function completedBeforeTerm(
  targetTerm: PlannedTerm,
  plannedTerms: PlannedTerm[],
  completedCourses: CompletedCourse[],
): CompletedCourse[] {
  const earlierPlannedCourses = plannedTerms
    .filter((plannedTerm) => compareAcademicTerms(plannedTerm, targetTerm) < 0)
    .flatMap((plannedTerm) => plannedTerm.courseCodes)
    .map((courseCode) => ({ courseCode }))

  return [...completedCourses, ...earlierPlannedCourses]
}

function collectRequirementCourseCodes(prerequisite: Prerequisite | undefined): string[] {
  if (!prerequisite) {
    return []
  }

  if (prerequisite.type === 'course') {
    return [normalizeCourseCode(prerequisite.courseCode)]
  }

  return prerequisite.requirements.flatMap(collectRequirementCourseCodes)
}

function findPlannedTermForCourse(courseCode: string, plannedTerms: PlannedTerm[]): PlannedTerm | undefined {
  const normalizedCode = normalizeCourseCode(courseCode)

  return plannedTerms.find((plannedTerm) =>
    plannedTerm.courseCodes.some(
      (plannedCourseCode) => normalizeCourseCode(plannedCourseCode) === normalizedCode,
    ),
  )
}

export function getPlannedTermWarnings(
  plannedTerm: PlannedTerm,
  plannedTerms: PlannedTerm[],
  completedCourses: CompletedCourse[],
  courses: Course[],
): PlannedTermWarnings {
  const completedBefore = completedBeforeTerm(plannedTerm, plannedTerms, completedCourses)
  const allPlannedCodes = plannedTerms.flatMap((term) => term.courseCodes.map(normalizeCourseCode))

  const courseWarnings = plannedTerm.courseCodes.map((courseCode) => {
    const normalizedCode = normalizeCourseCode(courseCode)
    const course = findCourse(normalizedCode, courses)
    const duplicateCount = allPlannedCodes.filter((plannedCode) => plannedCode === normalizedCode).length
    const warnings: string[] = []

    if (!course) {
      return {
        courseCode: normalizedCode,
        warnings: ['Course is not in the local catalog.'],
      }
    }

    if (completedBefore.some((completedCourse) => normalizeCourseCode(completedCourse.courseCode) === normalizedCode)) {
      warnings.push('Already taken before this term.')
    }

    getCreditConflictReasons(course, completedBefore).forEach((reason) => warnings.push(reason))

    if (!satisfiesPrerequisite(course.prerequisite, completedBefore)) {
      getBlockedReasons(course, completedBefore).forEach((reason) =>
        warnings.push(`Missing prerequisite before this term: ${reason}`),
      )
    }

    if (course.termsOffered?.length && !course.termsOffered.includes(plannedTerm.term)) {
      warnings.push(`Course is not usually offered in ${plannedTerm.term}.`)
    }

    if (duplicateCount > 1) {
      warnings.push('Duplicate course in another planned term.')
    }

    collectRequirementCourseCodes(course.prerequisite).forEach((requirementCode) => {
      const requirementTerm = findPlannedTermForCourse(requirementCode, plannedTerms)

      if (requirementTerm && compareAcademicTerms(requirementTerm, plannedTerm) > 0) {
        warnings.push(`Course is planned before prerequisite ${requirementCode}.`)
      }
    })

    return { courseCode: normalizedCode, warnings: [...new Set(warnings)] }
  })

  return {
    termId: plannedTerm.id,
    courseWarnings,
    warningCount: courseWarnings.reduce((total, item) => total + item.warnings.length, 0),
  }
}
