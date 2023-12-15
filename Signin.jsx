import React from 'react';
import './Login.css';

export const Signin = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>LOGIN</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Create Password' required />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Enter Password Again' required />
        </div>
        <button type="submit">Sign-In</button>
        <div className='register-link'>
          <p>
            Have an account?{' '}
            <a href='/login'>LOG-IN</a> {/* Update the href attribute with your actual login route */}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
