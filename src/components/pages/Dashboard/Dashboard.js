import React from 'react'
import "./Dashboard.css"
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { TfiDashboard } from "react-icons/tfi";


const Dashboard = () => {
  return (
  <>
  <Navbar />

    <div className='dashboard'>
      <div className='dashboard-container'>
        <div className='side-bar'>
          <div>
            <h1 className='h1'><span><TfiDashboard /></span>Dashboard</h1>
            <ul>
              <li>
                <Link to='/'>
                  <h1>Home</h1>
                </Link>
              </li>
              <li>
                <Link to='/Login'>
                  <h1>Notifications</h1>
                </Link>
              </li>
              <li>
                <Link to='/Login'>
                  <h1>User Profile</h1>
                </Link>
              </li>
              <li>
                <Link to='/Faq'>
                  <h1>Help and Support</h1>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <h1>Quick Actions</h1>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <h1 >Statistics and Insights</h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='dashboard-content'></div>
      </div>
    </div>
  </>
  )
}

export default Dashboard