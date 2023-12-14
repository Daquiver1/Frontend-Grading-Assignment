
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import './Login.css';



const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
   
    console.log(`Logging in with Student ID: ${studentId} and PIN: ${pin}`);
  };

  return (
    <Layout>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <label>
            Student ID:
            <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
          </label>
          <label>
            PIN:
            <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
          </label>
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
        <p>Don't have an account? <Link to="/">Click here to create a new account</Link></p>
      </div>
    </Layout>
  );
};

export default Login