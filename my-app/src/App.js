import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MissingGradeForm from './pages/MissingGradeForm';
import GradeReport from './pages/GradeReport';
import HelpSupport from './pages/help-support';
import InstructorContactPage from './pages/InstructorContactPage';
import Login from './pages/login.jsx'
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/dashboard'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<InstructorContactPage />} />
          <Route path="/grade-report" element={<GradeReport />} />
          <Route path="/HelpSupport" element={<HelpSupport />} />
          <Route path="/MissingGrade" element={<MissingGradeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
