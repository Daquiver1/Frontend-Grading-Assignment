import React, { useState } from 'react';

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentGrade, setNewStudentGrade] = useState('');

  const handleNewStudentNameChange = (event) => {
    setNewStudentName(event.target.value);
  };

  const handleNewStudentGradeChange = (event) => {
    setNewStudentGrade(event.target.value);
  };

  const handleAddStudent = (event) => {
    event.preventDefault();
    const newStudent = {
      name: newStudentName,
      grade: newStudentGrade,
    };
    setStudents([...students, newStudent]);
    setNewStudentName('');
    setNewStudentGrade('');
  };

  return (
    <div>
      <h1>Grading System Dashboard</h1>
      <form onSubmit={handleAddStudent}>
        <div>
          <label htmlFor="newStudentName">Student Name:</label>
          <input
            type="text"
            id="newStudentName"
            value={newStudentName}
            onChange={handleNewStudentNameChange}
          />
        </div>
        <div>
          <label htmlFor="newStudentGrade">Grade:</label>
          <input
            type="text"
            id="newStudentGrade"
            value={newStudentGrade}
            onChange={handleNewStudentGradeChange}
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
      <h2>Student List</h2>
      {students.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Grading Dashboard.</p>
      )}
    </div>
  );
}

export default Dashboard;