import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './Navigation';
import Footer from './footer';
import { FaCheckCircle, FaUsers, FaCalculator, FaFileAlt, FaEnvelope } from 'react-icons/fa';

function LandingPage() {
  return (
    <div className="landing-page" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <Navigation />
      <h1>Welcome to Grade Assessment</h1>
      <div className="landing-heading">
        <p>
          This platform offers powerful tools for assessing grades, enabling educators to streamline the grading process.
        </p>
        </div>

        <div className="features">
          <div className="features1">
          <h2>Features and Services</h2>
          </div>
          <ul>
            <li><FaCheckCircle /> Customizable grading criteria</li>
            <li><FaUsers /> Analytics and insights</li>
            <li><FaCalculator /> Efficient grade calculation</li>
            <li><FaFileAlt /> Report generation</li>
          </ul>
        </div>
      <Container>
        <div className="benefits">
          <div className="benefits1">
          <h2>Benefits</h2>
          </div>
          <p>
            Our platform empowers educators and institutions to enhance learning outcomes by simplifying the grading process.
          </p>
        </div>
        <div className="benefits">
        <div className="benefits1">
          <h2>Testimonials</h2>
          </div>
          <p>
            "Using this platform has significantly improved our grading efficiency and allowed us to focus more on teaching."
            <br /> - John Doe, Educator
          </p>
        </div>
        <div className="benefits">
        <div className="benefits1">
          <h2>Pricing</h2>
          </div>
          <p>
            Get started for free! Check out our subscription plans for more advanced features.
          </p>
        </div>
        <div className="benefits">
        <div className="benefits1">
          <h2>Contact Us</h2>
          </div>
          <p>
            Have questions? Reach out to our support team at <FaEnvelope /> support@gradeassessment.com
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default LandingPage;

