import { describe, expect, it } from 'vitest'
import { formatCalendarRequirementNotes } from './calendarNotes'

describe('calendar requirement notes', () => {
  it('splits MATH118-style prerequisite text into readable notes', () => {
    expect(
      formatCalendarRequirementNotes(
        'Complete all of the followingMust have completed at least 1 of the following: MATH116 - Calculus 1 for Engineering (0.50)MATH117 - Calculus 1 for Engineering (0.50)MATH127 - Calculus 1 for the Sciences (0.50)Enrolled in H-Architectural Engineering, H-Biomedical Engineering, or H-Chemical Engineering',
      ),
    ).toEqual([
      'Complete all of the following',
      'Must have completed at least 1 of the following:',
      'MATH116 - Calculus 1 for Engineering (0.50)',
      'MATH117 - Calculus 1 for Engineering (0.50)',
      'MATH127 - Calculus 1 for the Sciences (0.50)',
      'Enrolled in H-Architectural Engineering, H-Biomedical Engineering, or H-Chemical Engineering',
    ])
  })

  it('splits nested CO367-style prerequisite text around course and grade rules', () => {
    expect(
      formatCalendarRequirementNotes(
        'Complete all of the followingMust have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50)CO255 - Introduction to Optimization (Advanced Level) (0.50)Complete 1 of the followingMust have completed at least 1 of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50)MATH148 - Calculus 2 (Advanced Level) (0.50)Earned a minimum grade of 70% in each of the following: MATH128 - Calculus 2 for the Sciences (0.50)',
      ),
    ).toEqual([
      'Complete all of the following',
      'Must have completed at least 1 of the following:',
      'CO250 - Introduction to Optimization (0.50)',
      'CO255 - Introduction to Optimization (Advanced Level) (0.50)',
      'Complete 1 of the following',
      'Must have completed at least 1 of the following:',
      'MATH138 - Calculus 2 for Honours Mathematics (0.50)',
      'MATH148 - Calculus 2 (Advanced Level) (0.50)',
      'Earned a minimum grade of 70% in each of the following:',
      'MATH128 - Calculus 2 for the Sciences (0.50)',
    ])
  })

  it('splits antirequisite text with not-open rules', () => {
    expect(
      formatCalendarRequirementNotes(
        'Complete all of the followingNot completed nor concurrently enrolled in any of the following: MATH119 - Calculus 2 for Engineering (0.50)MATH128 - Calculus 2 for the Sciences (0.50)Not open to students enrolled in H-Computer Engineering, H-Electrical Engineering, or H-Software Engineering',
      ),
    ).toEqual([
      'Complete all of the following',
      'Not completed nor concurrently enrolled in any of the following:',
      'MATH119 - Calculus 2 for Engineering (0.50)',
      'MATH128 - Calculus 2 for the Sciences (0.50)',
      'Not open to students enrolled in H-Computer Engineering, H-Electrical Engineering, or H-Software Engineering',
    ])
  })

  it('returns no notes for empty text and falls back to a single normalized note', () => {
    expect(formatCalendarRequirementNotes(undefined)).toEqual([])
    expect(formatCalendarRequirementNotes('  Instructor consent required.  ')).toEqual([
      'Instructor consent required.',
    ])
  })
})
