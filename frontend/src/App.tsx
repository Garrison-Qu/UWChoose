import { useState } from 'react'
import logo from './assets/uwchoose_logo.png'
import './App.css'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="UWChoose home">
          <img src={logo} alt="" />
        </a>
        <button className="text-button" type="button">Sign in</button>
      </header>

      <main>
        <section className="hero" aria-labelledby="page-title">
          <h1 id="page-title">Explore your path at UW</h1>
          <p>Discover courses, plan your schedule, and find your way to graduation.</p>

          <form className="search-form" role="search">
            <label className="visually-hidden" htmlFor="course-search">Search courses</label>
            <input
              id="course-search"
              type="search"
              placeholder="Search by subject, course code, or keyword"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit" onClick={(event) => event.preventDefault()}>Search</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
