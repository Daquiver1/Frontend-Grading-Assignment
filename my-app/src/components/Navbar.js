import React from "react";
import { Outlet,Link } from 'react-router-dom'
import Images from '../Pages/image'




export default function Navbar () {
    return (
   <>
   <nav className="nav">
  <a href="/" className="site-title"><Images/></a>
     <ul>
       <li>
        <Link to="/">Home</Link>
       </li>
   <li>
    <Link to="/Login">Login</Link>
   </li>
   <li>
    <Link to="/Dashboard">Dashboard</Link>
   </li>
   <li>
    <Link to="/GradeReport">Grade Report</Link>
   </li>
   <li>
    <Link to="/MissingGradeForm">Missing Grade Form</Link>
   </li>
   <li>
    <Link to="/InstructorContactPage">Instructor Contact Page</Link>
   </li>
   <li>
    <Link to="/HelpandSupport">Help and Support</Link>
   </li>
   </ul>
    </nav>
   <Outlet/>
    
   </>
    )
}
   
  









 