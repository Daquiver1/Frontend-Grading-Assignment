import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../CSS/LandingPage.css'; 
import UniversalComponent from './UniversalComponent';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
      setDarkMode(!darkMode);
  };

  return (
    <UniversalComponent>
      <div className={`landing-container ${darkMode ? 'dark' : ''}`}>
        <div className="landing-content">
          <h1>Welcome to Our Platform</h1>
          <p>Introducing Grade Guru – Your Academic Ally for Tracking, Reporting, and Excelling!</p>
          <div className="cta-buttons">
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/signup" className="signup-button">Sign Up</Link>
          </div>
          <div className="key-features">
            <h2>Key Features</h2>
            <ul>
              <li>View your grades at a glance</li>
              <li>Report missing grades easily</li>
              <li>Communicate with instructors and administration</li>
            </ul>
          </div>
          <div className="featured-announcements">
            <h2>Featured Announcements</h2>
            <p>Stay informed about important updates and news.</p>
          </div>
        </div>
      </div>
    </UniversalComponent>
  );
};

export default LandingPage;
