import { normalizeCourseCode } from './courseCodes'
import type { Program, ProgramRequirement } from '../types/program'
import type { CompletedCourse } from '../types/student'

export type ProgramRequirementProgress = {
  requirement: ProgramRequirement
  completedCourses: string[]
  missingCourses: string[]
  requiredCount: number
  completedCount: number
  isComplete: boolean
}

export type ProgramProgress = {
  program: Program
  requirements: ProgramRequirementProgress[]
  completedRequirementCount: number
  totalRequirementCount: number
  percentage: number
}

function hasCompleted(courseCode: string, completedCourses: CompletedCourse[]): boolean {
  const normalizedCode = normalizeCourseCode(courseCode)

  return completedCourses.some(
    (completedCourse) => normalizeCourseCode(completedCourse.courseCode) === normalizedCode,
  )
}

export function getProgramProgress(
  program: Program,
  completedCourses: CompletedCourse[],
): ProgramProgress {
  const requirements = program.requirements.map((requirement) => {
    const completedRequirementCourses = requirement.courses.filter((courseCode) =>
      hasCompleted(courseCode, completedCourses),
    )
    const requiredCount =
      requirement.type === 'allOf' ? requirement.courses.length : (requirement.requiredCount ?? 0)
    const completedCount = Math.min(completedRequirementCourses.length, requiredCount)
    const isComplete = completedRequirementCourses.length >= requiredCount

    return {
      requirement,
      completedCourses: completedRequirementCourses,
      missingCourses: requirement.courses.filter(
        (courseCode) => !completedRequirementCourses.includes(courseCode),
      ),
      requiredCount,
      completedCount,
      isComplete,
    }
  })

  const completedRequirementCount = requirements.filter((requirement) => requirement.isComplete).length
  const totalRequirementCount = requirements.length

  return {
    program,
    requirements,
    completedRequirementCount,
    totalRequirementCount,
    percentage:
      totalRequirementCount === 0
        ? 0
        : Math.round((completedRequirementCount / totalRequirementCount) * 100),
  }
}
