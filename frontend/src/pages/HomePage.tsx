import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function HomePage() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  return (
    <div>
      <section className="mx-auto max-w-3xl py-16 text-center">
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
          <button className="h-12 rounded-xl bg-slate-200 px-6 font-semibold text-slate-950 hover:bg-slate-300">
            Search
          </button>
        </form>
      </section>
    </div>
  )
}
