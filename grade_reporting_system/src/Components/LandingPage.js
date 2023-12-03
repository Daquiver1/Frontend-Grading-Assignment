import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/LandingPage.css'; // Import the corresponding CSS styles
import UniversalComponent from './UniversalComponent';

const LandingPage = () => {
  return (
    <UniversalComponent>
      <div className="landing-container">
        <div className="landing-content">
          <h1>Welcome to Our Platform</h1>
          <p>Discover a new way to manage your academic journey.</p>
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
            {/* Add featured announcements or news here */}
          </div>
        </div>
      </div>
    </UniversalComponent>
  );
};

export default LandingPage;
