import { courses } from '../src/data/courses'
import { programs } from '../src/data/programs'
import type { Prerequisite } from '../src/types/course'

const validTerms = new Set(['Fall', 'Winter', 'Spring'])
const errors: string[] = []
const courseCodes = new Set(courses.map((course) => course.code))

function addError(message: string) {
  errors.push(message)
}

function findDuplicateValues(values: string[]): string[] {
  const seen = new Set<string>()
  const duplicates = new Set<string>()

  values.forEach((value) => {
    if (seen.has(value)) {
      duplicates.add(value)
    }

    seen.add(value)
  })

  return [...duplicates]
}

function validatePrerequisite(
  ownerCourseCode: string,
  prerequisite: Prerequisite | undefined,
  path: string,
) {
  if (!prerequisite) {
    return
  }

  if (prerequisite.type === 'course') {
    if (!courseCodes.has(prerequisite.courseCode)) {
      addError(`${ownerCourseCode}: prerequisite ${prerequisite.courseCode} at ${path} does not exist.`)
    }

    if (prerequisite.courseCode === ownerCourseCode) {
      addError(`${ownerCourseCode}: course lists itself as a prerequisite at ${path}.`)
    }

    return
  }

  const directCourseCodes = prerequisite.requirements
    .filter((requirement) => requirement.type === 'course')
    .map((requirement) => requirement.courseCode)

  findDuplicateValues(directCourseCodes).forEach((duplicateCode) => {
    addError(`${ownerCourseCode}: duplicate ${duplicateCode} inside prerequisite group ${path}.`)
  })

  prerequisite.requirements.forEach((requirement, index) => {
    validatePrerequisite(ownerCourseCode, requirement, `${path}.${index}`)
  })
}

findDuplicateValues(courses.map((course) => course.code)).forEach((duplicateCode) => {
  addError(`Duplicate course code: ${duplicateCode}.`)
})

courses.forEach((course) => {
  course.termsOffered?.forEach((term) => {
    if (!validTerms.has(term)) {
      addError(`${course.code}: invalid term ${term}.`)
    }
  })

  course.antirequisites?.forEach((antirequisite) => {
    if (!courseCodes.has(antirequisite)) {
      addError(`${course.code}: antirequisite ${antirequisite} does not exist.`)
    }

    if (antirequisite === course.code) {
      addError(`${course.code}: course lists itself as an antirequisite.`)
    }
  })

  findDuplicateValues(course.antirequisites ?? []).forEach((duplicateCode) => {
    addError(`${course.code}: duplicate antirequisite ${duplicateCode}.`)
  })

  validatePrerequisite(course.code, course.prerequisite, 'prerequisite')
})

programs.forEach((program) => {
  program.requirements.forEach((requirement) => {
    findDuplicateValues(requirement.courses).forEach((duplicateCode) => {
      addError(`${program.id}/${requirement.id}: duplicate requirement course ${duplicateCode}.`)
    })

    requirement.courses.forEach((courseCode) => {
      if (!courseCodes.has(courseCode)) {
        addError(`${program.id}/${requirement.id}: requirement course ${courseCode} does not exist.`)
      }
    })
  })
})

if (errors.length > 0) {
  console.error('Data validation failed:')
  errors.forEach((error) => console.error(`- ${error}`))
  process.exit(1)
}

console.log(`Data validation passed for ${courses.length} courses and ${programs.length} programs.`)
