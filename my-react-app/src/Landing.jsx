import React from 'react';
import UgImageLogo from './assets/Ugimagelogo.png';
import './Landing.css';

function Landing() {
    return (
        <div>
            <header>
                <img className="Ug image" src={UgImageLogo} alt="Ug logo" />
            </header>
            <button className="custom-button">Login</button>
        </div>
    );
}

export default Landing;
