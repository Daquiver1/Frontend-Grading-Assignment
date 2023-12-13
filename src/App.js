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
            onStart={() => setIsOnLandingPage(true)}
            onEnd={() => setIsOnLandingPage(false)}
          />
        

        <Route path="/login" element={<LoginPage/>} />

        <Route path="/DashboardPage" element={<DashboardPage/>} />

        <Route path="/GradeReportPage" element={<GradeReportPage/>} />

        <Route path="/missing-grade-form" element={<MissingGradeFormPage/>} />

        <Route path="/instructor-contact" element={<InstructorContactPage/>} />

        <Route path="/help-page" element={<HelpAndSupportPage/>} />
        
      </Routes>
      {isOnLandingPage ? null : <Navbar />}
        
    </Router>
  );
}

export default App;
