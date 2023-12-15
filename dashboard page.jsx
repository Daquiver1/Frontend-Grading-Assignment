// Dashboard.js

import React from 'react';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  return (
    <div>
      <header>
        <h2>Your Amazing Dashboard</h2>
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/grade-report">Grade Report</a>
        <a href="/missing-grade-form">Report Missing Grade</a>
        <a href="/instructor-contact">Instructor Contact</a>
        <a href="/help-support">Help & Support</a>
      </nav>
      <main>
        <section>
          <p className="overview">
            Welcome to your personalized dashboard! Here, you'll find a comprehensive overview of your academic journey, neatly organized for your convenience. Keep track of your grades, view upcoming assignments, and stay informed about your progress throughout the semester.
          </p>
          <p className="alerts">
            Important Alerts:
          </p>
          <p className="alerts">
            - You have one missing grade in 'Introduction to Physics.' Please report it as soon as possible.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 GradeTracker - Your Academic Companion</p>
      </footer>
    </div>
  );
};

export default Dashboard;
