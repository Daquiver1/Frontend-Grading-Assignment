import React from 'react'
import'../styles/LogIn.css';

function LogIn() {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>LogIn</h1>
           <div className='input-box'>
           <input type='Numbers' placeholder='StudentID'required/>
           </div>
           <div className='input-box'>
           <input type='Numbers' placeholder='PIN'required/>
           </div>
           <div className='remember-forget'>
            <label><input type='checkbox'/>Remember Me</label>
            <a href='#'>Forgot Password?</a>
           </div>
           <button type='submit' className='btn'>LogIn</button>
           <div className='register-link'>
            <p>Don't have an account?<a href='#'>Register</a></p>
           </div>
        </form>
    </div>
  )
}

export default LogIn
