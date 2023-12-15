import React, { useState } from 'react';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (studentId === '11354515' && pin === '77890') {
      alert('Login Successful!');
      setErrorMessage('');
      window.location.href = '/dashboard';
    } else {
      setErrorMessage('Invalid Student ID or PIN');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Student Login</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="studentId" className="block">Student ID:</label>
            <input
              type="text"
              id="studentId"
              className="w-full border border-gray-300 p-2 rounded"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pin" className="block">PIN:</label>
            <input
              type="password"
              id="pin"
              className="w-full border border-gray-300 p-2 rounded"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;