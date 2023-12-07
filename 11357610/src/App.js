// Import necessary dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GradeReportPage from './components/GradeReportPage';
import HelpPage from './components/HelpPage';
import InstructorContactPage from './components/InstructorContactPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/grade-report" element={<GradeReportPage />} />
      <Route path="/missing-grade-form" element={<MissingGradeFormPage />} />
      <Route path="/instructor-contact" element={<InstructorContactPage />} />
      <Route path="/help" element={<HelpPage />} />
      {/* Add more routes for other pages */}
    </Routes>
  </BrowserRouter>
);

export default App;
