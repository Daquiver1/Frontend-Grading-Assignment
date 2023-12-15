import React, { useState } from 'react';

const LoginPage = () => {
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulated authentication process (no real backend, just a mock-up)
    if (studentID === '123' && pin === '1234') {
      alert('Login successful');
    } else {
      alert('Invalid student ID or PIN');
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Student ID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
        />
        <input
          type="password"
          placeholder="PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
