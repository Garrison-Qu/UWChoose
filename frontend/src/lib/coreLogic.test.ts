import { describe, expect, it } from 'vitest'
import { courses } from '../data/courses'
import { getCourseAvailability } from './courseAvailability'
import { buildFastestPathToCourse, buildPathExplanationToCourse } from './pathPlanner'
import { getPlannedTermWarnings } from './plannerWarnings'
import { getBlockedReasons, satisfiesPrerequisite } from './prerequisites'
import { getEffectiveCompletedCourses } from './studentRecords'
import { getDerivedTermStatus, sortPlannedTerms } from './terms'
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

  it('allows a course when a prerequisite override exists', () => {
    const availability = getCourseAvailability(course('CO367'), [], ['co 367'])

    expect(availability.canTake).toBe(true)
    expect(availability.hasPrerequisiteOverride).toBe(true)
    expect(availability.reasons).toEqual([])
  })

  it('does not let a prerequisite override bypass antirequisite credit conflicts', () => {
    const availability = getCourseAvailability(course('MATH137'), [{ courseCode: 'MATH147' }], [
      'MATH137',
    ])

    expect(availability.canTake).toBe(false)
    expect(availability.reasons).toContain('Credit is already covered by antirequisite MATH 147.')
  })
})

describe('student records and terms', () => {
  const currentTerm = { term: 'Winter', year: 2027 } as const
  const plannedTerms: PlannedTerm[] = [
    {
      id: 'future',
      term: 'Spring',
      year: 2027,
      courseCodes: ['CO250'],
    },
    {
      id: 'finished',
      term: 'Fall',
      year: 2026,
      courseCodes: ['MATH147'],
    },
  ]

  it('counts planner terms before the current term as completed', () => {
    const effectiveCompletedCourses = getEffectiveCompletedCourses([], plannedTerms, currentTerm)

    expect(effectiveCompletedCourses.map((item) => item.courseCode)).toContain('MATH147')
  })

  it('does not count current or future planner terms as completed yet', () => {
    const effectiveCompletedCourses = getEffectiveCompletedCourses([], plannedTerms, currentTerm)

    expect(effectiveCompletedCourses.map((item) => item.courseCode)).not.toContain('CO250')
  })

  it('derives term status from the current date term', () => {
    expect(getDerivedTermStatus(plannedTerms[0], currentTerm)).toBe('future')
    expect(getDerivedTermStatus(plannedTerms[1], currentTerm)).toBe('finished')
  })

  it('sorts terms in academic time order', () => {
    expect(sortPlannedTerms(plannedTerms).map((item) => item.id)).toEqual(['finished', 'future'])
  })

  it('suppresses planner prerequisite warnings with a course override', () => {
    const plannedTerm: PlannedTerm = {
      id: 'co367',
      term: 'Spring',
      year: 2027,
      courseCodes: ['CO367'],
    }
    const warnings = getPlannedTermWarnings(plannedTerm, [plannedTerm], [], courses, ['CO367'])

    expect(warnings.courseWarnings[0].warnings).not.toContain(
      'Missing prerequisite before this term: Need one of CO 250, or CO 255, or CO 352.',
    )
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
