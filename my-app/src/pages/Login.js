import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/Styles.css'

export default function Login() {
 const [studentId, setStudentId] = useState('')
 const [password, setPassword] = useState('')

 const handleSubmit = (e) => {
    e.preventDefault()
    // Perform your login logic here
    console.log('Student ID:', studentId)
    console.log('Password:', password)
 }

 return (     <div style={{ backgroundColor: 'violet', height: '600px'}}>
    
      <div className="login-navbar"><Navbar /></div>
      <div className="login-page">
      <u><h1>Login</h1></u>
        <form onSubmit={handleSubmit}>
          
          <label htmlFor="studentId"><b>Student ID:</b></label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
          <br />
          <label htmlFor="password"><b>Password:</b></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit"><b>Login</b></button>
        </form>
      </div>
      <Footer />
    </div>
 )
}