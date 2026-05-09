import assert from 'node:assert/strict'
import { mkdtemp, readFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import request from 'supertest'
import { createApp, getAllowedOriginsFromEnvironment } from './app.ts'
import { getCourses, getPrograms } from './catalog.ts'
import { createFilePlanStore } from './planStore.ts'
import { validateCatalog } from './validation.ts'
import type { StudentPlanBackup } from '../../frontend/src/types/student.ts'

const app = createApp()

const samplePlan: StudentPlanBackup = {
  completedCourses: [{ courseCode: 'math 135', grade: 87, termTaken: 'Fall 2024' }],
  plannedTerms: [
    {
      id: 'fall-2026',
      term: 'Fall',
      year: 2026,
      courseCodes: ['math 136', 'CS135'],
      status: 'future',
    },
  ],
  prerequisiteOverrides: ['pmath351'],
  selectedProgramId: 'pure-math',
  currentTerm: {
    term: 'Winter',
    year: 2026,
  },
}

async function createPlanTestApp() {
  const directory = await mkdtemp(join(tmpdir(), 'uwchoose-plans-'))
  const filePath = join(directory, 'plans.json')

  return {
    app: createApp({ planStore: createFilePlanStore(filePath) }),
    filePath,
  }
}

describe('catalog validation', () => {
  it('passes for the shared frontend catalog', () => {
    assert.deepEqual(validateCatalog(getCourses(), getPrograms()), [])
  })

  it('rejects invalid chooseN counts', () => {
    const [program] = getPrograms()

    assert.ok(program)
    assert.match(
      validateCatalog(getCourses(), [
        {
          ...program,
          requirements: [
            {
              id: 'invalid',
              name: 'Invalid',
              type: 'chooseN',
              courses: ['MATH135'],
              requiredCount: 2,
            },
          ],
        },
      ])[0] ?? '',
      /requiredCount exceeds available courses/,
    )
  })
})

describe('read-only API', () => {
  it('returns health metadata', async () => {
    const response = await request(app).get('/health')

    assert.equal(response.status, 200)
    assert.equal(response.body.status, 'ok')
    assert.equal(response.body.courses, getCourses().length)
    assert.equal(response.body.programs, getPrograms().length)
  })

  it('returns the course list', async () => {
    const response = await request(app).get('/api/courses')

    assert.equal(response.status, 200)
    assert.equal(Array.isArray(response.body), true)
    assert.equal(response.body.length, getCourses().length)
  })

  it('returns a course by normalized code', async () => {
    const cases = ['/api/courses/pmath351', '/api/courses/PMATH351', '/api/courses/PMATH%20351']

    for (const path of cases) {
      const response = await request(app).get(path)

      assert.equal(response.status, 200)
      assert.equal(response.body.code, 'PMATH351')
    }
  })

  it('returns 404 for a missing course', async () => {
    const response = await request(app).get('/api/courses/NOPE101')

    assert.equal(response.status, 404)
    assert.equal(response.body.error, 'Course not found.')
  })

  it('returns programs and program detail', async () => {
    const list = await request(app).get('/api/programs')
    const detail = await request(app).get('/api/programs/pure-math')

    assert.equal(list.status, 200)
    assert.equal(Array.isArray(list.body), true)
    assert.equal(detail.status, 200)
    assert.equal(detail.body.id, 'pure-math')
  })

  it('returns 404 for a missing program', async () => {
    const response = await request(app).get('/api/programs/missing')

    assert.equal(response.status, 404)
    assert.equal(response.body.error, 'Program not found.')
  })

  it('allows configured CORS origins and rejects unknown origins', async () => {
    const corsApp = createApp({ allowedOrigins: ['https://uwchoose.example'] })
    const allowedResponse = await request(corsApp)
      .get('/health')
      .set('Origin', 'https://uwchoose.example')
    const blockedResponse = await request(corsApp)
      .get('/health')
      .set('Origin', 'https://unknown.example')

    assert.equal(allowedResponse.status, 200)
    assert.equal(allowedResponse.headers['access-control-allow-origin'], 'https://uwchoose.example')
    assert.equal(blockedResponse.status, 403)
    assert.equal(blockedResponse.body.error, 'Origin https://unknown.example is not allowed by CORS.')
  })

  it('combines local and environment CORS origins', () => {
    const originalOrigins = process.env.CORS_ORIGINS

    try {
      process.env.CORS_ORIGINS = 'https://uwchoose.vercel.app, https://preview.vercel.app'

      assert.deepEqual(getAllowedOriginsFromEnvironment(), [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
        'https://uwchoose.vercel.app',
        'https://preview.vercel.app',
      ])
    } finally {
      process.env.CORS_ORIGINS = originalOrigins
    }
  })
})

describe('shareable plan API', () => {
  it('saves a valid plan and returns a share code', async () => {
    const { app: planApp } = await createPlanTestApp()
    const response = await request(planApp).post('/api/plans').send(samplePlan)

    assert.equal(response.status, 201)
    assert.equal(typeof response.body.id, 'string')
    assert.equal(response.body.plan.completedCourses[0].courseCode, 'MATH135')
    assert.equal(response.body.plan.plannedTerms[0].courseCodes[0], 'MATH136')
    assert.equal(response.body.createdAt, response.body.updatedAt)
  })

  it('saves optional profile metadata with a plan', async () => {
    const { app: planApp } = await createPlanTestApp()
    const response = await request(planApp).post('/api/plans').send({
      plan: samplePlan,
      profile: {
        displayName: 'Alex',
        programId: 'pure-math',
        startTerm: 'Fall',
        startYear: 2024,
        notes: 'Interested in analysis.',
      },
    })

    assert.equal(response.status, 201)
    assert.deepEqual(response.body.profile, {
      displayName: 'Alex',
      programId: 'pure-math',
      startTerm: 'Fall',
      startYear: 2024,
      notes: 'Interested in analysis.',
    })
  })

  it('loads a saved plan by share code', async () => {
    const { app: planApp } = await createPlanTestApp()
    const saved = await request(planApp).post('/api/plans').send(samplePlan)
    const loaded = await request(planApp).get(`/api/plans/${saved.body.id}`)

    assert.equal(loaded.status, 200)
    assert.equal(loaded.body.id, saved.body.id)
    assert.deepEqual(loaded.body.plan, saved.body.plan)
  })

  it('updates an existing saved plan', async () => {
    const { app: planApp } = await createPlanTestApp()
    const saved = await request(planApp).post('/api/plans').send(samplePlan)
    const updatedPlan: StudentPlanBackup = {
      ...samplePlan,
      completedCourses: [{ courseCode: 'MATH136', termTaken: 'Winter 2025' }],
    }
    const updated = await request(planApp).put(`/api/plans/${saved.body.id}`).send(updatedPlan)

    assert.equal(updated.status, 200)
    assert.equal(updated.body.id, saved.body.id)
    assert.equal(updated.body.createdAt, saved.body.createdAt)
    assert.equal(updated.body.plan.completedCourses[0].courseCode, 'MATH136')
  })

  it('preserves saved profile metadata when updating a plan without profile metadata', async () => {
    const { app: planApp } = await createPlanTestApp()
    const saved = await request(planApp).post('/api/plans').send({
      plan: samplePlan,
      profile: {
        displayName: 'Alex',
        programId: 'pure-math',
      },
    })
    const updated = await request(planApp).put(`/api/plans/${saved.body.id}`).send({
      ...samplePlan,
      plannedTerms: [],
    })

    assert.equal(updated.status, 200)
    assert.deepEqual(updated.body.profile, {
      displayName: 'Alex',
      programId: 'pure-math',
    })
  })


  it('returns 404 for unknown saved plans', async () => {
    const { app: planApp } = await createPlanTestApp()
    const getResponse = await request(planApp).get('/api/plans/missing')
    const putResponse = await request(planApp).put('/api/plans/missing').send(samplePlan)

    assert.equal(getResponse.status, 404)
    assert.equal(getResponse.body.error, 'Plan not found.')
    assert.equal(putResponse.status, 404)
    assert.equal(putResponse.body.error, 'Plan not found.')
  })

  it('rejects malformed plan payloads', async () => {
    const { app: planApp } = await createPlanTestApp()
    const response = await request(planApp).post('/api/plans').send({
      completedCourses: 'MATH135',
      plannedTerms: [],
      prerequisiteOverrides: [],
      currentTerm: { term: 'Autumn', year: 2026 },
    })

    assert.equal(response.status, 400)
    assert.equal(response.body.error, 'Invalid plan.')
    assert.match(response.body.details.join(' '), /completedCourses must be an array/)
    assert.match(response.body.details.join(' '), /currentTerm.term/)
  })

  it('rejects unknown course and program references', async () => {
    const { app: planApp } = await createPlanTestApp()
    const response = await request(planApp).post('/api/plans').send({
      ...samplePlan,
      completedCourses: [{ courseCode: 'NOPE101' }],
      selectedProgramId: 'missing-program',
    })

    assert.equal(response.status, 400)
    assert.match(response.body.details.join(' '), /NOPE101/)
    assert.match(response.body.details.join(' '), /missing-program/)
  })

  it('rejects unknown profile program references', async () => {
    const { app: planApp } = await createPlanTestApp()
    const response = await request(planApp).post('/api/plans').send({
      plan: samplePlan,
      profile: {
        programId: 'missing-program',
      },
    })

    assert.equal(response.status, 400)
    assert.match(response.body.details.join(' '), /profile\.programId missing-program/)
  })

  it('persists plan data through a new store using the same file', async () => {
    const { app: planApp, filePath } = await createPlanTestApp()
    const saved = await request(planApp).post('/api/plans').send(samplePlan)
    const recreatedApp = createApp({ planStore: createFilePlanStore(filePath) })
    const loaded = await request(recreatedApp).get(`/api/plans/${saved.body.id}`)

    assert.equal(loaded.status, 200)
    assert.equal(loaded.body.id, saved.body.id)
    assert.deepEqual(loaded.body.plan, saved.body.plan)
  })

  it('uses PLAN_STORE_PATH when no explicit store path is provided', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'uwchoose-env-plans-'))
    const filePath = join(directory, 'plans.json')
    const originalPlanStorePath = process.env.PLAN_STORE_PATH

    try {
      process.env.PLAN_STORE_PATH = filePath

      const store = createFilePlanStore()
      const savedPlan = await store.createPlan(samplePlan)
      const rawFile = await readFile(filePath, 'utf8')

      assert.equal(rawFile.includes(savedPlan.id), true)
    } finally {
      process.env.PLAN_STORE_PATH = originalPlanStorePath
    }
  })
})
