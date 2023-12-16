import { useState } from "react";
import './Login.css';

const LoginPage = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [robotChecked, setRobotChecked] = useState(false);
  
  const handleLogin = () => {
    if (robotChecked) {
      if (studentId === '11111' && password === '00000') {
        setMessage('Login successful!');
      } else {
        setMessage('Invalid student ID or password.');
      }
    } else {
      setMessage('Please confirm that you are not a robot.');
    }
  };
  
  return (
    <div className="App">
      <div className="login-container">
        <label htmlFor="studentId">Student ID:</label>
        <input
          type="text"
          id="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
  
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
  
        <div>
          <input
            type="checkbox"
            id="robotCheck"
            checked={robotChecked}
            onChange={() => setRobotChecked(!robotChecked)}
          />
          <label htmlFor="robotCheck">I'm not a robot</label>
        </div>
  
        <button type="button" onClick={handleLogin}>
          Login
        </button>
  
        <p id="message">{message}</p>
      </div>
    </div>
    );
  };

    

 
export default LoginPage;