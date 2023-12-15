import React, { useState } from 'react';

function LoginForm() {
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentID === '11112468' && pin === '1234') {
      setLoginMessage('Login successful! Redirecting...');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    } else {
      setLoginMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <header>
        <b>LOGIN HERE TO ACCESS THE SYSTEM</b>
      </header>
      <main>
        <section className="login-section">
          <h2>Enter Your Student ID(11112468) and PIN(1234) to Login...</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="studentID">Student ID:</label>
              <input
                type="text"
                id="studentID"
                name="studentID"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pin">PIN:</label>
              <input
                type="password"
                id="pin"
                name="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
            <p id="loginMessage">{loginMessage}</p>
          </form>
        </section>
      </main>
      <footer>
        <b>MISSING GRADE REPORTING SYSTEM </b>
      </footer>
    </div>
  );
}

export default LoginForm;
