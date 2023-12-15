import React from 'react'
import '../styles/Navbar.css';
import { FaHome} from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaHandsHelping } from "react-icons/fa";
import { GrDocumentMissing } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { MdGrading } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
function Navbar() {
  return (
    <div className='navbar'>
        <div className='header'>
   <h1> Missing Grade System</h1>
        </div>
        <div className='navigation'>
         <ul>
          <li><a href="/Homes"><FaHome/>Home</a></li>
          <li><a href="/Dashboards">< MdDashboard />Dashboard</a></li>
          <li><a href="/Grades"><MdGrading/>Grades</a></li>
          <li><a href="/Contacts"><MdContactPage/>Contact</a></li>
          <li><a href="/MissingGrades"><GrDocumentMissing />MissingGrade</a></li>
          <li><a href="/Helps"><FaHandsHelping/>Help&Support</a></li>
          <li><a href="LogIns"><FiLogIn/>LogIn</a></li>
             </ul>   
        </div>
      
    </div>
  )
}

export default Navbar
