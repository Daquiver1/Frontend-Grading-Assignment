import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faFileAlt, faChartBar, faAddressBook, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="landing-page">
        <Sidebar />
        <div className="landing-page-right">
          <div className='profile-section'>
            <div className="profile-container">
                <div class="profile-section-user-icon">
                  <FontAwesomeIcon icon={faUser} size="3x" />
                </div>
                  <ul>
                    <li className='first-item'>
                      <span className='label'>Student Id:</span>
                      <span className='value'>11121058</span>
                    </li>
                    <li>
                      <span className='label'>Name:</span>
                      <span className='value'>Frederick Ofori</span>
                    </li>
                    <li>
                      <span className='label'>Date of Birth:</span>
                      <span className='value'>26-06-2003</span>
                    </li>
                    <li>
                      <span className='label'>Level:</span>
                      <span className='value'>200</span>
                    </li>
                    <li>
                      <span className='label'>Programme:</span>
                      <span className='value'>BSc. In Information Tech.</span>
                    </li>
                    <li>
                      <span className='label'>Offering Type:</span>
                      <span className='value'>Full-Time</span>
                    </li>
                    <li>
                      <span className='label'>Academic Year:</span>
                      <span className='value'>2023/2024</span>
                    </li>
                  </ul>              
              </div>           
          </div>
          <div className='overview'>
            <h2>
              Welcome to <span className='grade'>Grade</span><span className='vista'>Vista</span>
              </h2>
            <p>
              GradeVista is a Missing Grade Reporting System that ensures a hassle-free means to communicate discrepancies in course grades.
              Through efficient reporting mechanisms, students can notify instructors or administrative staff promptly, facilitating a swift resolution process.
            </p>
            <p>
            GradeVista provides a centralized platform where course instructors can efficiently manage missing grades.
            </p>
            <p>
            With GradeVista, students can confidently report missing grades, contributing to a robust academic environment focused on accuracy and accountability.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LandingPage