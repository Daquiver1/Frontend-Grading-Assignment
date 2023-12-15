import React from 'react';
import './gradetable.css';

const GradeTable = ({ grades }) => {


    return (
      <div className='gradetable'>
        <table className='table'>
          <thead className='thead'>
            <tr className='tr'>
              <th className='th'>CURRENT ACADEMIC YEAR</th>
              <th className='th'>CURRENT SEMESTER</th>
              <th className='th'>CURRENT CCT</th>
              <th className='th'>CURRENT CCP</th>
              <th className='th'>CURRENT CGPA</th>
            </tr>
          </thead>
          <tbody className='tbody'>
            {grades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.year}</td>
                <td>{grade.sem}</td>
                <td>{grade.cct}</td>
                <td>{grade.ccp}</td>
                <td>{grade.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
};

export default GradeTable;
