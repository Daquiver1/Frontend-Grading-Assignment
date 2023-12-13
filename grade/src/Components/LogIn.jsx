import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';

const AppLogIn = () => {

  const [action,setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Log In"?<div></div>:<div className="input">
          <input type='text' placeholder='Username' />
        </div>}
        
        <div className="input">
        <FaEnvelope />
          <input type="email" placeholder='Enter Your Email' />
        </div>
        <div className="input">
        <RiLockPasswordLine />
          <input type="password" placeholder='Enter Your Password'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="SignUp"?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In</div>
      </div>
    </div>
  )
}

export default AppLogIn