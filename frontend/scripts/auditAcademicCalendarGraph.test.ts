import { describe, expect, it } from 'vitest'
import { buildPrerequisitePathGraph, getDirectDependentCodes } from '../src/lib/courseGraph'
import type { Course } from '../src/types/course'
import { parseAcademicCalendarPrerequisiteHtml } from './auditAcademicCalendarGraph'

function courseLink(code: string, name = code) {
  return `<li><span><a href="#/courses/view/${code.toLowerCase()}" target="_blank">${code}</a> - ${name} <span>(0.50)</span></span></li>`
}

function courseRule(id: string, text: string, codes: string[]) {
  return `<li data-test="ruleView-${id}"><div data-test="ruleView-${id}-result">${text}<div><ul>${codes
    .map((code) => courseLink(code))
    .join('')}</ul></div></div></li>`
}

function nonCourseRule(id: string, text: string) {
  return `<li data-test="ruleView-${id}"><div data-test="ruleView-${id}-result">${text}</div></li>`
}

function completeGroup(label: string, children: string) {
  return `<li><span>${label}</span><ul>${children}</ul></li>`
}

const cs338Html = `<div><div><div><ul>${completeGroup(
  'Complete 1 of the following',
  [
    courseRule('A', 'Must have completed at least <span>1</span> of the following:', [
      'CS230',
      'CS231',
      'CS234',
      'CS246',
      'CS246E',
      'CS330',
    ]),
    completeGroup(
      'Complete all of the following',
      [
        courseRule('B', 'Must have completed the following:', ['AFM341']),
        courseRule('C', 'Must have completed at least <span>1</span> of the following:', [
          'CS116',
          'CS136',
          'CS146',
        ]),
      ].join(''),
    ),
  ].join(''),
)}</ul></div></div></div>`

const cs350Html = `<div><div><div><ul>${completeGroup(
  'Complete all of the following',
  [
    courseRule('A', 'Must have completed at least <span>1</span> of the following:', [
      'CS240',
      'CS240E',
    ]),
    courseRule('B', 'Must have completed at least <span>1</span> of the following:', [
      'CS241',
      'CS241E',
    ]),
    courseRule('C', 'Must have completed at least <span>1</span> of the following:', [
      'CS246',
      'CS246E',
    ]),
    courseRule('D', 'Must have completed at least <span>1</span> of the following:', [
      'CS251',
      'CS251E',
      'ECE222',
    ]),
    nonCourseRule('E', 'Enrolled in H-Computer Science'),
  ].join(''),
)}</ul></div></div></div>`

const cs444Html = `<div><div><div><ul>${completeGroup(
  'Complete all of the following',
  [
    courseRule('A', 'Must have completed at least <span>1</span> of the following:', [
      'CS350',
      'SE350',
    ]),
    nonCourseRule('B', 'Enrolled in H-Computer Science'),
  ].join(''),
)}</ul></div></div></div>`

function makeCourse(code: string, prerequisiteHtml?: string): Course {
  return {
    code,
    level: Number(code.match(/\d/)?.[0] ?? 0) * 100,
    name: code,
    prerequisite: parseAcademicCalendarPrerequisiteHtml(prerequisiteHtml).prerequisite,
    subject: code.match(/^[A-Z]+/)?.[0] ?? code,
  }
}

