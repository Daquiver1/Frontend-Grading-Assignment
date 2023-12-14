import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

const NavBar = () => {
    return (
        <aside className="navbar-container">
            <nav className="navbar">
                <ul className="navbar-list">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/instructorcontact">Instructor Contact</Link>
                    </li>
                    <li>
                        <Link to="/missinggrade">Missing Grade</Link>
                    </li>
                    <li>
                        <Link to="/gradereport">Grade Report</Link>
                    </li>
                    <li>
                        <Link to="/helpandsupport">Help & Support</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default NavBar;
