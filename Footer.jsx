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
            <FaHome  size={30} style={{color: "green", marginRight: "2rem" }}/>
            <div>
              <p>GradePoint Hub at University of Ghana, Legon Campus.</p>
              <p>Greater-Accra region</p>
            </div>
          </div>
          <div className="phone">
            <h4>
          <FaPhone  size={30} style={{color: "green", marginRight: "2rem" }}/>
          +233 (054)-790-7716
          </h4>
          </div>

          <div className="email">
            <h4>
          <FaMailBulk  size={30} style={{color: "green", marginRight: "2rem" }}/>
          GradePoint@info.gh
          </h4>
          </div>
        </div>
        <div className="right">
          <h4>Introducing GradePoint</h4>
          <p> We are excited to introduce GradePoint, 
            a robust tool designed to streamline the management and reporting of missing grades, 
            ensuring a seamless and transparent academic experience for you.</p>
               <div className="social">
               <FaFacebook  size={38} style={{color: "green", marginRight: "1rem" }}/>
               <FaTwitter  size={38} style={{color: "green", marginRight: "1rem" }}/>
               <FaLinkedin  size={38} style={{color: "green", marginRight: "1rem" }}/>
               </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
