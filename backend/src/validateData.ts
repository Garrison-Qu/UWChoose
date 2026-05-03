import { getCourses, getPrograms } from './catalog.ts'
import { validateCatalog } from './validation.ts'

const errors = validateCatalog(getCourses(), getPrograms())

if (errors.length > 0) {
  console.error('Backend data validation failed:')
  errors.forEach((error) => console.error(`- ${error}`))
  process.exit(1)
}

console.log(`Backend data validation passed for ${getCourses().length} courses and ${getPrograms().length} programs.`)
