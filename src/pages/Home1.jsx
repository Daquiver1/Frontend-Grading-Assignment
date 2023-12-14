import React from 'react';
import './Home.css';
import systemOverviewImage from '../assets/overview.jpg';
import studentsImage from '../assets/students_image.jpg';
import gradesImage from '../assets/confuse.jpg';

const LandingPage = () => {
  return (
    <div className="Landing-container">
      <h1>Welcome to the Missing Grade Reporting System</h1>
      <p>Empowering students to manage their academic progress effortlessly.</p>
      <p>Key features:</p>
      <ul>
        <li>View and track current grades</li>
        <li>Report missing grades and discrepancies</li>
        <li>Communicate efficiently with instructors</li>
        <li>Filter grades by semester or academic year</li>
        <li>Access helpful FAQs and technical support</li>
      </ul>

      <div className="section">
        <h2>System Overview</h2>
        <p>Get a comprehensive view of your academic performance at a glance.</p>
        <img src={systemOverviewImage} alt="System Overview" />
      </div>

      <div className="section">
        <h2>Connect with Instructors</h2>
        <p>Effortlessly communicate with your instructors regarding missing grades or any queries.</p>
        <img src={studentsImage} alt="Connect with Instructors" />
      </div>

      <div className="section">
        <h2>Track Your Progress</h2>
        <p>Visualize your progress and identify areas that need attention.</p>
        <img src={gradesImage} alt="Track Your Progress" />
      </div>
    </div>
  );
};

export default LandingPage;
