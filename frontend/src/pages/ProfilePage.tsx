import { useState } from 'react'
import { useCatalog } from '../lib/catalogContext'
import { degrees } from '../data/programs'
import { loadPlanOnline, savePlanOnline } from '../lib/planApi'
import { terms } from '../lib/terms'
import { useStudentStore } from '../stores/useStudentStore'
import type { Program } from '../types/program'
import type { SavedPlanProfile } from '../types/student'

function getOnlinePlanMessage(error: unknown, fallbackMessage: string) {
  if (!(error instanceof Error)) {
    return fallbackMessage
  }

  if (error.message === 'Failed to fetch' || error.message.includes('NetworkError')) {
    return 'Could not reach the backend API. Check that the backend is running and VITE_API_BASE_URL is set correctly.'
  }

  return error.message
}

function uniqueIds(ids: Array<string | undefined>): string[] {
  return [...new Set(ids.filter((id): id is string => Boolean(id)))]
}

function getSelectedValues(select: HTMLSelectElement): string[] {
  return [...select.selectedOptions].map((option) => option.value).filter(Boolean)
}

function getProgramTypeLabel(program: Program): string {
  switch (program.category) {
    case 'double-degree':
      return 'Double degree'
    case 'joint':
      return 'Joint honours'
    default:
      return 'Major'
  }
}

