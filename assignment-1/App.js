import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MissingGradeForm from './pages/MissingGradeForm';
import DashboardPage from './pages/Dashboard';
import HelpSupportPage from './pages/help-support';
import InstructorContactPage from './pages/instructor-contact';
import GradeReportPage from './pages/grade-report';
import LandingPage from './pages/LandingPage';
import Login from './pages/login';

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

