import { describe, expect, it, vi } from 'vitest'
import { courses as localCourses } from '../data/courses'
import { programs as localPrograms } from '../data/programs'
import { fetchCatalog } from './catalogApi'

function createSuccessfulFetch(responseByUrl: (url: string) => unknown) {
  return vi.fn(async (input: RequestInfo | URL) => ({
    ok: true,
    status: 200,
    json: async () => responseByUrl(String(input)),
  }))
}

describe('catalog API client', () => {
  it('loads course and program catalogs from the API', async () => {
    const apiCourses = [{ ...localCourses[0], code: 'TEST100' }]
    const apiPrograms = [{ ...localPrograms[0], id: 'test-program' }]
    const fetcher = createSuccessfulFetch((url) =>
      url.endsWith('/api/courses') ? apiCourses : apiPrograms,
    )

    const result = await fetchCatalog(fetcher as unknown as typeof fetch, 'http://api.test/')

    expect(result.source).toBe('api')
    expect(result.courses).toEqual(apiCourses)
    expect(result.programs).toEqual(apiPrograms)
    expect(fetcher).toHaveBeenCalledWith('http://api.test/api/courses')
    expect(fetcher).toHaveBeenCalledWith('http://api.test/api/programs')
  })

  it('falls back to bundled local catalog data when the API fails', async () => {
    const fetcher = vi.fn(async () => {
      throw new Error('offline')
    })

    const result = await fetchCatalog(fetcher as unknown as typeof fetch, 'http://api.test')

    expect(result.source).toBe('local')
    expect(result.courses).toBe(localCourses)
    expect(result.programs).toBe(localPrograms)
    expect(result.error).toBe('offline')
  })

  it('falls back to bundled local catalog data when API shapes are invalid', async () => {
    const fetcher = createSuccessfulFetch((url) =>
      url.endsWith('/api/courses') ? { courses: [] } : localPrograms,
    )

    const result = await fetchCatalog(fetcher as unknown as typeof fetch, 'http://api.test')

    expect(result.source).toBe('local')
    expect(result.courses).toBe(localCourses)
    expect(result.error).toBe('Catalog API returned invalid courses.')
  })
})

