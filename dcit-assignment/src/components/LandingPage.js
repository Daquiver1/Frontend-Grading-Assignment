import React from "react";
import Footer from "./Footer";
import grades from './img/grades.jpg';
import './LandingPage.css'
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
        <div className="section-land">
          <div className="content">
            <div className='textBox'>
              <h2>Missing Grade Reporting System</h2>
              <p>
                Simplify your academic journey! Manage grades, connect 
                with instructors, and get support effortlessly. Explore 
                your dashboard, contact instructors, and find quick help. 
                Log in now and empower yourself academically.
              </p>
              <div className="btn">
                <Link to='/login'>Log In to Check Grades</Link>
              </div>
            </div>
            <div className="imgBox">
              <img src={grades} alt=""className="grades" style= {{height:'350px'}} />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default LandingPage;
