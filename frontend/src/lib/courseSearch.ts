import { formatCourseCode, normalizeCourseCode } from './courseCodes'
import type { Course } from '../types/course'

export function getCoursePickerLabel(course: Pick<Course, 'code' | 'name'>) {
  return `${formatCourseCode(course.code)} - ${course.name}`
}

function getCourseCodeParts(code: string) {
  const match = normalizeCourseCode(code).match(/^([A-Z]+)(\d+[A-Z]?)$/)

  return {
    normalizedCode: normalizeCourseCode(code),
    subject: match?.[1] ?? '',
    number: match?.[2] ?? '',
  }
}

function getCourseSearchScore(course: Course, normalizedQuery: string) {
  if (normalizedQuery === '') {
    return 0
  }

  const { normalizedCode, subject, number } = getCourseCodeParts(course.code)
  const normalizedName = normalizeCourseCode(course.name)
  const normalizedWords = course.name.split(/\s+/).map(normalizeCourseCode)

  if (normalizedCode === normalizedQuery) {
    return 1
  }

  if (subject && number && normalizedQuery.startsWith(subject)) {
    const queryNumber = normalizedQuery.slice(subject.length)

    if (queryNumber && number.startsWith(queryNumber)) {
      return 2
    }
  }

  if (subject === normalizedQuery) {
    return 3
  }

  if (normalizedCode.startsWith(normalizedQuery)) {
    return 4
  }

  if (number.startsWith(normalizedQuery)) {
    return 5
  }

  if (normalizedWords.some((word) => word.startsWith(normalizedQuery))) {
    return 6
  }

  if (`${normalizedCode}${normalizedName}`.includes(normalizedQuery)) {
    return 7
  }

  return undefined
}

export function filterCourseOptions(courses: Course[], query: string, limit = 8) {
  const normalizedQuery = normalizeCourseCode(query)

  return courses
    .map((course, index) => ({
      course,
      index,
      score: getCourseSearchScore(course, normalizedQuery),
    }))
    .filter((item) => item.score !== undefined)
    .sort((left, right) => {
      const scoreDifference = (left.score ?? 0) - (right.score ?? 0)

      if (scoreDifference !== 0) {
        return scoreDifference
      }

      return left.index - right.index
    })
    .map((item) => item.course)
    .slice(0, limit)
}
