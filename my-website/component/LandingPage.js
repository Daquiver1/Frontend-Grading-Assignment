// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css';
import {Link} from "react-router-dom";

function LandingPage() {
    return (
        <div className="landing-page-container">
            <div className="hero-section">
                <img
                    src="https://tertiary24.com/wp-content/uploads/2022/04/University-of-ghana-logo.jpg" // Replace with your actual image URL
                    alt="University Of Ghana, Legon"
                />
                <div className="hero-text">
                    <h2>Welcome to the Missing Grade Reporting System</h2>
                    <p>Track and report missing grades with ease.</p>
                    <Link to="/login" className='cta-button'>
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="additional-content">
                <h3>Key Features</h3>
                <ul>
                    <li>View your current grades at a glance.</li>
                    <li>Report missing grades effortlessly.</li>
                    <li>Communicate with instructors and academic administration.</li>
                </ul>
            </div>
        </div>
    );
}

export default LandingPage;
