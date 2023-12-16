import React, { useState } from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showNotificationMessages, setShowNotificationMessages] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleNotificationClick = () => {
    setShowNotificationMessages(true);
  };

  const handleLogoutConfirmation = () => {
    // Perform logout actions here
    // ...

    // After logout, hide the confirmation message
    setShowLogoutConfirmation(false);
  };

  const handleCancelLogout = () => {
    // User canceled logout, hide the confirmation message
    setShowLogoutConfirmation(false);
  };

  const handleHideNotificationMessages = () => {
    setShowNotificationMessages(false);
  };

  return (
    <div className="Container">
      <header className='header'>
            <div className='logo-section'>  
                 <img src="https://dcs.ug.edu.gh/img/comScience_logo.png" alt=""/>
            </div>
            <div className='links-section'>
            <div>
                <Link to = "/LandingPage">
                    <a href="/">Home</a>
                </Link>
            </div>
            <div>
                <Link to="/GradeReport">
                 <a href="/">Grade Report</a>
                </Link>
            </div>
            <div>
                <Link to = "/Dashboard">
                    <a href="/">Dashboard</a>
                </Link>
            </div>
            <div>
                <Link to = "/MissingGradeForm" >
                    <a href="/">Missing Grade?</a>
                </Link>
            </div>
            <div>
                <Link to = "/ContactPage">
                     <a href="/">Contact</a>
                </Link>
            </div>
            <div>
                <Link to = "/HelpAndSupportPage">
                    <a href="/">Help</a>
                </Link>
            </div>
            </div>
        </header>
        <Link to="/Dashboard">
          <div className="profile-icon">
          <div className="notification" onClick={handleNotificationClick}>
            <IoNotificationsCircleOutline />
            <div className="notification-mess">
              <p>4</p>
            </div>
          </div>
        </div>
        </Link>
    </div>
  );
};

export default Header;
