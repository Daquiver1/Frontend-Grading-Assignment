import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {

const [menu,setMenu] = useState("Landing");

  return (
    <div className='navbar'> 
    <div className="nav-logo">
      <h1>HOMEPAGE</h1>
    </div>
    <ul className="nav-menu">
      <li onClick={()=>{setMenu("Landing")}}><Link style={{textDecoration: 'none'}} to='/'>Landing</Link>{menu==="Landing"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Dashboard")}}><Link style={{textDecoration: 'none'}} to='/Dashborad'>Dashboaard</Link>{menu==="Dashboard"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Grade Report")}}><Link style={{textDecoration: 'none'}} to='/GradeReport'>Grade Report</Link>{menu==="Grade Report"?<hr/>:<></>} </li>
      <li onClick={()=>{setMenu("Missing Grade Form")}}><Link style={{textDecoration: 'none'}} to='/MissingGradeForm'>Missing Grade Form</Link>{menu==="Missing Grade Form"?<hr/>:<></>} </li>
      <li onClick={()=>{setMenu("Instructor Contact")}}><Link style={{textDecoration: 'none'}} to='/InstructorContact'>Instructor Contact</Link>{menu==="Instructor Contact"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Help and Support")}}><Link style={{textDecoration: 'none'}} to='/HelpAndSupport'>Help and Support</Link>{menu==="Help and Support"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("logins")}}><Link style={{textDecoration: 'none'}} to='/Login'>Login</Link>{menu==="logins"?<hr/>:<></>}</li>
    </ul>
    </div>
  )
}

export default Navbar