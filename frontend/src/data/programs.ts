import type { Program } from '../types/program'

export const programs: Program[] = [
  {
    id: 'pure-math',
    name: 'Pure Mathematics Plan',
    requirements: [
      {
        id: 'math-foundation',
        name: 'Math foundation',
        type: 'allOf',
        courses: ['MATH135', 'MATH136', 'MATH137', 'MATH138'],
      },
      {
        id: 'advanced-first-year',
        name: 'Advanced first-year alternatives',
        type: 'chooseN',
        courses: ['MATH145', 'MATH146', 'MATH147', 'MATH148'],
        requiredCount: 2,
      },
      {
        id: 'computing-foundation',
        name: 'Computing foundation',
        type: 'chooseN',
        courses: ['CS135', 'CS136', 'CS145'],
        requiredCount: 1,
      },
      {
        id: 'analysis-sequence',
        name: 'Analysis sequence',
        type: 'chooseN',
        courses: ['PMATH351', 'PMATH352', 'PMATH450', 'PMATH451', 'PMATH453'],
        requiredCount: 3,
      },
      {
        id: 'algebra-sequence',
        name: 'Algebra sequence',
        type: 'chooseN',
        courses: ['PMATH347', 'PMATH348'],
        requiredCount: 2,
      },
      {
        id: 'math-electives',
        name: 'Upper-year math electives',
        type: 'chooseN',
        courses: ['PMATH365', 'CO330', 'CO342', 'CO351', 'CO352', 'CO367', 'CO370', 'CO380'],
        requiredCount: 2,
      },
    ],
  },
]
