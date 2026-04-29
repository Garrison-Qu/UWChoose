export type Term = 'Fall' | 'Winter' | 'Spring'

export type Course = {
  code: string
  name: string
  subject: string
  level: number
  description?: string
  prerequisiteRawText?: string
  prerequisite?: Prerequisite
  antirequisites?: string[]
  termsOffered?: Term[]
}

export type Prerequisite =
  | CourseRequirement
  | AllOfRequirement
  | AnyOfRequirement

export type CourseRequirement = {
  type: 'course'
  courseCode: string
  minGrade?: number
}

export type AllOfRequirement = {
  type: 'allOf'
  requirements: Prerequisite[]
}

export type AnyOfRequirement = {
  type: 'anyOf'
  requirements: Prerequisite[]
}
