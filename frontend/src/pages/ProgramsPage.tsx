import { Badge } from '../components/Badge'
import { programs } from '../data/programs'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import { getProgramProgress } from '../lib/programs'
import { getEffectiveCompletedCourses } from '../lib/studentRecords'
import { isFinishedByDate } from '../lib/terms'
import { useStudentStore } from '../stores/useStudentStore'

export function ProgramsPage() {
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const plannedTerms = useStudentStore((state) => state.plannedTerms)
  const currentTerm = useStudentStore((state) => state.currentTerm)
  const selectedProgramId = useStudentStore((state) => state.selectedProgramId)
  const setSelectedProgram = useStudentStore((state) => state.setSelectedProgram)
  const activeProgram = programs.find((program) => program.id === selectedProgramId) ?? programs[0]
  const progress = getProgramProgress(activeProgram, completedCourses, plannedTerms, currentTerm)
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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Major progress</h1>
        <p className="mt-2 text-slate-600">
          Use this as a checklist. Completed courses are crossed off; planned courses count toward projected progress.
        </p>
      </div>

      {programs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-slate-600">
          No program selected.
        </div>
      ) : (
        <select
          className="h-11 rounded-xl border border-slate-300 bg-white px-3"
          value={activeProgram.id}
          onChange={(event) => setSelectedProgram(event.target.value)}
        >
          {programs.map((program) => (
            <option key={program.id} value={program.id}>
              {program.name}
            </option>
          ))}
        </select>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">{activeProgram.name}</h2>
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
            key={requirementProgress.requirement.id}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <p className="text-sm text-slate-600">
                Choose {requirementProgress.requiredCount} of{' '}
                {requirementProgress.requirement.courses.length}
              </p>
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
                  <span
                    className={
                      completedCodes.has(courseCode)
                        ? 'font-medium text-slate-400 line-through'
                        : 'font-medium text-slate-900'
                    }
                  >
                    {formatCourseCode(courseCode)}
                  </span>
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
}
