import { describe, expect, it } from 'vitest'
import {
  buildPrerequisitePathGraph,
  getCourseFlowPositions,
  getDirectDependentCodes,
  getGroupBoxPositions,
} from './courseGraph'
import type { Course } from '../types/course'

const graphCourses: Course[] = [
  {
    code: 'MATH100',
    name: 'Foundations',
    subject: 'MATH',
    level: 100,
  },
  {
    code: 'CS100',
    name: 'Intro Computing',
    subject: 'CS',
    level: 100,
    prerequisite: {
      type: 'course',
      courseCode: 'MATH100',
    },
  },
  {
    code: 'CS200',
    name: 'Data Structures',
    subject: 'CS',
    level: 200,
    prerequisite: {
      type: 'course',
      courseCode: 'CS100',
    },
  },
  {
    code: 'CS150',
    name: 'Many Dependents',
    subject: 'CS',
    level: 100,
  },
  {
    code: 'CS201',
    name: 'Follow Up 1',
    subject: 'CS',
    level: 200,
    prerequisite: {
      type: 'course',
      courseCode: 'CS150',
    },
  },
  {
    code: 'CS202',
    name: 'Follow Up 2',
    subject: 'CS',
    level: 200,
    prerequisite: {
      type: 'course',
      courseCode: 'CS150',
    },
  },
  {
    code: 'CS203',
    name: 'Follow Up 3',
    subject: 'CS',
    level: 200,
    prerequisite: {
      type: 'course',
      courseCode: 'CS150',
    },
  },
  {
    code: 'CS204',
    name: 'Follow Up 4',
    subject: 'CS',
    level: 200,
    prerequisite: {
      type: 'course',
      courseCode: 'CS150',
    },
  },
  {
    code: 'CS205',
    name: 'Follow Up 5',
    subject: 'CS',
    level: 200,
    prerequisite: {
      type: 'course',
      courseCode: 'CS150',
    },
  },
  {
    code: 'CS206',
    name: 'Follow Up 6',
    subject: 'CS',
    level: 200,
    prerequisite: {
      type: 'course',
      courseCode: 'CS150',
    },
  },
  {
    code: 'STAT250',
    name: 'Cross Subject Follow Up',
    subject: 'STAT',
    level: 200,
    prerequisite: {
      type: 'course',
      courseCode: 'CS150',
    },
  },
  {
    code: 'CS300',
    name: 'Systems',
    subject: 'CS',
    level: 300,
    prerequisite: {
      type: 'course',
      courseCode: 'CS200',
    },
  },
  {
    code: 'CS350',
    name: 'Operating Systems',
    subject: 'CS',
    level: 300,
  },
  {
    code: 'SE350',
    name: 'Software Engineering Operating Systems',
    subject: 'SE',
    level: 300,
  },
  {
    code: 'CS444',
    name: 'Compiler Construction',
    subject: 'CS',
    level: 400,
    prerequisite: {
      type: 'anyOf',
      requirements: [
        {
          type: 'course',
          courseCode: 'CS350',
        },
        {
          type: 'course',
          courseCode: 'SE350',
        },
      ],
    },
  },
  {
    code: 'CS455',
    name: 'Missing Prerequisite Target',
    subject: 'CS',
    level: 400,
    prerequisite: {
      type: 'anyOf',
      requirements: [
        {
          type: 'course',
          courseCode: 'CS350',
        },
        {
          type: 'course',
          courseCode: 'MISSING350',
        },
      ],
    },
  },
  {
    code: 'EXACT338',
    name: 'Nested Ten Prerequisite Target',
    subject: 'EXACT',
    level: 300,
    prerequisite: {
      type: 'anyOf',
      requirements: [
        {
          type: 'anyOf',
          requirements: [
            {
              type: 'course',
              courseCode: 'MATH100',
            },
            {
              type: 'course',
              courseCode: 'PHYS100',
            },
            {
              type: 'course',
              courseCode: 'CHEM100',
            },
            {
              type: 'course',
              courseCode: 'CS100',
            },
            {
              type: 'course',
              courseCode: 'CS200',
            },
            {
              type: 'course',
              courseCode: 'CS300',
            },
          ],
        },
        {
          type: 'allOf',
          requirements: [
            {
              type: 'course',
              courseCode: 'STAT200',
            },
            {
              type: 'anyOf',
              requirements: [
                {
                  type: 'course',
                  courseCode: 'CS350',
                },
                {
                  type: 'course',
                  courseCode: 'SE350',
                },
                {
                  type: 'course',
                  courseCode: 'CS450',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    code: 'CS360',
    name: 'Complete Prerequisite Follow Up',
    subject: 'CS',
    level: 300,
    prerequisite: {
      type: 'allOf',
      requirements: [
        {
          type: 'course',
          courseCode: 'CS100',
        },
        {
          type: 'course',
          courseCode: 'MATH100',
        },
      ],
    },
  },
  {
    code: 'CS450',
    name: 'Upper Year Systems',
    subject: 'CS',
    level: 400,
  },
  {
    code: 'CS451',
    name: 'Upper Year Follow Up 1',
    subject: 'CS',
    level: 400,
    prerequisite: {
      type: 'course',
      courseCode: 'CS450',
    },
  },
  {
    code: 'CS452',
    name: 'Upper Year Follow Up 2',
    subject: 'CS',
    level: 400,
    prerequisite: {
      type: 'course',
      courseCode: 'CS450',
    },
  },
  {
    code: 'STAT451',
    name: 'Cross Subject Upper Year Follow Up',
    subject: 'STAT',
    level: 400,
    prerequisite: {
      type: 'course',
      courseCode: 'CS450',
    },
  },
  {
    code: 'STAT200',
    name: 'Statistics',
    subject: 'STAT',
    level: 200,
    prerequisite: {
      type: 'course',
      courseCode: 'MATH100',
    },
  },
  {
    code: 'PHYS100',
    name: 'Mechanics',
    subject: 'PHYS',
    level: 100,
  },
  {
    code: 'CHEM100',
    name: 'Chemistry',
    subject: 'CHEM',
    level: 100,
  },
  {
    code: 'SMALL100',
    name: 'Small Second Level Root',
    subject: 'SMALL',
    level: 100,
  },
  {
    code: 'SMALL110',
    name: 'Small Direct Prerequisite',
    subject: 'SMALL',
    level: 100,
    prerequisite: {
      type: 'course',
      courseCode: 'SMALL100',
    },
  },
  {
    code: 'SMALL200',
    name: 'Small Second Level Target',
    subject: 'SMALL',
    level: 200,
    prerequisite: {
      type: 'course',
      courseCode: 'SMALL110',
    },
  },
  {
    code: 'LIMIT101',
    name: 'Limit Prerequisite 1',
    subject: 'LIMIT',
    level: 100,
  },
  {
    code: 'LIMIT102',
    name: 'Limit Prerequisite 2',
    subject: 'LIMIT',
    level: 100,
  },
  {
    code: 'LIMIT103',
    name: 'Limit Prerequisite 3',
    subject: 'LIMIT',
    level: 100,
  },
  {
    code: 'LIMIT104',
    name: 'Limit Prerequisite 4',
    subject: 'LIMIT',
    level: 100,
  },
  {
    code: 'LIMIT105',
    name: 'Limit Prerequisite 5',
    subject: 'LIMIT',
    level: 100,
  },
  {
    code: 'LIMIT200',
    name: 'Limit Direct Prerequisite',
    subject: 'LIMIT',
    level: 200,
    prerequisite: {
      type: 'allOf',
      requirements: [
        {
          type: 'course',
          courseCode: 'LIMIT101',
        },
        {
          type: 'course',
          courseCode: 'LIMIT102',
        },
        {
          type: 'course',
          courseCode: 'LIMIT103',
        },
        {
          type: 'course',
          courseCode: 'LIMIT104',
        },
        {
          type: 'course',
          courseCode: 'LIMIT105',
        },
      ],
    },
  },
  {
    code: 'LIMIT300',
    name: 'Limit Second Level Target',
    subject: 'LIMIT',
    level: 300,
    prerequisite: {
      type: 'course',
      courseCode: 'LIMIT200',
    },
  },
  {
    code: 'ALL200',
    name: 'All Required',
    subject: 'ALL',
    level: 200,
    prerequisite: {
      type: 'allOf',
      requirements: [
        {
          type: 'course',
          courseCode: 'MATH100',
        },
        {
          type: 'course',
          courseCode: 'PHYS100',
        },
      ],
    },
  },
  {
    code: 'ANY200',
    name: 'One Choice',
    subject: 'ANY',
    level: 200,
    prerequisite: {
      type: 'anyOf',
      requirements: [
        {
          type: 'course',
          courseCode: 'MATH100',
        },
        {
          type: 'course',
          courseCode: 'PHYS100',
        },
      ],
    },
  },
  {
    code: 'CHOOSE300',
    name: 'Choose Some',
    subject: 'CHOOSE',
    level: 300,
    prerequisite: {
      type: 'chooseN',
      requiredCount: 2,
      requirements: [
        {
          type: 'course',
          courseCode: 'MATH100',
        },
        {
          type: 'course',
          courseCode: 'PHYS100',
        },
        {
          type: 'course',
          courseCode: 'CHEM100',
        },
      ],
    },
  },
  {
    code: 'NESTED300',
    name: 'Nested Groups',
    subject: 'NESTED',
    level: 300,
    prerequisite: {
      type: 'allOf',
      requirements: [
        {
          type: 'course',
          courseCode: 'MATH100',
        },
        {
          type: 'course',
          courseCode: 'PHYS100',
        },
        {
          type: 'anyOf',
          requirements: [
            {
              type: 'course',
              courseCode: 'MATH100',
            },
            {
              type: 'course',
              courseCode: 'PHYS100',
            },
          ],
        },
      ],
    },
  },
  {
    code: 'SIBLING300',
    name: 'Sibling Groups',
    subject: 'SIBLING',
    level: 300,
    prerequisite: {
      type: 'allOf',
      requirements: [
        {
          type: 'anyOf',
          requirements: [
            {
              type: 'course',
              courseCode: 'MATH100',
            },
            {
              type: 'course',
              courseCode: 'PHYS100',
            },
          ],
        },
        {
          type: 'anyOf',
          requirements: [
            {
              type: 'course',
              courseCode: 'CHEM100',
            },
            {
              type: 'course',
              courseCode: 'STAT200',
            },
          ],
        },
      ],
    },
  },
  {
    code: 'LARGE101',
    name: 'Large Chain 1',
    subject: 'LARGE',
    level: 100,
  },
  {
    code: 'LARGE102',
    name: 'Large Chain 2',
    subject: 'LARGE',
    level: 100,
    prerequisite: {
      type: 'course',
      courseCode: 'LARGE101',
    },
  },
  {
    code: 'LARGE103',
    name: 'Large Chain 3',
    subject: 'LARGE',
    level: 100,
    prerequisite: {
      type: 'course',
      courseCode: 'LARGE102',
    },
  },
  {
    code: 'LARGE104',
    name: 'Large Chain 4',
    subject: 'LARGE',
    level: 100,
    prerequisite: {
      type: 'course',
      courseCode: 'LARGE103',
    },
  },
  {
    code: 'LARGE105',
    name: 'Large Chain 5',
    subject: 'LARGE',
    level: 100,
    prerequisite: {
      type: 'course',
      courseCode: 'LARGE104',
    },
  },
  {
    code: 'LARGE106',
    name: 'Large Chain 6',
    subject: 'LARGE',
    level: 100,
    prerequisite: {
      type: 'course',
      courseCode: 'LARGE105',
    },
  },
  {
    code: 'LARGE107',
    name: 'Large Chain 7',
    subject: 'LARGE',
    level: 100,
    prerequisite: {
      type: 'course',
      courseCode: 'LARGE106',
    },
  },
  {
    code: 'LARGE108',
    name: 'Large Chain 8',
    subject: 'LARGE',
    level: 100,
    prerequisite: {
      type: 'course',
      courseCode: 'LARGE107',
    },
  },
  {
    code: 'LARGE109',
    name: 'Large Chain 9',
    subject: 'LARGE',
    level: 100,
    prerequisite: {
      type: 'course',
      courseCode: 'LARGE108',
    },
  },
  {
    code: 'LARGE110',
    name: 'Large Chain 10',
    subject: 'LARGE',
    level: 100,
    prerequisite: {
      type: 'course',
      courseCode: 'LARGE109',
    },
  },
  {
    code: 'LARGE500',
    name: 'Large Tree Target',
    subject: 'LARGE',
    level: 500,
    prerequisite: {
      type: 'allOf',
      requirements: [
        {
          type: 'course',
          courseCode: 'LARGE110',
        },
        {
          type: 'course',
          courseCode: 'PHYS100',
        },
      ],
    },
  },
]

describe('course graph direct dependents', () => {
  it('finds courses that directly depend on a target course', () => {
    expect(getDirectDependentCodes('CS100', graphCourses)).toEqual(['CS200', 'EXACT338', 'CS360'])
  })

  it('shows direct prerequisites and one direct dependent level for the target course', () => {
    const graph = buildPrerequisitePathGraph('CS100', graphCourses)

    expect(graph.nodes.map((node) => node.code)).toEqual(['MATH100', 'CS100', 'CS200', 'CS360'])
    expect(graph.edges).toEqual([
      {
        id: 'MATH100-CS100',
        source: 'MATH100',
        target: 'CS100',
      },
      {
        id: 'CS100-CS200',
        source: 'CS100',
        target: 'CS200',
      },
      {
        id: 'CS100-CS360',
        source: 'CS100',
        target: 'CS360',
      },
    ])
    expect(graph.displayEdges).toEqual(graph.edges)
    expect(graph.groups).toEqual([])
  })

  it('shows direct dependents without expanding their other prerequisites', () => {
    const graph = buildPrerequisitePathGraph('CS350', graphCourses)

    expect(getDirectDependentCodes('CS350', graphCourses)).toEqual(['CS444', 'CS455', 'EXACT338'])
    expect(graph.nodes.map((node) => node.code)).toEqual(['CS350', 'CS444', 'CS455'])
    expect(graph.edges.map((edge) => edge.id)).toEqual(['CS350-CS444', 'CS350-CS455'])
    expect(graph.groups).toEqual([])
  })

  it('shows every direct prerequisite for the selected target course', () => {
    const graph = buildPrerequisitePathGraph('CS444', graphCourses)

    expect(graph.nodes.map((node) => node.code)).toEqual(['CS350', 'SE350', 'CS444'])
    expect(graph.edges.map((edge) => edge.id)).toEqual(['CS350-CS444', 'SE350-CS444'])
  })

  it('does not expand third-distance prerequisites for upper-year targets', () => {
    const graph = buildPrerequisitePathGraph('CS444', graphCourses)

    expect(graph.nodes.map((node) => node.code)).not.toContain('CS240')
    expect(graph.edges.map((edge) => edge.id)).not.toContain('CS240-CS350')
  })

  it('uses placeholder nodes to avoid partial prerequisites when a selected target references a missing course', () => {
    const graph = buildPrerequisitePathGraph('CS455', graphCourses)

    expect(graph.nodes).toContainEqual({
      code: 'MISSING350',
      isPlaceholder: true,
      label: 'MISSING350',
      level: 300,
      subject: 'MISSING',
    })
    expect(graph.nodes.map((node) => node.code)).toEqual(['CS350', 'CS455', 'MISSING350'])
    expect(graph.edges.map((edge) => edge.id)).toEqual(['CS350-CS455', 'MISSING350-CS455'])
  })

  it('creates nested choice groups for a target with exactly ten direct prerequisites', () => {
    const graph = buildPrerequisitePathGraph('EXACT338', graphCourses)

    expect(graph.edges.filter((edge) => edge.target === 'EXACT338')).toHaveLength(10)
    expect(graph.groups).toEqual([
      {
        id: 'group-EXACT338-0-0',
        courseCodes: ['MATH100', 'PHYS100', 'CHEM100', 'CS100', 'CS200', 'CS300'],
        label: 'One of',
        target: 'EXACT338',
        type: 'choice',
      },
      {
        id: 'group-EXACT338-0-1-1',
        courseCodes: ['CS350', 'SE350', 'CS450'],
        label: 'One of',
        target: 'EXACT338',
        type: 'choice',
      },
    ])
    expect(graph.displayEdges).toContainEqual({
      id: 'STAT200-EXACT338',
      source: 'STAT200',
      target: 'EXACT338',
    })
    expect(graph.displayEdges).toContainEqual({
      id: 'group-EXACT338-0-0-EXACT338',
      source: 'group-EXACT338-0-0',
      target: 'EXACT338',
    })
    expect(graph.displayEdges).toContainEqual({
      id: 'group-EXACT338-0-1-1-EXACT338',
      source: 'group-EXACT338-0-1-1',
      target: 'EXACT338',
    })
    expect(graph.displayEdges).not.toContainEqual({
      id: 'MATH100-EXACT338',
      source: 'MATH100',
      target: 'EXACT338',
    })
    expect(graph.nodes.map((node) => node.code)).not.toContain('MISSING350')
  })

  it('lays grouped prerequisite courses out as compact rectangles', () => {
    const graph = buildPrerequisitePathGraph('EXACT338', graphCourses)
    const positions = getCourseFlowPositions(graph, 'EXACT338')
    const sixCourseGroup = ['MATH100', 'PHYS100', 'CHEM100', 'CS100', 'CS200', 'CS300']
      .map((courseCode) => positions.get(courseCode))
      .filter((position): position is { x: number; y: number } => Boolean(position))
    const threeCourseGroup = ['CS350', 'SE350', 'CS450']
      .map((courseCode) => positions.get(courseCode))
      .filter((position): position is { x: number; y: number } => Boolean(position))

    expect(new Set(sixCourseGroup.map((position) => position.x)).size).toBe(3)
    expect(new Set(sixCourseGroup.map((position) => position.y)).size).toBe(2)
    expect(new Set(threeCourseGroup.map((position) => position.x)).size).toBe(2)
    expect(new Set(threeCourseGroup.map((position) => position.y)).size).toBe(2)
  })

  it('keeps connected prerequisites close inside grouped prerequisite boxes', () => {
    const mathCourses: Course[] = [
      {
        code: 'MATH104',
        name: 'Introductory Calculus',
        subject: 'MATH',
        level: 100,
      },
      {
        code: 'MATH116',
        name: 'Calculus 1 for Engineering',
        subject: 'MATH',
        level: 100,
      },
      {
        code: 'MATH117',
        name: 'Calculus 1 for Engineering',
        subject: 'MATH',
        level: 100,
      },
      {
        code: 'MATH127',
        name: 'Calculus 1 for the Sciences',
        subject: 'MATH',
        level: 100,
        prerequisite: {
          type: 'course',
          courseCode: 'MATH104',
        },
      },
      {
        code: 'MATH137',
        name: 'Calculus 1 for Honours Mathematics',
        subject: 'MATH',
        level: 100,
      },
      {
        code: 'MATH147',
        name: 'Calculus 1',
        subject: 'MATH',
        level: 100,
      },
      {
        code: 'MATH118',
        name: 'Calculus 2 for Engineering',
        subject: 'MATH',
        level: 100,
        prerequisite: {
          type: 'anyOf',
          requirements: [
            {
              type: 'course',
              courseCode: 'MATH116',
            },
            {
              type: 'course',
              courseCode: 'MATH117',
            },
            {
              type: 'course',
              courseCode: 'MATH127',
            },
            {
              type: 'course',
              courseCode: 'MATH137',
            },
            {
              type: 'course',
              courseCode: 'MATH147',
            },
          ],
        },
      },
    ]
    const graph = buildPrerequisitePathGraph('MATH118', mathCourses)
    const positions = getCourseFlowPositions(graph, 'MATH118')
    const group = graph.groups.find((item) => item.target === 'MATH118')
    const math127Position = positions.get('MATH127')
    const groupedPrerequisitePositions = ['MATH116', 'MATH117', 'MATH127', 'MATH137', 'MATH147']
      .map((courseCode) => positions.get(courseCode))
      .filter((position): position is { x: number; y: number } => Boolean(position))

    expect(group?.courseCodes).toContain('MATH127')
    expect(math127Position?.x).toBe(
      Math.min(...groupedPrerequisitePositions.map((position) => position.x)),
    )
  })

  it('sizes group boxes from compact rectangle positions', () => {
    const graph = buildPrerequisitePathGraph('EXACT338', graphCourses)
    const positions = getCourseFlowPositions(graph, 'EXACT338')
    const groupBoxes = getGroupBoxPositions(graph, positions, {
      courseNodeHeight: 74,
      courseNodeWidth: 152,
      groupLabelOffsetY: -8,
      groupPaddingX: 34,
      groupPaddingY: 32,
    })
    const sixCourseBox = groupBoxes.find((box) => box.group.id === 'group-EXACT338-0-0')
    const threeCourseBox = groupBoxes.find((box) => box.group.id === 'group-EXACT338-0-1-1')

    expect(sixCourseBox?.size.width).toBe(588)
    expect(sixCourseBox?.size.height).toBe(272)
    expect(threeCourseBox?.size.width).toBe(404)
    expect(threeCourseBox?.size.height).toBe(272)
  })

  it('keeps stacked group boxes separated vertically', () => {
    const graph = buildPrerequisitePathGraph('EXACT338', graphCourses)
    const positions = getCourseFlowPositions(graph, 'EXACT338')
    const groupBoxes = getGroupBoxPositions(graph, positions, {
      courseNodeHeight: 74,
      courseNodeWidth: 152,
      groupLabelOffsetY: -8,
      groupPaddingX: 34,
      groupPaddingY: 32,
    })
    const sortedBoxes = groupBoxes.sort((left, right) => left.position.y - right.position.y)
    const firstBoxBottom = sortedBoxes[0].position.y + sortedBoxes[0].size.height / 2
    const secondBoxTop = sortedBoxes[1].position.y - sortedBoxes[1].size.height / 2

    expect(secondBoxTop - firstBoxBottom).toBeGreaterThan(0)
  })

  it('keeps wide group boxes horizontally clear of the target course', () => {
    const graph = buildPrerequisitePathGraph('EXACT338', graphCourses)
    const positions = getCourseFlowPositions(graph, 'EXACT338')
    const targetPosition = positions.get('EXACT338')
    const groupBoxes = getGroupBoxPositions(graph, positions, {
      courseNodeHeight: 74,
      courseNodeWidth: 152,
      groupLabelOffsetY: -8,
      groupPaddingX: 34,
      groupPaddingY: 32,
    })
    const wideBox = groupBoxes.find((box) => box.group.id === 'group-EXACT338-0-0')

    expect(targetPosition).toBeDefined()
    expect(wideBox).toBeDefined()
    expect((wideBox?.position.x ?? 0) + (wideBox?.size.width ?? 0) / 2).toBeLessThan(
      (targetPosition?.x ?? 0) - 152 / 2,
    )
  })

  it('keeps multiple stacked prerequisite boxes from overlapping', () => {
    const graph = buildPrerequisitePathGraph('EXACT338', graphCourses)
    const positions = getCourseFlowPositions(graph, 'EXACT338')
    const groupBoxes = getGroupBoxPositions(graph, positions, {
      courseNodeHeight: 74,
      courseNodeWidth: 152,
      groupLabelOffsetY: -8,
      groupPaddingX: 34,
      groupPaddingY: 32,
    }).sort((left, right) => left.position.y - right.position.y)

    groupBoxes.slice(1).forEach((box, index) => {
      const previousBox = groupBoxes[index]
      const previousBottom = previousBox.position.y + previousBox.size.height / 2
      const currentTop = box.position.y - box.size.height / 2

      expect(currentTop).toBeGreaterThan(previousBottom)
    })
  })

  it('shows second-level prerequisites when the total unique second level is less than five courses', () => {
    const graph = buildPrerequisitePathGraph('SMALL200', graphCourses)

    expect(graph.nodes.map((node) => node.code)).toEqual(['SMALL100', 'SMALL110', 'SMALL200'])
    expect(graph.edges.map((edge) => edge.id)).toEqual(['SMALL100-SMALL110', 'SMALL110-SMALL200'])
  })

  it('omits second-level prerequisites when the total unique second level is at least five courses', () => {
    const graph = buildPrerequisitePathGraph('LIMIT300', graphCourses)

    expect(graph.nodes.map((node) => node.code)).toEqual(['LIMIT200', 'LIMIT300'])
    expect(graph.edges.map((edge) => edge.id)).toEqual(['LIMIT200-LIMIT300'])
  })

  it('limits large direct dependent sets to five matching subject courses', () => {
    const graph = buildPrerequisitePathGraph('CS150', graphCourses)

    expect(getDirectDependentCodes('CS150', graphCourses)).toEqual([
      'CS201',
      'CS202',
      'CS203',
      'CS204',
      'CS205',
      'CS206',
      'STAT250',
    ])
    expect(graph.nodes.map((node) => node.code)).toEqual([
      'CS150',
      'CS201',
      'CS202',
      'CS203',
      'CS204',
      'CS205',
    ])
    expect(graph.edges.map((edge) => edge.id)).toEqual([
      'CS150-CS201',
      'CS150-CS202',
      'CS150-CS203',
      'CS150-CS204',
      'CS150-CS205',
    ])
  })

  it('filters direct dependents to the same subject even below the display limit', () => {
    const graph = buildPrerequisitePathGraph('CS450', graphCourses)

    expect(getDirectDependentCodes('CS450', graphCourses)).toEqual([
      'EXACT338',
      'CS451',
      'CS452',
      'STAT451',
    ])
    expect(graph.nodes.map((node) => node.code)).toEqual(['CS450', 'CS451', 'CS452'])
    expect(graph.edges.map((edge) => edge.id)).toEqual(['CS450-CS451', 'CS450-CS452'])
  })

  it('creates one required group arrow for small all-of prerequisites', () => {
    const graph = buildPrerequisitePathGraph('ALL200', graphCourses)

    expect(graph.groups).toEqual([
      {
        id: 'group-ALL200-0',
        courseCodes: ['MATH100', 'PHYS100'],
        label: 'All required',
        target: 'ALL200',
        type: 'required',
      },
    ])
    expect(graph.displayEdges).toEqual([
      {
        id: 'group-ALL200-0-ALL200',
        source: 'group-ALL200-0',
        target: 'ALL200',
      },
    ])
  })

  it('creates one choice group arrow for small one-of prerequisites', () => {
    const graph = buildPrerequisitePathGraph('ANY200', graphCourses)

    expect(graph.groups).toEqual([
      {
        id: 'group-ANY200-0',
        courseCodes: ['MATH100', 'PHYS100'],
        label: 'One of',
        target: 'ANY200',
        type: 'choice',
      },
    ])
    expect(graph.displayEdges).toEqual([
      {
        id: 'group-ANY200-0-ANY200',
        source: 'group-ANY200-0',
        target: 'ANY200',
      },
    ])
  })

  it('creates one choice group arrow for small choose-N prerequisites', () => {
    const graph = buildPrerequisitePathGraph('CHOOSE300', graphCourses)

    expect(graph.groups).toEqual([
      {
        id: 'group-CHOOSE300-0',
        courseCodes: ['MATH100', 'PHYS100', 'CHEM100'],
        label: 'Choose 2 of',
        target: 'CHOOSE300',
        type: 'choice',
      },
    ])
    expect(graph.displayEdges).toEqual([
      {
        id: 'group-CHOOSE300-0-CHOOSE300',
        source: 'group-CHOOSE300-0',
        target: 'CHOOSE300',
      },
    ])
  })

  it('avoids nested group boxes in small prerequisite trees', () => {
    const graph = buildPrerequisitePathGraph('NESTED300', graphCourses)

    expect(graph.groups).toEqual([
      {
        id: 'group-NESTED300-0-2',
        courseCodes: ['MATH100', 'PHYS100'],
        label: 'One of',
        target: 'NESTED300',
        type: 'choice',
      },
    ])
    expect(graph.displayEdges).toEqual([
      {
        id: 'group-NESTED300-0-2-NESTED300',
        source: 'group-NESTED300-0-2',
        target: 'NESTED300',
      },
    ])
  })

  it('keeps sibling choice groups in small prerequisite trees', () => {
    const graph = buildPrerequisitePathGraph('SIBLING300', graphCourses)

    expect(graph.groups).toEqual([
      {
        id: 'group-SIBLING300-0-0',
        courseCodes: ['MATH100', 'PHYS100'],
        label: 'One of',
        target: 'SIBLING300',
        type: 'choice',
      },
      {
        id: 'group-SIBLING300-0-1',
        courseCodes: ['CHEM100', 'STAT200'],
        label: 'One of',
        target: 'SIBLING300',
        type: 'choice',
      },
    ])
    expect(graph.displayEdges).toEqual([
      {
        id: 'MATH100-STAT200',
        source: 'MATH100',
        target: 'STAT200',
      },
      {
        id: 'group-SIBLING300-0-0-SIBLING300',
        source: 'group-SIBLING300-0-0',
        target: 'SIBLING300',
      },
      {
        id: 'group-SIBLING300-0-1-SIBLING300',
        source: 'group-SIBLING300-0-1',
        target: 'SIBLING300',
      },
    ])
  })

  it('does not show third-level courses in a long prerequisite chain', () => {
    const graph = buildPrerequisitePathGraph('LARGE500', graphCourses)

    expect(graph.nodes.map((node) => node.code)).toEqual([
      'PHYS100',
      'LARGE109',
      'LARGE110',
      'LARGE500',
    ])
    expect(graph.edges).toContainEqual({
      id: 'LARGE109-LARGE110',
      source: 'LARGE109',
      target: 'LARGE110',
    })
    expect(graph.edges).toContainEqual({
      id: 'LARGE110-LARGE500',
      source: 'LARGE110',
      target: 'LARGE500',
    })
    expect(graph.edges).toContainEqual({
      id: 'PHYS100-LARGE500',
      source: 'PHYS100',
      target: 'LARGE500',
    })
    expect(graph.nodes.map((node) => node.code)).not.toContain('LARGE108')
  })
})
