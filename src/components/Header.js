import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <div className="left-section">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/UoG_CoA_2017.svg/1200px-UoG_CoA_2017.svg.png" alt="" />
        <span className='college'>University</span>
        <span className="ghana">Of Ghana</span>
        </div>
        <Link to="/LandingPage">
        <div className="right-section">
            <FontAwesomeIcon icon={faUser} className='account-icon'/>
        </div>
        </Link>
    </div>
  )
}

export default Header