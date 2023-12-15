import React from 'react';
import { Link } from 'react-router-dom';
import ugLogo from './assets/uglogo.png';

const LandingPage = () => {
    return (
        <div>
            <header style={headerStyle}>
                <div style={logoStyle}>
                    <img src={ugLogo} alt="Logo" height="70" />
                </div>
                <nav style={navStyle}>
                    <ul style={ulStyle}>
                        <li style={{ ...liStyle, textDecoration: 'none' }}>
                            <Link to="/login" style={{ color: '#fff' }}>Login</Link>
                        </li>
                        <li style={{ ...liStyle, color: '#fff' }}>
                            <Link to="/Dashboard" style={{ color: '#fff' }}>Dashboard</Link>
                        </li>
                        <li style={{ ...liStyle, color: '#fff' }}>
                            <Link to="/Instructorcontact" style={{ color: '#fff' }}>Instructor Contact</Link>
                        </li>
                        <li style={{ ...liStyle, textDecorationColor: '#fff' }}>
                            <Link to="/MissingGradeForm" style={{ color: '#fff' }}>Missing Grade</Link>
                        </li>
                        <li style={{ ...liStyle, color: '#fff' }}>
                            <Link to="/Gradereport" style={{ color: '#fff' }}>Grade Report</Link>
                        </li>
                        <li style={{ ...liStyle, color: '#fff' }}>
                            <Link to="/Helpandsupport" style={{ color: '#fff' }}>Help & Support</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section style={bodyStyle}>
                <div style={centerContent}>
                    <h1 style={{ fontSize: '3em', color:'#cda768', }}>Welcome to The Grade Reporting System</h1>
                    <p style={{ fontSize: '1.2em', color: '#555' }}>
                        This system provides a comprehensive overview of your grades and academic
                        performance. Login to explore your dashboard, contact instructors,
                        resolve missing grades, view detailed grade reports, and get assistance
                        through our help and support section.
                    </p>
                </div>
            </section>
            {/* Add extra modern stuff here */}
        </div>
    );
};

// Styles
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


const bodyStyle = {
    padding: '20px',
    textAlign: 'center',
    fontStyle: 'italic',
};

const centerContent = {
    maxWidth: '600px',
    margin: '0 auto',
};

export default LandingPage;
