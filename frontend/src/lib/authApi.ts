import { getCatalogApiBaseUrl } from './catalogApi'
import type { SavedPlanProfile, StudentPlanBackup } from '../types/student'

export type AuthUser = {
  id: string
  email: string
  displayName?: string
  avatarUrl: string
}

export type AccountPlanResponse = {
  plan?: StudentPlanBackup
  profile?: SavedPlanProfile
}

type AuthResponse = {
  user: AuthUser
}

type RequestCodeResponse = {
  message: string
}

async function parseErrorResponse(response: Response): Promise<string> {
  try {
    const body = await response.json() as { error?: string; details?: string[] }
    const details = Array.isArray(body.details) && body.details.length > 0
      ? ` ${body.details.join(' ')}`
      : ''

    return `${body.error ?? 'Account API request failed.'}${details}`
  } catch {
    return `Account API request failed with ${response.status}.`
  }
}

async function requestJson<T>(
  path: string,
  options: RequestInit = {},
  fetcher: typeof fetch = globalThis.fetch,
  baseUrl = getCatalogApiBaseUrl(),
): Promise<T> {
  const response = await fetcher(`${baseUrl}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(await parseErrorResponse(response))
  }

  return response.json() as Promise<T>
}

export function requestVerificationCode(
  email: string,
  fetcher: typeof fetch = globalThis.fetch,
  baseUrl = getCatalogApiBaseUrl(),
): Promise<RequestCodeResponse> {
  return requestJson(
    '/api/auth/request-code',
    {
      method: 'POST',
      body: JSON.stringify({ email }),
    },
    fetcher,
    baseUrl,
  )
}

export function verifyVerificationCode(
  email: string,
  code: string,
  fetcher: typeof fetch = globalThis.fetch,
  baseUrl = getCatalogApiBaseUrl(),
): Promise<AuthResponse> {
  return requestJson(
    '/api/auth/verify-code',
    {
      method: 'POST',
      body: JSON.stringify({ email, code }),
    },
    fetcher,
    baseUrl,
  )
}

export async function signOut(): Promise<void> {
  await fetch(`${getCatalogApiBaseUrl()}/api/auth/signout`, {
    method: 'POST',
    credentials: 'include',
  })
}

export function getCurrentUser(): Promise<AuthResponse> {
  return requestJson('/api/auth/me')
}

export function getAccountPlan(): Promise<AccountPlanResponse> {
  return requestJson('/api/me/plan')
}

export function saveAccountPlan(
  plan: StudentPlanBackup,
  profile?: SavedPlanProfile,
): Promise<AccountPlanResponse> {
  return requestJson('/api/me/plan', {
    method: 'PUT',
    body: JSON.stringify({ plan, profile }),
  })
}
