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
      <p>&copy; 2023 Your Website. All rights reserved.</p>
    </footer>


  </div>
);

export default Layout;
