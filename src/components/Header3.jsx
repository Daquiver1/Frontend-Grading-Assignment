import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ugLogo.png'; // Adjust the path based on your project structure

const Header3 = () => {
  return (
    <header>
      <div className='HeaderItems'>
      <Link to="/">
        <img src={logo} alt="Logo"  height={55}/>
      </Link>
      <nav>
      </nav>
      </div>
    </header>
  );
};

export default Header3;
