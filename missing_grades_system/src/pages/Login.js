import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import '../styles/login.css'

function LoginPage() {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    console.log('Student ID:', studentId);
    console.log('PIN:', pin);
  };

  return (
    <div className="login-page">
      <Navbar></Navbar>
      <h1 className='login'>Login</h1>
      <form className='login_form'>
        <label>
          Student ID:
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </label>
        <br />
        <label>
          PIN:
          <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
