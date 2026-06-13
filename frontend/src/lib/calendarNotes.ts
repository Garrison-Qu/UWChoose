const requirementBreakPatterns = [
  /Complete all of the following/,
  /Complete \d+ of the following/,
  /Must have completed at least \d+ of the following:/,
  /Must have completed the following:/,
  /Earned a minimum grade of \d+% in at least \d+ of the following:/,
  /Earned a minimum grade of \d+% in each of the following:/,
  /Earned at least [\d.]+ units? from/,
  /Enrolled in/,
  /Students must/,
  /Not completed nor concurrently enrolled in any of the following:/,
  /Not completed nor concurrently enrolled in:/,
  /Not completed any of the following:/,
  /Not open to/,
]

const requirementBreakPattern = new RegExp(
  `(?=${requirementBreakPatterns.map((pattern) => pattern.source).join('|')})`,
  'g',
)

export function formatCalendarRequirementNotes(value: string | undefined): string[] {
  if (!value) {
    return []
  }

  const normalized = value
    .replace(/\s+/g, ' ')
    .replace(/(:) (?=[A-Z]{2,8}\s*\d{2,3}[A-Z]?\b)/g, '$1\n')
    .replace(/(\(\d+\.\d+\))(?=[A-Z]{2,8}\s*\d{2,3}[A-Z]?\b)/g, '$1\n')
    .replace(requirementBreakPattern, '\n')
    .trim()

  if (!normalized) {
    return []
  }

  const notes = normalized
    .split('\n')
    .map((note) => note.trim())
    .filter(Boolean)

  return notes.length > 0 ? notes : [normalized]
}
