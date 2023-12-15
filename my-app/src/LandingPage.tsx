// landingpage.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to the Department of Computer Science</h1>
      </header>
      
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          The Department of Computer Science is dedicated to advancing the
          field through cutting-edge research, innovative teaching, and
          fostering a collaborative learning environment.
        </p>
      </section>

      <section className="programs-section">
        <h2>Academic Programs</h2>
        <p>
          Explore our range of academic programs designed to prepare students
          for successful careers in computer science and related fields.
        </p>
        <ul>
          <li>Bachelor's in Computer Science</li>
          <li>Master's in Computer Science</li>
          <li>Ph.D. in Computer Science</li>
        </ul>
      </section>

      <section className="research-section">
        <h2>Research</h2>
        <p>
          Our faculty and students are engaged in cutting-edge research across
          various domains of computer science. Explore our research areas and
          ongoing projects.
        </p>
        {/* Add links to specific research areas or projects */}
      </section>

      <section className="admissions-section">
        <h2>Admissions</h2>
        <p>
          Ready to join us? Learn about our admissions process and how you can
          become part of our vibrant academic community.
        </p>
        <Link to="/admissions">Learn More</Link>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or need more information? Contact our department and
          we'll be happy to assist you.
        </p>
        {/* Add contact information or a contact form */}
      </section>

      <footer>
        <p>&copy; 2023 Department of Computer Science. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
