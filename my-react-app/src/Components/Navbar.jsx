import React from 'react';
import '../Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../Assets/comScience_logo.png'

function Navbar() {
  return (
    <div>
    <nav className='navbar'>
      <div className='leftside'>
        <img src={Logo}  alt='student
        '/>
        <div className='nav__brand'> STUDENT GRADES</div>
      </div>
      <div className='rightside'>
        <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Grade report'>Grade Report</Link>
        <Link to='/MissingGradeForm'>Missing Grade Form</Link>
        <Link to='/Instructor contact'>Instructor Contact</Link>
        <Link to='/Help'>Help</Link>
        <Link to='/Dashboard'>Dashboard</Link>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
