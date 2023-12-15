// src/Landing.js
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import './Layout.css';
import './landing.css'

const Landing = () => {
  return (
    <Layout>
      <div className="landing-container">
        <h2>Missing Grade Reporting System</h2>
        <p>Welcome to the Missing Grade Reporting System. Track and report missing grades effortlessly.</p>
        <p>We will address all your grade issues. Follow the right steps, and you will be sorted out.</p>
        <p>Login to begin</p>

        <nav>
          <p><Link to="/login">Login</Link></p>
        </nav>
      </div>
    </Layout>
  );
};

export default Landing;
