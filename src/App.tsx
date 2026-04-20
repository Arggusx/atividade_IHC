import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen.tsx'
import TeacherDashboard from './pages/TeacherDashboard.tsx'
import { DashboardShell } from './components/DashBoardShell.tsx'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/teacher-dashboard" element={
          <DashboardShell>
            <TeacherDashboard />
          </DashboardShell>
        } />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App