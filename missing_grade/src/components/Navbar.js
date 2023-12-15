import React from 'react';
import { Link } from 'react-router-dom';
import './style/Navbar.css';

const Navbar = () => {
  return (
    <div className='dashboard'>
      <div className="navbar">
       <nav>
        <ul>
          <li>
            <Link className='link' to='/landing'>Home</Link>
          </li>
          <li>
            <Link className='link' to='/instructor-contact'>Contact</Link>
            </li>
          <li>
            <Link className='link' to='/help-support-page'>Help and Support</Link>
            </li>
        </ul>
       </nav>
      </div>
    </div>  
  );
};

export default Navbar;