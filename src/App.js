import Navbar from './components/Navigation'; 
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import InstructorContactPage from './components/InstructorContactPage';
import HelpAndSupportPage from './components/HelpAndSupportPage';

function App() {
  const [isOnLandingPage, setIsOnLandingPage] = useState(true);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
            path=""
            element={<LandingPage />}
            // Set the isOnLandingPage state to true when on the landing page
            onStart={() => setIsOnLandingPage(true)}
            // Set the isOnLandingPage state to false when leaving the landing page
            onEnd={() => setIsOnLandingPage(false)}
          />
        

        <Route path="/login" element={<LoginPage/>} />

        <Route path="/DashboardPage" element={<DashboardPage/>} />

        <Route path="/grade-report" element={<GradeReportPage/>} />

        <Route path="/missing-grade-form" element={<MissingGradeFormPage/>} />

        <Route path="/instructor-contact" element={<InstructorContactPage/>} />

        <Route path="/help-and-support" element={<HelpAndSupportPage/>} />
        
      </Routes>
      {isOnLandingPage ? null : <Navbar />}
        
    </Router>
  );
}

export default App;
