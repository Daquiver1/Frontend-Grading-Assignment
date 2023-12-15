// components/NavBar.jsx

import React from 'react';
import './NavBar.css';

import icon from '../Accutrument/dashBoard log.png'

const NavBar = () => {
  return (
    <nav className="navbar">
     <ul className='nav-left'>
        <li><img src={icon} alt="" className='dashboardLogo' /></li>
        <li className='li-border'><a href=""> Home </a></li>
        <li className='li-border'><a href=""> Dashboard </a></li>
        <li className='li-border'><a href=""> Grades Report </a></li>
      </ul>
      <ul className='nav-right'>
        <li className='li-border'><a href=""> Help & Support </a></li>
        <li className='li-border'><a href=""> Contacts </a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
