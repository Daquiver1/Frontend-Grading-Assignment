import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="logo">
                <img src="/path/to/logo.png" alt="Logo" />
            </div>
            <nav className="nav-links">
                <Link to="/home">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/grade-report">Grade Report</Link>
                <Link to="/missing-grade-form">Missing Grade Form</Link>
                <Link to="/instructor-contact">Instructor Contact</Link>
                <Link to="/help-support">Help & Support</Link>
            </nav>
            <div className="settings">
                <Link to="/settings">Settings</Link>
                <Link to="/"><button>Logout</button></Link>
            </div>
            <footer className="footer">
                <p>© 2023 Your Organization. All rights reserved.</p>
            </footer>
        </aside>
    );
};

export default Sidebar;
