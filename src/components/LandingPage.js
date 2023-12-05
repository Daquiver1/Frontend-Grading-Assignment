import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';


const LandingPage = () => {
  return (
    <div>
      <nav>
        <div className="navbar-logo">
          <img src="/ug.png" alt="University Logo" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <div className='container'>
        <h1>Welcome to the Missing Grade Reporting System</h1>
        <p>
          Empowering students to track and report missing grades for a seamless academic experience.
        </p>

        <Link to="/login">
          <button>Get Started</button>
        </Link>
      </div>

      <footer>
        <p>&copy; 2023 Missing Grade Reporting System</p>
      </footer>
    </div>
  );
};

export default LandingPage;
