import React from 'react'
import "./Footer.css"
import { FaHome } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaMailBulk, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='main-foot'>
      <div className='template'>
        <div className="">
          <div className="">
          <div className="gaget">
          <div className="my-div">
          <span className="myhome">  <FaHome  size={20} style={{color: "red", marginRight: "1rem" }}/> </span>
          <span>LEGON CAMPUS</span>
          </div>

          <div className="my-div">
          <span className="myfon">  <FaPhone  size={20} style={{color: "red", marginRight: "2rem" }}/>  </span>
         <span>+233 (055)-838-8467</span>
          </div>

           <div className="my-div">
           <span className="mymail"> <FaMailBulk  size={20} style={{color: "red", marginRight: "2rem" }}/> </span>
          <span>HelpCenter@info.gh</span>
           </div>
           
           </div>
            
          </div>
          

          
        </div>
        <div className="">
          <h4>INFO</h4>
          <p> Boost your learning with study tips, practice problems,
           and expert advice. Overcome hurdles, 
          improve understanding, and reach your full potential.
</p>
               
                <FaFacebook  size={20} style={{color: "red", marginRight: "1rem" }}/>
               <FaTwitter  size={20} style={{color: "red", marginRight: "1rem" }}/>
               <FaLinkedin  size={20} style={{color: "red", marginRight: "1rem" }}/>
               
        </div>
      </div>
    </div>
  )
}

export default Footer
