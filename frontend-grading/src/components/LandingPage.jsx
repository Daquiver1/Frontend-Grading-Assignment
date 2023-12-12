// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <div className="logo">
          <h1>Missing Grade Reporting System</h1>
        </div>
      </header>
      <main>
        <section className="hero-section">
          <h2>Welcome to the Missing Grade Reporting System</h2>
          <p>Track and report missing grades effortlessly.</p>
          <Link to="/dashboard" className="cta-button">
            Get Started
          </Link>
        </section>
        <section className="features-section">
          <div className="feature">
            <h3>View Grades</h3>
            <p>Get an overview of your current grades at a glance.</p>
          </div>
          <div className="feature">
            <h3>Report Missing Grades</h3>
            <p>Easily report missing grades using our intuitive system.</p>
          </div>
          <div className="feature">
            <h3>Contact Instructors</h3>
            <p>Communicate with your instructors or academic administration.</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Missing Grade Reporting System</p>
      </footer>
    </div>
  );
};

export default LandingPage;
