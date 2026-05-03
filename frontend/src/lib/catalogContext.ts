import { createContext, useContext } from 'react'
import type { CatalogSource } from './catalogApi'
import type { Course } from '../types/course'
import type { Program } from '../types/program'

export type CatalogContextValue = {
  courses: Course[]
  programs: Program[]
  source: CatalogSource
  error?: string
  isLoading: boolean
  reloadCatalog: () => void
}

export const CatalogContext = createContext<CatalogContextValue | undefined>(undefined)

export function useCatalog() {
  const context = useContext(CatalogContext)

  if (!context) {
    throw new Error('useCatalog must be used inside CatalogProvider.')
  }

  return context
}

