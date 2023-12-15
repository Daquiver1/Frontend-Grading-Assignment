

import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  
  const handleLogin = (e) => {
    e.preventDefault();
    if (studentId === '0000' && pin === '0000') {
      console.log('Login successful');
    } else {
      setError('Invalid credentials. Please try again. ID:0000 Password:0000');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="studentId">Student ID:</label>
          <input className='input-tag'
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin">PIN:</label>
          <input className='input-tag'
            type="password"
            id="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
        </div>
        <Link to="/dashboard">
        <button className='btn-login' type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
        </Link>
      </form>
    </div>
  );
};

export default Login;





