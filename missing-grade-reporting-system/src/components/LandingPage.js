import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../footer' 
import './LandingPage.css'; 
import logo from './images/logo.png';
function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navbar Component */}
      

      {/* Landing Page Content */}
      <div className="landing-content">
        <div className="logo-container">
          <img src={logo} alt="School Logo"/>
        </div>
        <div className="landing-text">
          <h1>Welcome to the Missing Grade Reporting System</h1>
          <p>Track and report grades not recorded in your academic profiles.</p>
        </div>

        {/* Navigation Links */}
        <div className="navigation-links">
          <Link to="/">Home</Link>
          <Link to="/LoginPage">Login</Link>
          <Link to="/DashboardPage">Dashboard</Link>
          <Link to="/GradeReportPage">Grade Report</Link>
          <Link to="/MissingGradeFormPage">Missing Grade Form</Link>
          <Link to="/InstructorContact">Instructor Contact</Link>
          <Link to="/HelpAndSupport">Help and Support</Link>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default LandingPage;
