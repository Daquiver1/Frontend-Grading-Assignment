import React, { useState, useEffect } from 'react'
import './login.css'

import user_icon from '../Assests/user-pin_.png'
import pin_icon from '../Assests/lock-password-unlocked-linear_.png'
import ug_logo from '../Assests/ugLogo.jpeg'

const Login = () => {
    const [action, setAction] = useState('Sign In');
    const [studentId, setStudentId] = useState('');
    const [pin, setPin] = useState('');

    const handleStudentIdChange = (e) => {
        // Allow only numbers and limit to 9 digits
        const sanitizedValue = e.target.value.replace(/\D/g, '').slice(0, 9);
        setStudentId(sanitizedValue);
      };

    const handlePinChange = (e) => {
        // Allow only numbers and limit to 5 digits
        const sanitizedValue = e.target.value.replace(/\D/g, '').slice(0, 5);
        setPin(sanitizedValue);
      };

      useEffect(() => {
        document.title = action === 'Sign Up' ? 'Sign Up' : 'Sign In';
      }, [action]);


  return (

    <div className='main-container'>

      <div className='img-container'>
        <img src={ug_logo} alt="University of Ghana logo" className='ug-logo' />
      </div>
      <div className='login-container'>

      <div className='header'>
            <div className='text'><h2>{action}</h2></div>
            <div className='underline'></div>
      </div>

      <div className='inputs'>
        <div className='input'>
          <img src={user_icon} alt='' className='img-size' />
          <input
            type='text'
            placeholder='ID Number'
            className='f-input'
            value={studentId}
            onChange={handleStudentIdChange}
          />
        </div>
        
        <div className='input'>
          <img src={pin_icon} alt='' className='img-size' />
          <input
            type='password'
            placeholder='* * * * *'
            className='f-input'
            value={pin}
            onChange={handlePinChange}
          />
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
        </div>
    </div>
    </div>
    </div>

    

  );
};

export default Login
