import { getCatalogApiBaseUrl } from './catalogApi'
import type { StudentPlanBackup } from '../types/student'

export type SavedPlanResponse = {
  id: string
  plan: StudentPlanBackup
  createdAt: string
  updatedAt: string
}

async function parseErrorResponse(response: Response): Promise<string> {
  try {
    const body = (await response.json()) as { error?: string; details?: string[] }
    const details = Array.isArray(body.details) && body.details.length > 0
      ? ` ${body.details.join(' ')}`
      : ''

    return `${body.error ?? 'Plan API request failed.'}${details}`
  } catch {
    return `Plan API request failed with ${response.status}.`
  }
}

async function requestPlan(
  path: string,
  options: RequestInit,
  fetcher: typeof fetch,
  baseUrl: string,
): Promise<SavedPlanResponse> {
  const response = await fetcher(`${baseUrl}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(await parseErrorResponse(response))
  }

  return response.json() as Promise<SavedPlanResponse>
}

export function savePlanOnline(
  plan: StudentPlanBackup,
  fetcher: typeof fetch = globalThis.fetch,
  baseUrl = getCatalogApiBaseUrl(),
): Promise<SavedPlanResponse> {
  return requestPlan(
    '/api/plans',
    {
      method: 'POST',
      body: JSON.stringify(plan),
    },
    fetcher,
    baseUrl,
  )
}

export function loadPlanOnline(
  id: string,
  fetcher: typeof fetch = globalThis.fetch,
  baseUrl = getCatalogApiBaseUrl(),
): Promise<SavedPlanResponse> {
  return requestPlan(`/api/plans/${encodeURIComponent(id.trim())}`, { method: 'GET' }, fetcher, baseUrl)
}

export function updatePlanOnline(
  id: string,
  plan: StudentPlanBackup,
  fetcher: typeof fetch = globalThis.fetch,
  baseUrl = getCatalogApiBaseUrl(),
): Promise<SavedPlanResponse> {
  return requestPlan(
    `/api/plans/${encodeURIComponent(id.trim())}`,
    {
      method: 'PUT',
      body: JSON.stringify(plan),
    },
    fetcher,
    baseUrl,
  )
}

