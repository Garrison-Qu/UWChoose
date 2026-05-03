import { useState } from 'react'
import { loadPlanOnline, savePlanOnline, updatePlanOnline } from '../lib/planApi'
import { useStudentStore } from '../stores/useStudentStore'

export function PlanBackupPanel() {
  const [message, setMessage] = useState<string>()
  const [shareCodeInput, setShareCodeInput] = useState('')
  const [savedPlanId, setSavedPlanId] = useState<string>()
  const [isSyncing, setIsSyncing] = useState(false)
  const exportPlan = useStudentStore((state) => state.exportPlan)
  const importPlan = useStudentStore((state) => state.importPlan)
  const resetPlan = useStudentStore((state) => state.resetPlan)

  function handleExport() {
    setMessage('Use the print dialog to save this planner as a PDF.')
    window.print()
  }

  function getOnlinePlanMessage(error: unknown, fallbackMessage: string) {
    if (!(error instanceof Error)) {
      return fallbackMessage
    }

    if (error.message === 'Failed to fetch' || error.message.includes('NetworkError')) {
      return 'Could not reach the backend API. Check that the backend is running and VITE_API_BASE_URL is set correctly.'
    }

    return error.message
  }

  async function handleSaveOnline() {
    setIsSyncing(true)
    setMessage(undefined)

    try {
      const savedPlan = await savePlanOnline(exportPlan())

      setSavedPlanId(savedPlan.id)
      setShareCodeInput(savedPlan.id)
      setMessage(`Plan saved online. Share code: ${savedPlan.id}`)
    } catch (error) {
      setMessage(getOnlinePlanMessage(error, 'Could not save plan online.'))
    } finally {
      setIsSyncing(false)
    }
  }

  async function handleUpdateOnline() {
    if (!savedPlanId) {
      return
    }

    setIsSyncing(true)
    setMessage(undefined)

    try {
      await updatePlanOnline(savedPlanId, exportPlan())
      setMessage(`Saved plan ${savedPlanId} updated.`)
    } catch (error) {
      setMessage(getOnlinePlanMessage(error, 'Could not update saved plan.'))
    } finally {
      setIsSyncing(false)
    }
  }

  async function handleLoadOnline() {
    const shareCode = shareCodeInput.trim()

    if (!shareCode) {
      setMessage('Enter a share code to load a saved plan.')
      return
    }

    setIsSyncing(true)
    setMessage(undefined)

    try {
      const savedPlan = await loadPlanOnline(shareCode)

      importPlan(savedPlan.plan)
      setSavedPlanId(savedPlan.id)
      setShareCodeInput(savedPlan.id)
      setMessage(`Loaded saved plan ${savedPlan.id}.`)
    } catch (error) {
      setMessage(getOnlinePlanMessage(error, 'Could not load saved plan.'))
    } finally {
      setIsSyncing(false)
    }
  }

  return (
    <section className="no-print rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-semibold">Planner export</h2>
          <p className="mt-1 text-sm text-slate-600">
            Export the visible planner, save a share code, or reset your local browser plan.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSyncing}
            type="button"
            onClick={handleSaveOnline}
          >
            Save online
          </button>
          {savedPlanId ? (
            <button
              className="rounded-xl border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSyncing}
              type="button"
              onClick={handleUpdateOnline}
            >
              Update saved plan
            </button>
          ) : null}
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
              setSavedPlanId(undefined)
              setMessage('Plan reset.')
            }}
          >
            Reset plan
          </button>
        </div>
      </div>

      <form
        className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]"
        onSubmit={(event) => {
          event.preventDefault()
          void handleLoadOnline()
        }}
      >
        <input
          className="h-11 rounded-xl border border-slate-300 px-3"
          placeholder="Enter share code"
          value={shareCodeInput}
          onChange={(event) => setShareCodeInput(event.target.value)}
        />
        <button
          className="h-11 rounded-xl border border-slate-300 px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isSyncing}
          type="submit"
        >
          Load code
        </button>
      </form>

      {message ? (
        <p className="mt-3 text-sm text-slate-600" role="status">
          {message}
        </p>
      ) : null}
    </section>
  )
}
