import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  
  return (
    <>
    <nav className="navbar">
     <div className='navbar-container'>
      <div className='school-logo'>
        < img src={process.env.PUBLIC_URL +'./images/ug_standard_new_sl_1.png'}  alt='School-Logo' />
      </div>
    <div className='tabs-container'>
    <ul className="nav nav-underline justify-content-end">
  <li className="nav-item">
  <a className="nav-link --bs-body-bg-rgb" href="http://localhost:3000">Home</a>
  </li>
  <li className="nav-item ">
    <a className="nav-link --bs-body-bg-rgb" href="#">Login</a>
  </li>
  <li className="nav-item">
    <a className="nav-link --bs-body-bg-rgb" href="#">Dashboard</a>
  </li>
  <li className="nav-item">
    <a className="nav-link --bs-body-bg-rgb" href="#">Grade Report</a>
  </li>
</ul>
    </div>
      
     </div>
    </nav>

    </>
      
    
  )
}

export default Navbar
