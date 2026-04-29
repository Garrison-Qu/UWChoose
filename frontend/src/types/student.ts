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
