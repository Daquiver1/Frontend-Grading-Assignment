import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import GradeReportPage from './GradeReportPage';
import MissingGradeFormPage from './MissingGradeFormPage';
import InstructorContactPage from './InstructorContactPage';
import HelpSupportPage from './HelpSupportPage';
import Footer from './Footer';
import './App.css'


const App: React.FC = () => {
  return (
    <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/grade-report" element={<GradeReportPage />} />
        <Route path="/report-missing-grade" element={<MissingGradeFormPage />} />
        <Route path="/contact-instructors" element={<InstructorContactPage />} />
        <Route path="/help-support" element={<HelpSupportPage />} />
        {/* Catch-all route for 404 Not Found page or redirect to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>

      <Footer />
      
    </Router>
    </div>
    
    );
};

export default App;