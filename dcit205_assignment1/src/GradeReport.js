import React, {useContext} from 'react';
import './GradeReport.css';
import { GradeSubjectContext } from './GradeSubjectContext';

const GradeList = () => {
  const {gradeSubjects} = useContext(GradeSubjectContext);

  return (
    <div className='Grades'>
      <h2>Grades</h2>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
            <tr>
              <td>DCIT 207</td>
              <td>B</td>
            </tr>
            <tr>
              <td>DCIT 205</td>
              <td>A</td>
            </tr>
          </thead>
          <tbody>
            {gradeSubjects.map((gradeSubjects, index) => (<tr key={index}>
              <td>{gradeSubjects.subject}</td>
              <td>{gradeSubjects.grade}</td>
            </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  );
};

export default GradeList;