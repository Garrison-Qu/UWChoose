import type { Program } from '../types/program'

export const programs: Program[] = [
  {
    id: 'math-core',
    name: 'Sample Honours Mathematics Core',
    requirements: [
      {
        id: 'first-year-math',
        name: 'First-year mathematics',
        type: 'allOf',
        courses: ['MATH135', 'MATH136', 'MATH137', 'MATH138'],
      },
      {
        id: 'first-year-cs',
        name: 'Programming foundation',
        type: 'chooseN',
        courses: ['CS135', 'CS136'],
        requiredCount: 1,
      },
      {
        id: 'stats-core',
        name: 'Statistics foundation',
        type: 'allOf',
        courses: ['STAT230', 'STAT231'],
      },
      {
        id: 'upper-year-math',
        name: 'Upper-year math options',
        type: 'chooseN',
        courses: ['CO250', 'PMATH347', 'PMATH351', 'STAT330'],
        requiredCount: 2,
      },
    ],
  },
]
