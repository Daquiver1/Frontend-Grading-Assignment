import React, { useState } from 'react';

const fakeUserData = {
  username: 'Macbeth',
  password: 'macbeth123',
};

const fakeGradesData = [
  // ... (your existing fakeGradesData)
  { course: 'INTRODUCTION TO COMPUTER SCIENCE', grade: 'A', semester: 'FIRST SEMESTER', academicYear: '2022' },
  { course: 'OFFICE PRODUCTIVITY TOOLS', grade: 'F', semester: 'FIRST SEMESTER', academicYear: '2022' },
  { course: 'INTRODUCTION TO ECONOMICS I', grade: 'F', semester: 'Spring', academicYear: '2023' },
  { course: 'STATISTICS AND PROBABILITY I', grade: 'F', semester: 'Spring', academicYear: '2023' },
  { course: 'CRITICAL THINKING AND PRACTICAL REASONING', grade: 'F', semester: 'FIRST SEMESTER', academicYear: '2023' },
  // Add more courses as needed with semester and academicYear properties
];

const initialGradesData = [
  // ... (your existing gradesData)
  { course: 'Science', grade: 'B', semester: 'Fall', academicYear: '2023' },
  { course: 'Art History', grade: 'A', semester: 'Spring', academicYear: '2022' },
  { course: 'Literature and Writing', grade: 'B', semester: 'Spring', academicYear: '2022' },
  { course: 'Environmental Science', grade: 'A-', semester: 'Fall', academicYear: '2022' },
  { course: 'Music Theory', grade: 'B+', semester: 'Fall', academicYear: '2022' },
  { course: 'Psychology', grade: 'A', semester: 'Spring', academicYear: '2023' },
  // Add more courses of your choice
  { course: 'Chemistry', grade: 'B', semester: 'Spring', academicYear: '2023' },
  { course: 'Political Science', grade: 'A-', semester: 'Fall', academicYear: '2022' },
  { course: 'History of Art and Architecture', grade: 'A', semester: 'Fall', academicYear: '2022' },
  { course: 'Digital Marketing', grade: 'B+', semester: 'Spring', academicYear: '2023' },
  { course: 'Human Anatomy', grade: 'A+', semester: 'Spring', academicYear: '2023' },
];

const GradeReport = ({ grades, filter, setFilter }) => {
  // Get unique semesters and academic years from grades
  const semesters = Array.from(new Set(grades.map((grade) => grade.semester)));
  const academicYears = Array.from(new Set(grades.map((grade) => grade.academicYear)));

  // Filter grades based on selected semester or academic year
  const filteredGrades = grades.filter(
    (grade) => filter === 'All' || grade.semester === filter || grade.academicYear === filter
  );

  return (
    <div>
      <h2>Grade Report</h2>
      <div>
        <label>
          Filter by Semester or Academic Year:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            {semesters.map((semester, index) => (
              <option key={`semester-${index}`} value={semester}>
                {`Semester ${semester}`}
              </option>
            ))}
            {academicYears.map((year, index) => (
              <option key={`year-${index}`} value={year}>
                {`Academic Year ${year}`}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ul>
        {filteredGrades.map((grade, index) => (
          <li key={index}>
            {`${grade.course}: ${grade.grade} - ${grade.semester}, ${grade.academicYear}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MissingGradeForm = ({ onClose }) => {
  const [missingCourse, setMissingCourse] = useState('');

  const handleSubmit = () => {
    // Add logic to handle missing grade submission
    console.log(`Missing grade reported for ${missingCourse}`);
    // Reset form field
    setMissingCourse('');
    // Close the form
    onClose();
  };

  return (
    <div>
      <h2>Missing Grade Form</h2>
      <label>
        Course:
        <input type="text" value={missingCourse} onChange={(e) => setMissingCourse(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

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
  const [showMissingGradeForm, setShowMissingGradeForm] = useState(false);
  const [showGradeReport, setShowGradeReport] = useState(false);
  const [filter, setFilter] = useState('All');

  const handleLogin = () => {
    // Simulate authentication
    if (username === fakeUserData.username && password === fakeUserData.password) {
      setLoggedIn(true);
      setGrades(initialGradesData);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setGrades([]);
    setUsername('');
    setPassword('');
    setShowMissingGradeForm(false);
    setShowGradeReport(false);
  };

  const checkMissingGrades = () => {
    return grades.some((grade) => grade.grade === 'Missing');
  };

  const handleMissingGradeClick = () => {
    setShowMissingGradeForm(true);
    setShowGradeReport(false);
  };

  const handleGradeReportClick = () => {
    setShowGradeReport(true);
    setShowMissingGradeForm(false);
  };

  const handleCloseForm = () => {
    setShowMissingGradeForm(false);
    setShowGradeReport(false);
  };

  // New list for filtered courses based on semester or academic year
  const filteredCourses = grades.filter(
    (course) => showGradeReport && (course.semester === filter || course.academicYear === filter)
  );

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
          <h2>WELCOME TO YOUR DASHBOARD, {username}!</h2>
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

          <h3>Filtered Courses</h3>
          <ul>
            {filteredCourses.map((course, index) => (
              <li key={index}>
                {`${course.course}: ${course.grade} - ${course.semester}, ${course.academicYear}`}
              </li>
            ))}
          </ul>

          <button onClick={handleLogout}>Logout</button>

          {/* Navigation links */}
          <nav>
            <ul>
              <li>
                <a href="#" onClick={handleGradeReportClick}>
                  Grade Report
                </a>
              </li>
              <li>
                <a href="#" onClick={handleMissingGradeClick}>
                  Missing Grade Form
                </a>
              </li>
              <li>
                <a href="#">Instructor Contact</a>
              </li>
            </ul>
          </nav>

          {/* Content based on navigation */}
          {showGradeReport && <GradeReport grades={grades} filter={filter} setFilter={setFilter} />}
          {showMissingGradeForm && <MissingGradeForm onClose={handleCloseForm} />}
        </div>
      )}
    </div>
  );
};

export default App;
