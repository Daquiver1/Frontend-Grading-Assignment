// src/components/Navbar.js
import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/grade-report">Grade Report</Link></li>
                <li><Link to="/missing-grade-form">Missing Grade Form</Link></li>
                <li><Link to="/instructor-contact">Instructor Contact</Link></li>
                <li><Link to="/help-support">Help & Support</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
