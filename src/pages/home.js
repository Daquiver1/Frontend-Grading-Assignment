// Home.js
import React, { Component } from 'react';
import './home.css'; 

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1 className="home-title">Welcome To The Missing Grade Reporting System</h1>
        <p className="home-description">
          This system is designed to help students track and report grades that
          are not recorded in their academic profiles.
        </p>
      </div>
    );
  }
}

export default Home;
