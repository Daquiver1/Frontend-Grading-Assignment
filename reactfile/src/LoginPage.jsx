
import NavBar from './NavBar';
import React, { useState } from 'react';
import './LoginPage.css';
import Footer from './Footer';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    
    console.log('Student ID:', studentId);
    console.log('PIN:', pin);
   
  };

  return (

    <>
          <NavBar/>
    <div
     style={{
      backgroundImage: 'url("/ash1.jpg")',
    }} className="login-container">
      <div className="image-container">
       
        <img src="/stulog.jpg" alt="Student" />
      </div>
      <div className="form-container">
        <h2 className='stulog'>Student Login</h2>
        <form>
          <label  htmlFor="studentId">Student ID:</label>
          <input className='PASS'
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <label  htmlFor="pin">PIN:</label>
          <input className='PASS'
            type="password"
            id="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />

          <button className='PASS' type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
    <Footer/>

    </>
  );
};

export default LoginPage;
