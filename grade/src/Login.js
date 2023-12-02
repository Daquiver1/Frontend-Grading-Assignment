import React, { useState } from 'react';
import MyNavbar from './nav';
import MyFooter from './MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

  
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Implement authentication logic here
    alert(`Logging in with Student ID: ${studentId} and PIN: ${pin}`);
  };

  const handleForgotPassword = () => {
    // TODO: Implement forgot password logic here
    alert('Forgot Password clicked. Implement the logic here.');
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="studentId" className="form-label">
            Student ID:
          </label>
          <input
            type="text"
            className="form-control"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pin" className="form-label">
            PIN:
          </label>
          <input
            type="password"
            className="form-control"
            id="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p className="mt-3">
        <a href="#!" onClick={handleForgotPassword}>
          Forgot Password?
        </a>
      </p>
      <MyNavbar />
      
      <MyFooter />

    </div>
  );
};

export default Login;
