// HomePage.jsx

import React from 'react';
import './HomePage.css';
import backgroundImage from '../Images/landing.png'; 
import Navbar from '../navigation';
const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar/>
      <div className="background-container">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="overlay">
            <h1>Welcome to the Missing Grade Reporting System</h1>
            <p>Your solution to track and report missing grades!</p>
            <a href="/login"><button className='button
'>Click here to Login</button></a>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default HomePage;
