// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Missing Grade Reporting System</h1>
      <p>
        This system helps students track and report missing grades in their academic profiles. 
        Use the navigation links to explore and access different features.
      </p>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Home</Link></li> {/* Add a link to Home */}
          {/* Other navigation links */}
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
