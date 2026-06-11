import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Badge } from './Badge'
import { matchesProgramSearch } from '../lib/programSelection'
import type { Program } from '../types/program'

type ProgramMultiPickerProps = {
  disabledMessage?: string
  label: string
  maxSelections?: number
  onChange: (programIds: string[]) => void
  options: Program[]
  selectedIds: string[]
}

function getSummary(selectedPrograms: Program[], label: string): string {
  if (selectedPrograms.length === 0) {
    return `No ${label.toLowerCase()} selected`
  }

  if (selectedPrograms.length === 1) {
    return selectedPrograms[0].name
  }

  return `${selectedPrograms.length} selected`
}

export function ProgramMultiPicker({
  disabledMessage,
  label,
  maxSelections = Number.POSITIVE_INFINITY,
  onChange,
  options,
  selectedIds,
}: ProgramMultiPickerProps) {
  const panelId = useId()
  const pickerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const selectedPrograms = selectedIds
    .map((programId) => options.find((program) => program.id === programId))
    .filter((program): program is Program => Boolean(program))
  const filteredOptions = useMemo(
    () => options.filter((program) => matchesProgramSearch(program, searchTerm)),
    [options, searchTerm],
  )

  function toggleProgram(programId: string) {
    if (selectedIds.includes(programId)) {
      onChange(selectedIds.filter((selectedId) => selectedId !== programId))
      return
    }

    if (selectedIds.length >= maxSelections) {
      onChange([...selectedIds.slice(1), programId])
      return
    }

    onChange([...selectedIds, programId])
  }

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function handlePointerDown(event: PointerEvent) {
      if (!pickerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus()
    } else {
      setSearchTerm('')
    }
  }, [isOpen])

  return (
    <div className="relative text-sm font-medium text-slate-700" ref={pickerRef}>
      <span>{label}</span>
      <div
        className={`mt-1 rounded-xl border bg-white shadow-sm transition-all ${
          isOpen
            ? 'border-emerald-400 ring-2 ring-emerald-100'
            : 'border-slate-300 hover:border-slate-400'
        }`}
      >
        <button
          aria-controls={panelId}
          aria-expanded={isOpen}
          className="flex min-h-11 w-full items-center justify-between gap-3 px-3 text-left"
          type="button"
          onClick={() => setIsOpen((currentValue) => !currentValue)}
        >
          <span className="truncate text-slate-700">{getSummary(selectedPrograms, label)}</span>
          <Badge>{selectedPrograms.length}</Badge>
        </button>

        {isOpen ? (
        <div className="border-t border-slate-100 p-3" id={panelId}>
          <input
            ref={searchInputRef}
            className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm font-normal text-slate-900 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            placeholder={`Search ${label.toLowerCase()}`}
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <div className="mt-3 max-h-56 overflow-y-auto rounded-lg border border-slate-200">
            {disabledMessage ? (
              <p className="px-3 py-3 text-sm font-normal text-slate-500">{disabledMessage}</p>
            ) : filteredOptions.length === 0 ? (
              <p className="px-3 py-3 text-sm font-normal text-slate-500">No matching programs.</p>
            ) : (
              filteredOptions.map((program) => {
                const isSelected = selectedIds.includes(program.id)
                const isAtLimit = !isSelected && selectedIds.length >= maxSelections

                return (
                  <label
                    className="flex cursor-pointer items-start gap-3 border-b border-slate-100 px-3 py-2 last:border-b-0 hover:bg-slate-50"
                    key={program.id}
                  >
                    <input
                      checked={isSelected}
                      className="mt-1"
                      type="checkbox"
                      aria-label={isAtLimit ? `Replace selected ${label.toLowerCase()} with ${program.name}` : undefined}
                      onChange={() => toggleProgram(program.id)}
                    />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium text-slate-900">
                        {program.name}
                      </span>
                      {program.code ? (
                        <span className="block truncate text-xs font-normal text-slate-500">
                          {program.code}
                        </span>
                      ) : null}
                    </span>
                  </label>
                )
              })
            )}
          </div>
        </div>
        ) : null}
      </div>
    </div>
  )
}
