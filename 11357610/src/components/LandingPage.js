// LandingPage.js

import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <h1>Missing Grade Reporting System</h1>
      </header>

      {/* Overview */}
      <section className="overview">
        <h2>Track and report missing grades with ease.</h2>
        <p>
          This system helps students quickly and easily identify and report missing grades.
          Say goodbye to frustration and ensure your academic progress is accurately reflected.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Key Features:</h2>
        <ul>
          <li>View all your grades in one place.</li>
          <li>Receive alerts for missing grades.</li>
          <li>Easily report missing grades with a simple form.</li>
          <li>Contact instructors directly through the platform.</li>
          <li>Get help and support with your questions.</li>
        </ul>
      </section>

      {/* Get Started */}
      <section className="get-started">
        <h2>Get started today!</h2>
        <p>
          Register for a free account and start taking control of your academic progress.
        </p>
        <a href="/login" className="button">
          Login
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Copyright &copy; 2023 Missing Grade Reporting System</p>
      </footer>
    </div>
  );
};

export default LandingPage;