export function ProfilePage() {
  const { programs } = useCatalog()
  const [message, setMessage] = useState<string>()
  const [isSyncing, setIsSyncing] = useState(false)
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const plannedTerms = useStudentStore((state) => state.plannedTerms)
  const selectedProgramId = useStudentStore((state) => state.selectedProgramId)
  const userProfile = useStudentStore((state) => state.userProfile)
  const exportPlan = useStudentStore((state) => state.exportPlan)
  const importPlan = useStudentStore((state) => state.importPlan)
  const setSelectedProgram = useStudentStore((state) => state.setSelectedProgram)
  const updateUserProfile = useStudentStore((state) => state.updateUserProfile)
  const resetUserProfile = useStudentStore((state) => state.resetUserProfile)
  const academicSelections = userProfile.academicSelections ?? {}
  const linkedPlanId = userProfile.linkedPlanId
  const majorPrograms = programs.filter(
    (program) => program.category === 'major' || program.category === 'double-degree',
  )
  const jointPrograms = programs.filter((program) => program.category === 'joint')
  const minorPrograms = programs.filter((program) => program.category === 'minor')
  const specializationPrograms = programs.filter((program) => program.category === 'specialization')
  const optionPrograms = programs.filter((program) => program.category === 'option')
  const activeProgramIds = uniqueIds([
    ...(academicSelections.majorProgramIds ?? []),
    academicSelections.majorProgramId,
    userProfile.programId,
    selectedProgramId,
  ])
  const activeProgramId = activeProgramIds[0] ?? ''

  const savedPlanProfile: SavedPlanProfile = {
    displayName: userProfile.displayName,
    programId: activeProgramId || userProfile.programId,
    academicSelections: {
      ...userProfile.academicSelections,
      majorProgramId: activeProgramId || undefined,
      majorProgramIds: activeProgramIds,
    },
    startTerm: userProfile.startTerm,
    startYear: userProfile.startYear,
    notes: userProfile.notes,
  }

  function updateAcademicSelections(updates: NonNullable<SavedPlanProfile['academicSelections']>) {
    updateUserProfile({
      academicSelections: {
        ...academicSelections,
        ...updates,
      },
    })
  }

  async function handleSaveProfilePlan() {
    setIsSyncing(true)
    setMessage(undefined)

    try {
      const savedPlan = await savePlanOnline(exportPlan(), savedPlanProfile)

      updateUserProfile({ linkedPlanId: savedPlan.id })
      setMessage(`Profile and planner saved. Share code: ${savedPlan.id}`)
    } catch (error) {
      setMessage(getOnlinePlanMessage(error, 'Could not save profile plan.'))
    } finally {
      setIsSyncing(false)
    }
  }

  async function handleLoadLinkedPlan() {
    if (!linkedPlanId) {
      setMessage('Link a saved plan before loading.')
      return
    }

    setIsSyncing(true)
    setMessage(undefined)

    try {
      const savedPlan = await loadPlanOnline(linkedPlanId)

      importPlan(savedPlan.plan)
      updateUserProfile({
        ...savedPlan.profile,
        linkedPlanId: savedPlan.id,
      })

      if (savedPlan.profile?.programId) {
        setSelectedProgram(savedPlan.profile.programId)
      }

      setMessage(`Loaded linked plan ${savedPlan.id}.`)
    } catch (error) {
      setMessage(getOnlinePlanMessage(error, 'Could not load linked plan.'))
    } finally {
      setIsSyncing(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="mt-2 text-slate-600">
          Keep a local student profile and link it to an online planner backup.
        </p>
      </div>

      <section className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
        <div>
          <p className="text-sm font-medium text-slate-500">Taken courses</p>
          <strong className="mt-1 block text-2xl">{completedCourses.length}</strong>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Planner terms</p>
          <strong className="mt-1 block text-2xl">{plannedTerms.length}</strong>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Linked share code</p>
          <strong className="mt-1 block break-all text-lg">{linkedPlanId ?? 'None'}</strong>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Display name
            <input
              className="mt-1 h-11 w-full rounded-xl border border-slate-300 px-3"
              value={userProfile.displayName ?? ''}
              onChange={(event) => updateUserProfile({ displayName: event.target.value })}
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Bachelor degree
            <select
              className="mt-1 h-11 w-full rounded-xl border border-slate-300 bg-white px-3"
              value={academicSelections.degreeId ?? ''}
              onChange={(event) =>
                updateAcademicSelections({ degreeId: event.target.value || undefined })
              }
            >
              <option value="">No degree selected</option>
              {degrees.map((degree) => (
                <option key={degree.id} value={degree.id}>
                  {degree.name}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Major and double major programs
            <select
              className="mt-1 min-h-32 w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
              multiple
              value={activeProgramIds}
              onChange={(event) => {
                const programIds = getSelectedValues(event.currentTarget)
                const primaryProgramId = programIds[0]

                updateUserProfile({
                  programId: primaryProgramId,
                  academicSelections: {
                    ...academicSelections,
                    majorProgramId: primaryProgramId,
                    majorProgramIds: programIds,
                  },
                })

                if (primaryProgramId) {
                  setSelectedProgram(primaryProgramId)
                }
              }}
            >
              {majorPrograms.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.name} ({getProgramTypeLabel(program)})
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Joint honours programs
            <select
              className="mt-1 min-h-32 w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
              multiple
              value={academicSelections.jointProgramIds ?? []}
              onChange={(event) =>
                updateAcademicSelections({
                  jointProgramIds: getSelectedValues(event.currentTarget),
                })
              }
            >
              {jointPrograms.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.name}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Minors
            <select
              className="mt-1 min-h-32 w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
              multiple
              value={academicSelections.minorProgramIds ?? []}
              onChange={(event) =>
                updateAcademicSelections({
                  minorProgramIds: getSelectedValues(event.currentTarget),
                })
              }
            >
              {minorPrograms.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.name}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Specializations
            <select
              className="mt-1 min-h-32 w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
              multiple
              value={academicSelections.specializationProgramIds ?? []}
              onChange={(event) =>
                updateAcademicSelections({
                  specializationProgramIds: getSelectedValues(event.currentTarget),
                })
              }
            >
              {specializationPrograms.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.name}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Options
            <select
              className="mt-1 min-h-32 w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
              multiple
              value={academicSelections.optionProgramIds ?? []}
              onChange={(event) =>
                updateAcademicSelections({
                  optionProgramIds: getSelectedValues(event.currentTarget),
                })
              }
            >
              {optionPrograms.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.name}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Start term
            <select
              className="mt-1 h-11 w-full rounded-xl border border-slate-300 bg-white px-3"
              value={userProfile.startTerm ?? ''}
              onChange={(event) =>
                updateUserProfile({
                  startTerm: event.target.value
                    ? event.target.value as SavedPlanProfile['startTerm']
                    : undefined,
                })
              }
            >
              <option value="">Not set</option>
              {terms.map((term) => (
                <option key={term} value={term}>
                  {term}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Start year
            <input
              className="mt-1 h-11 w-full rounded-xl border border-slate-300 px-3"
              min="2020"
              type="number"
              value={userProfile.startYear ?? ''}
              onChange={(event) =>
                updateUserProfile({
                  startYear: event.target.value ? Number(event.target.value) : undefined,
                })
              }
            />
          </label>
        </div>

        <label className="mt-4 block text-sm font-medium text-slate-700">
          Notes and interests
          <textarea
            className="mt-1 min-h-28 w-full rounded-xl border border-slate-300 p-3"
            value={userProfile.notes ?? ''}
            onChange={(event) => updateUserProfile({ notes: event.target.value })}
          />
        </label>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap gap-2">
          <button
            className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSyncing}
            type="button"
            onClick={handleSaveProfilePlan}
          >
            Save current plan online
          </button>
          <button
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSyncing || !linkedPlanId}
            type="button"
            onClick={handleLoadLinkedPlan}
          >
            Load linked plan
          </button>
          <button
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            type="button"
            onClick={() => {
              updateUserProfile({ linkedPlanId: undefined })
              setMessage('Saved plan unlinked from this browser profile.')
            }}
          >
            Unlink saved plan
          </button>
          <button
            className="rounded-xl border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-50"
            type="button"
            onClick={() => {
              resetUserProfile()
              setMessage('Profile reset.')
            }}
          >
            Reset profile
          </button>
        </div>

        {message ? (
          <p className="mt-3 text-sm text-slate-600" role="status">
            {message}
          </p>
        ) : null}
      </section>
    </div>
  )
}
