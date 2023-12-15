import React from "react";
import "./DashboardPage.css"; // Import your updated DashboardPage.css file

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <p className="dashboard-description">
        Welcome to your personalized dashboard. Here's a summary of your
        academic progress and information:
      </p>
      <div className="dashboard-content">
        <div className="progress-section">
          <h3>Academic Progress</h3>
          <p>
            Your overall GPA: <strong>3.8</strong>
          </p>
          <p>
            Total credits earned: <strong>90</strong>
          </p>
        </div>
        <div className="upcoming-section">
          <h3>Upcoming Events</h3>
          <ul>
            <li>Midterm exams next week</li>
            <li>Registration for next semester opens soon</li>
          </ul>
        </div>
        <div className="recommendations-section">
          <h3>Course Recommendations</h3>
          <p>
            Based on your academic history, we recommend considering the
            following courses for the next semester:
          </p>
          <ul>
            <li>Advanced Mathematics (MATH 301)</li>
            <li>Modern History (HIST 202)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
