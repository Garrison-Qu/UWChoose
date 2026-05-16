import cors from 'cors'
import express from 'express'
import {
  findCourseByCode,
  findProgramById,
  getCourses,
  getPrograms,
} from './catalog.ts'
import {
  PlanValidationError,
  normalizeSavedPlanProfile,
  normalizeSavedPlanRequest,
  normalizeStudentPlan,
} from './planValidation.ts'
import { createFilePlanStore, type PlanStore } from './planStore.ts'
import { createFileUserStore, type PublicUser, type UserStore } from './userStore.ts'
import { validateCatalog } from './validation.ts'

const localAllowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173']
const sessionCookieName = 'uwchoose_session'

type AppOptions = {
  allowedOrigins?: string[]
  planStore?: PlanStore
  userStore?: UserStore
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

function parseCookies(cookieHeader: string | undefined) {
  return Object.fromEntries(
    cookieHeader?.split(';').map((cookie) => {
      const [name = '', ...valueParts] = cookie.trim().split('=')

      return [name, decodeURIComponent(valueParts.join('='))]
    }).filter(([name]) => name) ?? [],
  )
}

function getSessionCookie(request: express.Request) {
  return parseCookies(request.headers.cookie)[sessionCookieName]
}

function setSessionCookie(response: express.Response, sessionId: string) {
  const secureFlag = process.env.NODE_ENV === 'production' ? '; Secure' : ''

  response.setHeader(
    'Set-Cookie',
    `${sessionCookieName}=${encodeURIComponent(sessionId)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=2592000${secureFlag}`,
  )
}

function clearSessionCookie(response: express.Response) {
  response.setHeader(
    'Set-Cookie',
    `${sessionCookieName}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`,
  )
}

function getAuthFields(body: unknown) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return undefined
  }

  const value = body as Record<string, unknown>
  const email = typeof value.email === 'string' ? value.email.trim().toLowerCase() : ''
  const password = typeof value.password === 'string' ? value.password : ''
  const displayName = typeof value.displayName === 'string' && value.displayName.trim()
    ? value.displayName.trim()
    : undefined

  if (!email || !email.includes('@') || password.length < 8) {
    return undefined
  }

  return { email, password, displayName }
}

async function getAuthenticatedUser(
  request: express.Request,
  userStore: UserStore,
): Promise<PublicUser | undefined> {
  const sessionId = getSessionCookie(request)

  return sessionId ? userStore.getUserBySession(sessionId) : undefined
}

export function createApp(options: AppOptions = {}) {
  const app = express()
  const allowedOrigins = new Set(options.allowedOrigins ?? getAllowedOriginsFromEnvironment())
  const planStore = options.planStore ?? createFilePlanStore()
  const userStore = options.userStore ?? createFileUserStore()

  app.use(
    cors({
      credentials: true,
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
      const { plan, profile } = normalizeSavedPlanRequest(request.body)
      const savedPlan = await planStore.createPlan(plan, profile)

      response.status(201).json(savedPlan)
    } catch (error) {
      if (error instanceof PlanValidationError) {
        response.status(400).json(getValidationErrorResponse(error))
        return
      }

      throw error
    }
  })

  app.post('/api/auth/signup', async (request, response) => {
    const fields = getAuthFields(request.body)

    if (!fields) {
      response.status(400).json({ error: 'Enter a valid email and a password of at least 8 characters.' })
      return
    }

    try {
      const user = await userStore.createUser(fields.email, fields.password, fields.displayName)
      const sessionId = await userStore.createSession(user.id)

      setSessionCookie(response, sessionId)
      response.status(201).json({ user })
    } catch (error) {
      response.status(409).json({ error: error instanceof Error ? error.message : 'Could not create account.' })
    }
  })

  app.post('/api/auth/signin', async (request, response) => {
    const fields = getAuthFields(request.body)

    if (!fields) {
      response.status(400).json({ error: 'Enter a valid email and password.' })
      return
    }

    const user = await userStore.verifyUser(fields.email, fields.password)

    if (!user) {
      response.status(401).json({ error: 'Invalid email or password.' })
      return
    }

    const sessionId = await userStore.createSession(user.id)

    setSessionCookie(response, sessionId)
    response.json({ user })
  })

  app.post('/api/auth/signout', async (request, response) => {
    const sessionId = getSessionCookie(request)

    if (sessionId) {
      await userStore.deleteSession(sessionId)
    }

    clearSessionCookie(response)
    response.status(204).end()
  })

  app.get('/api/auth/me', async (request, response) => {
    const user = await getAuthenticatedUser(request, userStore)

    if (!user) {
      response.status(401).json({ error: 'Not signed in.' })
      return
    }

    response.json({ user })
  })

  app.get('/api/me/plan', async (request, response) => {
    const user = await getAuthenticatedUser(request, userStore)

    if (!user) {
      response.status(401).json({ error: 'Not signed in.' })
      return
    }

    response.json(await userStore.getAccountPlan(user.id))
  })

  app.put('/api/me/plan', async (request, response) => {
    const user = await getAuthenticatedUser(request, userStore)

    if (!user) {
      response.status(401).json({ error: 'Not signed in.' })
      return
    }

    try {
      const body = request.body && typeof request.body === 'object'
        ? request.body as { plan?: unknown; profile?: unknown }
        : {}
      const plan = normalizeStudentPlan(body.plan)
      const profile = normalizeSavedPlanProfile(body.profile)
      const accountPlan = await userStore.updateAccountPlan(user.id, plan, profile)

      if (!accountPlan) {
        response.status(404).json({ error: 'Account not found.' })
        return
      }

      response.json(accountPlan)
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
      const { plan, profile } = normalizeSavedPlanRequest(request.body)
      const savedPlan = await planStore.updatePlan(request.params.id, plan, profile)

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
