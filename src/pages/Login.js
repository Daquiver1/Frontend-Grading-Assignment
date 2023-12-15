import React, { useState } from 'react';

const LoginForm = () => {
 const [studentID, setStudentID] = useState('');
 const [pin, setPin] = useState('');

 const handleSubmit = (event) => {
    event.preventDefault();

    if (studentID && pin) {
      alert('Logged in successfully');
    } else {
      alert('Invalid student ID or PIN');
    }
 };

 return (
    <div>
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentID">Student ID</label>
          <input
            type="text"
            id="studentID"
            value={studentID}
            onChange={(event) => setStudentID(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pin">PIN</label>
          <input
            type="password"
            id="pin"
            value={pin}
            onChange={(event) => setPin(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
 );
};

export default LoginForm;