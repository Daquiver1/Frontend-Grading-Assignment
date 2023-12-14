import React, { useState } from 'react';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication logic
    console.log('Logging in with:', { studentId, pin });
    // Reset form fields after login attempt
    setStudentId('');
    setPin('');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Student ID" />
        <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="PIN" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
