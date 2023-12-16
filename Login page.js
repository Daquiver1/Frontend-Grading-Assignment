import React, { useState } from 'react';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    // Add authentication logic here (mock-up)
    console.log('Logging in with:', studentId, pin);
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Student ID:
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </label>
        <br />
        <label>
          PIN:
          <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
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
