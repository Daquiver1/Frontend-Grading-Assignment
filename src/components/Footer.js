import React from 'react';
import './FooterStyles.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/missing-grade">Report Missing Grade</Link></li>
            <li><Link to="/instructor-contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Information</h4>
          <address>
            <p>Main Campus, University of Ghana</p>
            <p>Accra, Ghana</p>
            <p>Email: dnalaryea003@st.ug.edu.gh</p>
            <p>Phone: +233 55-7625-115</p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Missing Grade Reporting System. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
