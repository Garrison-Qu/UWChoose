export type Program = {
  id: string
  name: string
  degreeIds?: string[]
  category?: ProgramCategory
  code?: string
  credentialType?: string
  faculty?: string
  sourcePid?: string
  sourceId?: string
  sourceUrl?: string
  parentProgramCodes?: string[]
  requirements: ProgramRequirement[]
}

export type ProgramCategory =
  | 'major'
  | 'joint'
  | 'minor'
  | 'specialization'
  | 'option'
  | 'degree-requirement'
  | 'double-degree'

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
