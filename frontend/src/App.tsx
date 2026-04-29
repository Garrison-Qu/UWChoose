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
          <h1 id="page-title">Find Waterloo course reviews</h1>
          <p>Search courses by code, subject, or keyword. Compare ratings before choosing your term.</p>

          <form className="search-form" role="search">
            <label className="visually-hidden" htmlFor="course-search">Search courses</label>
            <input
              id="course-search"
              type="search"
              placeholder="Search CS 246, MATH 239, elective..."
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
