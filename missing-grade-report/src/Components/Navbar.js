import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/landing">Landing Page</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/grade-report">Grade Report</Link></li>
                <li><Link to="/missing-grade-form">Missing Grade Form</Link></li>
                <li><Link to="/instructor-contact">Instructor Contact</Link></li>
                <li><Link to="/help">Help & Support</Link></li>
                {/* Add more links based on your Routes */}
            </ul>
        </nav>
    );
};

export default Navbar;
