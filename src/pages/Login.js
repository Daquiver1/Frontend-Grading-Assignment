import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
  <div className="loginbox">

      <h1>Login</h1>
      <form className="login-form">

      <label>Student ID</label>
      <input type="text" placeholder = "Enter Student ID" required />

      <label>PIN</label>
      <input type="password"placeholder = "Enter PIN Here" required />

      <Link to = "/Dashboard" className='submit-btn-login'>Submit</Link>

    </form>
  </div>
  )
}

export default Login;