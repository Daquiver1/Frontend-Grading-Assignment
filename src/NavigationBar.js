import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
  <nav>
    <ul className="horizontal-nav">
    <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/grade-report">Grade Report</Link></li>
          <li><Link to="/missing-grade-form">Grade Report form</Link></li>
          <li><Link to="/instructor-contact">Instructor Contact</Link></li> 
          <li><Link to="/help-and-support">Help and Support</Link></li> 
          {/* Add more navigation links for other pages */}
      
      
      </ul>
    
  </nav>
);

export default NavigationBar;