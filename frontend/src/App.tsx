import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { CourseDetailPage } from './pages/CourseDetailPage'
import { CoursesPage } from './pages/CoursesPage'
import { HomePage } from './pages/HomePage'
import { PlannerPage } from './pages/PlannerPage'
import { ProgramsPage } from './pages/ProgramsPage'

const GraphPage = lazy(() => import('./pages/GraphPage').then((module) => ({ default: module.GraphPage })))

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:code" element={<CourseDetailPage />} />
        <Route
          path="graph"
          element={
            <Suspense
              fallback={
                <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
                  Loading graph...
                </div>
              }
            >
              <GraphPage />
            </Suspense>
          }
        />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="planner" element={<PlannerPage />} />
      </Route>
    </Routes>
  )
}

export default App
