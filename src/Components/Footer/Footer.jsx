import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.gif'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import email from '../Assets/email_2.png'

const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
       <img src={logo} alt="" />
       <p>Grades Reporting System</p>
      </div>
       <ul className="footer-links">
        <li>SYSTEM INFORMATION:<br/> <span> Your privacy is important to us!. We prioritize the security of your data and we ensure that all your details are safe and secured </span></li>
        <li>PRIVACY & SECURITY:<br/> <span> Missing Grade Report System v1.2. Available to all students of this institution, your student credentials are required to get an account. </span></li>
       </ul>
       <ul className="footer-links">
        <li>ACCESSIBILITY:<br/> <span>This system is designed to be accessible to users. If you encounter any accessibility issues, please contact: mensaherskine@gmail.com.</span></li>
        <li>CONTACT US:<br/> <span>For more enquiries or any issue encoutered during the usage of this system contact us using the following platforms:</span></li>
       </ul>
       <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={email} alt="" />
        </div>
       </div>
       <div className="footer-copyright">
        <hr />
        <p>Created by Erskine. Copyright ©2023 All rights reserved</p>
       </div>
    </div>
  )
}

export default footer
