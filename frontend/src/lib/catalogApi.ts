import { courses as localCourses } from '../data/courses'
import { programs as localPrograms } from '../data/programs'
import type { Course } from '../types/course'
import type { Program } from '../types/program'

const DEFAULT_API_BASE_URL = 'http://localhost:3000'

export type CatalogSource = 'api' | 'local'

export type CatalogLoadResult = {
  courses: Course[]
  programs: Program[]
  source: CatalogSource
  error?: string
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'Catalog API request failed.'
}

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, '')
}

function assertCatalogArray<T>(value: unknown, label: string): T[] {
  if (!Array.isArray(value)) {
    throw new Error(`Catalog API returned invalid ${label}.`)
  }

  return value as T[]
}

async function fetchJson<T>(fetcher: typeof fetch, url: string): Promise<T> {
  const response = await fetcher(url)

  if (!response.ok) {
    throw new Error(`Catalog API request failed with ${response.status}.`)
  }

  return response.json() as Promise<T>
}

export function getCatalogApiBaseUrl(): string {
  const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim()

  return normalizeBaseUrl(configuredBaseUrl || DEFAULT_API_BASE_URL)
}

export async function fetchCatalog(
  fetcher: typeof fetch = globalThis.fetch,
  baseUrl = getCatalogApiBaseUrl(),
): Promise<CatalogLoadResult> {
  if (!fetcher) {
    return {
      courses: localCourses,
      programs: localPrograms,
      source: 'local',
      error: 'Fetch is unavailable in this environment.',
    }
  }

  try {
    const normalizedBaseUrl = normalizeBaseUrl(baseUrl)
    const [apiCourses, apiPrograms] = await Promise.all([
      fetchJson<unknown>(fetcher, `${normalizedBaseUrl}/api/courses`),
      fetchJson<unknown>(fetcher, `${normalizedBaseUrl}/api/programs`),
    ])

    return {
      courses: assertCatalogArray<Course>(apiCourses, 'courses'),
      programs: assertCatalogArray<Program>(apiPrograms, 'programs'),
      source: 'api',
    }
  } catch (error) {
    return {
      courses: localCourses,
      programs: localPrograms,
      source: 'local',
      error: getErrorMessage(error),
    }
  }
}

