// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage'; // Import MissingGradeFormPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/grade-report" element={<GradeReportPage />} />
        <Route path="/missing-grade-form" element={<MissingGradeFormPage />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
};

export default App;
