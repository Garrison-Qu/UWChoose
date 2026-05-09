import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { normalizeCourseCode } from '../lib/courseCodes'
import { studentStorageKey } from '../lib/storage'
import { getCurrentAcademicTerm } from '../lib/terms'
import type {
  CompletedCourse,
  CurrentTerm,
  PlannedTerm,
  StudentPlanBackup,
  UserProfile,
} from '../types/student'

const defaultCurrentTerm = getCurrentAcademicTerm()

function parseTermTaken(termTaken: string | undefined, fallback: CurrentTerm): CurrentTerm {
  const match = termTaken?.trim().match(/^(Fall|Winter|Spring)\s+(\d{4})$/i)

  if (!match) {
    return fallback
  }

  const term = `${match[1][0].toUpperCase()}${match[1].slice(1).toLowerCase()}` as CurrentTerm['term']

  return {
    term,
    year: Number(match[2]),
  }
}

function addCompletedCourseToPlanner(
  plannedTerms: PlannedTerm[],
  course: CompletedCourse,
  fallbackTerm: CurrentTerm,
): PlannedTerm[] {
  const normalizedCode = normalizeCourseCode(course.courseCode)
  const completedTerm = parseTermTaken(course.termTaken, fallbackTerm)
  const matchingTerm = plannedTerms.find(
    (plannedTerm) =>
      plannedTerm.term === completedTerm.term && plannedTerm.year === completedTerm.year,
  )

  if (matchingTerm) {
    return plannedTerms.map((plannedTerm) => {
      if (plannedTerm.id !== matchingTerm.id) {
        return plannedTerm
      }

      return {
        ...plannedTerm,
        courseCodes: plannedTerm.courseCodes.includes(normalizedCode)
          ? plannedTerm.courseCodes
          : [...plannedTerm.courseCodes, normalizedCode],
      }
    })
  }

  return [
    ...plannedTerms,
    {
      id: `completed-${completedTerm.term}-${completedTerm.year}`,
      term: completedTerm.term,
      year: completedTerm.year,
      courseCodes: [normalizedCode],
    },
  ]
}

function removeCompletedCourseFromPlanner(
  plannedTerms: PlannedTerm[],
  course: CompletedCourse,
  fallbackTerm: CurrentTerm,
): PlannedTerm[] {
  const normalizedCode = normalizeCourseCode(course.courseCode)
  const completedTerm = parseTermTaken(course.termTaken, fallbackTerm)

  return plannedTerms
    .map((plannedTerm) => {
      if (plannedTerm.term !== completedTerm.term || plannedTerm.year !== completedTerm.year) {
        return plannedTerm
      }

      return {
        ...plannedTerm,
        courseCodes: plannedTerm.courseCodes.filter(
          (courseCode) => normalizeCourseCode(courseCode) !== normalizedCode,
        ),
      }
    })
    .filter(
      (plannedTerm) =>
        plannedTerm.courseCodes.length > 0 || !plannedTerm.id.startsWith('completed-'),
    )
}

function completedCourseMatchesPlannedTerm(
  completedCourse: CompletedCourse,
  plannedTerm: PlannedTerm,
  fallbackTerm: CurrentTerm,
): boolean {
  const completedTerm = parseTermTaken(completedCourse.termTaken, fallbackTerm)

  return completedTerm.term === plannedTerm.term && completedTerm.year === plannedTerm.year
}

function removeCompletedCoursesFromPlannerTerm(
  completedCourses: CompletedCourse[],
  plannedTerm: PlannedTerm | undefined,
  courseCodes: string[],
  fallbackTerm: CurrentTerm,
): CompletedCourse[] {
  if (!plannedTerm) {
    return completedCourses
  }

  const removedCourseCodes = new Set(courseCodes.map(normalizeCourseCode))

  return completedCourses.filter((completedCourse) => {
    const normalizedCode = normalizeCourseCode(completedCourse.courseCode)

    return (
      !removedCourseCodes.has(normalizedCode) ||
      !completedCourseMatchesPlannedTerm(completedCourse, plannedTerm, fallbackTerm)
    )
  })
}

