import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className={`header ${darkMode ? 'dark' : ''}`}>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="header-buttons">
                <button className="menu-button">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <button className="notification-button">
                    <FontAwesomeIcon icon={faBell} />
                </button>
                <div className="dropdown">
                    <button className="profile-button">
                        <FontAwesomeIcon icon={faUserCircle} />
                    </button>
                    <div className="dropdown-content">
                        <Link to="/profile">Profile</Link>
                        <Link to="/settings">Settings</Link>
                        <button onClick={handleDarkMode}>
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
