import { useState } from 'react'
import { ProgramMultiPicker } from '../components/ProgramMultiPicker'
import { useCatalog } from '../lib/catalogContext'
import { degrees } from '../data/programs'
import { loadPlanOnline, savePlanOnline } from '../lib/planApi'
import {
  cleanUnavailableSelections,
  getAvailableJointPrograms,
  getAvailableMinorPrograms,
  getAvailableOptionPrograms,
  getAvailableSpecializationPrograms,
  getMajorPrograms,
  getSelectedMajorIds,
  maxMajorSelections,
  maxSingleProgramSelections,
} from '../lib/programSelection'
import { terms } from '../lib/terms'
import { useAuthStore } from '../stores/useAuthStore'
import { useStudentStore } from '../stores/useStudentStore'
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

export function ProfilePage() {
  const { programs } = useCatalog()
  const [message, setMessage] = useState<string>()
  const [isSyncing, setIsSyncing] = useState(false)
  const user = useAuthStore((state) => state.user)
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
  const hasProfileMajorSelection =
    (academicSelections.majorProgramIds?.length ?? 0) > 0 ||
    Boolean(academicSelections.majorProgramId) ||
    Boolean(userProfile.programId)
  const majorPrograms = getMajorPrograms(programs)
  const activeProgramIds = getSelectedMajorIds(
    academicSelections,
    userProfile.programId ?? (hasProfileMajorSelection ? undefined : selectedProgramId),
  )
  const availableJointPrograms = getAvailableJointPrograms(programs, activeProgramIds)
  const availableMinorPrograms = getAvailableMinorPrograms(programs, activeProgramIds)
  const availableSpecializationPrograms = getAvailableSpecializationPrograms(programs, activeProgramIds)
  const availableOptionPrograms = getAvailableOptionPrograms(programs, activeProgramIds)
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
    const nextSelections = cleanUnavailableSelections(
      programs,
      {
        ...academicSelections,
        ...updates,
      },
      activeProgramIds,
    )

    updateUserProfile({
      academicSelections: nextSelections,
    })
  }

  function updateMajorPrograms(programIds: string[]) {
    const primaryProgramId = programIds[0]
    const nextSelections = cleanUnavailableSelections(
      programs,
      {
        ...academicSelections,
        majorProgramId: primaryProgramId,
        majorProgramIds: programIds,
      },
      programIds,
    )

    updateUserProfile({
      programId: primaryProgramId,
      academicSelections: nextSelections,
    })

    if (primaryProgramId) {
      setSelectedProgram(primaryProgramId)
    }
  }

  async function handleSaveProfilePlan() {
    if (!user) {
      setMessage('Sign in with your Waterloo email to save profile plans online.')
      return
    }

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

    if (!user) {
      setMessage('Sign in with your Waterloo email to load profile plans.')
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

          <ProgramMultiPicker
            label="Major and double major programs"
            maxSelections={maxMajorSelections}
            options={majorPrograms}
            selectedIds={activeProgramIds}
            onChange={updateMajorPrograms}
          />

          <ProgramMultiPicker
            disabledMessage={activeProgramIds.length === 0 ? 'Choose a major first.' : undefined}
            label="Joint honours programs"
            maxSelections={maxSingleProgramSelections}
            options={availableJointPrograms}
            selectedIds={academicSelections.jointProgramIds ?? []}
            onChange={(jointProgramIds) => updateAcademicSelections({ jointProgramIds })}
          />

          <ProgramMultiPicker
            disabledMessage={activeProgramIds.length === 0 ? 'Choose a major first.' : undefined}
            label="Minors"
            maxSelections={maxSingleProgramSelections}
            options={availableMinorPrograms}
            selectedIds={academicSelections.minorProgramIds ?? []}
            onChange={(minorProgramIds) => updateAcademicSelections({ minorProgramIds })}
          />

          <ProgramMultiPicker
            disabledMessage={activeProgramIds.length === 0 ? 'Choose a major first.' : undefined}
            label="Specializations"
            maxSelections={maxSingleProgramSelections}
            options={availableSpecializationPrograms}
            selectedIds={academicSelections.specializationProgramIds ?? []}
            onChange={(specializationProgramIds) =>
              updateAcademicSelections({ specializationProgramIds })
            }
          />

          <ProgramMultiPicker
            disabledMessage={activeProgramIds.length === 0 ? 'Choose a major first.' : undefined}
            label="Options"
            maxSelections={maxSingleProgramSelections}
            options={availableOptionPrograms}
            selectedIds={academicSelections.optionProgramIds ?? []}
            onChange={(optionProgramIds) => updateAcademicSelections({ optionProgramIds })}
          />

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
            disabled={isSyncing || !user}
            type="button"
            onClick={handleSaveProfilePlan}
          >
            Save current plan online
          </button>
          <button
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSyncing || !linkedPlanId || !user}
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

        {!user ? (
          <p className="mt-3 text-sm text-slate-600">
            Profile edits are temporary while signed out. Sign in with a Waterloo email to save them online.
          </p>
        ) : null}

        {message ? (
          <p className="mt-3 text-sm text-slate-600" role="status">
            {message}
          </p>
        ) : null}
      </section>
    </div>
  )
}
