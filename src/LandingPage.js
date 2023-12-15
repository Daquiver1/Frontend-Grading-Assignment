// src/LandingPage.js
import React from 'react';
import Layout from './Layout';
import './LandingPage.css';
import universityLogo from './images/unilogo.jpeg';

class LandingPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="landing-box">
          <h2>Welcome to the Missing Grade Reporting System</h2>
          <p>
            Hello there! Whether you're a student eager to track your grades, report missing ones, or simply explore our
            system, you're in the right place. Our user-friendly interface is designed to make your academic journey
            smoother. Feel free to navigate and discover the features.
          </p>

          <div className="logo-container">
            <img src={universityLogo} alt="University Logo" className="university-logo" />
          </div>

        </div>
      </Layout>
    );
  }
}

export default LandingPage;
