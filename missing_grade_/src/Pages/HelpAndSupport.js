import React from "react";
import "./Dashboard.css";
import Navbar from "./component/Navbar";


function Help () {
    //Navigating to the various pages
    //const navigate = useNavigate();

    //const navigateToDashboard = () => {
    //    navigate('./dashboard');
    //}

    return(
        <div className="total">
            <Navbar /> 
            
            <div className="tab-2 help-info">
                <h2>Help And Support</h2>
                <div className="viewing-grades">
                    <h2>Viewing Grades</h2>
                    <p>Follow these steps to access and view your grades:</p>    
                </div>
                <div className="instructions">
                    <ol>
                        <li>Step 1: Login to the portal</li>
                        <li>Step 2: Navigate to the grades page</li>
                        <li>Step 3: View your grades by course</li>
                    </ol>
                </div>

                <div className="missingGrades">
                    <h2>Finding Missing Grades</h2>
                    <p>If you have missing grades, here's what you can do:</p>
                    <ol>
                        <li>Step 1: Refresh the page</li>
                        <li>Step 2: Ensure that all scores are allocated</li>
                        <li>Step 3: Contact your instructor</li>
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

export default Help;

