import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen.tsx'
import { DashboardShell } from './components/dashboardShell.tsx' // Importe o componente

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />

        <Route 
          path="/dashboard" 
          element={
            <DashboardShell>
            </DashboardShell>
          } 
        />

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App