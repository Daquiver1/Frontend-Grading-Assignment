import React from 'react'
import "./SideNav.css"
import { Link } from 'react-router-dom'
export const SideNav = () => {
  return (
    <div className='nav-container'>
      <nav>
        <ul>
          <li>
            <div to="#" className='logo'>
          
            <img src="../Images/tm7.jpg" alt="" srcset="" />
            
              <span>Inkbell Camp</span>
              <p>STUDENT</p>
            </div>
          </li>
          <li>
            <Link to="#" >
                <i className='fas fa-home'></i>
                <span className="nav-item">Home</span>
            </Link>    
          </li>
          <li>
            <Link to="#" >
                <i className='fas fa-user'></i>
                <span className="nav-item">Profile</span>
            </Link>
          </li>
          <li>
            <Link to="#" >
              <i className='fas fa-wallet'></i>
              <span className="nav-item">Wallet</span>
            </Link>
          </li>
          <li>
            <Link to="#" >
                <i className='fas fa-chart-bar'></i>
                <span className="nav-item">Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="#" >
              <i className='fas fa-tasks'></i>
              <span className="nav-item">Assignments</span>
            </Link>
          </li>
          <li>
            <Link to="#" >
                <i className='fas fa-cog'></i>
                <span className="nav-item">Settings</span>
            </Link>
          </li>
          <li>
            <Link to="#" >
              <i className='fas fa-question-circle'></i>
              <span className="nav-item">Help</span>
            </Link>
          </li>
          <li>
            <Link to="#" className='logout'>
                <i className='fas fa-sign-out'></i>
                <span className="nav-item">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
      </div>
  )
}
