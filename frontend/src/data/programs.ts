import type { Degree, Program } from '../types/program'

export const degrees: Degree[] = [
  {
    id: 'bmath',
    name: 'Bachelor of Mathematics',
    requirementIds: ['communication'],
  },
  {
    id: 'bcs',
    name: 'Bachelor of Computer Science',
    requirementIds: ['communication'],
  },
]

export const programs: Program[] = [
  {
    id: 'pure-math',
    name: 'Pure Mathematics Plan',
    degreeIds: ['bmath'],
    category: 'major',
    requirements: [
      {
        id: 'math-foundation',
        name: 'Math foundation',
        type: 'allOf',
        category: 'core',
        courses: ['MATH135', 'MATH136', 'MATH137', 'MATH138'],
      },
      {
        id: 'advanced-first-year',
        name: 'Advanced first-year alternatives',
        type: 'chooseN',
        category: 'core',
        courses: ['MATH145', 'MATH146', 'MATH147', 'MATH148'],
        requiredCount: 2,
      },
      {
        id: 'computing-foundation',
        name: 'Computing foundation',
        type: 'chooseN',
        category: 'core',
        courses: ['CS135', 'CS136', 'CS145'],
        requiredCount: 1,
      },
      {
        id: 'analysis-sequence',
        name: 'Analysis sequence',
        type: 'chooseN',
        category: 'program',
        courses: ['PMATH351', 'PMATH352', 'PMATH450', 'PMATH451', 'PMATH453'],
        requiredCount: 3,
      },
      {
        id: 'algebra-sequence',
        name: 'Algebra sequence',
        type: 'chooseN',
        category: 'program',
        courses: ['PMATH347', 'PMATH348'],
        requiredCount: 2,
      },
      {
        id: 'math-electives',
        name: 'Upper-year math electives',
        type: 'chooseN',
        category: 'elective',
        courses: ['PMATH365', 'CO330', 'CO342', 'CO351', 'CO367', 'CO370', 'CO380'],
        requiredCount: 2,
      },
      {
        id: 'communication',
        name: 'Communication course options',
        type: 'chooseN',
        category: 'communication',
        courses: ['ENGL109', 'ENGL119', 'SPCOM223'],
        requiredCount: 1,
      },
    ],
  },
  {
    id: 'combinatorics-optimization-minor',
    name: 'Combinatorics and Optimization Minor',
    degreeIds: ['bmath', 'bcs'],
    category: 'minor',
    requirements: [
      {
        id: 'co-minor-core',
        name: 'CO minor core options',
        type: 'chooseN',
        category: 'program',
        courses: ['CO250', 'CO255', 'CO330', 'CO342', 'CO351', 'CO367'],
        requiredCount: 3,
      },
    ],
  },
]