describe('academic calendar graph audit parser', () => {
  it('parses CS338-style nested one-of groups', () => {
    const parsed = parseAcademicCalendarPrerequisiteHtml(cs338Html)

    expect(parsed.nonCourseConditionCount).toBe(0)
    expect(parsed.prerequisite).toEqual({
      type: 'anyOf',
      requirements: [
        {
          type: 'anyOf',
          requirements: [
            { type: 'course', courseCode: 'CS230' },
            { type: 'course', courseCode: 'CS231' },
            { type: 'course', courseCode: 'CS234' },
            { type: 'course', courseCode: 'CS246' },
            { type: 'course', courseCode: 'CS246E' },
            { type: 'course', courseCode: 'CS330' },
          ],
        },
        {
          type: 'allOf',
          requirements: [
            { type: 'course', courseCode: 'AFM341' },
            {
              type: 'anyOf',
              requirements: [
                { type: 'course', courseCode: 'CS116' },
                { type: 'course', courseCode: 'CS136' },
                { type: 'course', courseCode: 'CS146' },
              ],
            },
          ],
        },
      ],
    })
  })

  it('parses CS350-style all-required groups and counts non-course conditions', () => {
    const parsed = parseAcademicCalendarPrerequisiteHtml(cs350Html)

    expect(parsed.nonCourseConditionCount).toBe(1)
    expect(parsed.prerequisite).toEqual({
      type: 'allOf',
      requirements: [
        {
          type: 'anyOf',
          requirements: [
            { type: 'course', courseCode: 'CS240' },
            { type: 'course', courseCode: 'CS240E' },
          ],
        },
        {
          type: 'anyOf',
          requirements: [
            { type: 'course', courseCode: 'CS241' },
            { type: 'course', courseCode: 'CS241E' },
          ],
        },
        {
          type: 'anyOf',
          requirements: [
            { type: 'course', courseCode: 'CS246' },
            { type: 'course', courseCode: 'CS246E' },
          ],
        },
        {
          type: 'anyOf',
          requirements: [
            { type: 'course', courseCode: 'CS251' },
            { type: 'course', courseCode: 'CS251E' },
            { type: 'course', courseCode: 'ECE222' },
          ],
        },
      ],
    })
  })

  it('parses CS444-style one-of prerequisites while ignoring program conditions', () => {
    const parsed = parseAcademicCalendarPrerequisiteHtml(cs444Html)

    expect(parsed.nonCourseConditionCount).toBe(1)
    expect(parsed.prerequisite).toEqual({
      type: 'anyOf',
      requirements: [
        { type: 'course', courseCode: 'CS350' },
        { type: 'course', courseCode: 'SE350' },
      ],
    })
  })
})

describe('academic calendar graph audit behavior', () => {
  it('reverses source prerequisites into direct dependents', () => {
    const courses = [
      makeCourse('CS350'),
      makeCourse('SE350'),
      makeCourse('CS444', cs444Html),
    ]

    expect(getDirectDependentCodes('CS350', courses)).toEqual(['CS444'])
  })

  it('creates CS338-style visible group boxes from parsed source prerequisites', () => {
    const courses = [
      makeCourse('CS338', cs338Html),
      makeCourse('CS230'),
      makeCourse('CS231'),
      makeCourse('CS234'),
      makeCourse('CS246'),
      makeCourse('CS246E'),
      makeCourse('CS330'),
      makeCourse('AFM341'),
      makeCourse('CS116'),
      makeCourse('CS136'),
      makeCourse('CS146'),
    ]
    const graph = buildPrerequisitePathGraph('CS338', courses)

    expect(graph.groups).toEqual([
      {
        courseCodes: ['CS230', 'CS231', 'CS234', 'CS246', 'CS246E', 'CS330'],
        id: 'group-CS338-0-0',
        label: 'One of',
        target: 'CS338',
        type: 'choice',
      },
      {
        courseCodes: ['CS116', 'CS136', 'CS146'],
        id: 'group-CS338-0-1-1',
        label: 'One of',
        target: 'CS338',
        type: 'choice',
      },
    ])
  })

  it('replaces grouped direct arrows with group display edges only', () => {
    const courses = [
      makeCourse('CS338', cs338Html),
      makeCourse('CS230'),
      makeCourse('CS231'),
      makeCourse('CS234'),
      makeCourse('CS246'),
      makeCourse('CS246E'),
      makeCourse('CS330'),
      makeCourse('AFM341'),
      makeCourse('CS116'),
      makeCourse('CS136'),
      makeCourse('CS146'),
    ]
    const graph = buildPrerequisitePathGraph('CS338', courses)

    expect(graph.displayEdges).toContainEqual({
      id: 'AFM341-CS338',
      source: 'AFM341',
      target: 'CS338',
    })
    expect(graph.displayEdges).toContainEqual({
      id: 'group-CS338-0-0-CS338',
      source: 'group-CS338-0-0',
      target: 'CS338',
    })
    expect(graph.displayEdges).not.toContainEqual({
      id: 'CS230-CS338',
      source: 'CS230',
      target: 'CS338',
    })
  })
})
