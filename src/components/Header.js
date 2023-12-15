import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import legonlogo from '../assets/legonlogo.jpeg';
import "./Head.css";

const Header = () => {
  const [menuChecked, setMenuChecked] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const hideNotifications = () => {
    setShowNotifications(false);
  };

  const fetchNotifications = async () => {
    // Mock API response
    const mockResponse = {
      notifications: [
        "New message from instructor.",
      
        "Your grade has been updated.",
      ],
    };

    setNotifications(mockResponse.notifications);
  };

  useEffect(() => {
    fetchNotifications();
  }, []); // Fetch notifications on component mount

  const handleCheckboxChange = () => {
    setMenuChecked((prevMenuChecked) => !prevMenuChecked);
  };

  useEffect(() => {
    const slidingPage = document.getElementById('sliding_page');

    if (menuChecked) {
      slidingPage.style.right = '0';
    } else {
      slidingPage.style.right = '-100%';
    }
  }, [menuChecked]);

  return (
    <>
      <div>
        <section id="section">
          <div id="menu_button">
            <input
              type="checkbox"
              id="menu_checkbox"
              checked={menuChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="menu_checkbox" id="menu_label">
              <div id="menu_text_bar"></div>
            </label>
          </div>
          <div id="notification_bell" onClick={toggleNotifications}>
            <FontAwesomeIcon icon={faBell} />
          </div>

          {showNotifications && (
            <div id="notification_page" onClick={hideNotifications}>
              {notifications.length > 0 ? (
                <div id="notifications-container">
                  {notifications.map((notification, index) => (
                    <div key={index} className="notification-item">
                      {notification}
                    </div>
                  ))}
                </div>
              ) : (
                <div>No new notifications</div>
              )}
            </div>
          )}
          <div id="sliding_page">
            {/* Your sliding page content goes here */}
            <div className='slide-image'>
              <img src={legonlogo} className='image' alt="" />
            </div>
            <div className='slide'>
              <NavLink to="/dash">Dash-Board.</NavLink>
            </div>
            <br />
            <div className='slide'>
              <NavLink to="/view">Grade Report.</NavLink>
            </div>
            <br />
            <div className='slide'>
              <NavLink to="/form">Missing Grade Form.</NavLink>
            </div>
            <br />
            <div className='slide'>
              <NavLink to="/contact">Contact an Instructor.</NavLink>
            </div>
            <br />
            <div className='slide'>
              <NavLink to="/">Log Out <FontAwesomeIcon icon={faSignOutAlt} /></NavLink>
            </div>
          </div>
          <h1>Welcome, William</h1>
        </section>
      </div>
    </>
  );
};

export default Header;