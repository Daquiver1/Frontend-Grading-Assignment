import React, { useState } from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { Outlet, Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";

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
      <div className="profile-icon">
        <div className="notification" onClick={handleNotificationClick}>
          <IoNotificationsCircleOutline />
          <div className="notification-mess">
            <p>4</p>
          </div>
        </div>
        <div className="contact-ic" onClick={handleLogoutClick}>
          <MdLogout />
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirmation && (
        <div className="logout-confirmation">
          <p>Do you want to logout?</p>
          <button onClick={handleLogoutConfirmation}>Logout</button>
          <button onClick={handleCancelLogout}>Cancel</button>
        </div>
      )}

      {/* Notification Messages Modal */}
      {showNotificationMessages && (
        <div className="notification-messages">
          {/* Display your notification messages here */}
          <ul>
            <li>Notification 1</li>
            <li>Notification 2</li>
          </ul>
          <button onClick={handleHideNotificationMessages}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Header;
