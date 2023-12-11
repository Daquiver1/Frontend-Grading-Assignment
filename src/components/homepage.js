import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';


const HomePage = () => {
  return (
    <div className="homepage-container">
      <header>
        <h1> Missing Grade Reporting System</h1>
      </header>

      <main>
        <section className="landing-page">
          <h2>Overview of the System</h2>
          <p>
            The Missing Grade Reporting System is your go-to platform for managing and reporting grades that are not recorded in your academic profile.
          </p>
          <p>
            <strong>Features:</strong>
          </p>
          <ul>
            <li>View your current grades and academic performance on the Dashboard.</li>
            <li>Report missing grades easily using the Missing Grade Form.</li>
            <li>Contact your instructors for grade-related queries through the Instructor Contact page.</li>
            <li>Access detailed grade reports for all courses on the Grade Report page.</li>
            <li>Find helpful information and get support in the Help and Support section.</li>
          </ul>
          <p>
            Our intuitive interface ensures a seamless experience, making it convenient for you to stay on top of your academic progress.
          </p>
        </section>
      </main>

      
      <footer>
        <p>10862078 DCIT 205</p>
      </footer>

    </div>
  );
};

export default HomePage;

