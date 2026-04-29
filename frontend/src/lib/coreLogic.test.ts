import { describe, expect, it } from 'vitest'
import { courses } from '../data/courses'
import { getCourseAvailability } from './courseAvailability'
import { buildFastestPathToCourse, buildPathExplanationToCourse } from './pathPlanner'
import { getBlockedReasons, satisfiesPrerequisite } from './prerequisites'
import { getEffectiveCompletedCourses } from './studentRecords'
import { sortPlannedTerms } from './terms'
import type { CompletedCourse, PlannedTerm } from '../types/student'

function course(code: string) {
  const foundCourse = courses.find((item) => item.code === code)

  if (!foundCourse) {
    throw new Error(`Missing test course ${code}`)
  }

  return foundCourse
}

describe('course code and prerequisite logic', () => {
  it('blocks MATH137 when MATH147 credit is already completed', () => {
    const availability = getCourseAvailability(course('MATH137'), [{ courseCode: 'math 147' }])

    expect(availability.canTake).toBe(false)
    expect(availability.reasons).toContain('Credit is already covered by antirequisite MATH 147.')
  })

  it('blocks CO367 when the CO prerequisite group is missing', () => {
    const reasons = getBlockedReasons(course('CO367'), [{ courseCode: 'MATH138' }])

    expect(reasons).toContain('Need one of CO 250, or CO 255, or CO 352.')
  })

  it('allows CO367 when CO250 and MATH138 are completed', () => {
    const completedCourses: CompletedCourse[] = [
      { courseCode: 'CO250' },
      { courseCode: 'MATH138' },
    ]

    expect(satisfiesPrerequisite(course('CO367').prerequisite, completedCourses)).toBe(true)
    expect(getCourseAvailability(course('CO367'), completedCourses).canTake).toBe(true)
  })

  it('does not show an already completed course as available', () => {
    const availability = getCourseAvailability(course('CS135'), [{ courseCode: 'CS 135' }])

    expect(availability.canTake).toBe(false)
    expect(availability.reasons[0]).toContain('already in your completed')
  })
})

describe('student records and terms', () => {
  const plannedTerms: PlannedTerm[] = [
    {
      id: 'future',
      term: 'Winter',
      year: 2027,
      status: 'future',
      courseCodes: ['CO250'],
    },
    {
      id: 'finished',
      term: 'Fall',
      year: 2026,
      status: 'finished',
      courseCodes: ['MATH147'],
    },
  ]

  it('counts finished planner terms as completed', () => {
    const effectiveCompletedCourses = getEffectiveCompletedCourses([], plannedTerms)

    expect(effectiveCompletedCourses.map((item) => item.courseCode)).toContain('MATH147')
  })

  it('does not count future planner terms as completed yet', () => {
    const effectiveCompletedCourses = getEffectiveCompletedCourses([], plannedTerms)

    expect(effectiveCompletedCourses.map((item) => item.courseCode)).not.toContain('CO250')
  })

  it('sorts terms in academic time order', () => {
    expect(sortPlannedTerms(plannedTerms).map((item) => item.id)).toEqual(['finished', 'future'])
  })
})

describe('path planning', () => {
  it('suggests a prerequisite path for CO367', () => {
    const explanation = buildPathExplanationToCourse(course('CO367'), courses, [], {
      term: 'Fall',
      year: 2026,
    })

    expect(explanation.status).toBe('path')

    if (explanation.status === 'path') {
      expect(explanation.steps).toHaveLength(2)
      expect(explanation.steps[0].options.map((option) => option.courseCode)).toEqual([
        'CO250',
        'CO255',
        'CO352',
      ])
      expect(explanation.finalCourseCode).toBe('CO367')
    }
  })

  it('includes CO367 in the fastest scheduled chain', () => {
    const scheduledPath = buildFastestPathToCourse(course('CO367'), courses, [], {
      term: 'Fall',
      year: 2026,
    })

    expect(scheduledPath.flatMap((step) => step.courseCodes)).toContain('CO367')
  })
})
