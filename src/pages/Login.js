import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const errorContainerRef = useRef(null);
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  useEffect(() => {
    const errorContainer = errorContainerRef.current;
    if (errorContainer) {
      errorContainer.style.height = errorMessage ? 'auto' : '0';
    }
  }, [errorMessage]);

  const handleLogin = (e) => {
    e.preventDefault();

    const studentIdPattern = /^[1-9]\d{9}$/; // Regex pattern for 10 digits not starting with 0
    const pinPattern = /^\d{5}$/; // Regex pattern for 5 digits

    if (studentId.trim() === '' && pin.trim() === '') {
      setErrorMessage('Please provide Student ID and PIN');
    } else if (!studentId.match(studentIdPattern)) {
      setErrorMessage('Student ID must be 10 digits and not start with 0');
    } else if (!pin.match(pinPattern)) {
      setErrorMessage('PIN must be 5 digits');
    } else {
      setErrorMessage('');
      navigate('/LandingPage'); // Navigate to the LandingPage component
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      
      <div className="login-form-section">
        <div className='form-container'>
          <h1>
            <span className='grade'>Grade</span><span className='vista'>Vista</span>
            <span className='sign-in'>Sign In</span>
          </h1>
          <div className={`error-container ${errorMessage ? 'show' : ''}`} ref={errorContainerRef}>
            <div className="error-message">
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          </div>
          <form onSubmit={handleLogin}>
            <div>
              <label>
                <input
                  type="text"
                  value={studentId}
                  placeholder='Student ID'
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                <div className="pin-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Pin"
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="eye-icon"
                    onClick={handlePasswordVisibility}
                  />
                </div>
              </label>
            </div>
            <button type="submit">Login</button>
            <hr />
            <div className="forgot-pwd">
              <a href="/">Forgot Your Password?</a>
            </div>
            <div className="note">
              <p className='copyright-msg'>&copy; 2023 University of Ghana. All rights reserved.</p>
              <p>
                {`The GradeVista system, and the systems, data, and other resources that require GradeVista authentication for access, are only for legitimate University of Ghana users.`}
                <br />
                {`Use may be monitored, and improper use of the GradeVista system or those resources may result in disciplinary action and civil and criminal charges.`}
              </p>
            </div>
          </form>
        </div>
      </div>

      
    </div>
  )
}

export default Login;
