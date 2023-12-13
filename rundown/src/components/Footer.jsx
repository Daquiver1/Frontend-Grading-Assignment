import React from 'react'
import "./Footer.css"
import { FaHome } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaMailBulk, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className="left">
          <div className="location">
            <FaHome  size={30} style={{color: "#fff", marginRight: "2rem" }}/>
            <div>
              <p>123 Housing GradePoint Society</p>
              <p>East-Legon-Accra</p>
            </div>
          </div>
          <div className="phone">
            <h4>
          <FaPhone  size={30} style={{color: "#fff", marginRight: "2rem" }}/>
          +233 (024)-210-8288
          </h4>
          </div>

          <div className="email">
            <h4>
          <FaMailBulk  size={30} style={{color: "#fff", marginRight: "2rem" }}/>
          GradePoint@info.gh
          </h4>
          </div>
        </div>
        <div className="right">
          <h4>About GradePoint</h4>
          <p> We present to you a powerful tool to manage and
               report missing grades, ensuring your academic journey 
               remains smooth and transparent.</p>
               <div className="social">
               <FaFacebook  size={38} style={{color: "#fff", marginRight: "1rem" }}/>
               <FaTwitter  size={38} style={{color: "#fff", marginRight: "1rem" }}/>
               <FaLinkedin  size={38} style={{color: "#fff", marginRight: "1rem" }}/>
               </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
