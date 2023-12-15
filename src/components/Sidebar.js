import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faFileAlt, faChartBar, faAddressBook, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { BiLogOutCircle } from "react-icons/bi";
import { Outlet, Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="user-icon">
        <FontAwesomeIcon icon={faUser}/>
        <p className='user-id'>11121058</p>
      </div>
      <ul>
        <Link className='nav-links' to="/Dashboard">
          <li>
            <FontAwesomeIcon icon={faHome} />
            <span>Dashboard</span>
          </li>
        </Link>
        <Link className='nav-links' to="/TranscriptDetail">
        <li>
          <FontAwesomeIcon icon={faFileAlt} />
          <span>Transcript Detail</span>
        </li>
        </Link>
        <Link className='nav-links' to="/Report">
          <li>
            <FontAwesomeIcon icon={faChartBar} />
            <span>Report Missing Grade</span>
          </li>
        </Link>
        <Link className='nav-links' to="/ContactPage">
          <li>
            <FontAwesomeIcon icon={faAddressBook} />
            <span>Contact Instructor</span>
          </li>
        </Link>
        <Link className='nav-links' to="/FAQPage">
        <li>
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span>FAQ</span>
        </li>
        </Link>
        <Link className='nav-links' to="/">
          <li>
            <BiLogOutCircle />
            <span>Logout</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
