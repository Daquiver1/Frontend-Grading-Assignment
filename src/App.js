//src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import GradeReportPage from './GradeReportPage';
import MissingGradeFormPage from './MissingGradeFormPage';
import InstructorContactPage from './InstructorContactPage';
import HelpAndSupportPage from './HelpAndSupportPage';


function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes> {/* Use 'Routes' instead of 'Switch' */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/grade-report" element={<GradeReportPage />} />
          <Route path="/missing-grade-form" element={<MissingGradeFormPage />} /> 
          <Route path="/instructor-contact" element={<InstructorContactPage />} /> 
          <Route path="/help-and-support" element={<HelpAndSupportPage />} /> 
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
