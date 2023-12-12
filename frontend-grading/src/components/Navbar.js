import React, { useState } from "react"
import './navbar.css'
import Logo from '../assets/ug logo.png'

import { Link } from "react-router-dom"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        {/*
      
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
        </ul>
        {/* 
        */}
      </nav>
    </>
  )
}
export default Navbar
