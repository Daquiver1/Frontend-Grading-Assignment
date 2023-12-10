import React from 'react';
import UgImageLogo from './assets/Ugimagelogo.png';
import './Landing.css';

function Landing() {
    return (
        <div className="landing-container">
            <header>
                <img className="logo" src={UgImageLogo} alt="Ug logo" />
            </header>
            <main className="main-content">
                <h1>Welcome to the Missing Grade Report System</h1>
                <p>Report missing grades effortlessly and efficiently.</p>
                <button className="custom-button">Login</button>
            </main>
        </div>
    );
}

export default Landing;
