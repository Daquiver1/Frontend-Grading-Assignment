import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/grades">Grades</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/help-support">FAQ</a></li>
          <li><a href="/help-support">Contact Us</a></li>
          {/* Add more footer links as needed */}
        </ul>
      </div>
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Missing Grade Reporting System</p>
        <p>Address: 123 Main St, Accra, Ghana</p>
        <p>Email: info@st.ug.edu.gh.com</p>
      </div>
    </footer>
  )
}

export default Footer;
