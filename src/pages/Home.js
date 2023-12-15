// Home.js

import React from 'react';
import Navbar from '../components/Navbar';
import Landing from './footer';
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <h1 className="main-title">Student Grade Report System.</h1>
      <div className="main-content">
        <img style={{width:"100%"}}src="https://media.istockphoto.com/id/164560386/photo/happy-african-college-friends.jpg?s=2048x2048&w=is&k=20&c=6lSC-qtUEyx5GmrTE7XoabriIeY_Z_lEM56OB3Guang=" className="main-image" />
        <div className="content-details">
          <p style={{fontSize:"50px", textAlign:"center"}}className="section-title"><strong>Empower Your Academics. </strong></p>
          
          <p style={{fontSize:"20px"}}className="content-description">
            Take control of your academic journey with our intuitive interface, ensuring that you have access to accurate and up-to-date information on your grades, as well as the capability to make complaints about perceived errors in your grades. Our system aims to address the common challenge of missing or unrecorded grades in a student's profile thus, empowering you to stay informed and proactive in their education.
          </p>
        </div>
      </div>
      <div>
    
      </div>
      <div className="features-content">
        
        <Landing></Landing>
      </div>
    </div>
  );
}

export default Home;
