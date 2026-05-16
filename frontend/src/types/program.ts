export type Program = {
  id: string
  name: string
  degreeIds?: string[]
  category?: 'major' | 'joint' | 'minor' | 'degree-requirement'
  requirements: ProgramRequirement[]
}

export type ProgramRequirement = {
  id: string
  name: string
  type: 'allOf' | 'chooseN'
  category?: 'core' | 'communication' | 'elective' | 'program'
  courses: string[]
  requiredCount?: number
}

export type Degree = {
  id: string
  name: string
  requirementIds?: string[]
}
