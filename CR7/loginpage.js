import React from 'react';

function LoginPage() {
  const loginStyle = {
    textAlign: 'center',
    padding: '2rem',
  };

  <nav>
      <ul>
        <li><a href="dashboard">landingpage.js</a></li>
        <li><a href="login">loginpage.js</a></li>
        <li><a href="dashboard">dashboard.js</a></li>
        <li><a href="grade report">grade.js</a></li>
        <li><a href="missing grade form">missinggrade.js</a></li>
        <li><a href="help">help.js</a></li>
        <li><a href="instructor page">instructor.js</a></li>
      </ul>
    </nav>

  return (
    <div style={loginStyle}> 
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Student ID:
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </label>
        <br />
        <label>
          PIN:
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form> 
    </div>
  );
}

export default LoginPage;