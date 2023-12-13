// LoginPage.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Simulate authentication logic (replace with actual authentication)
    if (studentId === 'exampleStudent' && pin === '1234') {
      // Redirect to the dashboard on successful login
      history.push('/dashboard');
    } else {
      // Handle authentication failure (display error message, etc.)
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <label>
          Student ID:
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </label>
        <br />
        <label>
          PIN:
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
