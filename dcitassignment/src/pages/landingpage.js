import React from 'react'
import '../styles/landing.css';
import { Link } from 'react-router-dom';

function landingpage() {
  return (
    <>
    <div className='Appbody'>
        <div className='SideBar'>
          <Link className='links' to="/login">Login   </Link>
          <Link className='links' to="/dashboard">Dashboard    </Link>
          <Link className='links' to="/gradeform">Grade Form     </Link>
          <Link className='links'  to="/gradereport">Grade Report    </Link>
          <Link className='links' to="/instructorcon">Instructor Contact    </Link>
          <Link className='links' to="/helpsup">Help and Support     </Link>
          <Link className='links' to="/landingpage">Landing Page     </Link>
        </div>
        <div className='maintext'><p className='maintextP'>Welcome To The </p>
        <p className='maintextP'>Missing Grade</p>
        <p className='maintextP'>Report System</p>
        </div>
      </div>
      
      </>    
  )
}

export default landingpage