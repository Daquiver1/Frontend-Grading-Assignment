import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResponsiveNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav>
            <div className="navbar-links-container">
                {isMenuOpen && (
                    <>
                        <Link to="/Dashboard">Dashboard</Link>
                        <Link to="/missinggradeform">Missing Grade form</Link>
                        <Link to="/Contactus">Contact Us</Link>
                        <Link to="/grade-report">Grade & Report</Link>
                    </>
                )}
                <button onClick={toggleMenu}>Menu</button>
            </div>
        </nav>
    );
}

export default ResponsiveNavbar;