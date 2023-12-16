import React from 'react';
import { Link } from 'react-router-dom';
import ugLogo from './assets/uglogo.png';

const Header = () => {
    return (
        <header style={headerStyle}>
        <div style={logoStyle}>
            <img src={ugLogo} alt="Logo" height="70" />
        </div>
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li style={{ ...liStyle, color: '#fff' }}>
                    <Link to="/dashboard" style={{ color: '#fff' }}>Dashboard</Link>
                </li>
                <li style={{ ...liStyle, color: '#fff' }}>
                    <Link to="/instructorcontact" style={{ color: '#fff' }}>Instructor Contact</Link>
                </li>
                <li style={{ ...liStyle, textDecorationColor: '#fff' }}>
                    <Link to="/MissingGradeForm" style={{ color: '#fff' }}>Missing Grade</Link>
                </li>
                <li style={{ ...liStyle, color: '#fff' }}>
                    <Link to="/gradereport" style={{ color: '#fff' }}>Grade Report</Link>
                </li>
                <li style={{ ...liStyle, color: '#fff' }}>
                    <Link to="/helpandsupport" style={{ color: '#fff' }}>Help & Support</Link>
                </li>
                <li style={{ ...liStyle, textDecoration: 'none' }}>
                    <Link to="/" style={{ color: '#fff' }}>Logout</Link>
                </li>
            </ul>
        </nav>
    </header>
    );

    
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    background: '#001f3f', // Change header background color to blue
    color: '#8B4513',
    borderBottom: '2px solid #fff',
};

const logoStyle = {
    flex: '1',
};

const navStyle = {
    flex: '1',
    textAlign: 'right',
};

const ulStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
};

const liStyle = {
    display: 'inline-block',
    margin: '0 10px',

};

export default Header;