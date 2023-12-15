import React from "react";
import "./Landing.css";



import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="background">
        <div className="landing-header">
          <div className="header-logo">
            <h1>
              <span>UG</span> | GradeTracker
            </h1>
          </div>
          <div className="login-btns">
          <Link to="/login">
          <button type="button" className="sign-in-btn">
            <h1>SIGN UP</h1>
          </button>
          </Link>

          <Link to="/login">
          <button type="button" className="login-btn">
            <h1>LOGIN</h1>
          </button>
          </Link>

          </div>
        </div>

        <div className="landing-content">
          <h1>
            Where Are Your Grades? Discover Instantly with our Grade Inquiry
            Tool!
          </h1>
          <p>
            Welcome to UG GradeTracker, your go-to destination for swiftly
            uncovering your academic progress! Wondering about your latest
            grades? Simply use our intuitive Grade Inquiry Tool to access your
            missing grade reports instantly.
          </p>
        </div>
        <div className="landing-btn">
            <Link to="/login"  >
          <button type="button" className="btn">

              <h1>Get Started</h1>
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
