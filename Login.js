import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [userType, setUserType] = useState('student');
  const [forgotCredentials, setForgotCredentials] = useState(false);
  const [isAlumni, setIsAlumni] = useState(false);

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleForgotCredentialsChange = () => {
    setForgotCredentials(!forgotCredentials);
  };

  const handleAlumniChange = () => {
    setIsAlumni(!isAlumni);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add authentication logic or navigate to the dashboard
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Welcome to the Student Portal</h2>
        <p>Please enter your credentials to log in.</p>

      
        <form onSubmit={handleSubmit}>
          <label>
            Student ID:
            <input
              type="text"
              value={studentId}
              onChange={handleStudentIdChange}
            />
          </label>

          <label>
            PIN:
            <input type="password" value={pin} onChange={handlePinChange} />
          </label>

          <label>
            User Type:
            <select value={userType} onChange={handleUserTypeChange}>
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
              <option value="staff">Staff</option>
            </select>
          </label>

          <div className="additional-options">
            <label>
              <input
                type="checkbox"
                checked={forgotCredentials}
                onChange={handleForgotCredentialsChange}
              />
              Forgot Student ID or PIN?
            </label>

            <label>
              <input
                type="checkbox"
                checked={isAlumni}
                onChange={handleAlumniChange}
              />
              I am an Alumnus/Alumna
            </label>
          </div>

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
