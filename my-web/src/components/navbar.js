import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../main.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    const isLoggedIn = false; // Replace with your actual authentication logic

    return (
        <header>
            <h3>Gradesk</h3>
            <nav className="navy" ref={navRef}>
                {!isLoggedIn && (
                    <Link to='/login'>
                        <button className="log-btn">
                            <span className="tt-button">Login</span>
                        </button>
                    </Link>
                )}
                {/* Add more navigation links here */}
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
