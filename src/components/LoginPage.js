import React, { useState } from 'react';

const LoginForm = () => {
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login authentication logic here
    console.log(`Logging in with Student ID: ${studentID} and PIN: ${pin}`);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Student ID:
          <input
            type="text"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
