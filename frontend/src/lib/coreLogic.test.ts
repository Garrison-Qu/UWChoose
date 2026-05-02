import { describe, expect, it } from 'vitest'
import { courses } from '../data/courses'
import {
  buildCourseGraph,
  buildCourseFlowGraph,
  buildLocalCourseFlowGraph,
  buildPrerequisitePathGraph,
  getDirectPrerequisiteCourseCodes,
  getRecursiveDependentCodes,
  getRecursivePrerequisiteCodes,
} from './courseGraph'
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

    expect(reasons).toContain('Need one of CO 250, or CO 255.')
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

describe('course graph', () => {
  it('extracts direct prerequisite course codes from nested prerequisite groups', () => {
    expect(getDirectPrerequisiteCourseCodes(course('CO367').prerequisite)).toEqual([
      'CO250',
      'CO255',
      'MATH128',
      'MATH138',
      'MATH148',
    ])
  })

  it('builds graph edges from prerequisites to dependent courses', () => {
    const graph = buildCourseGraph(courses)

    expect(graph.edges).toContainEqual({
      id: 'CO250-CO367',
      source: 'CO250',
      target: 'CO367',
    })
    expect(graph.edges).toContainEqual({
      id: 'MATH138-CO367',
      source: 'MATH138',
      target: 'CO367',
    })
  })

  it('builds a focused prerequisite path graph for a target course', () => {
    const graph = buildPrerequisitePathGraph('PMATH450', courses)
    const graphCodes = graph.nodes.map((node) => node.code)

    expect(graphCodes).toContain('PMATH450')
    expect(graphCodes).toContain('PMATH351')
    expect(graphCodes).toContain('MATH138')
    expect(graphCodes).not.toContain('PMATH451')
  })

  it('builds a focused course flow graph with prerequisites and proceeding courses', () => {
    const graph = buildCourseFlowGraph('PMATH351', courses)
    const graphCodes = graph.nodes.map((node) => node.code)

    expect(graphCodes).toContain('MATH138')
    expect(graphCodes).toContain('PMATH351')
    expect(graphCodes).toContain('PMATH450')
    expect(graphCodes).toContain('PMATH451')
    expect(graphCodes).not.toContain('PMATH347')
  })

  it('builds a local course flow graph with prerequisite depth 2 and direct proceeding courses', () => {
    const graph = buildLocalCourseFlowGraph('MATH138', courses)
    const graphCodes = graph.nodes.map((node) => node.code)

    expect(graphCodes).toContain('MATH137')
    expect(graphCodes).toContain('MATH138')
    expect(graphCodes).toContain('PMATH351')
    expect(graphCodes).toContain('STAT230')
    expect(graphCodes).not.toContain('PMATH450')
    expect(graphCodes).not.toContain('STAT231')
    expect(graphCodes).not.toContain('STAT331')
    expect(graphCodes).not.toContain('MATH135')
  })

  it('does not show CO351 as leading to CO367 in the local graph', () => {
    const graph = buildLocalCourseFlowGraph('CO351', courses)

    expect(graph.edges).not.toContainEqual({
      id: 'CO351-CO367',
      source: 'CO351',
      target: 'CO367',
    })
    expect(graph.nodes.map((node) => node.code)).not.toContain('CO367')
  })

  it('finds recursive prerequisite courses for a selected course', () => {
    const prerequisiteCodes = getRecursivePrerequisiteCodes('PMATH450', courses)

    expect(prerequisiteCodes).toContain('PMATH351')
    expect(prerequisiteCodes).toContain('MATH138')
    expect(prerequisiteCodes).toContain('MATH137')
  })

  it('finds recursive dependent courses unlocked by a selected course', () => {
    const dependentCodes = getRecursiveDependentCodes('MATH138', courses)

    expect(dependentCodes).toContain('PMATH351')
    expect(dependentCodes).toContain('PMATH450')
    expect(dependentCodes).toContain('STAT331')
  })
})
