import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-page-content">
        <h1 className="landing-page-title">Welcome to the Grade System</h1>
        <p className="landing-page-description">
          Your tool for tracking and reporting missing grades.
        </p>
        <Link to="/login">
          {/* Corrected the path */}
          <button className="landing-page-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
