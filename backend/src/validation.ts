import type { Course, Prerequisite } from '../../frontend/src/types/course.ts'
import type { Program } from '../../frontend/src/types/program.ts'

const validTerms = new Set(['Fall', 'Winter', 'Spring'])

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

function getDirectPrerequisiteCourseCodes(prerequisite: Prerequisite | undefined): string[] {
  if (!prerequisite) {
    return []
  }

  if (prerequisite.type === 'course') {
    return [prerequisite.courseCode]
  }

  return [...new Set(prerequisite.requirements.flatMap(getDirectPrerequisiteCourseCodes))]
}

function validatePrerequisite(
  ownerCourseCode: string,
  prerequisite: Prerequisite | undefined,
  path: string,
  courseCodes: Set<string>,
  errors: string[],
) {
  if (!prerequisite) {
    return
  }

  if (prerequisite.type === 'course') {
    if (!courseCodes.has(prerequisite.courseCode)) {
      errors.push(`${ownerCourseCode}: prerequisite ${prerequisite.courseCode} at ${path} does not exist.`)
    }

    if (prerequisite.courseCode === ownerCourseCode) {
      errors.push(`${ownerCourseCode}: course lists itself as a prerequisite at ${path}.`)
    }

    return
  }

  if (prerequisite.requirements.length === 0) {
    errors.push(`${ownerCourseCode}: empty prerequisite group at ${path}.`)
  }

  const directCourseCodes = prerequisite.requirements
    .filter((requirement) => requirement.type === 'course')
    .map((requirement) => requirement.courseCode)

  findDuplicateValues(directCourseCodes).forEach((duplicateCode) => {
    errors.push(`${ownerCourseCode}: duplicate ${duplicateCode} inside prerequisite group ${path}.`)
  })

  prerequisite.requirements.forEach((requirement, index) => {
    validatePrerequisite(ownerCourseCode, requirement, `${path}.${index}`, courseCodes, errors)
  })
}

export function validateCatalog(courses: Course[], programs: Program[]): string[] {
  const errors: string[] = []
  const courseCodes = new Set(courses.map((course) => course.code))

  findDuplicateValues(courses.map((course) => course.code)).forEach((duplicateCode) => {
    errors.push(`Duplicate course code: ${duplicateCode}.`)
  })

  courses.forEach((course) => {
    course.termsOffered?.forEach((term) => {
      if (!validTerms.has(term)) {
        errors.push(`${course.code}: invalid term ${term}.`)
      }
    })

    course.antirequisites?.forEach((antirequisite) => {
      if (!courseCodes.has(antirequisite)) {
        errors.push(`${course.code}: antirequisite ${antirequisite} does not exist.`)
      }

      if (antirequisite === course.code) {
        errors.push(`${course.code}: course lists itself as an antirequisite.`)
      }
    })

    findDuplicateValues(course.antirequisites ?? []).forEach((duplicateCode) => {
      errors.push(`${course.code}: duplicate antirequisite ${duplicateCode}.`)
    })

    validatePrerequisite(course.code, course.prerequisite, 'prerequisite', courseCodes, errors)
  })

  const graphEdgeIds = courses.flatMap((course) =>
    getDirectPrerequisiteCourseCodes(course.prerequisite)
      .filter((prerequisiteCode) => courseCodes.has(prerequisiteCode))
      .map((prerequisiteCode) => `${prerequisiteCode}-${course.code}`),
  )

  findDuplicateValues(graphEdgeIds).forEach((duplicateEdgeId) => {
    errors.push(`Duplicate prerequisite graph edge: ${duplicateEdgeId}.`)
  })

  programs.forEach((program) => {
    findDuplicateValues(program.requirements.map((requirement) => requirement.id)).forEach(
      (duplicateRequirementId) => {
        errors.push(`${program.id}: duplicate requirement id ${duplicateRequirementId}.`)
      },
    )

    program.requirements.forEach((requirement) => {
      if (requirement.courses.length === 0) {
        errors.push(`${program.id}/${requirement.id}: requirement group is empty.`)
      }

      findDuplicateValues(requirement.courses).forEach((duplicateCode) => {
        errors.push(`${program.id}/${requirement.id}: duplicate requirement course ${duplicateCode}.`)
      })

      requirement.courses.forEach((courseCode) => {
        if (!courseCodes.has(courseCode)) {
          errors.push(`${program.id}/${requirement.id}: requirement course ${courseCode} does not exist.`)
        }
      })

      if (requirement.type === 'allOf' && requirement.requiredCount !== undefined) {
        errors.push(`${program.id}/${requirement.id}: allOf requirement should not define requiredCount.`)
      }

      if (requirement.type === 'chooseN') {
        if (!Number.isInteger(requirement.requiredCount)) {
          errors.push(`${program.id}/${requirement.id}: chooseN requirement must define an integer requiredCount.`)
          return
        }

        if ((requirement.requiredCount ?? 0) < 1) {
          errors.push(`${program.id}/${requirement.id}: requiredCount must be at least 1.`)
        }

        if ((requirement.requiredCount ?? 0) > requirement.courses.length) {
          errors.push(`${program.id}/${requirement.id}: requiredCount exceeds available courses.`)
        }
      }
    })
  })

  return errors
}
