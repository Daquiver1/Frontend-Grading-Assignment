import React from 'react';

const GradesTable = ({ grades }) => {
 return (
    <table>
      <thead>
        <tr className='table-list'>
          <th>Subject</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {grades.map((grade, index) => (
          <tr key={index}>
            <td>{grade.subject}</td>
            <td>{grade.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
 );
};

export default GradesTable;