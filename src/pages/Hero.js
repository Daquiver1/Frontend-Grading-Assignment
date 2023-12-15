import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>

       <div className='hero-content'>
         <h1>Welcome to the University of Ghana Missing Grade Reporting System.</h1>
          <p>
          This system is designed to help students track and report grades that are not recorded in their academic profiles.
          </p>

         <Link to="/Login" className='hero-btn'>Login</Link>
        
        </div>

    </div>
  )
}

export default Hero;