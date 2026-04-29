import { normalizeCourseCode } from './courseCodes'
import { terms } from './terms'
import type { CurrentTerm, PlannedTerm, StudentPlanBackup } from '../types/student'

const validTerms = new Set<string>(terms)
const validStatuses = new Set(['finished', 'future'])

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function isValidTerm(value: unknown): value is CurrentTerm['term'] {
  return typeof value === 'string' && validTerms.has(value)
}

function normalizePlannedTerm(value: unknown, index: number): PlannedTerm {
  if (!isObject(value)) {
    throw new Error(`Planned term ${index + 1} is invalid.`)
  }

  if (!isValidTerm(value.term)) {
    throw new Error(`Planned term ${index + 1} has an invalid term.`)
  }

  if (typeof value.year !== 'number' || !Number.isInteger(value.year)) {
    throw new Error(`Planned term ${index + 1} has an invalid year.`)
  }

  if (!Array.isArray(value.courseCodes)) {
    throw new Error(`Planned term ${index + 1} is missing course codes.`)
  }

  const status =
    typeof value.status === 'string' && validStatuses.has(value.status) ? value.status : 'future'

  return {
    id: typeof value.id === 'string' && value.id.length > 0 ? value.id : crypto.randomUUID(),
    term: value.term,
    year: value.year,
    status: status as PlannedTerm['status'],
    courseCodes: [...new Set(value.courseCodes.map((courseCode) => normalizeCourseCode(String(courseCode))))],
  }
}

export function normalizePlanBackup(value: unknown): StudentPlanBackup {
  if (!isObject(value)) {
    throw new Error('Plan file must be a JSON object.')
  }

  if (!Array.isArray(value.completedCourses)) {
    throw new Error('Plan file is missing completedCourses.')
  }

  if (!Array.isArray(value.plannedTerms)) {
    throw new Error('Plan file is missing plannedTerms.')
  }

  const currentTermValue = value.currentTerm

  if (!isObject(currentTermValue) || !isValidTerm(currentTermValue.term)) {
    throw new Error('Plan file has an invalid currentTerm.')
  }

  if (typeof currentTermValue.year !== 'number' || !Number.isInteger(currentTermValue.year)) {
    throw new Error('Plan file has an invalid currentTerm year.')
  }

  return {
    completedCourses: value.completedCourses.map((completedCourse, index) => {
      if (!isObject(completedCourse) || typeof completedCourse.courseCode !== 'string') {
        throw new Error(`Completed course ${index + 1} is invalid.`)
      }

      return {
        courseCode: normalizeCourseCode(completedCourse.courseCode),
        grade:
          typeof completedCourse.grade === 'number' && Number.isFinite(completedCourse.grade)
            ? completedCourse.grade
            : undefined,
        termTaken:
          typeof completedCourse.termTaken === 'string' ? completedCourse.termTaken : undefined,
      }
    }),
    prerequisiteOverrides: Array.isArray(value.prerequisiteOverrides)
      ? value.prerequisiteOverrides.map((courseCode) => normalizeCourseCode(String(courseCode)))
      : [],
    plannedTerms: value.plannedTerms.map(normalizePlannedTerm),
    selectedProgramId:
      typeof value.selectedProgramId === 'string' ? value.selectedProgramId : undefined,
    currentTerm: {
      term: currentTermValue.term,
      year: currentTermValue.year,
    },
  }
}
