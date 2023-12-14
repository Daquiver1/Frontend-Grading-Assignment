import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import '../Css/LoginPage.css';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    // You can implement authentication logic here
    console.log(`Logging in with Student ID: ${studentId} and PIN: ${pin}`);
  };

  return (
    <div className="login-container">
      <header>
        <h1>Login</h1>
      </header>

      <form>
        <label>
          Student ID:
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </label>

        <label>
          PIN:
          <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
        </label>

       <Link to="/home">
        <button type="button" onClick={handleLogin}>Login</button>
       </Link> 
      </form>

      <p>
      Forgot Student ID or Pin ? <Link to="/Forgotten">Forgot Pin/Password?</Link>
      </p>
    </div>
  );
};

export default LoginPage;
