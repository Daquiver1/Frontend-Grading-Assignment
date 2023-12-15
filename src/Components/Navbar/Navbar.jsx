import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.gif'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className='nav-menu'> 
         <li onClick={()=>{setMenu("Home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("Grade")}}><Link style={{ textDecoration: 'none'}} to='/Grade'>Grade Report</Link>{menu==="Grade"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("Dashboard")}}><Link style={{ textDecoration: 'none'}} to='/Dashboard'>Dashboard</Link>{menu==="Dashboard"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("Contact")}}><Link style={{ textDecoration: 'none'}} to='/Contact'>Contact</Link>{menu==="Contact"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("Help")}}><Link style={{ textDecoration: 'none'}} to='/Help'>Help</Link>{menu==="Help"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("Mgrade")}}><Link style={{ textDecoration: 'none'}} to='/Mgrade'>Missing Grade</Link>{menu==="Mgrade"?<hr/>:<></>}</li>
      </ul>
      
    </div>
  )
}

export default Navbar
