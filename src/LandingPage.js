import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Header from './Header';
import Footer from './PageFooter';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
    const handleLogoutClick = () => {
        setShowLogoutConfirmation(true);
      };
    
      const handleLogoutConfirmation = (confirmed) => {
        setShowLogoutConfirmation(false);
        if (confirmed) {
          // Redirect to the LoginPage
          navigate('/'); // Update the path based on your route configuration
        }
      };

  return (
    <div className='main-page'>
        <Header />
        <div className="columns-landing">
        <div className='col-4'>
            <FaUserCircle className='profile-landing' />
            <p>ANTHONY AFFUL BRONI</p>
        <div className='profile-info'>
                <ul>
                    <li>
                        <span className='label'>Student ID:</span>
                        <span className='value'>11121058</span>
                    </li>
                    <li>
                        <span className='label'>Level:</span>
                        <span className='value'>300</span>
                    </li>
                    <li>
                        <span className='label'>Programme:</span>
                        <span className='value'>BSc Information Technology</span>
                    </li>
                    <li>
                        <span className='label'>College:</span>
                        <span className='value'>Basic And Applied Sciences</span>
                    </li>
                    <li>
                        <span className='label'>Sex:</span>
                        <span className='value'>Male</span>
                    </li>
                    
                </ul>
                </div>
        </div>
        </div>

        {/* Logout Icon */}
        <div className="logout-icon" onClick={handleLogoutClick}>
          <FaSignOutAlt size={30} />
        </div>

        {showLogoutConfirmation && (
          <div className="logout-confirmation-msg">
            <p>Are you sure you want to log out?</p>
            <button onClick={() => handleLogoutConfirmation(true)}>Yes</button>
            <button onClick={() => handleLogoutConfirmation(false)}>No</button>
          </div>
        )}
        <Footer />
    </div>

  );
};

export default LandingPage;
