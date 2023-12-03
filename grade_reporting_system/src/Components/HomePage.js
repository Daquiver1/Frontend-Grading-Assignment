import React from 'react';
import { Link } from 'react-router-dom'; // Adjust based on your routing setup
import '../CSS/HomePage.css'; // Import the corresponding CSS styles
import UniversalComponent from './UniversalComponent';

const HomePage = () => {
  return (
    <UniversalComponent>
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Our Platform</h1>
          <p>
            Discover a new way to manage your academic journey. View your grades,
            report missing grades, and communicate with instructors or academic
            administration.
          </p>
          <div className="home-navigation">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/grade-report">Grade Report</Link>
            <Link to="/missing-grade-form">Missing Grade Form</Link>
            <Link to="/instructor-contact">Instructor Contact</Link>
            <Link to="/help-support">Help and Support</Link>
            {/* Add more links for other pages */}
          </div>
          <div className="home-highlights">
            <h2>Important Announcements</h2>
            <p>Stay informed about the latest updates and news.</p>
            {/* Add featured announcements or news here */}
          </div>
          <div className="home-featured-courses">
            <h2>Featured Courses</h2>
            <p>Explore our highlighted courses for the semester.</p>
            {/* Add featured courses or news here */}
          </div>
        </div>
      </div>
    </UniversalComponent>
  );
};

export default HomePage;
