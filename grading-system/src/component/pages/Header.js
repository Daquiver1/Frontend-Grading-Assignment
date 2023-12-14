import {Outlet, Link} from "react-router-dom";
import React from 'react';

const Header = () => {
    return (
        <>
        <nav>
            <div className="Navbar">
                <h1>Missing Grade Reporting System</h1>
                <div className='links'>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/grade">Grade Report</Link>
                    <Link to="/missing">Missing Grade</Link>
                    <Link to="/instructor">Instructor Contact</Link>
                    <Link to="/help">Help & Support</Link>
                </div>
                <br />
            </div>

        </nav>
        <Outlet/>
        </>
    );
};

export default Header;