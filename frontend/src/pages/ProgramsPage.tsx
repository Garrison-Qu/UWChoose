import { Badge } from '../components/Badge'
import { programs } from '../data/programs'
import { formatCourseCode } from '../lib/courseCodes'
import { getProgramProgress } from '../lib/programs'
import { getEffectiveCompletedCourses } from '../lib/studentRecords'
import { useStudentStore } from '../stores/useStudentStore'

export function ProgramsPage() {
  const completedCourses = useStudentStore((state) => state.completedCourses)
  const plannedTerms = useStudentStore((state) => state.plannedTerms)
  const selectedProgramId = useStudentStore((state) => state.selectedProgramId)
  const setSelectedProgram = useStudentStore((state) => state.setSelectedProgram)
  const activeProgram = programs.find((program) => program.id === selectedProgramId) ?? programs[0]
  const effectiveCompletedCourses = getEffectiveCompletedCourses(completedCourses, plannedTerms)
  const progress = getProgramProgress(activeProgram, effectiveCompletedCourses)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Major progress</h1>
        <p className="mt-2 text-slate-600">
          Counts manually completed courses and planner terms marked finished.
        </p>
      </div>

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

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">{activeProgram.name}</h2>
            <p className="mt-1 text-slate-600">
              {progress.completedRequirementCount} of {progress.totalRequirementCount} requirement groups
              complete
            </p>
          </div>
          <strong className="text-3xl">{progress.percentage}%</strong>
        </div>
        <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-emerald-500" style={{ width: `${progress.percentage}%` }} />
        </div>
      </section>

      <div className="grid gap-4">
        {progress.requirements.map((requirementProgress) => (
          <section
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            key={requirementProgress.requirement.id}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold">{requirementProgress.requirement.name}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {requirementProgress.completedCount} of {requirementProgress.requiredCount} required
                </p>
              </div>
              <Badge variant={requirementProgress.isComplete ? 'completed' : 'blocked'}>
                {requirementProgress.isComplete ? 'Complete' : 'Missing'}
              </Badge>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {requirementProgress.requirement.courses.map((courseCode) => (
                <Badge
                  key={courseCode}
                  variant={
                    requirementProgress.completedCourses.includes(courseCode) ? 'completed' : 'default'
                  }
                >
                  {formatCourseCode(courseCode)}
                </Badge>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
