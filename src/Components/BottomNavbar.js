import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import "../Components/Styling/Navbar.css"

function BottomNavbar() {
  return (
    <div id='bnv'>
         <Link to="Dashboard" id="link" >Dashboard</Link>
         <Link to="Form" id="link" >Form</Link>
         <Link to="Help" id="link" >Help</Link>
         <Link to="Home" id="link" >Home</Link> 
         <Link to="Login" id="link" >Logout</Link>
    </div>
  )
}

export default BottomNavbar