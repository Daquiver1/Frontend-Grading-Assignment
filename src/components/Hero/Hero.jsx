import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      
       <div className='content'>
         <h2>Welcome to the Missing Grade Reporting System</h2>
          <p>
          This system is designed to help students track and report grades that are not recorded in their academic profiles.
          </p>
      
         <Link to="/GradeReport" className='btn'>Grade Report</Link>
         <Link to="/MissingGradeForm" className='btn-light'>Missing Grade</Link>
        </div>
  
    </div>
  )
}

export default Hero    