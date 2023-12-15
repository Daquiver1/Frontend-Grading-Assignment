import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container">
      <Navbar />
      <h1>Missing Grade Reporting System</h1>
      <p>
        Welcome to the Missing Grade Reporting System! This system is designed to help students track and report grades that are not recorded in their academic profiles.
      </p>
      <div>
        <h2>Quick Links</h2>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/grade-report">Grade Report</Link></li>
          <li><Link to="/missing-grade-form">Report Missing Grade</Link></li>
          <li><Link to="/instructor-contact">Instructor Contact</Link></li>
          <li><Link to="/help-support">Help and Support</Link></li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
