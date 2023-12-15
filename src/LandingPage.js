// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to the Missing Grade Reporting System!</h1>
        <p className="tagline">Empowering Students for Academic Success</p>
      </header>

      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          Are you tired of missing grades slipping through the cracks? We understand the importance of accurate academic records, and that's why we've developed a user-friendly platform to help you track and report any missing grades effortlessly.
        </p>
        <p>
          Our system provides you with a comprehensive set of features to enhance your academic experience. From a detailed overview of your current grades to a simple form for reporting missing grades, we've got you covered.
        </p>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="feature">
          <h3>Dashboard Overview</h3>
          <p>Get a quick glance at your current grades and receive instant alerts for any missing grades that require your attention.</p>
        </div>
        <div className="feature">
          <h3>Grade Report Details</h3>
          <p>Dive into a detailed view of all your courses and respective grades. Filter by semester or academic year to streamline your academic history.</p>
        </div>
        <div className="feature">
          <h3>Report Missing Grades</h3>
          <p>Have a missing grade? No worries! Use our simple form to report the details, and we'll ensure it reaches the right channels. Your academic success is our priority.</p>
        </div>
        <div className="feature">
          <h3>Instructor Contact</h3>
          <p>Need to get in touch with your instructors? Find a list of instructors with their contact details, and you can even send simulated emails directly through our platform.</p>
        </div>
        <div className="feature">
          <h3>Help & Support</h3>
          <p>Explore a comprehensive FAQ section that answers common questions about grade reporting. For technical support, we've got you covered with a convenient contact form.</p>
        </div>
      </section>

      <section className="getting-started-section">
        <h2>Getting Started</h2>
        <ol>
          <li>Click on the <strong>Login</strong> button to access your personalized dashboard.</li>
          <li>Navigate through the pages using the user-friendly navbar or sidebar.</li>
          <li>Report missing grades effortlessly with our intuitive form on the <strong>Missing Grade Form</strong> page.</li>
          <li>Connect with your instructors using the <strong>Instructor Contact</strong> page.</li>
          <li>Find helpful information and support in the <strong>Help & Support</strong> section.</li>
        </ol>
      </section>

      <section className="call-to-action">
        <p>Thank you for choosing the Missing Grade Reporting System. We're here to enhance your academic experience and ensure your grades are accurately reflected. Let's make academic success a shared journey!</p>
        <Link to="/login" className="cta-button">LOGIN</Link>
      </section>
    </div>
  );
};

export default LandingPage;
