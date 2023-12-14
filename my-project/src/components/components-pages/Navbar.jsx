import React, { useState } from "react";
import logo from "../components-images/logo.png";
import "../components-css/Navbar.css"
import { NavLink } from "react-router-dom";



function Navbar() {
  const [nav,setnav]= useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 50) {
      setnav(true);
    }
    else{
      setnav(false);
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    
      <nav className={nav ? 'nav active' : 'nav'}>
        <a href="/" className="logo">
            <img src={logo} alt=""/>
        </a>
           <input type="checkbox" className="menu-btn" id="menu-btn"/>
           <label className="menu-icon" for="menu-btn"> 
                <span className="nav-icon"></span>
           </label>
           <ul className='menu'>
           
            <li>
          <NavLink to="/" className="nav-active">
             HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/Login" className="nav-active">
             Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard" className="nav-active">
             Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/GradeReport" className="nav-active">
             Grade Report
          </NavLink>
        </li>
        <li>
          <NavLink to="/MissingGradeForm" className="nav-active">
             Missing Grade
          </NavLink>
        </li>
        <li>
          <NavLink to="/InstructorContactPage" className="nav-active">
             Instructor Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/HelpAndSupportPage" className="nav-active">
            Help and Support
          </NavLink>
        </li>
           </ul>

      </nav>
  );
}

export default Navbar;