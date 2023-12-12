import React, { useState, useEffect } from "react";
import "./HelpAndSupport.css";
import { Link } from "react-router-dom";


function Support () {
    const Dropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };

        return (
            <div className="drop-down-menu">
                <div className="profile-img" />
                <div className="nav-buttons">
                    <button className="nav-button">Dashboard</button>
                    <Link to="/grades"><button className="nav-button">Grades</button></Link>
                    <button className="nav-button">Contact Instructor</button>
                    <button className="nav-button">Help</button>
                </div>
            </div>

        );

    };


    return(
        <div className="dashboard">
            <div className="tab-1">
                <h1 className="logo">UG</h1>
                <div className="nav-buttons">
                    <button className="nav-button">Dashboard</button>
                    <button className="nav-button">Grades</button>
                    <button className="nav-button">Contact</button>
                    <button className="nav-button">Help</button>
                </div>
            </div>
            <div className="tab-2">
                <div className="viewing-grades">
                    <h2>Viewing Grades</h2>
                    <p>Follow these steps to access and view your grades on our platform:</p>    
                </div>
                <div className="instructions">
                    <ol>
                        <li>Step 1: [Add instructions]</li>
                        <li>Step 2: [Add instructions]</li>
                        <li>Step 3: [Add instructions]</li>
                    </ol>
                    <p>If you encounter any issues, please check our <a href="#troubleshooting">troubleshooting guide</a>.</p>
                </div>

                <div className="missingGrades">
                    <h2>Finding Missing Grades</h2>
                    <p>If you have missing grades, here's what you can do:</p>
                    <ol>
                        <li>Step 1: [Add instructions]</li>
                        <li>Step 2: [Add instructions]</li>
                        <li>Step 3: [Add instructions]</li>
                    </ol>
                    <p>If your issue persists, please report it through our <a href="#contact">contact form</a>.</p>
                </div>

                <div className="troubleshooting">
                    <h2>Troubleshooting</h2>
                    <p>If you're experiencing difficulties, check the following:</p>
                    <ul>
                        <li>Make sure your browser is up-to-date.</li>
                        <li>Clear your browser cache and cookies.</li>
                        <li>Try accessing the platform from a different browser.</li>
                    </ul>
                    <p>If the problem persists, <a href="#contact">contact our support team</a>.</p>
                </div>

                <div className="contact">
                    <h2>Contact Us</h2>
                    <p>If you need further assistance, feel free to reach out:</p>
                    <p>Email: support@example.com</p>
                    <p>Phone: 123-456-7890</p>
                        </div>
                    </div>
                </div>
    );


}

export default Support;

