import React, { useState } from 'react';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    // Simulate authentication (replace this with actual authentication logic)
    if (studentId && pin) {
      alert(`Successfully logged in with Student ID: ${studentId}`);
    } else {
      alert('Please enter Student ID and PIN.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pin">PIN:</label>
          <input
            type="password"
            id="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
