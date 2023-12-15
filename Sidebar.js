import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChartBar,
  faQuestion,
  faAddressBook,
  faSignInAlt,
  faEdit,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  console.log('Sidebar rendered'); // Add this line for debugging
  return (
    <div className="sidebar">
      <div className="contentContainer">
        {/* Additional content if needed */}
      </div>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/Dashboard">
            <FontAwesomeIcon icon={faChartBar} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/HelpAndSupport">
            <FontAwesomeIcon icon={faQuestion} />
            Help and Support
          </Link>
        </li>
        <li>
          <Link to="/InstructorsContact">
            <FontAwesomeIcon icon={faAddressBook} />
            Instructors Contact
          </Link>
        </li>
        <li>
          <Link to="/Login">
            <FontAwesomeIcon icon={faSignInAlt} />
            Login
          </Link>
        </li>
        <li>
          <Link to="/Gradereportpage">
            <FontAwesomeIcon icon={faEdit} />
            Grade Report
          </Link>
        </li>
        <li>
          <Link to="/Missinggradeform">
            <FontAwesomeIcon icon={faFileAlt} />
            Missing Grade Form
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;