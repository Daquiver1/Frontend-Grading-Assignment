// Footer.jsx
import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2023 UGCS</p>
        </div>
        <div className="footer-right">
          <p>Contact Us: <a href="mailto:frontdesk@ug.edu.gh">frontdesk@ug.edu.gh</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
