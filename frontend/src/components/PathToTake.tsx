import { Link } from 'react-router-dom'
import { formatCourseCode } from '../lib/courseCodes'
import type { PathExplanation } from '../lib/pathPlanner'

type PathToTakeProps = {
  explanation: PathExplanation
}

export function PathToTake({ explanation }: PathToTakeProps) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <h3 className="font-semibold text-slate-950">{explanation.title}</h3>

      {explanation.status === 'path' ? (
        <div className="mt-4 space-y-4">
          {explanation.steps.map((step, index) => (
            <section key={`${step.title}-${index}`}>
              <p className="text-sm font-semibold text-slate-700">Step {index + 1}</p>
              <p className="mt-1 text-sm text-slate-600">{step.title}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {step.options.map((option) => (
                  <Link
                    className="rounded-full bg-white px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-slate-200 hover:text-emerald-800"
                    key={`${step.title}-${option.courseCode}-${option.label}`}
                    to={`/courses/${option.courseCode}`}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <section>
            <p className="text-sm font-semibold text-slate-700">Then</p>
            <Link
              className="mt-2 inline-flex rounded-full bg-white px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-slate-200 hover:text-emerald-800"
              to={`/courses/${explanation.finalCourseCode}`}
            >
              {formatCourseCode(explanation.finalCourseCode)}
            </Link>
          </section>
        </div>
      ) : (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
          {explanation.reasons.length === 0 ? (
            <li>No extra prerequisite path is needed.</li>
          ) : (
            explanation.reasons.map((reason) => <li key={reason}>{reason}</li>)
          )}
        </ul>
      )}

      {explanation.schedule.length > 0 ? (
        <section className="mt-5 border-t border-slate-200 pt-4">
          <p className="text-sm font-semibold text-slate-700">Fastest term arrangement</p>
          <ol className="mt-3 space-y-3">
            {explanation.schedule.map((step) => (
              <li key={step.termLabel}>
                <strong>{step.termLabel}</strong>
                <div className="mt-2 flex flex-wrap gap-2">
                  {step.courseCodes.map((courseCode) => (
                    <Link
                      className="rounded-full bg-white px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-slate-200 hover:text-emerald-800"
                      key={`${step.termLabel}-${courseCode}`}
                      to={`/courses/${courseCode}`}
                    >
                      {formatCourseCode(courseCode)}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </div>
  )
}
