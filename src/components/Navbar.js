import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
    
      <nav className='navbar'>
        <h3 className='logo'>COMPSA</h3>
        {/**/}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/login' className='login'>
            <li>Login</li>
          </Link>
          <Link to='/dashboard' className='dashboard'>
            <li>Dashboard</li>
          </Link>
          <Link to='/gradereport' className='gradereport'>
            <li>Grade Report</li>
          </Link>
          <Link to='/missinggradeform' className='missinggradeform'>
            <li>Missing Grade Form</li>
          </Link>
          <Link to='/instructor' className='instructor'>
            <li>Instructor</li>
          </Link>
          <Link to='/hands' className='hands'>
            <li>Help & Support</li>
          </Link>
        </ul>
        {/**/}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross style={{ color: "white" }} /> : <FaBars style={{ color: "white" }}/>}
        </button>
      </nav>
    </>
  )
}
export default Navbar
