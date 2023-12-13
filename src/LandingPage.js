

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: `url('path/to/your/background-image.jpg')` }}>
      <div className="content-container">
        <header>
          <h1>Welcome to the Grade Navigator</h1>
        </header>
        <section>
          <Link to="/login" className="login-button">
            Login
          </Link>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
