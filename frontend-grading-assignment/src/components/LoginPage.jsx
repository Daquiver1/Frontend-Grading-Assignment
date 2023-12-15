import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
 const [studentId, setStudentId] = useState('');
 const [pin, setPin] = useState('');
 const navigate = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();
    if (studentId && pin) {
      alert('Logged in successfully');
      navigate('/dashboard');
    } else {
      alert('Please enter a valid Student ID and PIN');
    }
 };

 return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentId">Student ID:</label>
        <input
          type="text"
          id="studentId"
          name="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <br />
        <label htmlFor="pin">PIN:</label>
        <input
          type="password"
          id="pin"
          name="pin"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      <a href="/register">Don't have an account? Register here</a>
    </div>
 );
};

export default Login;