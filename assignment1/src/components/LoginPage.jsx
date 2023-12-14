import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  // State to manage form inputs
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');

  // Get the navigate function from useNavigate
  const navigate = useNavigate();

  // State to manage authentication status
  const [authenticated, setAuthenticated] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication (replace this with your actual authentication logic)
    if ((studentID === '11046928' && pin === '23557') || (studentID === '11046928admin' && pin === '00233')) {
      setAuthenticated(true);

      // Use navigate to redirect to the dashboard
      navigate('/dashboard');
    } else {
      alert('Invalid student ID or PIN. Please try again.');
    }
  };

  return (
    <div>
      <h2 className='banner-title'>LOGIN</h2>
      <form onSubmit={handleSubmit} className='banner-content' style={{marginBottom: '80px'}}>
        <label>
          Student ID:
          <input type="text" value={studentID} onChange={(e) => setStudentID(e.target.value)} />
        </label>
        <br />
        <label>
          PIN:
          <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
        </label>
        <br />
        <button type="submit" className='banner-content'>LOGIN</button>
      </form>
    </div>
  );
};

export default LoginPage;
