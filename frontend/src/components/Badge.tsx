import type { ReactNode } from 'react'

type BadgeVariant =
  | 'default'
  | 'eligible'
  | 'blocked'
  | 'completed'
  | 'planned'
  | 'covered'
  | 'override'
  | 'term'

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-slate-100 text-slate-700 ring-slate-200',
  eligible: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  blocked: 'bg-rose-50 text-rose-700 ring-rose-200',
  completed: 'bg-blue-50 text-blue-700 ring-blue-200',
  planned: 'bg-violet-50 text-violet-700 ring-violet-200',
  covered: 'bg-cyan-50 text-cyan-700 ring-cyan-200',
  override: 'bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200',
  term: 'bg-amber-50 text-amber-800 ring-amber-200',
}

type BadgeProps = {
  children: ReactNode
  variant?: BadgeVariant
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}
