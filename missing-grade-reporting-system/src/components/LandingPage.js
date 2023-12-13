import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer' 
import './LandingPage.css'; 
import Navbar from '../navbar';
function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navbar Component */}
      <Navbar/>

      {/* Landing Page Content */}
      <div className="landing-content">
        <div className="logo-container">
          <img src="src/components/logo1.jpg" alt="School Logo" />
        </div>
        <div className="landing-text">
          <h1>Welcome to the Missing Grade Reporting System</h1>
          <p>Track and report grades not recorded in your academic profiles.</p>
        </div>

        {/* Navigation Links */}
        <div className="navigation-links">
          <Link to="/LandingPage">Home</Link>
          <Link to="/LoginPage">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/grade-report">Grade Report</Link>
          <Link to="/missing-grade-form">Missing Grade Form</Link>
          <Link to="/instructor-contact">Instructor Contact</Link>
          <Link to="/help-and-support">Help and Support</Link>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default LandingPage;
