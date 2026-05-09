import { findCourseByCode, findProgramById, normalizeCourseCode } from './catalog.ts'
import type {
  CompletedCourse,
  CurrentTerm,
  PlannedTerm,
  SavedPlanProfile,
  StudentPlanBackup,
} from '../../frontend/src/types/student.ts'

const validTerms = new Set(['Fall', 'Winter', 'Spring'])
const validStatuses = new Set(['finished', 'future'])

export type NormalizedSavedPlanRequest = {
  plan: StudentPlanBackup
  profile?: SavedPlanProfile
}

export class PlanValidationError extends Error {
  readonly errors: string[]

  constructor(errors: string[]) {
    super(errors.join(' '))
    this.name = 'PlanValidationError'
    this.errors = errors
  }
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function assertKnownCourse(courseCode: string, path: string, errors: string[]) {
  if (!findCourseByCode(courseCode)) {
    errors.push(`${path}: course ${courseCode} does not exist.`)
  }
}

function normalizeTerm(value: unknown, path: string, errors: string[]): CurrentTerm | undefined {
  if (!isObject(value)) {
    errors.push(`${path} must be an object.`)
    return undefined
  }

  if (typeof value.term !== 'string' || !validTerms.has(value.term)) {
    errors.push(`${path}.term must be Fall, Winter, or Spring.`)
  }

  if (typeof value.year !== 'number' || !Number.isInteger(value.year)) {
    errors.push(`${path}.year must be an integer.`)
  }

  if (
    typeof value.term !== 'string' ||
    !validTerms.has(value.term) ||
    typeof value.year !== 'number' ||
    !Number.isInteger(value.year)
  ) {
    return undefined
  }

  return {
    term: value.term as CurrentTerm['term'],
    year: value.year,
  }
}

function normalizeCompletedCourse(
  value: unknown,
  index: number,
  errors: string[],
): CompletedCourse | undefined {
  const path = `completedCourses[${index}]`

  if (!isObject(value)) {
    errors.push(`${path} must be an object.`)
    return undefined
  }

  if (typeof value.courseCode !== 'string' || value.courseCode.trim() === '') {
    errors.push(`${path}.courseCode must be a non-empty string.`)
    return undefined
  }

  const courseCode = normalizeCourseCode(value.courseCode)
  assertKnownCourse(courseCode, `${path}.courseCode`, errors)

  if (value.grade !== undefined && (typeof value.grade !== 'number' || !Number.isFinite(value.grade))) {
    errors.push(`${path}.grade must be a finite number when provided.`)
  }

  if (value.termTaken !== undefined && typeof value.termTaken !== 'string') {
    errors.push(`${path}.termTaken must be a string when provided.`)
  }

  return {
    courseCode,
    grade: typeof value.grade === 'number' && Number.isFinite(value.grade) ? value.grade : undefined,
    termTaken: typeof value.termTaken === 'string' ? value.termTaken : undefined,
  }
}

function normalizePlannedTerm(
  value: unknown,
  index: number,
  errors: string[],
): PlannedTerm | undefined {
  const path = `plannedTerms[${index}]`

  if (!isObject(value)) {
    errors.push(`${path} must be an object.`)
    return undefined
  }

  if (typeof value.id !== 'string' || value.id.trim() === '') {
    errors.push(`${path}.id must be a non-empty string.`)
  }

  const term = normalizeTerm(value, path, errors)

  if (!Array.isArray(value.courseCodes)) {
    errors.push(`${path}.courseCodes must be an array.`)
    return undefined
  }

  if (value.status !== undefined && (typeof value.status !== 'string' || !validStatuses.has(value.status))) {
    errors.push(`${path}.status must be finished or future when provided.`)
  }

  const courseCodes = [...new Set(
    value.courseCodes.map((courseCode, courseIndex) => {
      if (typeof courseCode !== 'string' || courseCode.trim() === '') {
        errors.push(`${path}.courseCodes[${courseIndex}] must be a non-empty string.`)
        return ''
      }

      const normalizedCode = normalizeCourseCode(courseCode)
      assertKnownCourse(normalizedCode, `${path}.courseCodes[${courseIndex}]`, errors)

      return normalizedCode
    }).filter(Boolean),
  )]

  if (
    typeof value.id !== 'string' ||
    value.id.trim() === '' ||
    !term ||
    (value.status !== undefined && (typeof value.status !== 'string' || !validStatuses.has(value.status)))
  ) {
    return undefined
  }

  return {
    id: value.id,
    term: term.term,
    year: term.year,
    courseCodes,
    status: value.status as PlannedTerm['status'],
  }
}

export function normalizeStudentPlan(value: unknown): StudentPlanBackup {
  const errors: string[] = []

  if (!isObject(value)) {
    throw new PlanValidationError(['Plan must be a JSON object.'])
  }

  if (!Array.isArray(value.completedCourses)) {
    errors.push('completedCourses must be an array.')
  }

  if (!Array.isArray(value.plannedTerms)) {
    errors.push('plannedTerms must be an array.')
  }

  if (!Array.isArray(value.prerequisiteOverrides)) {
    errors.push('prerequisiteOverrides must be an array.')
  }

  if (typeof value.selectedProgramId === 'string' && !findProgramById(value.selectedProgramId)) {
    errors.push(`selectedProgramId ${value.selectedProgramId} does not exist.`)
  }

  if (value.selectedProgramId !== undefined && typeof value.selectedProgramId !== 'string') {
    errors.push('selectedProgramId must be a string when provided.')
  }

  const currentTerm = normalizeTerm(value.currentTerm, 'currentTerm', errors)
  const completedCourses = Array.isArray(value.completedCourses)
    ? value.completedCourses
        .map((completedCourse, index) => normalizeCompletedCourse(completedCourse, index, errors))
        .filter((completedCourse): completedCourse is CompletedCourse => Boolean(completedCourse))
    : []
  const plannedTerms = Array.isArray(value.plannedTerms)
    ? value.plannedTerms
        .map((plannedTerm, index) => normalizePlannedTerm(plannedTerm, index, errors))
        .filter((plannedTerm): plannedTerm is PlannedTerm => Boolean(plannedTerm))
    : []
  const prerequisiteOverrides = Array.isArray(value.prerequisiteOverrides)
    ? [...new Set(
        value.prerequisiteOverrides.map((courseCode, index) => {
          if (typeof courseCode !== 'string' || courseCode.trim() === '') {
            errors.push(`prerequisiteOverrides[${index}] must be a non-empty string.`)
            return ''
          }

          const normalizedCode = normalizeCourseCode(courseCode)
          assertKnownCourse(normalizedCode, `prerequisiteOverrides[${index}]`, errors)

          return normalizedCode
        }).filter(Boolean),
      )]
    : []

  if (!currentTerm || errors.length > 0) {
    throw new PlanValidationError(errors)
  }

  return {
    completedCourses,
    plannedTerms,
    prerequisiteOverrides,
    selectedProgramId: typeof value.selectedProgramId === 'string' ? value.selectedProgramId : undefined,
    currentTerm,
  }
}

function normalizeOptionalString(value: unknown, path: string, errors: string[]) {
  if (value === undefined) {
    return undefined
  }

  if (typeof value !== 'string') {
    errors.push(`${path} must be a string when provided.`)
    return undefined
  }

  const trimmedValue = value.trim()

  return trimmedValue.length > 0 ? trimmedValue : undefined
}

export function normalizeSavedPlanProfile(value: unknown): SavedPlanProfile | undefined {
  const errors: string[] = []

  if (value === undefined) {
    return undefined
  }

  if (!isObject(value)) {
    throw new PlanValidationError(['profile must be an object when provided.'])
  }

  const displayName = normalizeOptionalString(value.displayName, 'profile.displayName', errors)
  const programId = normalizeOptionalString(value.programId, 'profile.programId', errors)
  const notes = normalizeOptionalString(value.notes, 'profile.notes', errors)

  if (programId && !findProgramById(programId)) {
    errors.push(`profile.programId ${programId} does not exist.`)
  }

  if (value.startTerm !== undefined && (typeof value.startTerm !== 'string' || !validTerms.has(value.startTerm))) {
    errors.push('profile.startTerm must be Fall, Winter, or Spring when provided.')
  }

  if (value.startYear !== undefined && (typeof value.startYear !== 'number' || !Number.isInteger(value.startYear))) {
    errors.push('profile.startYear must be an integer when provided.')
  }

  if (errors.length > 0) {
    throw new PlanValidationError(errors)
  }

  return {
    displayName,
    programId,
    startTerm: validTerms.has(String(value.startTerm)) ? value.startTerm as SavedPlanProfile['startTerm'] : undefined,
    startYear: typeof value.startYear === 'number' && Number.isInteger(value.startYear) ? value.startYear : undefined,
    notes,
  }
}

export function normalizeSavedPlanRequest(value: unknown): NormalizedSavedPlanRequest {
  if (isObject(value) && 'plan' in value) {
    return {
      plan: normalizeStudentPlan(value.plan),
      profile: normalizeSavedPlanProfile(value.profile),
    }
  }

  return {
    plan: normalizeStudentPlan(value),
  }
}
