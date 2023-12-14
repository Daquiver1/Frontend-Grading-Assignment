// Define the type for user credentials
interface UserCredentials {
  studentId: string;
  pin: string;
}

// LoginPage.tsx
import React, { useState } from 'react';

interface LoginPageProps {
  onLogin: (userCredentials: UserCredentials) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  // State to manage form inputs
  const [studentId, setStudentId] = useState('');
  const [pin, setPin] = useState('');

  // Handle login button click
  const handleLogin = () => {
    // Validate form inputs (add your validation logic here)
    if (!studentId || !pin) {
      alert('Please enter both Student ID and PIN.');
      return;
    }

    // Call the onLogin prop with user credentials
    onLogin({ studentId, pin });
  };

  return (
    <div>
      <h2>Secure Login Form</h2>
      <form>
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
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
