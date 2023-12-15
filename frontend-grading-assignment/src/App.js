import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import DashboardPage from './components/DashboardPage';
import './App.css';

function App() {
 return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                 Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/grade-report" element={<GradeReportPage />} />
        <Route path="/missing-grade-form" element={<MissingGradeFormPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;