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
        <div className="nav-links">
          <a href="#reviews">Reviews</a>
          <a href="#about">About</a>
        </div>
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

        <section className="two-column">
          <div className="panel" id="reviews">
            <h2>Recent reviews</h2>
            <ul className="review-list">
              <li>
                <strong>CS 246</strong>
                <p>The assignments take time, but the course is useful if you want stronger C++ fundamentals.</p>
              </li>
              <li>
                <strong>MATH 239</strong>
                <p>Harder than average. Office hours help a lot once the graph theory material starts.</p>
              </li>
              <li>
                <strong>PSYCH 101</strong>
                <p>Good elective beside a heavier technical term. Readings are manageable.</p>
              </li>
            </ul>
          </div>

          <div className="panel" id="about">
            <h2>About</h2>
            <p>
              UWChoose is a simple course review index for Waterloo students. This first page uses
              sample data and is ready to connect to a real course API later.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
