// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  // State to manage form inputs and error message
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  // React Router hook to handle navigation
  const history = useHistory();

  // Function to handle login logic
  const handleLogin = () => {
    // Simulate authentication logic with mock data
    const isValidUser = authenticateUser(studentID, pin);

    if (isValidUser) {
      // Redirect to the dashboard on successful login
      history.push('/dashboard');
    } else {
      setError('Invalid student ID or PIN. Please try again.');
    }
  };

  // Placeholder function for authentication logic
  const authenticateUser = (studentID, pin) => {
    // Replace this with your actual authentication logic
    // For demonstration purposes, consider it a valid user if both fields are non-empty
    return studentID.trim() !== '' && pin.trim() !== '';
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Student ID:</label>
        <input type="text" value={studentID} onChange={(e) => setStudentID(e.target.value)} />
        
        <label>PIN:</label>
        <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
        
        {error && <p className="error-message">{error}</p>}
        
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
