import { normalizeCourseCode } from './courseCodes'
import { getEffectiveCompletedCourses } from './studentRecords'
import { isFinishedByDate } from './terms'
import type { Program, ProgramRequirement } from '../types/program'
import type { CompletedCourse, CurrentTerm, PlannedTerm } from '../types/student'

export type ProgramRequirementProgress = {
  requirement: ProgramRequirement
  completedCourses: string[]
  plannedCourses: string[]
  missingCourses: string[]
  requiredCount: number
  completedCount: number
  projectedCount: number
  isComplete: boolean
  isProjectedComplete: boolean
}

export type ProgramProgress = {
  program: Program
  requirements: ProgramRequirementProgress[]
  completedRequirementCount: number
  projectedRequirementCount: number
  totalRequirementCount: number
  completedCourseCount: number
  projectedCourseCount: number
  totalRequiredCourseCount: number
  currentPercentage: number
  projectedPercentage: number
}

function hasCompleted(courseCode: string, completedCourses: CompletedCourse[]): boolean {
  const normalizedCode = normalizeCourseCode(courseCode)

  return completedCourses.some(
    (completedCourse) => normalizeCourseCode(completedCourse.courseCode) === normalizedCode,
  )
}

function getPlannedCourseCodes(plannedTerms: PlannedTerm[], currentTerm: CurrentTerm): string[] {
  return [
    ...new Set(
      plannedTerms
        .filter((plannedTerm) => !isFinishedByDate(plannedTerm, currentTerm))
        .flatMap((plannedTerm) => plannedTerm.courseCodes.map(normalizeCourseCode)),
    ),
  ]
}

export function getProgramProgress(
  program: Program,
  completedCourses: CompletedCourse[],
  plannedTerms: PlannedTerm[],
  currentTerm: CurrentTerm,
): ProgramProgress {
  const effectiveCompletedCourses = getEffectiveCompletedCourses(
    completedCourses,
    plannedTerms,
    currentTerm,
  )
  const plannedCourseCodes = getPlannedCourseCodes(plannedTerms, currentTerm)
  const requirements = program.requirements.map((requirement) => {
    const completedRequirementCourses = requirement.courses.filter((courseCode) =>
      hasCompleted(courseCode, effectiveCompletedCourses),
    )
    const plannedRequirementCourses = requirement.courses.filter(
      (courseCode) =>
        !completedRequirementCourses.includes(courseCode) &&
        plannedCourseCodes.includes(normalizeCourseCode(courseCode)),
    )
    const requiredCount =
      requirement.type === 'allOf' ? requirement.courses.length : (requirement.requiredCount ?? 0)
    const completedCount = Math.min(completedRequirementCourses.length, requiredCount)
    const projectedCount = Math.min(
      completedRequirementCourses.length + plannedRequirementCourses.length,
      requiredCount,
    )
    const isComplete = completedRequirementCourses.length >= requiredCount
    const isProjectedComplete =
      completedRequirementCourses.length + plannedRequirementCourses.length >= requiredCount

    return {
      requirement,
      completedCourses: completedRequirementCourses,
      plannedCourses: plannedRequirementCourses,
      missingCourses: requirement.courses.filter(
        (courseCode) =>
          !completedRequirementCourses.includes(courseCode) &&
          !plannedRequirementCourses.includes(courseCode),
      ),
      requiredCount,
      completedCount,
      projectedCount,
      isComplete,
      isProjectedComplete,
    }
  })

  const completedRequirementCount = requirements.filter((requirement) => requirement.isComplete).length
  const projectedRequirementCount = requirements.filter(
    (requirement) => requirement.isProjectedComplete,
  ).length
  const totalRequirementCount = requirements.length
  const completedCourseCount = requirements.reduce(
    (total, requirement) => total + requirement.completedCount,
    0,
  )
  const projectedCourseCount = requirements.reduce(
    (total, requirement) => total + requirement.projectedCount,
    0,
  )
  const totalRequiredCourseCount = requirements.reduce(
    (total, requirement) => total + requirement.requiredCount,
    0,
  )

  return {
    program,
    requirements,
    completedRequirementCount,
    projectedRequirementCount,
    totalRequirementCount,
    completedCourseCount,
    projectedCourseCount,
    totalRequiredCourseCount,
    currentPercentage:
      totalRequiredCourseCount === 0
        ? 0
        : Math.round((completedCourseCount / totalRequiredCourseCount) * 100),
    projectedPercentage:
      totalRequiredCourseCount === 0
        ? 0
        : Math.round((projectedCourseCount / totalRequiredCourseCount) * 100),
  }
}
