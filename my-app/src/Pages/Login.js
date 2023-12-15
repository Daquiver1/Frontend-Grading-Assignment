import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Login() {
 const [userEmail, setUserEmail] = useState('')
 const [userPassword, setUserPassword] = useState('')
 const [message, setMessage] = useState('')

 const handleSubmit = (e) => {
    e.preventDefault()
    if (userEmail === 'student@example.com' && userPassword === 'password') {
      setMessage('Successfully logged in')
    } else {
      setMessage('Incorrect Student ID or Pin')
    }
 }

 return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Student Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Student ID:</label>
            <input
              type="text"
              className="form-control"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Pin:</label>
            <input
              type="password"
              className="form-control"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <Footer />
    </div>
 )
}


