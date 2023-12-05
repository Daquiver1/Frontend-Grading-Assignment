import React, { useState } from 'react';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleLogin = () => {
    if (studentId === 'exampleStudentID' && pin === '11297632') {
    
      setLoginError(false);

      alert('Login Successful!');
    } else {
      setLoginError(true);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <div>
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={handleStudentIdChange}
          />
        </div>
        <div>
          <label htmlFor="pin">PIN:</label>
          <input
            type="password"
            id="pin"
            value={pin}
            onChange={handlePinChange}
          />
        </div>
        {loginError && <p style={{ color: 'red' }}>Invalid Student ID or PIN</p>}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
