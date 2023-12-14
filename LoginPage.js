import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

 
  const handleLogin = () => {
    
    if (studentId === 'yourStudentId' && pin === 'yourPin') {
      
      alert('Login successful!');
    } else {
      setErrorMessage('Invalid student ID or PIN. Please try again.');
    }
  };

  return (
    <div className="containe mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Login to Missing Grade Reporting System</h1>

      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <form>
          {/* Student ID Input */}
          <div className="mb-4">
            <label htmlFor="studentId" className="block text-gray-700 text-sm font-bold mb-2">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              className="form-input"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>

          {/* PIN Input */}
          <div className="mb-4">
            <label htmlFor="pin" className="block text-gray-700 text-sm font-bold mb-2">PIN</label>
            <input
              type="password"
              id="pin"
              className="form-input"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>

          {/* Display error message if exists */}
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}

          {/* Login Button */}
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
