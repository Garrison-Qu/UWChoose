import { describe, expect, it, vi } from 'vitest'
import { loadPlanOnline, savePlanOnline, updatePlanOnline } from './planApi'
import type { StudentPlanBackup } from '../types/student'

const plan: StudentPlanBackup = {
  completedCourses: [{ courseCode: 'MATH135', termTaken: 'Fall 2024' }],
  plannedTerms: [],
  prerequisiteOverrides: [],
  selectedProgramId: 'pure-math',
  currentTerm: { term: 'Winter', year: 2026 },
}

const savedPlan = {
  id: 'share-code',
  plan,
  profile: {
    displayName: 'Alex',
    programId: 'pure-math',
  },
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-01-01T00:00:00.000Z',
}

function successfulFetch() {
  return vi.fn(async () => ({
    ok: true,
    status: 200,
    json: async () => savedPlan,
  }))
}

describe('plan API client', () => {
  it('saves a plan to the backend', async () => {
    const fetcher = successfulFetch()
    const result = await savePlanOnline(plan, undefined, fetcher as unknown as typeof fetch, 'http://api.test')

    expect(result).toEqual(savedPlan)
    expect(fetcher).toHaveBeenCalledWith('http://api.test/api/plans', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(plan),
    })
  })

  it('saves profile metadata with a plan', async () => {
    const fetcher = successfulFetch()
    const profile = { displayName: 'Alex', programId: 'pure-math' }
    const result = await savePlanOnline(plan, profile, fetcher as unknown as typeof fetch, 'http://api.test')

    expect(result).toEqual(savedPlan)
    expect(fetcher).toHaveBeenCalledWith('http://api.test/api/plans', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ plan, profile }),
    })
  })

  it('loads a plan by share code', async () => {
    const fetcher = successfulFetch()
    const result = await loadPlanOnline('share code', fetcher as unknown as typeof fetch, 'http://api.test')

    expect(result).toEqual(savedPlan)
    expect(fetcher).toHaveBeenCalledWith('http://api.test/api/plans/share%20code', {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    })
  })

  it('updates an existing shared plan', async () => {
    const fetcher = successfulFetch()
    const result = await updatePlanOnline('share-code', plan, undefined, fetcher as unknown as typeof fetch, 'http://api.test')

    expect(result).toEqual(savedPlan)
    expect(fetcher).toHaveBeenCalledWith('http://api.test/api/plans/share-code', {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify(plan),
    })
  })

  it('reports backend validation failures', async () => {
    const fetcher = vi.fn(async () => ({
      ok: false,
      status: 400,
      json: async () => ({ error: 'Invalid plan.', details: ['MATH999 does not exist.'] }),
    }))

    await expect(
      savePlanOnline(plan, undefined, fetcher as unknown as typeof fetch, 'http://api.test'),
    ).rejects.toThrow('Invalid plan. MATH999 does not exist.')
  })
})
