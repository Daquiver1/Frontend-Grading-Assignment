

import React, { useState } from 'react';
import './LoginPage.css';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  
  const handleLogin = (e) => {
    e.preventDefault();
    // Simulated authentication logic (replace with actual authentication logic)
    if (studentId === '0000' && pin === '0000') {
      // Redirect to Dashboard or perform other actions on successful login
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
        <button className='btn-login' type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;





