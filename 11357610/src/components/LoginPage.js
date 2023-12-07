// LoginPage.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Your authentication logic goes here
    // For simplicity, let's assume a dummy authentication
    if (studentId === '123' && pin === '1234') {
      // Successful login, you can redirect or perform other actions
      console.log('Login successful');
    } else {
      // Invalid login, display error message
      setErrorMessage('Invalid student ID or PIN. Please try again.');
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-600">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pin" className="block text-sm font-medium text-gray-600">
              PIN
            </label>
            <input
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        <p className="mt-6 text-center">
          Forgot your password? <a href="/not-found" className="text-blue-500">Reset it here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
