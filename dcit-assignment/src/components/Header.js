import React from 'react';
import logo from './img/ug-logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
        <div className="logo-section">
          <img  className="logo"src={logo} style={{backgroundColor: 'white',width:'150px', height:'41.7px'}} alt='logo'/>
        </div>
        <div className='header-text'>
          MISSING GRADE REPORTING SYSTEM
        </div>
    </header>
  )
}

export default Header