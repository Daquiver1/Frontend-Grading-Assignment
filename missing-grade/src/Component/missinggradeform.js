import React from "react";
import MissingBackground from "../Assets/forms.avif"; 
import "./styles/missinggade.css";






const missinggradeform = () => {
  return (
    <div className="missing-section-container">
      <div className="missing-background-image-container">
        <img src={MissingBackground} alt="" />
      </div>
      
      <div className="missing-section-text-container">
        <h1 className="mising-heading">
Missing Grade Report System        </h1>
        <p className="missing-text">
        A missing grade report system on our website ensures students have accurate records, fostering transparency and empowering them to address any grading discrepancies promptly. For educators, it streamlines the process, reducing administrative burden and promoting a responsive learning environment.        </p>
        </div>
        </div>);
}
        export default missinggradeform;