import React from 'react';
import { SiDatabricks } from 'react-icons/si';
import { FiFacebook, FiGithub, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const AppFooter = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <SiDatabricks className='icon' />
            <h2>GRADETRACK</h2>
          </div>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>Contact</p>
            <p>Help & Support</p>
          </div>
          <div className="col">
            <h3>My Account</h3>
            <p>Home</p>
            <p>Dashboard</p>
            <p>Grade Report</p>
            <p>Missing Grade Form</p>
          </div>
          <div className="col">
            <h3>Information</h3>
            <p>Home</p>
            <p>Latest Updates</p>
          </div>
          <form>
            <h3>Join Our Team</h3>
            <input type="email" placeholder='Enter your email' />
            <div className="social-group">
              <FiInstagram className='social-icon' />
              <FiFacebook className='social-icon' />
              <FiGithub className='social-icon' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
