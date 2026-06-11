import { Link } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { ProgramMultiPicker } from '../components/ProgramMultiPicker'
import { degrees } from '../data/programs'
import { useCatalog } from '../lib/catalogContext'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import {
  cleanUnavailableSelections,
  getAvailableJointPrograms,
  getAvailableMinorPrograms,
  getAvailableOptionPrograms,
  getAvailableSpecializationPrograms,
  getMajorPrograms,
  getProgramTypeLabel,
  getSelectedMajorIds,
  maxMajorSelections,
  maxSingleProgramSelections,
} from '../lib/programSelection'
import { getProgramProgress } from '../lib/programs'
import { getEffectiveCompletedCourses } from '../lib/studentRecords'
import { isFinishedByDate } from '../lib/terms'
import { useStudentStore } from '../stores/useStudentStore'
import type { Program } from '../types/program'

function uniquePrograms(programs: Program[]): Program[] {
  return [...new Map(programs.map((program) => [program.id, program])).values()]
}

export function ProgramsPage() {
  const { programs } = useCatalog()
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const plannedTerms = useStudentStore((state) => state.plannedTerms)
  const currentTerm = useStudentStore((state) => state.currentTerm)
  const selectedProgramId = useStudentStore((state) => state.selectedProgramId)
  const setSelectedProgram = useStudentStore((state) => state.setSelectedProgram)
  const userProfile = useStudentStore((state) => state.userProfile)
  const updateUserProfile = useStudentStore((state) => state.updateUserProfile)
  const academicSelections = userProfile.academicSelections ?? {}
  const hasProfileMajorSelection =
    (academicSelections.majorProgramIds?.length ?? 0) > 0 ||
    Boolean(academicSelections.majorProgramId) ||
    Boolean(userProfile.programId)
  const majorPrograms = getMajorPrograms(programs)
  const selectedMajorIds = getSelectedMajorIds(
    academicSelections,
    userProfile.programId ?? (hasProfileMajorSelection ? undefined : selectedProgramId),
  )
  const availableJointPrograms = getAvailableJointPrograms(programs, selectedMajorIds)
  const availableMinorPrograms = getAvailableMinorPrograms(programs, selectedMajorIds)
  const availableSpecializationPrograms = getAvailableSpecializationPrograms(programs, selectedMajorIds)
  const availableOptionPrograms = getAvailableOptionPrograms(programs, selectedMajorIds)
  const degreeRequirementPrograms = programs.filter(
    (program) => program.category === 'degree-requirement',
  )
  const activePrograms = uniquePrograms(
    [
      ...degreeRequirementPrograms.filter((program) =>
        academicSelections.degreeId
          ? program.degreeIds?.includes(academicSelections.degreeId)
          : false,
      ),
      ...selectedMajorIds.map((programId) => programs.find((program) => program.id === programId)),
      ...(academicSelections.jointProgramIds ?? []).map((programId) =>
        programs.find((program) => program.id === programId),
      ),
      ...(academicSelections.minorProgramIds ?? []).map((programId) =>
        programs.find((program) => program.id === programId),
      ),
      ...(academicSelections.specializationProgramIds ?? []).map((programId) =>
        programs.find((program) => program.id === programId),
      ),
      ...(academicSelections.optionProgramIds ?? []).map((programId) =>
        programs.find((program) => program.id === programId),
      ),
    ].filter((program): program is Program => Boolean(program)),
  )
  const effectiveCompletedCourses = getEffectiveCompletedCourses(
    completedCourses,
    plannedTerms,
    currentTerm,
  )
  const completedCodes = new Set(
    effectiveCompletedCourses.map((course) => normalizeCourseCode(course.courseCode)),
  )
  const plannedCodes = new Set(
    plannedTerms
      .filter((term) => !isFinishedByDate(term, currentTerm))
      .flatMap((term) => term.courseCodes.map(normalizeCourseCode)),
  )

  function updateAcademicSelections(updates: NonNullable<typeof userProfile.academicSelections>) {
    const nextSelections = cleanUnavailableSelections(
      programs,
      {
        ...academicSelections,
        ...updates,
      },
      selectedMajorIds,
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

  if (programs.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Program progress</h1>
          <p className="mt-2 text-slate-600">
            Use this as a checklist. Completed courses are crossed off; planned courses count toward projected progress.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-slate-600">
          No programs are available in the catalog.
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Program progress</h1>
        <p className="mt-2 text-slate-600">
          Use this as a checklist. Completed courses are crossed off; planned courses count toward projected progress.
        </p>
      </div>

      <section className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2">
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
          selectedIds={selectedMajorIds}
          onChange={updateMajorPrograms}
        />

        <ProgramMultiPicker
          disabledMessage={selectedMajorIds.length === 0 ? 'Choose a major first.' : undefined}
          label="Joint honours programs"
          maxSelections={maxSingleProgramSelections}
          options={availableJointPrograms}
          selectedIds={academicSelections.jointProgramIds ?? []}
          onChange={(jointProgramIds) => updateAcademicSelections({ jointProgramIds })}
        />

        <ProgramMultiPicker
          disabledMessage={selectedMajorIds.length === 0 ? 'Choose a major first.' : undefined}
          label="Minors"
          maxSelections={maxSingleProgramSelections}
          options={availableMinorPrograms}
          selectedIds={academicSelections.minorProgramIds ?? []}
          onChange={(minorProgramIds) => updateAcademicSelections({ minorProgramIds })}
        />

        <ProgramMultiPicker
          disabledMessage={selectedMajorIds.length === 0 ? 'Choose a major first.' : undefined}
          label="Specializations"
          maxSelections={maxSingleProgramSelections}
          options={availableSpecializationPrograms}
          selectedIds={academicSelections.specializationProgramIds ?? []}
          onChange={(specializationProgramIds) =>
            updateAcademicSelections({ specializationProgramIds })
          }
        />

        <ProgramMultiPicker
          disabledMessage={selectedMajorIds.length === 0 ? 'Choose a major first.' : undefined}
          label="Options"
          maxSelections={maxSingleProgramSelections}
          options={availableOptionPrograms}
          selectedIds={academicSelections.optionProgramIds ?? []}
          onChange={(optionProgramIds) => updateAcademicSelections({ optionProgramIds })}
        />
      </section>

      {activePrograms.map((activeProgram) => {
        const progress = getProgramProgress(activeProgram, completedCourses, plannedTerms, currentTerm)

        return (
          <div className="space-y-4" key={activeProgram.id}>
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-semibold">{activeProgram.name}</h2>
                    <Badge>{getProgramTypeLabel(activeProgram)}</Badge>
                  </div>
                  <p className="mt-1 text-slate-600">
                    {progress.completedRequirementCount} complete groups,{' '}
                    {progress.projectedRequirementCount} projected complete groups
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-500">Current</p>
                  <strong className="text-3xl">{progress.currentPercentage}%</strong>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <div className="mb-2 flex justify-between text-sm text-slate-600">
                    <span>Current progress</span>
                    <span>
                      {progress.completedCourseCount} / {progress.totalRequiredCourseCount}
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${progress.currentPercentage}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm text-slate-600">
                    <span>Projected progress with planned courses</span>
                    <span>
                      {progress.projectedCourseCount} / {progress.totalRequiredCourseCount}
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-violet-500"
                      style={{ width: `${progress.projectedPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="grid gap-4">
              {progress.requirements.map((requirementProgress) => (
                <section
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  key={`${activeProgram.id}-${requirementProgress.requirement.id}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{requirementProgress.requirement.name}</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Choose {requirementProgress.requiredCount} of{' '}
                        {requirementProgress.requirement.courses.length}
                      </p>
                    </div>
                    <Badge
                      variant={
                        requirementProgress.isComplete
                          ? 'completed'
                          : requirementProgress.isProjectedComplete
                            ? 'planned'
                            : 'blocked'
                      }
                    >
                      {requirementProgress.isComplete
                        ? 'Complete'
                        : requirementProgress.isProjectedComplete
                          ? 'Projected'
                          : 'Missing'}
                    </Badge>
                  </div>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {requirementProgress.requirement.courses.map((courseCode) => (
                      <li
                        className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                        key={courseCode}
                      >
                        <Link
                          className={
                            completedCodes.has(courseCode)
                              ? 'font-medium text-slate-400 underline-offset-4 line-through hover:text-slate-600 hover:underline'
                              : 'font-medium text-slate-900 underline-offset-4 hover:text-emerald-700 hover:underline'
                          }
                          to={`/courses/${courseCode}`}
                        >
                          {formatCourseCode(courseCode)}
                        </Link>
                        {completedCodes.has(courseCode) ? (
                          <Badge variant="completed">Completed</Badge>
                        ) : plannedCodes.has(courseCode) ? (
                          <Badge variant="planned">Planned</Badge>
                        ) : (
                          <Badge>Missing</Badge>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
