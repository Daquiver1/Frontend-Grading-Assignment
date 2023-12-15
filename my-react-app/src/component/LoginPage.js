import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; 



const LoginPage = () => {
  return (
    <div className='login-page'>
        <div className='login-container'>
            <h1 className='Login-text'>Login Required</h1>
            <div className='logo-div'>
            <h1 className='logo-text'>GradeHub</h1>
            </div>
            <div className='form'>
                <label htmlFor="username" className='label'>Student ID:</label><br />
                <input type='text' className='input-box'/><br/>
                <label htmlFor="password" className='label'>Password:</label><br />
                <input type='password' className='input-box'/><br/>
                <div btn-box>
                <Link to="/Dashboard"> <button className='btn'> Login</button> </Link>
                    <Link to="/"> <button className='btn'> Cancel</button> </Link>
                </div>
                <h4 className='forgot'><a href='#'>Forgot Password</a></h4>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;
