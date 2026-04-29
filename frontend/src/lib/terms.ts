import type { CurrentTerm, PlannedTerm } from '../types/student'
import type { Term } from '../types/course'

export const terms = ['Fall', 'Winter', 'Spring'] as const

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
