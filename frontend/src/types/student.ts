export type CompletedCourse = {
  courseCode: string
  grade?: number
  termTaken?: string
}

export type PlannedTerm = {
  id: string
  term: 'Fall' | 'Winter' | 'Spring'
  year: number
  courseCodes: string[]
}
