import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import Footer from './components/Footer';
import { Patient } from './types/Patient';

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [currentView, setCurrentView] = useState<'dashboard' | 'add' | 'list'>('dashboard');
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);

  const addPatient = (patient: Omit<Patient, 'id'>) => {
    const newPatient: Patient = {
      ...patient,
      id: Date.now().toString(),
    };
    setPatients([...patients, newPatient]);
    setCurrentView('dashboard');
  };

  const updatePatient = (updatedPatient: Patient) => {
    setPatients(patients.map(p => p.id === updatedPatient.id ? updatedPatient : p));
    setEditingPatient(null);
    setCurrentView('dashboard');
  };

  const deletePatient = (id: string) => {
    setPatients(patients.filter(p => p.id !== id));
  };

  const editPatient = (patient: Patient) => {
    setEditingPatient(patient);
    setCurrentView('add');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {currentView === 'dashboard' && (
          <Dashboard 
            patients={patients}
            onNavigate={setCurrentView}
          />
        )}
        {currentView === 'add' && (
          <PatientForm 
            onSubmit={editingPatient ? updatePatient : addPatient}
            onCancel={() => {
              setEditingPatient(null);
              setCurrentView('dashboard');
            }}
            initialData={editingPatient}
          />
        )}
        {currentView === 'list' && (
          <PatientList 
            patients={patients}
            onEdit={editPatient}
            onDelete={deletePatient}
            onBack={() => setCurrentView('dashboard')}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;