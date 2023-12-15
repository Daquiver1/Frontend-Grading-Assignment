import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Welcome to the Missing Grade Reporting System, your tool for tracking and reporting missing grades.</p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#login">Login</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#grade-report">Grade Report</a></li>
            <li><a href="#missing-grade-form">Missing Grade Form</a></li>
            <li><a href="#instructor-contact">Instructor Contact</a></li>
            <li><a href="#help-support">Help & Support</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Information</h2>
          <p>Email: support@missinggradesystem.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Missing Grade Reporting System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
