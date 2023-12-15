import React from 'react';
import Logos from "../assets/comScience_logo.png";
import {Link} from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src = {Logos} alt='logo'/>
      </div>

      <div className='rightSide'>
        <Link to = "/" >Dashboard</Link>
        <Link to = "/gradeReport" >Grade Report</Link>
        <Link to = "/MissingGrade" >Missing Grade Form</Link>
        <Link to = "/Instructors" >Instructor Contact</Link>
        <Link to = "/Faq" >FAQ</Link>
        <Link to = "/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
