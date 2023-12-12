/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import "./loginform.css"   

const loginform = () => {

  const [popupStyle, showPopup] = useState ("hide");

  const popup = () => {
    showPopup ("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }

  return (
    <div className='cover'>
      <h1>Login</h1>
      <input type="text" placeholder='username' />
      <input type="password" placeholder='password' />

      <div className="login-btn" onClick={popup}>Login</div>

      <p className="text">Or Login Using</p>

      <div className="alt-login">
        <div className="student-mail"></div>
      </div>
    
    </div>
  )
}

export default loginform
