import React, { useState } from 'react'
import './login.css'

import user_icon from '../Assests/user-pin_.png'
import pin_icon from '../Assests/lock-password-unlocked-linear_.png'

const Login = () => {
const [action,setAction] = useState("Sign In");
  return (

    <div className='container'>

      <div className='header'>
            <div className='text'><h2>{action}</h2></div>
            <div className='underline'></div>
      </div>

        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt="" className='img-size' />

                <input type="studentid" placeholder='ID Number' className='f-input' />
            </div>
        
            <div className='input'>
                <img src={pin_icon} alt="" className='img-size' />

                <input type="password" placeholder='* * * * *' className='f-input' />
            </div>
        </div>
    <div>
        <div className="forgot">
            <p>Forgot Pin or Request Pin Change? <a href="index.html">Click Here!</a></p>
        </div>

        <div className='submit-container'>
            <div className={action==="Sign Up"?"submit gray":"login-button"} onClick={() => {setAction("Sign In")}}>
                Sign In
            </div>

            <div className={action==="Sign In"?"submit gray":"login-button"} onClick={() => {setAction("Sign Up")}}>
                Sign Up
            </div>
        </div>
    </div>
    </div>

  );
};

export default Login
