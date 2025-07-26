import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import PatientManagement from './pages/PatientManagement'
import AppointmentManagement from './pages/AppointmentManagement'
import MedicalRecords from './pages/MedicalRecords'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-[#f4f6fa]">
          <ProtectedRoute>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/patients" element={<PatientManagement />} />
              <Route path="/appointments" element={<AppointmentManagement />} />
              <Route path="/records" element={<MedicalRecords />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </ProtectedRoute>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App