import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import 'bootstrap/dist/css/bootstrap.css'


const LoginPage: React.FC = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Simulate authentication by checking if the Student ID and PIN match some mock values
    if (studentId === '123456' && pin === '1234') {
      // Redirect to the dashboard on successful login
      navigate('/dashboard');
    } else {
      // Display an error message on failed login
      alert('Invalid Student ID or PIN. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <h2 className="page-title">Student Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin">PIN:</label>
          <input
            type="password"
            id="pin"
            name="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;