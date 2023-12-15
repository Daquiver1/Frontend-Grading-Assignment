import React from 'react'
import { NavLink } from 'react-router-dom'
import legonlogo from "../assets/legonlogo.jpeg"

const Footer = () => {
  return (
    <>
        <footer className="foot">
      <hr/>
   <img src={legonlogo} className="logo" alt=''/>
   <span>UNIVERSITY OF <b>GHANA.</b></span>
   <p>&copy; 2023</p>
   <div className="ending">
   <p><NavLink to="">Terms of Use</NavLink></p>
   <p><NavLink to="">Privacy Policy</NavLink></p>
   </div>
  </footer>
  </>
  )

}

export default Footer