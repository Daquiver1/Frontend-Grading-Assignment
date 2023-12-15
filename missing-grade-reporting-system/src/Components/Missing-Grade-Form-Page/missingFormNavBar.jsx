import React from 'react';
import './missingFormNavBar.css'
import { Link } from 'react-router-dom';

import missingform_logo from '../Assests/missingFormLogo.png'


import home_icon from '../Assests/home_.png'
import dashboard_icon from '../Assests/dashboard_.png'
import grades_icon from '../Assests/graduate-cap_.png'
import helpsupport_icon from '../Assests/support_.png'
import contacts_icon from '../Assests/contacts-line_.png'

const MissingFormNavBar = () => {


  return (
    <nav className="navbar">
      <ul className='nav-left'>
        <li><img src={missingform_logo} alt="" className='dashboardLogo' /></li>
        <li className='li-border'><Link to="/overview"><img src={home_icon} alt="" className='nav-icons' /> Home </Link></li>
        <li className='li-border'><Link to="/dashboard"><img src={dashboard_icon} alt="" className='nav-icons' /> Dashboard </Link></li>
        <li className='li-border'><Link to="/grade-report"><img src={grades_icon} alt="" className='nav-icons' /> Grades Report </Link></li>
      </ul>
      <ul className='nav-right'>
        <li className='li-border'><Link to="/help-and-support"><img src={helpsupport_icon} alt="" className='nav-icons' /> Help & Support </Link></li>
        <li className='li-border'><Link to="/contacts"><img src={contacts_icon} alt="" className='nav-icons' /> Contacts </Link></li>
      </ul>
    </nav>
  );
};

export default MissingFormNavBar