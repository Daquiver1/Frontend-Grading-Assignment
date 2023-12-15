import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [isContainerVisible, setContainerVisible] = useState(false);

  const toggleContainer = () => {
    setContainerVisible(!isContainerVisible);
  };

  return (
    <div>
      <button id="open" className={!isContainerVisible ? '' : 'hide'} onClick={toggleContainer}>
        Open
      </button>
      <button id="close" className={isContainerVisible ? '' : 'hide'} onClick={toggleContainer}>
        Close
      </button>
        <div className={`container ${isContainerVisible ? '' : 'hide'}`}>
            <ul>
                <li><Link to="/Dashboard" className='nav-link1' >Dashboard</Link></li>
                <li><Link to="/instructorcontact" className='nav-link1' >Instructor  Contact</Link></li>
                <li><Link to="/Missinggrade" className='nav-link1' >Missing  Grade</Link></li>
                <li><Link to="/gradereport" className='nav-link1' >Grade  Report</Link></li>
                <li><Link to="/helpandsupport" className='nav-link1' >Help & Support</Link></li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar
