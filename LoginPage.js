

import { Link } from 'react-router-dom';
import React, { useState, createContext, useContext} from 'react';

import './login.css';

const LoginPage = () => {
 
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    
    if (studentId === '12345' && pin === '1234') {
      
    } else {
      setError('Invalid Student ID or PIN');
    }
  }; 

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-8">Student Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form>
          <div className="mb-4">
            <label htmlFor="studentId" className="block text-gray-600 mb-2">Student ID</label>
            <input
              type="text"
              id="studentId"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pin" className="block text-gray-600 mb-2">PIN</label>
            <input
              type="password"
              id="pin"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
          <button
            type="button" // Change to "submit" in a real form
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
