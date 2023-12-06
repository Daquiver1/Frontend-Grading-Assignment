
import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@youruniversity.edu</p>
          <p>Phone: +233 59 509 4208</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="footer-social">
            <a href="https://twitter.com/youruniversity" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.png" alt="Twitter" />
            </a>
            <a href="https://facebook.com/youruniversity" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your University. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
