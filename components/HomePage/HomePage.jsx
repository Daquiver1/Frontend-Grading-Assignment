import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="welcome-text">
        <h1>Welcome to My App</h1>
        <p>Explore and enjoy our features!</p>
      </div>
      <Link to="/dashboard">
        <button className="dashboard-button">Go to Dashboard</button>
      </Link>
    </div>
  );
};

export default HomePage;
