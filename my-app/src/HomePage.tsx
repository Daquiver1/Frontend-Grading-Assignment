// HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/landingpage">Landing Page</Link>
          </li>
          <li>
            <Link to="/missinggradeform">Missing Grade Form</Link>
          </li>
          <li>
            <Link to="/loginpage">Login Page</Link>
          </li>
          <li>
            <Link to="/helpinstructor">Help Instructor</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
