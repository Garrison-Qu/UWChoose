export function normalizeCourseCode(value: string): string {
  return value.replace(/\s+/g, '').toUpperCase()
}

export function formatCourseCode(code: string): string {
  const normalized = normalizeCourseCode(code)
  const match = normalized.match(/^([A-Z]+)(\d+[A-Z]?)$/)

  if (!match) {
    return normalized
  }

  return `${match[1]} ${match[2]}`
}
