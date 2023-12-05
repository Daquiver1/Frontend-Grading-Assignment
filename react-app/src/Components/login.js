// Login.js

import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);

  const handlePinVisibility = () => {
    setShowPin(!showPin);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="pin">PIN:</label>
          <div className="password-input">
            <input
              type={showPin ? 'text' : 'password'}
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
            <div className="eye-icon" onClick={handlePinVisibility}>
              {showPin ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
            </div>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
