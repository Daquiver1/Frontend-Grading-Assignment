import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/login';
import DashboardPage from './pages/Dashboard';
import GradeReportPage from './pages/GradeReportPage';
import MissingGradeForm from './pages/MissingGradeForm';
import HelpSupportPage from './pages/HelpSupportPage';
import InstructorContactPage from './pages/InstructorContactPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/grade-report" element={<GradeReportPage />} />
          <Route path="/missing-grade" element={<MissingGradeForm />} />
          <Route path="/help-support" element={<HelpSupportPage />} />
          <Route path="/instructor-contact" element={<InstructorContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;