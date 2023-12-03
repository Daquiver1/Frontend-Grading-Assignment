import "../styles/main.css";
import React from 'react';
import '../styles/main.css';

function Footer() {
  return (
    <footer>
       <div className="footer-content">
       <h3 className="logo">UG.Gradesk</h3>
       <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          {}
        </div>
      
       </div>
       <p>&copy; 2023 Your Website Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
