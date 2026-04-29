import { useRef, useState } from 'react'
import { normalizePlanBackup } from '../lib/planBackup'
import { useStudentStore } from '../stores/useStudentStore'

export function PlanBackupPanel() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<string>()
  const exportPlan = useStudentStore((state) => state.exportPlan)
  const importPlan = useStudentStore((state) => state.importPlan)
  const resetPlan = useStudentStore((state) => state.resetPlan)

  function handleExport() {
    const plan = exportPlan()
    const blob = new Blob([JSON.stringify(plan, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = url
    link.download = `uwchoose-plan-${new Date().toISOString().slice(0, 10)}.json`
    link.click()
    URL.revokeObjectURL(url)
    setMessage('Plan exported.')
  }

  async function handleImport(file: File | undefined) {
    if (!file) {
      return
    }

    try {
      const text = await file.text()
      const plan = normalizePlanBackup(JSON.parse(text))

      importPlan(plan)
      setMessage('Plan imported.')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Could not import plan.')
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-semibold">Plan backup</h2>
          <p className="mt-1 text-sm text-slate-600">
            Export, import, or reset your local browser plan.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-300"
            type="button"
            onClick={handleExport}
          >
            Export plan
          </button>
          <button
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            type="button"
            onClick={() => fileInputRef.current?.click()}
          >
            Import plan
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

      <input
        accept="application/json"
        className="hidden"
        ref={fileInputRef}
        type="file"
        onChange={(event) => void handleImport(event.target.files?.[0])}
      />

      {message ? <p className="mt-3 text-sm text-slate-600">{message}</p> : null}
    </section>
  )
}
