import type { Program } from '../types/program'
import type { AcademicSelections } from '../types/student'

export const maxMajorSelections = 2
export const maxSingleProgramSelections = 1

export function uniqueIds(ids: Array<string | undefined>): string[] {
  return [...new Set(ids.filter((id): id is string => Boolean(id)))]
}

export function capProgramIds(programIds: string[] | undefined, maxSelections: number): string[] {
  return uniqueIds(programIds ?? []).slice(0, maxSelections)
}

function capOptionalProgramIds(
  programIds: Array<string | undefined>,
  maxSelections: number,
): string[] {
  return uniqueIds(programIds).slice(0, maxSelections)
}

export function getProgramTypeLabel(program: Program): string {
  switch (program.category) {
    case 'degree-requirement':
      return 'Degree requirement'
    case 'double-degree':
      return 'Double degree'
    case 'joint':
      return 'Joint honours'
    case 'minor':
      return 'Minor'
    case 'option':
      return 'Option'
    case 'specialization':
      return 'Specialization'
    default:
      return 'Major'
  }
}

function normalizeSearchText(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

function normalizeCode(value: string | undefined): string {
  return (value ?? '').replace(/\s+/g, ' ').trim().toLowerCase()
}

function normalizeSubject(value: string): string {
  return normalizeSearchText(value)
    .replace(/\bbachelor of (mathematics|computer science)\b/g, ' ')
    .replace(/\bhonours\b/g, ' ')
    .replace(/\bjoint\b/g, ' ')
    .replace(/\bminor\b/g, ' ')
    .replace(/\bspecialization\b/g, ' ')
    .replace(/\bthree year general\b/g, ' ')
    .replace(/\bwith\b.*$/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function getProgramSubject(program: Program): string {
  const nameSubject = program.name
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\s+-\s+.*$/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  const codeSubject = (program.code ?? '')
    .replace(/^(3G|H|JH)-/, '')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\s+-\s+.*$/g, ' ')
    .replace(/\b(Minor|Option|Specialization)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return normalizeSubject(nameSubject || codeSubject)
}

export function matchesProgramSearch(program: Program, searchTerm: string): boolean {
  const query = normalizeSearchText(searchTerm)

  if (!query) {
    return true
  }

  const haystack = normalizeSearchText(
    [program.name, program.code, program.credentialType, getProgramTypeLabel(program)]
      .filter(Boolean)
      .join(' '),
  )

  return query.split(/\s+/).every((part) => haystack.includes(part))
}

export function getSelectedMajorIds(
  selections: AcademicSelections,
  fallbackProgramId?: string,
): string[] {
  return capOptionalProgramIds([
    ...(selections.majorProgramIds ?? []),
    selections.majorProgramId,
    fallbackProgramId,
  ], maxMajorSelections)
}

function getProgramsById(programs: Program[], programIds: string[]): Program[] {
  return programIds
    .map((programId) => programs.find((program) => program.id === programId))
    .filter((program): program is Program => Boolean(program))
}

function getSelectedMajorSubjects(programs: Program[], selectedMajorIds: string[]): Set<string> {
  return new Set(getProgramsById(programs, selectedMajorIds).map(getProgramSubject))
}

export function getMajorPrograms(programs: Program[]): Program[] {
  return programs.filter(
    (program) => program.category === 'major' || program.category === 'double-degree',
  )
}

export function getAvailableJointPrograms(
  programs: Program[],
  selectedMajorIds: string[],
): Program[] {
  if (selectedMajorIds.length === 0) {
    return []
  }

  const selectedSubjects = getSelectedMajorSubjects(programs, selectedMajorIds)

  return programs.filter(
    (program) => program.category === 'joint' && !selectedSubjects.has(getProgramSubject(program)),
  )
}

export function getAvailableMinorPrograms(
  programs: Program[],
  selectedMajorIds: string[],
): Program[] {
  if (selectedMajorIds.length === 0) {
    return []
  }

  const selectedSubjects = getSelectedMajorSubjects(programs, selectedMajorIds)

  return programs.filter(
    (program) => program.category === 'minor' && !selectedSubjects.has(getProgramSubject(program)),
  )
}

export function getAvailableSpecializationPrograms(
  programs: Program[],
  selectedMajorIds: string[],
): Program[] {
  if (selectedMajorIds.length === 0) {
    return []
  }

  const selectedCodes = new Set(
    getProgramsById(programs, selectedMajorIds).map((program) => normalizeCode(program.code)),
  )

  return programs.filter((program) => {
    if (program.category !== 'specialization') {
      return false
    }

    if (!program.parentProgramCodes || program.parentProgramCodes.length === 0) {
      return true
    }

    return program.parentProgramCodes.some((code) => selectedCodes.has(normalizeCode(code)))
  })
}

export function getAvailableOptionPrograms(
  programs: Program[],
  selectedMajorIds: string[],
): Program[] {
  if (selectedMajorIds.length === 0) {
    return []
  }

  return programs.filter((program) => program.category === 'option')
}

export function cleanUnavailableSelections(
  programs: Program[],
  selections: AcademicSelections,
  selectedMajorIds: string[],
): AcademicSelections {
  const cappedMajorIds = capProgramIds(selectedMajorIds, maxMajorSelections)
  const availableJointIds = new Set(
    getAvailableJointPrograms(programs, cappedMajorIds).map((program) => program.id),
  )
  const availableMinorIds = new Set(
    getAvailableMinorPrograms(programs, cappedMajorIds).map((program) => program.id),
  )
  const availableSpecializationIds = new Set(
    getAvailableSpecializationPrograms(programs, cappedMajorIds).map((program) => program.id),
  )
  const availableOptionIds = new Set(
    getAvailableOptionPrograms(programs, cappedMajorIds).map((program) => program.id),
  )

  return {
    ...selections,
    majorProgramId: cappedMajorIds[0],
    majorProgramIds: cappedMajorIds,
    jointProgramIds: capProgramIds(
      (selections.jointProgramIds ?? []).filter((id) => availableJointIds.has(id)),
      maxSingleProgramSelections,
    ),
    minorProgramIds: capProgramIds(
      (selections.minorProgramIds ?? []).filter((id) => availableMinorIds.has(id)),
      maxSingleProgramSelections,
    ),
    specializationProgramIds: capProgramIds(
      (selections.specializationProgramIds ?? []).filter((id) => availableSpecializationIds.has(id)),
      maxSingleProgramSelections,
    ),
    optionProgramIds: capProgramIds(
      (selections.optionProgramIds ?? []).filter((id) => availableOptionIds.has(id)),
      maxSingleProgramSelections,
    ),
  }
}
