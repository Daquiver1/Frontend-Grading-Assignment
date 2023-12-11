import React from 'react';
import Logo from "./Logo.png";
import { Link } from 'react-router-dom';
import "../styles/navbar.css";


function Navbar() {
  return (
    <>
      <div className="navbar"> 
        <div className="leftnavbar">
        <img  className="logo" alt="University of Ghana Logo" src={Logo} />
        </div>
        <div className="rightnavbar">
          <Link className='navlinks' to="/login">Login   </Link>
          <Link className='navlinks' to="/dashboard">Dashboard    </Link>
          <Link className='navlinks' to="/gradeform">Grade Form     </Link>
          <Link className='navlinks' to="/gradereport">Grade Report    </Link>
          <Link className='navlinks' to="/instructorcon">Instructor Contact    </Link>
          <Link className='navlinks' to="/helpsup">Help and Support     </Link>
          <Link className='navlinks' to="/landingpage">Landing Page     </Link>
        </div>
      </div>
    </>
    
  )
}

export default Navbar