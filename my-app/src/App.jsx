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
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route path="/GradeReport" element={<GradeReportPage />} />
          <Route path="/Missinggradeform" element={<MissingGradeForm />} />
          <Route path="/HelpSupportPage" element={<HelpSupportPage />} />
          <Route path="/InstructorContactPage" element={<InstructorContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;