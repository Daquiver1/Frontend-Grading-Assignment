import React, { useState } from 'react';
import '../styles/login.css';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Simple authentication simulation (replace with actual authentication logic)
    if (studentId === 'exampleID' && pin === '1234') {
      // Redirect to Dashboard or perform necessary actions
      alert('Login successful!');
    } else {
      setError('Invalid Student ID or PIN');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="studentId">Student ID:</label>
        <input
          type="text"
          id="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />

        <label htmlFor="pin">PIN:</label>
        <input
          type="password"
          id="pin"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
