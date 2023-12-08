import React from 'react'
import './End.css'
import { FaHome } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaMailBulk, FaTwitter, FaFacebook, FaSnapchat} from "react-icons/fa"

const End = () => {
  return (
<div>

  <div className='End'>
   <h1>ABOUT</h1>
    <div className='footer'>
      <div className='left'>
          <p> <FaHome/>  Sunshine Street,Trasacco</p>
          <p> <FaMailBulk/>  Amadelo@icloud.com</p>
          <p> <FaPhone/>  +233 (050)-904-9184</p>
          <p> <FaPhone/>  +233 (024)-444-0014</p>
      
      </div>
      <div className='right'>
        <p>
         We present to you a powerful tool to manage and<br/> report missing grades, ensuring your academic journey ,<br/>remains smooth and transparent
        </p>
        <div className='icons'>
          <FaTwitter size={38} style={{color: "black", marginRight: "1rem" }}/>
          <FaFacebook size={38} style={{color: "black", marginRight: "1rem" }}/>
          <FaSnapchat size={38} style={{color: "black", marginRight: "1rem" }}/>
       </div>
      </div>
    </div>
    <div className='footer-copyright'>
      <hr/>
      <p>copyright @ 2023 - All Rights Reserved</p>
    </div>
  
  </div>

</div>
  )
}

export default End