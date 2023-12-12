import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Your Logo</Link>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        Menu
      </button>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Link to="/" className="navbar-item" onClick={toggleNavbar}>
            Home
          </Link>
          <Link to="/about" className="navbar-item" onClick={toggleNavbar}>
            About
          </Link>
          <Link to="/contact" className="navbar-item" onClick={toggleNavbar}>
            Contact
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
