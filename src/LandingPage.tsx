import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to the Missing Grade Reporting System (MGRS)</h1>
        <p>Your one-stop solution to manage and report your academic grades.</p>
      </header>
      <section className="call-to-action">
        <Link to="/login" className="btn btn-primary">Student Login</Link>
        <Link to="/contact-instructors" className="btn btn-secondary">Contact Instructors</Link>
        <Link to="/dashboard" className="btn btn-secondary">Dashboard</Link>
        <Link to="/grade-report" className="btn btn-secondary">Grade Report</Link>
        <Link to="/report-missing-grade" className="btn btn-secondary">Missing Grade Report</Link>
        </section>
      <section className="about-mgrs">
        <h2>About MGRS</h2>
        <p>
          The Missing Grade Reporting System is designed to help students keep track of their academic progress by providing an easy way to report and resolve any discrepancies in their recorded grades. Our system ensures that your academic records are accurate and up-to-date.
        </p>
      </section>
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Log in with your student credentials.</li>
          <li>View your current grades and any missing grades on your dashboard.</li>
          <li>Report any missing grades using our simple form.</li>
          <li>Contact your instructors directly for any clarifications.</li>
        </ol>
      </section>
      <section className="faq-preview">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What should I do if I find a missing grade?</h3>
          <p>Simply use the "Report Missing Grade" feature to submit a detailed report, and we will take care of the rest.</p>
        </div>
        <div className="faq-item">
          <h3>How long does it take to update a reported grade?</h3>
          <p>Grade updates are typically processed within 5 to 7 business days.</p>
        </div>
        <Link to="/help-support" className="btn btn-outline">Contact Support</Link>
      </section>
    </div>
  );
};

export default LandingPage;