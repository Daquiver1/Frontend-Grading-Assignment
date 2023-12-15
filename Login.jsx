import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import CustomHeader from './Header';


export const Login = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>LOGIN</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
        </div>
        <div className='remember-forgot'>
          <label htmlFor='remember'>
            <input type='checkbox' id='remember' /> Remember Me
          </label>
          <Link to='#'>Forgot Password?</Link>
        </div>
        <button type="submit">LOGIN</button>
        <div className='register-link'>
          <p>
            Don't have an account? <Link to='#'>Register Here!</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
