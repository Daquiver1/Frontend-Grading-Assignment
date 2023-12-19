import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import './Login.css'


const Login = () => {
 const [isLogin, setIsLogin] = useState(true)

 const handleClick = () => {
    setIsLogin(!isLogin)
 }



return (
    <div>
        <header><Navbar /></header>
      <div className="body">
        <div className={isLogin ? 'login-container' : 'login-container hide'}>
          <h2>Login</h2>
          <form action="#" id="loginForm">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="studentId">Student ID:</label>
            <input type="text" id="studentId" name="studentId" pattern="[0-9]{8}" required />

            <button type="submit">Login</button>
          </form>
        </div>

        <div className={isLogin ? 'signup-container hide' : 'signup-container'}>
          <h2>Sign Up</h2>
          <form action="#" id="signupForm">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Student Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Sign Up</button>
          </form>
        </div>

        <p>
          {isLogin ? 'Don’t have an account? ' : 'Already have an account? '}
          <button type="button" onClick={handleClick}>
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
      <Footer/>
    </div>
 )
}
{/*  */}
export default Login