// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            The Missing Grade Reporting System is dedicated to helping students track and report missing grades in a user-friendly manner.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>
            <strong>Email:</strong> info@missinggradesystem.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/missing-grade-form">Report Missing Grade</a></li>
            <li><a href="/instructor-contact">Instructor Contact</a></li>
            <li><a href="/help-and-support">Help & Support</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Missing Grade Reporting System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
