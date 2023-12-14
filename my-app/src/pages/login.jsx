import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (id === '123456' && pin === '7890') {
      alert('Login successful!');
      setError('');
      navigate('/dashboard'); // Redirect to the dashboard page after successful login
    } else {
      setError('Invalid ID or PIN');
    }

    // Clear input fields after login attempt
    setId('');
    setPin('');
  };

  const handleForgotPin = () => {
    // Handle the action for the "Forgot PIN?" link
    // For example, show a modal or navigate to a password reset page

    // Placeholder code to show an alert
    alert('Forgot PIN link clicked');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="p-8 bg-white rounded shadow">
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="id">
              ID
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              id="id"
              type="text"
              placeholder="Enter your ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="pin">
              PIN
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              id="pin"
              type="password"
              placeholder="Enter your PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <button
              className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800 focus:outline-none"
              onClick={handleForgotPin}
            >
              Forgot PIN?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;