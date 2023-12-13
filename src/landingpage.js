import React from 'react';
import Navigation from './Navigation';

function LandingPage() {
  return (
    <div className="landing-page">
       <Navigation/>
      <h1>Welcome to Grade Assessment</h1>
      <p>
        Our platform offers powerful tools for assessing grades, enabling educators to streamline the grading process.
      </p>
      <div className="features">
        <h2>Features and Services</h2>
        <ul>
          <li>Customizable grading criteria</li>
          <li>Analytics and insights</li>
          <li>Efficient grade calculation</li>
          <li>Report generation</li>
        </ul>
      </div>
      <div className="benefits">
        <h2>Benefits</h2>
        <p>
          Our platform empowers educators and institutions to enhance learning outcomes by simplifying the grading process.
        </p>
      </div>
      <div className="testimonials">
        <h2>Testimonials</h2>
        <p>
          "Using this platform has significantly improved our grading efficiency and allowed us to focus more on teaching."
          <br /> - John Doe, Educator
        </p>
      </div>
      <div className="pricing">
        <h2>Pricing</h2>
        <p>
          Get started for free! Check out our subscription plans for more advanced features.
        </p>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <p>
          Have questions? Reach out to our support team at support@gradeassessment.com
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
