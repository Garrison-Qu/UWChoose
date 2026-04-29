import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { CompletedCoursesPage } from './pages/CompletedCoursesPage'
import { CourseDetailPage } from './pages/CourseDetailPage'
import { CoursesPage } from './pages/CoursesPage'
import { EligibleCoursesPage } from './pages/EligibleCoursesPage'
import { HomePage } from './pages/HomePage'
import { PlannerPage } from './pages/PlannerPage'
import { ProgramsPage } from './pages/ProgramsPage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:code" element={<CourseDetailPage />} />
        <Route path="completed" element={<CompletedCoursesPage />} />
        <Route path="eligible" element={<EligibleCoursesPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="planner" element={<PlannerPage />} />
      </Route>
    </Routes>
  )
}

export default App
