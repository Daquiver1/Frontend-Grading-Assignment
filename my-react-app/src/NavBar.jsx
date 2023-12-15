// NavBar.jsx

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <aside>
        <div className="navBar" style={navBarStyle}>
            {/* Your navigation bar content goes here */}
            <ul className="navList">
                <li style={{ ...liStyle, color: 'black', marginTop: '20px' }}>
                    <Link to="/Dashboard" style={{ color: 'black' }}>Dashboard</Link>
                </li>
                <li style={{ ...liStyle, color: 'black' , marginTop: '20px'}}>
                    <Link to="/Instructor Contact" style={{ color: 'black' }}>Instructor Contact</Link>
                </li>
                <li  style={{ ...liStyle, textDecorationColor: 'black', marginTop: '20px' }}>
                    <Link to="/MissingGradeForm" style={{ color: 'black' }}>Missing Grade</Link>
                </li>
                <li style={{ ...liStyle, color: '#fff', marginTop: '20px' }}>
                    <Link to="/GradeReport" style={{ color: 'black' }}>Grade Report</Link>
                </li>
                <li style={{ ...liStyle, color: 'black', marginTop: '20px' }}>
                    <Link to="/HelpandSupport" style={{ color: 'black' }}>Help & Support</Link>
                </li>
            </ul>
        </div>
        </aside>
    );
};

const navBarStyle = {
    padding: '300px',
    background: 'transparent', // Change header background color to blue
    color: 'transparent',
    borderBottom: '2px solid #fff',
    left: '-250px', // Push to the left side
};

const liStyle = {
    display: 'inline-block',
    margin: '0 10px',
};

export default NavBar;
