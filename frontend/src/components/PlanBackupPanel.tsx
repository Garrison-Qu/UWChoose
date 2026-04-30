import { useState } from 'react'
import { useStudentStore } from '../stores/useStudentStore'

export function PlanBackupPanel() {
  const [message, setMessage] = useState<string>()
  const resetPlan = useStudentStore((state) => state.resetPlan)

  function handleExport() {
    setMessage('Use the print dialog to save this planner as a PDF.')
    window.print()
  }

  return (
    <section className="no-print rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-semibold">Planner export</h2>
          <p className="mt-1 text-sm text-slate-600">
            Export the visible planner as a PDF, or reset your local browser plan.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-300"
            type="button"
            onClick={handleExport}
          >
            Export PDF
          </button>
          <button
            className="rounded-xl border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-50"
            type="button"
            onClick={() => {
              resetPlan()
              setMessage('Plan reset.')
            }}
          >
            Reset plan
          </button>
        </div>
      </div>

      {message ? <p className="mt-3 text-sm text-slate-600">{message}</p> : null}
    </section>
  )
}
