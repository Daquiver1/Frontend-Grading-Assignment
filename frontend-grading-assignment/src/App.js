import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import DashboardPage from './components/DashboardPage';
import HelpAndSupportPage from './components/HelpSupportPage';
import './App.css';

function App() {
 return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h1>MISSING GRADE REPORT SYSTEM</h1>
          <ul>
          <li><Link to="/dashboard-page">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/help-and-support">HelpAndSupportPage</Link></li>
        </ul>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/grade-report" element={<GradeReportPage />} />
        <Route path="/dashboard-page" element={<DashboardPage />} />
        <Route path="/missing-grade-form" element={<MissingGradeFormPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/help-and-support" element={<HelpAndSupportPage />} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;