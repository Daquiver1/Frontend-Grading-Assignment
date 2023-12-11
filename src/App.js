import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useNavigate } from 'react-router-dom';
import DashboardPage from './components/Dashboard';
import HomePage from './components/homepage';
import LoginPage from './components/LoginPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import HelpAndSupportPage from './components/HelpAndSupportPage.js';
import InstructorContactPage from './components/InstructorContactPage';
import GradeReportPage from './components/GradeReportPage';
import "./App.css"
const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li><Link to="/homepage">Home</Link></li>
        <li><Link to="/LoginPage">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/grade-report">Grade Report</Link></li>
        <li><Link to="/missing-grade-form">Missing Grade Form</Link></li>
        <li><Link to="/instructor-contact">Instructor Contact</Link></li>
        <li><Link to="/help-and-support">Help and Support</Link></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <hr />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/grade-report" element={<GradeReportPage />} />
          <Route path="/missing-grade-form" element={<MissingGradeFormPage />} />
          <Route path="/instructor-contact" element={<InstructorContactPage />} />
          <Route path="/help-and-support" element={<HelpAndSupportPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

