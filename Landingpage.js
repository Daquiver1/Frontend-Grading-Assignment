import React from 'react';
import './Landingpage.css';
import '../components/Sidebar.css';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <h1>Welcome to the Missing Grade Reporting System</h1>
      <p>
        This system is designed to help you track and report missing grades that are not recorded
        in your academic profiles.
      </p>
      <p>
        Use the navigation links to explore the features of the system, including viewing your
        grades, reporting missing grades, and contacting your instructors.
      </p>

      <div className="additional-content">
        <h2>Missing Grade Reporting Features</h2>
        <p>
          The Missing Grade Reporting System provides you with a user-friendly interface to manage
          your academic information effectively.
        </p>
        <ul>
          <li>View your current grades in detail.</li>
          <li>Receive alerts for any missing grades.</li>
          <li>Report a missing grade using the easy-to-use form.</li>
          <li>Contact your instructors for assistance.</li>
        </ul>

        <div className="image-section">
          {/* Add images here with direct URLs */}
          <img src="https://media.istockphoto.com/id/1319103440/photo/mad-young-woman-worker-losing-job-result-on-broken-pc.jpg?s=2048x2048&w=is&k=20&c=H6CPNGUcfITeEYYk_zvyWlxYvz9MKyrrDqkG1JAYOoU=" alt="A lady worried on her laptop" />
        </div>
      </div>

      <div className="footer">
      <p>&copy; 2023 Missing Grade Reporting System</p>
      </div>
    </div>
  );
};

export default LandingPage;