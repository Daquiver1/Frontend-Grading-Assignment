import React from 'react'
import './Footer.css' 
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (


  <div className='footer'>

      <p>&copy; University of Ghana</p>
      <div className='icons'>
      <FaFacebook />
      <FaTwitter/>
      <FaInstagram />
      </div>

  </div>
  )
}

export default Footer;


<div className='icons'>
{/* <FaTwitter size={38} style={{color: "black", marginRight: "1rem" }}/>
<FaFacebook size={38} style={{color: "black", marginRight: "1rem" }}/>
<FaSnapchat size={38} style={{color: "black", marginRight: "1rem" }}/> */}
</div>
