import React from 'react'
import '../styles/footer.css'
import { FaHome} from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaHandsHelping } from "react-icons/fa";
import { GrDocumentMissing } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { MdGrading } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
function Footer() {
  return (
    <div>
      <section className='footer'>
      <ul>
          <li><a href="/Homes"><FaHome/>Home</a></li>
          <li><a href="/Dashboards">< MdDashboard />Dashboard</a></li>
          <li><a href="/Grades"><MdGrading/>Grades</a></li>
          <li><a href="/Contacts"><MdContactPage/>Contact</a></li>
          <li><a href="/MissingGrades"><GrDocumentMissing/> MissingGrade</a></li>
          <li><a href="/Helps"><FaHandsHelping/>Help&Support</a></li>
          <li><a href="LogIns"><FiLogIn/>LogIn</a></li>
             </ul> 
             <p className='copy-right'><FaCopyright/>Copyright @2023 All Right Reserved</p>  
      </section>
     
    </div>
  )
}

export default Footer
