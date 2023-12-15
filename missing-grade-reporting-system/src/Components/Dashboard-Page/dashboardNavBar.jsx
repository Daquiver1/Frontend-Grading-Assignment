import React, { useState } from 'react';
import './dashboardNavBar.css'
import { Link } from 'react-router-dom';

import dashboard_logo from '../Assests/dashboardLogo.png'


import home_icon from '../Assests/home_.png'
import dashboard_icon from '../Assests/dashboard_.png'
import grades_icon from '../Assests/graduate-cap_.png'
import helpsupport_icon from '../Assests/support_.png'
import contacts_icon from '../Assests/contacts-line_.png'

import menu_icon from '../Assests/menu-alt-right_.png'
import close_icon from '../Assests/close_.png'


const DashboardNavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div>
      <nav className="navbar">
      <ul className='nav-left'>
        <li><img src={dashboard_logo} alt="" className='dashboardLogo' /></li>
        <li className='li-border'><Link to="/overview"><img src={home_icon} alt="" className='nav-icons' /> Home </Link></li>
        <li className='li-border'><Link to="/dashboard"><img src={dashboard_icon} alt="" className='nav-icons' /> Dashboard </Link></li>
        <li className='li-border'><Link to="/grade-report"><img src={grades_icon} alt="" className='nav-icons' /> Grades Report </Link></li>
      </ul>
      <ul className='nav-right'>
        <li className='li-border'><Link to="/help-and-support"><img src={helpsupport_icon} alt="" className='nav-icons' /> Help & Support </Link></li>
        <li className='li-border'><Link to="/contacts"><img src={contacts_icon} alt="" className='nav-icons' /> Contacts </Link></li>
      </ul>
      <div id='mobile' onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <img src={close_icon} alt="" /> : <img src={menu_icon} alt="" />}
        </div>
    </nav>

    
    </div>
    
  );
};

export default DashboardNavBar