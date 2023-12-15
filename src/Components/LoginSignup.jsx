import React from 'react'
import './LoginSignup.css'
import { useState } from 'react'

import person from './Assets/person.png'
import email from './Assets/email.png'
import password from './Assets/password.png'

const LoginSignup = () => {

  const [action, setAction] = useState("Login");

  return (
    <div className='container'>
        <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
          {action==="Login"?<div></div>:<div className="input">
          <img src={email} alt="" />
          <input type='email' placeholder='Student Email'/>  
        </div>}
          <div className="input">
          <img src={person} alt="" />
          <input type='text' placeholder='Student ID' />  
        </div>  
        <div className="input">
          <img src={password} alt="" />
          <input type='pin' placeholder='Pin' />  
        </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">
          Forgot Password? <span>Click here!</span>
        </div> }
        <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up </div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}> Login </div>
        </div>
    </div>
  );
};

export default LoginSignup
