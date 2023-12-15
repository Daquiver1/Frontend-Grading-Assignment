import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css'; // Ensure the correct path for your CSS file

function LoginPage() {
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you can implement your login logic, such as verifying credentials
    console.log(`Student ID: ${studentId}, PIN: ${pin}`);

    // Example: Check if login is successful (you can replace this logic)
    const isLoginSuccessful = studentId !== '' && pin !== '';

    if (isLoginSuccessful) {
      // Redirect to DashboardPage if login is successful
      history.push('/dashboard');
    } else {
      // Handle unsuccessful login here, e.g., show an error message
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <label>
          Student ID:
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </label>
        <label>
          PIN:
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
