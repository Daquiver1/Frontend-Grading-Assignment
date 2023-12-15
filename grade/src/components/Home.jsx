import React from 'react';
import '../components/styles/home.css'; // Import your CSS file

const Home = () => {
  return (
    <div className="landing-container">
      <h1 className="title">Missing Grade Reporting System</h1>
      <p className="intro">Welcome to our innovative platform designed to streamline your academic experience. Navigate seamlessly, view your grades, report missing ones, and connect with instructors or academic administration.</p>
      
      <div className="features">
        <h2 className="features-title">Features</h2>
        <ul className="features-list">
          <li>View current grades</li>
          <li>Report missing grades</li>
          <li>Contact instructors</li>
          <li>Access technical support</li>
        </ul>
      </div>
      
      <a href="/login" className="login-link">Get Started</a>
    </div>
  );
};

export default Home;