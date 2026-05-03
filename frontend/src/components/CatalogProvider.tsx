import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { courses as localCourses } from '../data/courses'
import { programs as localPrograms } from '../data/programs'
import { fetchCatalog } from '../lib/catalogApi'
import { CatalogContext } from '../lib/catalogContext'
import type { Course } from '../types/course'
import type { Program } from '../types/program'

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<Course[]>(localCourses)
  const [programs, setPrograms] = useState<Program[]>(localPrograms)
  const [source, setSource] = useState<'api' | 'local'>('local')
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState(true)
  const [reloadKey, setReloadKey] = useState(0)
  const reloadCatalog = useCallback(() => {
    setIsLoading(true)
    setReloadKey((current) => current + 1)
  }, [])

  useEffect(() => {
    let isActive = true

    fetchCatalog().then((result) => {
      if (!isActive) {
        return
      }

      setCourses(result.courses)
      setPrograms(result.programs)
      setSource(result.source)
      setError(result.error)
      setIsLoading(false)
    })

    return () => {
      isActive = false
    }
  }, [reloadKey])

  const value = useMemo(
    () => ({
      courses,
      programs,
      source,
      error,
      isLoading,
      reloadCatalog,
    }),
    [courses, error, isLoading, programs, reloadCatalog, source],
  )

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
}
