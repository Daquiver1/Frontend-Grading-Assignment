import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    background: '#333',
    padding: '1rem',
    color: '#fff',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const liStyle = {
    margin: '0',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
       
        <li style={liStyle}><Link to="/login" style={linkStyle}>loginpage</Link></li>
        <li style={liStyle}><Link to="/dasboard" style={linkStyle}>dasboard</Link></li>
        <li style={liStyle}><Link to="/landingpage" style={linkStyle}>landingpage</Link></li>
        <li style={liStyle}><Link to="/help" style={linkStyle}>help</Link></li>
        <li style={liStyle}><Link to="/missing grade form" style={linkStyle}>missinggrade</Link></li>
        <li style={liStyle}><Link to="/grade report" style={linkStyle}>grade</Link></li>
        <li style={liStyle}><Link to="/instructor page" style={linkStyle}>instructor</Link></li>
    
      </ul>
    </nav>
  );
}

export default Navbar;