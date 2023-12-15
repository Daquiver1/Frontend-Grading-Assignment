import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import GradeReportPage from './pages/GradeReportPage';
import MissingGradeFormPage from './pages/MissingGradeFormPage';
import InstructorContactPage from './pages/InstructorContactPage';
import HelpAndSupportPage from './pages/HelpAndSupportPage';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/grade-report" element={<GradeReportPage />} />
        <Route path="/missing-grade-form" element={<MissingGradeFormPage />} />
        <Route path="/instructor-contact" element={<InstructorContactPage />} />
        <Route path="/help-and-support" element={<HelpAndSupportPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;