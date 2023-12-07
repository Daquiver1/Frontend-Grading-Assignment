import React, { useState } from 'react';

const fakeUserData = {
  username: 'student123',
  password: 'password123',
};

const fakeGradesData = [
  { course: 'Math', grade: 'A' },
  { course: 'English', grade: 'B' },
  { course: 'Science', grade: 'Missing' },
  // Add more courses as needed
];

const GradeReport = ({ grades }) => (
  <div>
    <h2>Grade Report</h2>
    <ul>
      {grades.map((grade, index) => (
        <li key={index}>
          {`${grade.course}: ${grade.grade}`}
        </li>
      ))}
    </ul>
  </div>
);

const MissingGradeForm = () => (
  <div>
    <h2>Missing Grade Form</h2>
    {/* Add your form elements here */}
  </div>
);

const InstructorContact = () => (
  <div>
    <h2>Instructor Contact</h2>
    {/* Add your contact information or form elements here */}
  </div>
);

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [grades, setGrades] = useState([]);

  const handleLogin = () => {
    // Simulate authentication
    if (username === fakeUserData.username && password === fakeUserData.password) {
      setLoggedIn(true);
      setGrades(fakeGradesData);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setGrades([]);
    setUsername('');
    setPassword('');
  };

  const checkMissingGrades = () => {
    return grades.some((grade) => grade.grade === 'Missing');
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h2>Login</h2>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          {checkMissingGrades() && (
            <div style={{ color: 'red' }}>
              <p>Alert: You have missing grades. Please check your grades!</p>
            </div>
          )}

          <h3>Current Grades</h3>
          <ul>
            {grades.map((grade, index) => (
              <li key={index}>
                {`${grade.course}: ${grade.grade}`}
              </li>
            ))}
          </ul>

          <button onClick={handleLogout}>Logout</button>

          {/* Navigation links */}
          <nav>
            <ul>
              <li>
                <a href="#">Grade Report</a>
              </li>
              <li>
                <a href="#">Missing Grade Form</a>
              </li>
              <li>
                <a href="#">Instructor Contact</a>
              </li>
            </ul>
          </nav>

          {/* Content based on navigation */}
          {/* You can use a switch or conditional rendering based on the selected page */}
          {/* For simplicity, I'll show GradeReport by default */}
          <GradeReport grades={grades} />
        </div>
      )}
    </div>
  );
};

export default App;