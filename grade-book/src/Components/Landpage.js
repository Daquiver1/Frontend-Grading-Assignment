import React from "react";
import "../Styles/LandPage.css";

const LandPage = () => {
  return (
    <div className="land-container">
      <div className="land-header">
        <h1>Welcome to the Grade Reporting System</h1>
        <p>
          Your place to track and report grades that are not recorded in your
          academic profiles.
        </p>
        <p>
          Empowering Excellence, One Grade at a Time: Your Path to Success
          Starts Here
        </p>
      </div>
      <div className="land-nav">
        <button>Login</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default LandPage;
