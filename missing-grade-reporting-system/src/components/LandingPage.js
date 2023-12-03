// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';



const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="overview-section">
        <h1>Welcome to the Missing Grade Reporting System</h1>
        <p>
          The Missing Grade Reporting System is a student-focused platform designed to simplify the process of
          managing and reporting missing grades. Here's what the system offers:
        </p>

        <div className="feature-list">
          <div className="feature">
            <h2>View Your Grades</h2>
            <p>Access an overview of your current grades for all enrolled courses.</p>
          </div>

          <div className="feature">
            <h2>Report Missing Grades</h2>
            <p>Effortlessly report any missing grades using our intuitive reporting form.</p>
          </div>

          <div className="feature">
            <h2>Stay Informed</h2>
            <p>Receive alerts and notifications for any missing grades and updates from instructors.</p>
          </div>

          <div className="feature">
            <h2>Contact Instructors</h2>
            <p>Get in touch with your instructors directly through the platform for quick communication.</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LandingPage;
