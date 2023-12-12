import React, { useState } from 'react';
import MyNav from './nav';
import MyFooter from './Footer';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // TODO: Implement login logic here (e.g., send data to server)

    // For this example, log the entered credentials
    console.log('Student ID:', studentId);
    console.log('PIN:', pin);
  };

  const handleForgotPassword = () => {
    // TODO: Implement forgot password logic (e.g., send reset email)
    console.log('Forgot Password clicked');
  };

  return (
    <div>
      < MyNav />
      <MyFooter />
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Login Page</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="studentId" className="form-label">Student ID:</label>
              <input
                type="text"
                className="form-control"
                id="studentId"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pin" className="form-label">PIN:</label>
              <input
                type="password"
                className="form-control"
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="mb-3">
            <button type="button" className="btn btn-link" onClick={handleForgotPassword}>
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