type StudentState = {
  completedCourses: CompletedCourse[]
  selectedProgramId?: string
  plannedTerms: PlannedTerm[]
  prerequisiteOverrides: string[]
  userProfile: UserProfile
  currentTerm: CurrentTerm
  addCompletedCourse: (course: CompletedCourse) => void
  removeCompletedCourse: (courseCode: string) => void
  updateCompletedCourse: (courseCode: string, updates: Partial<CompletedCourse>) => void
  addPrerequisiteOverride: (courseCode: string) => void
  removePrerequisiteOverride: (courseCode: string) => void
  togglePrerequisiteOverride: (courseCode: string) => void
  setSelectedProgram: (programId: string) => void
  addPlannedTerm: (term: PlannedTerm) => void
  removePlannedTerm: (termId: string) => void
  addCourseToPlannedTerm: (termId: string, courseCode: string) => void
  removeCourseFromPlannedTerm: (termId: string, courseCode: string) => void
  exportPlan: () => StudentPlanBackup
  importPlan: (plan: StudentPlanBackup) => void
  updateUserProfile: (profile: Partial<UserProfile>) => void
  resetUserProfile: () => void
  resetPlan: () => void
}

export const useStudentStore = create<StudentState>()(
  persist(
    (set, get) => ({
      completedCourses: [] as CompletedCourse[],
      plannedTerms: [] as PlannedTerm[],
      prerequisiteOverrides: [] as string[],
      userProfile: {},
      currentTerm: defaultCurrentTerm,

      addCompletedCourse: (course) =>
        set((state) => {
          const normalizedCode = normalizeCourseCode(course.courseCode)
          const nextCourse = { ...course, courseCode: normalizedCode }
          const plannedTerms = addCompletedCourseToPlanner(
            state.plannedTerms,
            nextCourse,
            state.currentTerm,
          )
          const existingCourse = state.completedCourses.some(
            (completedCourse) => normalizeCourseCode(completedCourse.courseCode) === normalizedCode,
          )

          if (existingCourse) {
            return {
              plannedTerms,
              completedCourses: state.completedCourses.map((completedCourse) =>
                normalizeCourseCode(completedCourse.courseCode) === normalizedCode
                  ? nextCourse
                  : completedCourse,
              ),
            }
          }

          return {
            completedCourses: [...state.completedCourses, nextCourse],
            plannedTerms,
          }
        }),

      removeCompletedCourse: (courseCode) =>
        set((state) => {
          const normalizedCode = normalizeCourseCode(courseCode)
          const completedCourse = state.completedCourses.find(
            (course) => normalizeCourseCode(course.courseCode) === normalizedCode,
          )

          return {
            completedCourses: state.completedCourses.filter(
              (course) => normalizeCourseCode(course.courseCode) !== normalizedCode,
            ),
            plannedTerms: completedCourse
              ? removeCompletedCourseFromPlanner(
                  state.plannedTerms,
                  completedCourse,
                  state.currentTerm,
                )
              : state.plannedTerms,
          }
        }),

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

      addPrerequisiteOverride: (courseCode) =>
        set((state) => {
          const normalizedCode = normalizeCourseCode(courseCode)

          if (state.prerequisiteOverrides.includes(normalizedCode)) {
            return state
          }

          return {
            prerequisiteOverrides: [...state.prerequisiteOverrides, normalizedCode],
          }
        }),

      removePrerequisiteOverride: (courseCode) =>
        set((state) => ({
          prerequisiteOverrides: state.prerequisiteOverrides.filter(
            (overrideCode) => overrideCode !== normalizeCourseCode(courseCode),
          ),
        })),

      togglePrerequisiteOverride: (courseCode) =>
        set((state) => {
          const normalizedCode = normalizeCourseCode(courseCode)

          if (state.prerequisiteOverrides.includes(normalizedCode)) {
            return {
              prerequisiteOverrides: state.prerequisiteOverrides.filter(
                (overrideCode) => overrideCode !== normalizedCode,
              ),
            }
          }

          return {
            prerequisiteOverrides: [...state.prerequisiteOverrides, normalizedCode],
          }
        }),

      setSelectedProgram: (programId) => set({ selectedProgramId: programId }),

      addPlannedTerm: (term) =>
        set((state) => {
          const existingTerm = state.plannedTerms.some(
            (plannedTerm) => plannedTerm.term === term.term && plannedTerm.year === term.year,
          )

          if (existingTerm) {
            return state
          }

          return {
            plannedTerms: [
              ...state.plannedTerms,
              {
                ...term,
                status: term.status ?? 'future',
                courseCodes: term.courseCodes.map(normalizeCourseCode),
              },
            ],
          }
        }),

      removePlannedTerm: (termId) =>
        set((state) => {
          const removedTerm = state.plannedTerms.find((plannedTerm) => plannedTerm.id === termId)

          return {
            completedCourses: removeCompletedCoursesFromPlannerTerm(
              state.completedCourses,
              removedTerm,
              removedTerm?.courseCodes ?? [],
              state.currentTerm,
            ),
            plannedTerms: state.plannedTerms.filter((plannedTerm) => plannedTerm.id !== termId),
          }
        }),

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
        set((state) => {
          const removedTerm = state.plannedTerms.find((plannedTerm) => plannedTerm.id === termId)

          return {
            completedCourses: removeCompletedCoursesFromPlannerTerm(
              state.completedCourses,
              removedTerm,
              [courseCode],
              state.currentTerm,
            ),
            plannedTerms: state.plannedTerms
              .map((plannedTerm) =>
                plannedTerm.id === termId
                  ? {
                      ...plannedTerm,
                      courseCodes: plannedTerm.courseCodes.filter(
                        (plannedCourseCode) =>
                          normalizeCourseCode(plannedCourseCode) !== normalizeCourseCode(courseCode),
                      ),
                    }
                  : plannedTerm,
              )
              .filter(
                (plannedTerm) =>
                  plannedTerm.courseCodes.length > 0 || !plannedTerm.id.startsWith('completed-'),
              ),
          }
        }),

      exportPlan: (): StudentPlanBackup => {
        const state = get()

        return {
          completedCourses: state.completedCourses,
          plannedTerms: state.plannedTerms,
          prerequisiteOverrides: state.prerequisiteOverrides,
          selectedProgramId: state.selectedProgramId,
          currentTerm: state.currentTerm,
        }
      },

      importPlan: (plan) =>
        set({
          completedCourses: plan.completedCourses.map((course) => ({
            ...course,
            courseCode: normalizeCourseCode(course.courseCode),
          })),
          plannedTerms: plan.plannedTerms.map((term) => ({
            ...term,
            status: term.status ?? 'future',
            courseCodes: term.courseCodes.map(normalizeCourseCode),
          })),
          prerequisiteOverrides: plan.prerequisiteOverrides.map(normalizeCourseCode),
          selectedProgramId: plan.selectedProgramId,
          currentTerm: getCurrentAcademicTerm(),
        }),

      updateUserProfile: (profile) =>
        set((state) => ({
          userProfile: {
            ...state.userProfile,
            ...profile,
          },
        })),

      resetUserProfile: () => set({ userProfile: {} }),

      resetPlan: () =>
        set({
          completedCourses: [],
          plannedTerms: [],
          prerequisiteOverrides: [],
          selectedProgramId: undefined,
          currentTerm: { ...defaultCurrentTerm },
        }),
    }),
    {
      name: studentStorageKey,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        completedCourses: state.completedCourses,
        plannedTerms: state.plannedTerms,
        prerequisiteOverrides: state.prerequisiteOverrides,
        selectedProgramId: state.selectedProgramId,
        userProfile: state.userProfile,
      }),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...(persistedState as Partial<StudentState>),
        currentTerm: getCurrentAcademicTerm(),
      }),
    },
  ),
)
