

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import HelpAndSupportPage from './components/HelpAndSupportPage';
import InstructorContactPage from './components/InstructorContactPage';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/grade-report" element={<GradeReportPage />} />
        <Route path="/missing-grade-form" element={<MissingGradeFormPage />} />
        <Route path="/help-and-support" element={<HelpAndSupportPage />} />
        <Route path="/instructor-contact" element={<InstructorContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
