

import React from 'react';
import { Link } from 'react-router-dom';
import '../LandingPage.css';
import mckay from '../images/mckay.jpg'; 
import nunana from '../images/nunana.jpeg';
import henry from '../images/henry.jpeg';
import grad from '../images/grad.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
         <div className="group flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row overflow-hidden hover:shadow-md transition duration-300">
    <img
      className="h-96 w-full rounded-t-lg object-contain md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src={grad}
      alt="overview pic"
    />

    <div className="flex flex-col justify-start p-1">
      <h5 className="mb--5 text-transparent font-bold text-5xl text-gray-700 dark:text-[#788480] group-hover:text-white">
        Overview
      </h5>

      <p className="mb-4 text-2 font-semibold text-neutral-600 dark:text-neutral-200 group-hover:text-white">
        The "Missing Grade Reporting System" serves as a central platform empowering students to take proactive steps in addressing and resolving missing grade issues. It aims to streamline communication between students and academic authorities, fostering transparency and efficiency within the academic environment.
      </p>
      
      </div>
    </div>
      <div className="text-center">
        <p className="login-text">Ready To Get Started?<br/>Access your dashboard!</p>
       <div><button><Link to="/login" className="btn mt-4">Login</Link></button></div> 
      </div>

    <section className="testimonial-card">
  <h2 className="testimonial-heading">What Students Say</h2>
  <div className="testimonial-messages">
    <div className="testimonial-message">
      <div className="testimonial-info">
        <img src={mckay} alt="Profile" className="profile-image" />
        <p className="name">Mc Kay</p>
      </div>
      <p className="message" data-hover-info="Additional info for McKay">
        "The system helped me report missing grades quickly!"
      </p>
    </div>

    <div className="testimonial-message">
      <div className="testimonial-info">
        <img src={henry} alt="Profile" className="profile-image" />
        <p className="name">Henry</p>
      </div>
      <p className="message" data-hover-info="Additional info for Henry">
        "Wow!!! It's a simple to use system"
      </p>
    </div>

    <div className="testimonial-message">
      <div className="testimonial-info">
        <img src={nunana} alt="Profile" className="profile-image" />
        <p className="name">Nunana</p>
      </div>
      <p className="message" data-hover-info="Additional info for Nunana">
        "A very gr8 system!"
      </p>
    </div>
  </div>
</section>

    <div className='leave-message1'>
       <p className="italic font-bold text-4xl mt-9">Leave a Message?</p>
      <div className="form-section">
        <input type="text" placeholder="Enter your name here" className="input-field" />
        <textarea placeholder="Enter your text here" className="textarea-field"></textarea>
      </div>
      <section className="additional-links mt-20">
        <ul className="links-list">
          <li><Link to="/faq" className="link">Frequently Asked Questions</Link></li>
          <li><Link to="/user-guide" className="link">User Guide</Link></li>
        </ul>
      </section>
    </div>
    </div>
    
  );
};

export default LandingPage;
