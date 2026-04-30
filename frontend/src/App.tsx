import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { CourseDetailPage } from './pages/CourseDetailPage'
import { CoursesPage } from './pages/CoursesPage'
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
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="planner" element={<PlannerPage />} />
      </Route>
    </Routes>
  )
}

export default App
