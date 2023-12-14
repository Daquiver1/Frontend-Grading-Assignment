import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navabar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
            <div className="tab-1">
                <h1 className="logo">UG</h1>
                <div className="nav-buttons">
                   <Link to="/Dashboard"><button className="nav-button">Dashboard</button></Link> 
                    <Link to="/grade-report"><button className="nav-button">Grades Report</button></Link>
                    <Link to="/missing-grade-form"><button className="nav-button">Missing Grade</button></Link>
                    <Link to="/contact-us"><button className="nav-button">Contact</button></Link>
                    <Link to="/Help-and-support"><button className="nav-button">Help</button></Link>
                </div>
            </div>
    </div>
  );
};

export default Navbar;
