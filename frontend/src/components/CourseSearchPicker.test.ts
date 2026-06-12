import { describe, expect, it } from 'vitest'
import { filterCourseOptions } from '../lib/courseSearch'
import type { Course } from '../types/course'

const testCourses: Course[] = [
  {
    code: 'ACTSC231',
    name: 'Introductory Financial Mathematics',
    subject: 'ACTSC',
    level: 200,
  },
  {
    code: 'CS135',
    name: 'Designing Functional Programs',
    subject: 'CS',
    level: 100,
  },
  {
    code: 'CS136',
    name: 'Elementary Algorithm Design and Data Abstraction',
    subject: 'CS',
    level: 100,
  },
  {
    code: 'MATH135',
    name: 'Algebra for Honours Mathematics',
    subject: 'MATH',
    level: 100,
  },
  {
    code: 'HIST135',
    name: 'Computer Society',
    subject: 'HIST',
    level: 100,
  },
]

function codesFor(query: string) {
  return filterCourseOptions(testCourses, query).map((course) => course.code)
}

describe('filterCourseOptions', () => {
  it('ranks exact subject matches before substring matches in longer subjects', () => {
    const codes = codesFor('CS')

    expect(codes.slice(0, 2)).toEqual(['CS135', 'CS136'])
    expect(codes.indexOf('ACTSC231')).toBeGreaterThan(codes.indexOf('CS136'))
  })

  it('ranks subject and number prefix matches before unrelated substring matches', () => {
    expect(codesFor('CS 13').slice(0, 2)).toEqual(['CS135', 'CS136'])
    expect(codesFor('CS13').slice(0, 2)).toEqual(['CS135', 'CS136'])
  })

  it('finds courses by course number prefix', () => {
    expect(codesFor('135')).toEqual(['CS135', 'MATH135', 'HIST135'])
  })
})
