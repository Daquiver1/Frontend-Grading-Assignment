import React from 'react';
import  "./Styles/header_styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Link } from "react-router-dom";


function openMenu(){
  document.querySelector(".js-menu").classList.toggle("menu-open");
}

function closeMenu (){
  document.querySelector(".js-menu").classList.remove("menu-open");
}

function Header(){
  return (
  <div>
    <header className="">
      <div className="logo-section">
          <h1>GradeTrack</h1>
          <button className="menu-btn" onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          
      </div>
      <nav>
          <ul className="js-menu">
            <li onClick={closeMenu}>
              <Link to="/home" className="link-style">
                Home
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/dashboard" className="link-style">
                Dashboard
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/grades" className='link-style'>
                <span className="nowrap">Grade Report</span>
              </Link>
            </li>
           <li onClick={closeMenu}>
              <Link to="/report" className="link-style">
                <span className="nowrap">Report Missing Grade</span>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/instructor" className="link-style">
                <span className="nowrap">Contact Instructors</span>
              </Link>
            </li>   
            <li onClick={closeMenu}>
              <Link to="/help-support" className="link-style">
                <span className="nowrap">Help and Support</span>
              </Link>
            </li>  
            <li onClick={closeMenu}>
              <Link to="/login" className="link-style">
                Logout
              </Link>
            </li>         
          </ul>
      </nav>
    </header>
  </div>);
}

export default Header