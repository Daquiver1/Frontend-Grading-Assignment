import React from 'react'
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom" 
import "./Navigation.css"
import { useState } from "react"

const Navigation = () => {
const [tlines, setMenuOpen] = useState(false)

  return (
   <nav>
    
    <Link to="/" className='home'>Home</Link>
    <div className="menu" onClick={()=>{
        setMenuOpen(!tlines)
    }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
        <ul className={tlines? "open" : ""}>

        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
        <li>
            <NavLink to="/report">Grade Report</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        
        <li>
            <NavLink to="/missinggrade">Missing Grade</NavLink>
        </li>
        <li>
            <NavLink to="/instructor">instructor Contact</NavLink>
        </li>
        <li>
            <NavLink to="/helpandsupport">Help And Support</NavLink>
        </li>
        
    </ul>
    
    
   </nav>
   


   
  )
}

export default Navigation
