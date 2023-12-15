import React from 'react';

const Dashboard = () => {
  const studentResults = [
    { id: 1, name: 'John Doe', result: 'Pass' },
    { id: 2, name: 'Jane Smith', result: 'Fail' },
    { id: 3, name: 'Bob Johnson', result: 'Pass' },
    // Add more student results here
  ];

  return (
    <div>
      <h1>Result Tracking Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {studentResults.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard