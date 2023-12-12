import React from 'react';
import { Link } from 'react-router-dom'; 
import UgImageLogo from './assets/Ugimagelogo.png';
import './Landing.css';

function Landing() {
    return (
        <div className="landing-container">
            <header>
               <Link to="/"> < img className="logo" src={UgImageLogo} alt="Ug logo" /></Link>
            </header>
            <main className="main-content">
                <h1>Welcome to the Missing Grade Report System</h1>
                <p>Report missing grades effortlessly and efficiently.</p>
                <Link to="/login" className="custom-button">Login</Link>
                <div className="dropdown">
                    <button className="dropdown-button">Menu</button>
                    <div className="dropdown-content">
                        <Link to="/" className="dropdown-item">Landing</Link>
                        <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                        <Link to="/grade-report" className="dropdown-item">Grade Report</Link>
                        <Link to="/missing-grade-form" className="dropdown-item">Missing Grade Form</Link>
                        <Link to="/instructor-contact" className="dropdown-item">Instructor Contact</Link>
                        <Link to="/HelpAndSupport" className="dropdown-item">Help and Support</Link>
                    </div>
                </div>
                
            </main>
            <footer className="footer">
                <p>© 2023 University Of Gana</p>
            </footer>
        </div>
        
      
    );
}

export default Landing;
