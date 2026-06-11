import { afterEach, describe, expect, it, vi } from 'vitest'
import { clearLegacyStudentStorage, studentStorageKey } from '../lib/storage'
import { useStudentStore } from './useStudentStore'

afterEach(() => {
  useStudentStore.getState().resetPlan()
  useStudentStore.getState().resetUserProfile()
  vi.unstubAllGlobals()
})

describe('student store persistence', () => {
  it('keeps signed-out edits in memory without writing localStorage', () => {
    const localStorage = {
      setItem: vi.fn(),
      removeItem: vi.fn(),
    }

    vi.stubGlobal('localStorage', localStorage)

    useStudentStore.getState().addCompletedCourse({
      courseCode: 'math 135',
      termTaken: 'Fall 2024',
    })

    expect(useStudentStore.getState().completedCourses[0]?.courseCode).toBe('MATH135')
    expect(localStorage.setItem).not.toHaveBeenCalled()
  })

  it('clears legacy persisted planner data on app startup', () => {
    const localStorage = {
      removeItem: vi.fn(),
    }

    vi.stubGlobal('window', { localStorage })

    clearLegacyStudentStorage()

    expect(localStorage.removeItem).toHaveBeenCalledWith(studentStorageKey)
  })
})
