export type Program = {
  id: string
  name: string
  requirements: ProgramRequirement[]
}

export type ProgramRequirement = {
  id: string
  name: string
  type: 'allOf' | 'chooseN'
  courses: string[]
  requiredCount?: number
}
