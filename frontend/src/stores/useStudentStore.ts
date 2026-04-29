import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { normalizeCourseCode } from '../lib/courseCodes'
import { studentStorageKey } from '../lib/storage'
import type { CompletedCourse, CurrentTerm, PlannedTerm, PlannedTermStatus } from '../types/student'

type StudentState = {
  completedCourses: CompletedCourse[]
  selectedProgramId?: string
  plannedTerms: PlannedTerm[]
  currentTerm: CurrentTerm
  addCompletedCourse: (course: CompletedCourse) => void
  removeCompletedCourse: (courseCode: string) => void
  updateCompletedCourse: (courseCode: string, updates: Partial<CompletedCourse>) => void
  setSelectedProgram: (programId: string) => void
  setCurrentTerm: (term: CurrentTerm) => void
  addPlannedTerm: (term: PlannedTerm) => void
  removePlannedTerm: (termId: string) => void
  updatePlannedTermStatus: (termId: string, status: PlannedTermStatus) => void
  addCourseToPlannedTerm: (termId: string, courseCode: string) => void
  removeCourseFromPlannedTerm: (termId: string, courseCode: string) => void
}

export const useStudentStore = create<StudentState>()(
  persist(
    (set) => ({
      completedCourses: [],
      plannedTerms: [],
      currentTerm: { term: 'Fall', year: 2026 },

      addCompletedCourse: (course) =>
        set((state) => {
          const normalizedCode = normalizeCourseCode(course.courseCode)
          const nextCourse = { ...course, courseCode: normalizedCode }
          const existingCourse = state.completedCourses.some(
            (completedCourse) => normalizeCourseCode(completedCourse.courseCode) === normalizedCode,
          )

          if (existingCourse) {
            return {
              completedCourses: state.completedCourses.map((completedCourse) =>
                normalizeCourseCode(completedCourse.courseCode) === normalizedCode
                  ? nextCourse
                  : completedCourse,
              ),
            }
          }

          return { completedCourses: [...state.completedCourses, nextCourse] }
        }),

      removeCompletedCourse: (courseCode) =>
        set((state) => ({
          completedCourses: state.completedCourses.filter(
            (completedCourse) =>
              normalizeCourseCode(completedCourse.courseCode) !== normalizeCourseCode(courseCode),
          ),
        })),

      updateCompletedCourse: (courseCode, updates) =>
        set((state) => ({
          completedCourses: state.completedCourses.map((completedCourse) =>
            normalizeCourseCode(completedCourse.courseCode) === normalizeCourseCode(courseCode)
              ? {
                  ...completedCourse,
                  ...updates,
                  courseCode: normalizeCourseCode(updates.courseCode ?? completedCourse.courseCode),
                }
              : completedCourse,
          ),
        })),

      setSelectedProgram: (programId) => set({ selectedProgramId: programId }),

      setCurrentTerm: (term) => set({ currentTerm: term }),

      addPlannedTerm: (term) =>
        set((state) => ({
          plannedTerms: [
            ...state.plannedTerms,
            {
              ...term,
              status: term.status ?? 'future',
              courseCodes: term.courseCodes.map(normalizeCourseCode),
            },
          ],
        })),

      removePlannedTerm: (termId) =>
        set((state) => ({
          plannedTerms: state.plannedTerms.filter((plannedTerm) => plannedTerm.id !== termId),
        })),

      updatePlannedTermStatus: (termId, status) =>
        set((state) => ({
          plannedTerms: state.plannedTerms.map((plannedTerm) =>
            plannedTerm.id === termId ? { ...plannedTerm, status } : plannedTerm,
          ),
        })),

      addCourseToPlannedTerm: (termId, courseCode) =>
        set((state) => ({
          plannedTerms: state.plannedTerms.map((plannedTerm) => {
            if (plannedTerm.id !== termId) {
              return plannedTerm
            }

            const normalizedCode = normalizeCourseCode(courseCode)

            if (plannedTerm.courseCodes.includes(normalizedCode)) {
              return plannedTerm
            }

            return {
              ...plannedTerm,
              courseCodes: [...plannedTerm.courseCodes, normalizedCode],
            }
          }),
        })),

      removeCourseFromPlannedTerm: (termId, courseCode) =>
        set((state) => ({
          plannedTerms: state.plannedTerms.map((plannedTerm) =>
            plannedTerm.id === termId
              ? {
                  ...plannedTerm,
                  courseCodes: plannedTerm.courseCodes.filter(
                    (plannedCourseCode) =>
                      normalizeCourseCode(plannedCourseCode) !== normalizeCourseCode(courseCode),
                  ),
                }
              : plannedTerm,
          ),
        })),
    }),
    {
      name: studentStorageKey,
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
