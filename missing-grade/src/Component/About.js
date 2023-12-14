import React from "react";
import AboutBackground from "../Assets/pic.jpg";  
import { Link } from 'react-router-dom';
import "./styles/about.css";



const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      
      <div className="about-section-text-container">
        <h1 className="primary-heading">
Missing Grade Report System        </h1>
        <p className="primary-text">
        A missing grade report system on our website ensures students have accurate records, fostering transparency and empowering them to address any grading discrepancies promptly. For educators, it streamlines the process, reducing administrative burden and promoting a responsive learning environment.        </p>
        <p className="primary-text">
            Use the button below to log into your Student Account 
        </p>
        <div className="about-buttons-container">
      <Link to="/login">
      <button className="secondary-button">Log In</button>
      </ Link>
        </div>
      </div>
    </div>
  );
};

export default About;