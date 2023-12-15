// Layout.js

import React from 'react';
import NavigationBar from './NavigationBar'; 
import './Layout.css'; 

import { useEffect } from 'react';

import schoolLogo from './download (1).png';



const Layout = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const body = document.body;
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        body.classList.add('scrolled');
      } else {
        body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <header>
        <img src={schoolLogo} alt="School Logo" className="school-logo" />

        <div className="search-box">
          <input type="text" placeholder="Search..." />
        
        </div>
      </header>

      <NavigationBar />
      <div className="content">{children}</div>

      <footer className="footer">
        <p>&copy; 2023 Missing Grade Reporting System</p>
      </footer>
    </div>
  );
};

export default Layout;
