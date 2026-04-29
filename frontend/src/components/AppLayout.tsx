import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/uwchoose_logo.png'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/completed', label: 'Completed' },
  { to: '/eligible', label: 'Eligible' },
  { to: '/programs', label: 'Programs' },
  { to: '/planner', label: 'Planner' },
  { to: '/graph', label: 'Graph' },
]

export function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <NavLink to="/" className="flex items-center gap-3" aria-label="UWChoose home">
              <img src={logo} alt="" className="h-14 w-14 object-contain" />
              <span className="text-xl font-semibold tracking-tight">UWChoose</span>
            </NavLink>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
              Browser MVP
            </span>
          </div>

          <nav className="flex gap-2 overflow-x-auto pb-1" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-950 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                  }`
                }
                end={item.to === '/'}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
