import cors from 'cors'
import express from 'express'
import {
  findCourseByCode,
  findProgramById,
  getCourses,
  getPrograms,
} from './catalog.ts'
import { PlanValidationError, normalizeStudentPlan } from './planValidation.ts'
import { createFilePlanStore, type PlanStore } from './planStore.ts'
import { validateCatalog } from './validation.ts'

const localAllowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173']

type AppOptions = {
  allowedOrigins?: string[]
  planStore?: PlanStore
}

export function getAllowedOriginsFromEnvironment() {
  const configuredOrigins = process.env.CORS_ORIGINS?.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean) ?? []

  return [...new Set([...localAllowedOrigins, ...configuredOrigins])]
}

function getValidationErrorResponse(error: PlanValidationError) {
  return {
    error: 'Invalid plan.',
    details: error.errors,
  }
}

export function createApp(options: AppOptions = {}) {
  const app = express()
  const allowedOrigins = new Set(options.allowedOrigins ?? getAllowedOriginsFromEnvironment())
  const planStore = options.planStore ?? createFilePlanStore()

  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || allowedOrigins.has(origin)) {
          callback(null, true)
          return
        }

        callback(new Error(`Origin ${origin} is not allowed by CORS.`))
      },
    }),
  )
  app.use(
    (
      error: Error,
      _request: express.Request,
      response: express.Response,
      next: express.NextFunction,
    ) => {
      if (error.message.includes('not allowed by CORS')) {
        response.status(403).json({ error: error.message })
        return
      }

      next(error)
    },
  )
  app.use(express.json())

  app.get('/health', (_request, response) => {
    const validationErrors = validateCatalog(getCourses(), getPrograms())

    response.json({
      status: validationErrors.length === 0 ? 'ok' : 'degraded',
      courses: getCourses().length,
      programs: getPrograms().length,
    })
  })

  app.get('/api/courses', (_request, response) => {
    response.json(getCourses())
  })

  app.get('/api/courses/:code', (request, response) => {
    const course = findCourseByCode(request.params.code)

    if (!course) {
      response.status(404).json({ error: 'Course not found.' })
      return
    }

    response.json(course)
  })

  app.get('/api/programs', (_request, response) => {
    response.json(getPrograms())
  })

  app.get('/api/programs/:id', (request, response) => {
    const program = findProgramById(request.params.id)

    if (!program) {
      response.status(404).json({ error: 'Program not found.' })
      return
    }

    response.json(program)
  })

  app.post('/api/plans', async (request, response) => {
    try {
      const plan = normalizeStudentPlan(request.body)
      const savedPlan = await planStore.createPlan(plan)

      response.status(201).json(savedPlan)
    } catch (error) {
      if (error instanceof PlanValidationError) {
        response.status(400).json(getValidationErrorResponse(error))
        return
      }

      throw error
    }
  })

  app.get('/api/plans/:id', async (request, response) => {
    const savedPlan = await planStore.getPlan(request.params.id)

    if (!savedPlan) {
      response.status(404).json({ error: 'Plan not found.' })
      return
    }

    response.json(savedPlan)
  })

  app.put('/api/plans/:id', async (request, response) => {
    try {
      const plan = normalizeStudentPlan(request.body)
      const savedPlan = await planStore.updatePlan(request.params.id, plan)

      if (!savedPlan) {
        response.status(404).json({ error: 'Plan not found.' })
        return
      }

      response.json(savedPlan)
    } catch (error) {
      if (error instanceof PlanValidationError) {
        response.status(400).json(getValidationErrorResponse(error))
        return
      }

      throw error
    }
  })

  return app
}
