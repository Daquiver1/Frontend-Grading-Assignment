import React from 'react'
import './userInfo.css';

const userInfo = ({ studentName, programOffering, level, studentId, missingGradesCount }) => {
  return (
    <div className='user-info-container'>
        <div>
            <p>Name: {studentName}</p>
            <p>Programme: {programOffering}</p>
            <p>ID Number: {studentId}</p>
      </div>
      <div>
            <p>Level: {level}</p>
            <p>Missing Grades: {missingGradesCount}</p>
      </div>
    </div>
  )
}

export default userInfo