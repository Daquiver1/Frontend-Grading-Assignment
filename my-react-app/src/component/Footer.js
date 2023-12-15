import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
      <div className="footer">
        <div className='foot-links'>
            <ul>
               <Link to='/'><li>Home</li></Link> 
               <Link to='/FAQ'><li>FAQ's</li></Link> 
               <Link to='/instructors'><li>Instructors</li></Link> 
            </ul>
        </div>

        <div className='copyright'>© 2023 GradeHub | All rights reserved.</div> 
        <div className="logo">
              <h1 className='logo-text'>GradeHub</h1>
          </div>
      </div>
  );
};

export default Footer;