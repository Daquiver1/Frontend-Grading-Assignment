import React from 'react';
import { Link } from 'react-router-dom';
import './LandHeader.css';

const Header = () => {
    return (
      <div className="header">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
              <h1 className='logo-text'>GradeHub</h1>
           {/* <img src="/path/to/your/logo.png" alt="GradeGuard Pro Logo" />*/}
          </div>
          <div className='Login-Form'>
          <ul>
            <li>
           <input type='text' placeholder='User ID'className='input'/>   
            </li>
            <li>
           <input type='password' placeholder='Password'className='input'/>   
            </li>
            <li>
           <Link to ="/login"> <button className='login'>Login</button></Link>
            </li>
          </ul>
          </div>
        </nav>
        </div>
  );
};

export default Header;