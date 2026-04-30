import type { CurrentTerm, PlannedTerm } from '../types/student'
import type { Term } from '../types/course'

export const terms = ['Fall', 'Winter', 'Spring'] as const
export type DerivedTermStatus = 'finished' | 'future'

const termOrder: Record<Term, number> = { Winter: 0, Spring: 1, Fall: 2 }

export function compareAcademicTerms(
  left: Pick<PlannedTerm, 'term' | 'year'>,
  right: Pick<PlannedTerm, 'term' | 'year'>,
): number {
  if (left.year !== right.year) {
    return left.year - right.year
  }

  return termOrder[left.term] - termOrder[right.term]
}

export function sortPlannedTerms(plannedTerms: PlannedTerm[]): PlannedTerm[] {
  return [...plannedTerms].sort(compareAcademicTerms)
}

export function getDerivedTermStatus(
  plannedTerm: Pick<PlannedTerm, 'term' | 'year'>,
  currentTerm: CurrentTerm,
): DerivedTermStatus {
  return compareAcademicTerms(plannedTerm, currentTerm) < 0 ? 'finished' : 'future'
}

export function isFinishedByDate(
  plannedTerm: Pick<PlannedTerm, 'term' | 'year'>,
  currentTerm: CurrentTerm,
): boolean {
  return getDerivedTermStatus(plannedTerm, currentTerm) === 'finished'
}

export function getNextAcademicTerm(currentTerm: CurrentTerm): CurrentTerm {
  if (currentTerm.term === 'Winter') {
    return { term: 'Spring', year: currentTerm.year }
  }

  if (currentTerm.term === 'Spring') {
    return { term: 'Fall', year: currentTerm.year }
  }

  return { term: 'Winter', year: currentTerm.year + 1 }
}

export function formatAcademicTerm(term: CurrentTerm): string {
  return `${term.term} ${term.year}`
}

export function getRecentAcademicTermOptions(
  currentTerm: CurrentTerm,
  yearCount = 5,
): CurrentTerm[] {
  const options: CurrentTerm[] = []
  const reverseTerms: Term[] = ['Fall', 'Spring', 'Winter']

  for (let year = currentTerm.year; year > currentTerm.year - yearCount; year -= 1) {
    reverseTerms.forEach((term) => {
      const option = { term, year }

      if (compareAcademicTerms(option, currentTerm) <= 0) {
        options.push(option)
      }
    })
  }

  return options
}

export function getCurrentAcademicTerm(date = new Date()): CurrentTerm {
  const month = date.getMonth() + 1

  if (month >= 1 && month <= 4) {
    return { term: 'Winter', year: date.getFullYear() }
  }

  if (month >= 5 && month <= 8) {
    return { term: 'Spring', year: date.getFullYear() }
  }

  return { term: 'Fall', year: date.getFullYear() }
}

export function findNextOfferedTerm(
  startTerm: CurrentTerm,
  termsOffered: Term[] | undefined,
): CurrentTerm {
  let cursor = startTerm

  for (let index = 0; index < 12; index += 1) {
    if (!termsOffered?.length || termsOffered.includes(cursor.term)) {
      return cursor
    }

    cursor = getNextAcademicTerm(cursor)
  }

  return startTerm
}
