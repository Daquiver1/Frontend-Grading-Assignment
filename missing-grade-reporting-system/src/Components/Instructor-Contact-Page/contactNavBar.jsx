import React from 'react';
import './contactNavBar.css'

import contacts_logo from '../Assests/contactsLogo.png'


import home_icon from '../Assests/home_.png'
import dashboard_icon from '../Assests/dashboard_.png'
import grades_icon from '../Assests/graduate-cap_.png'
import helpsupport_icon from '../Assests/support_.png'
import contacts_icon from '../Assests/contacts-line_.png'

const ContactNavBar = () => {


  return (
    <nav className="navbar">
      <ul className='nav-left'>
        <li><img src={contacts_logo} alt="" className='dashboardLogo' /></li>
        <li className='li-border'><a href="/overview"><img src={home_icon} alt="" className='nav-icons' /> Home </a></li>
        <li className='li-border'><a href="/dashboard"><img src={dashboard_icon} alt="" className='nav-icons' /> Dashboard </a></li>
        <li className='li-border'><a href="/gradeReport"><img src={grades_icon} alt="" className='nav-icons' /> Grades Report </a></li>
      </ul>
      <ul className='nav-right'>
        <li className='li-border'><a href="/helpSupport"><img src={helpsupport_icon} alt="" className='nav-icons' /> Help & Support </a></li>
        <li className='li-border'><a href="/instructorContact"><img src={contacts_icon} alt="" className='nav-icons' /> Contacts </a></li>
      </ul>
    </nav>
  );
};

export default ContactNavBar