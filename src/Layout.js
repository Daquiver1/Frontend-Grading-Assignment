// src/Layout.js
import React from 'react';
import  NavigationBar  from './NavigationBar'; // Import the NavigationBar
import './Layout.css';
import schoolLogo from './images/dcs.png';
import searchIcon from './images/search.png';

const Layout = ({ children }) => (
  <div>
     <header>
     <img src={schoolLogo} alt="School Logo" className="school-logo" />

     <div className="search-box">
        <input type="text" placeholder="Search..." />
        <img src={searchIcon} alt="Search" className="search-icon" />
      </div>

      
    </header>

    <NavigationBar />
    <div className="content">{children}</div>

    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: Dcs@ug.edu.gh</p>
          <p>Phone: +233 541398926</p>
        </div>
       
      </div>
      <div className="copyright">
        <p>&copy; 2023 University of Ghana . All rights reserved.</p>
      </div>
    </footer>


  </div>
);

export default Layout;
