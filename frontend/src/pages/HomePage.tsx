import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const homeLinks = [
  { to: '/courses', title: 'Course Search', description: 'Find courses by code, name, subject, or level.' },
  { to: '/completed', title: 'Completed Courses', description: 'Record courses and grades for prerequisite checks.' },
  { to: '/eligible', title: 'Eligible Courses', description: 'See what you can take next and what is blocked.' },
  { to: '/programs', title: 'Major Progress', description: 'Track sample Math program requirements.' },
  { to: '/planner', title: 'Term Planner', description: 'Sketch future terms and check basic conflicts.' },
  { to: '/graph', title: 'Prerequisite Graph', description: 'Read prerequisite trees before graph visualization is added.' },
]

export function HomePage() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  return (
    <div className="space-y-10">
      <section className="mx-auto max-w-3xl py-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">UWChoose</h1>
        <p className="mt-4 text-lg text-slate-600">Plan Waterloo Math courses smarter.</p>

        <form
          className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
          role="search"
          onSubmit={(event) => {
            event.preventDefault()
            navigate(`/courses?q=${encodeURIComponent(query)}`)
          }}
        >
          <label className="sr-only" htmlFor="home-course-search">
            Search courses
          </label>
          <input
            className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            id="home-course-search"
            placeholder="Search CO 367, real analysis, STAT..."
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="h-12 rounded-xl bg-slate-950 px-6 font-semibold text-white hover:bg-slate-800">
            Search
          </button>
        </form>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {homeLinks.map((item) => (
          <Link
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            key={item.to}
            to={item.to}
          >
            <h2 className="text-lg font-semibold text-slate-950">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </Link>
        ))}
      </section>
    </div>
  )
}
