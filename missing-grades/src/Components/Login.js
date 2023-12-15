import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const [selectedRole, setSelectedRole] = useState('student');
  const [loginStatus, setLoginStatus] = useState('');

  const navigate = useNavigate();
  const handleLogin = () => {
    if (
      (selectedRole === 'student' && studentId === '12345' && pin === '12345') ||
      (selectedRole === 'staff' && studentId === '56789' && pin === '56789')
    ) {
      setLoginStatus('Login successful');
    } else {
      setLoginStatus('Incorrect ID or PIN. Please try again.');
    }
    navigate('/dashboard');
  };

  return (
    <div className='body'>
    <div className="overlay">
      <div className="login-form">
        <h2>Login</h2>

        <label className="role-label">
  <span className="icon">
    <FontAwesomeIcon icon={faUserCircle} style={{ color: '#5e362c' }} />
  </span>
  <select
    value={selectedRole}
    onChange={(e) => setSelectedRole(e.target.value)}
    className="role-selector"
  >
    <option value="student">Student</option>
    <option value="staff">Staff</option>
  </select>
</label>

        <label>
          <FontAwesomeIcon icon={faUserCircle} style={{ color: '#5e362c' }} className="icon user-icon" />
          <input
            type="text"
            placeholder={`Enter ${selectedRole === 'student' ? 'Student' : 'Staff'} ID`}
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </label>

        <label>
          <FontAwesomeIcon icon={faUnlockAlt} style={{ color: '#5e362c' }} className="icon unlock-icon" />
          <input
            type="password"
            placeholder="Enter PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </label>

        <button onClick={handleLogin}>Login</button>
        <p>{loginStatus}</p>
      </div>
    </div>
    </div>
  );
};

export default Login;