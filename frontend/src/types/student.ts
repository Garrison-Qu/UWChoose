export type CompletedCourse = {
  courseCode: string
  grade?: number
  termTaken?: string
}

export type PlannedTermStatus = 'finished' | 'future'

export type PlannedTerm = {
  id: string
  term: 'Fall' | 'Winter' | 'Spring'
  year: number
  courseCodes: string[]
  status?: PlannedTermStatus
}

export type CurrentTerm = {
  term: 'Fall' | 'Winter' | 'Spring'
  year: number
}

export type UserProfile = {
  displayName?: string
  linkedPlanId?: string
  programId?: string
  startTerm?: 'Fall' | 'Winter' | 'Spring'
  startYear?: number
  notes?: string
}

export type SavedPlanProfile = Omit<UserProfile, 'linkedPlanId'>

export type StudentPlanBackup = {
  completedCourses: CompletedCourse[]
  plannedTerms: PlannedTerm[]
  prerequisiteOverrides: string[]
  selectedProgramId?: string
  currentTerm: CurrentTerm
}
