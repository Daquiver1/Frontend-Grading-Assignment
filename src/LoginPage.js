// src/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';



const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    // Add authentication logic here (mock data for now)
    console.log(`Logging in with Student ID: ${studentId} and PIN: ${pin}`);
  };

  return (
    <Layout>
       
      <h2>Login</h2>
      <form>
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
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/">Go to Landing Page</Link></p>
    </Layout>
  );
};
export default LoginPage;
