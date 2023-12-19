import React from 'react'
import './Dashboard.css'


const subjects = [
 'Subject 1',
 'Subject 2',
 'Subject 3',
 'Subject 4',
 'Subject 5',
 'Subject 6',
]

const creditHours = [
  4,
  4,
  4,
  4,
  4,
  4,
 ]

const generateMockGrades = () => {
 const grades = []
 for (let i = 0; i < 8; i++) {
    const semesterGrades = []
    for (let j = 0; j < subjects.length; j++) {
      semesterGrades.push(Math.floor(Math.random() * 101))
    }
    grades.push(semesterGrades)
 }
 return grades
}

const Dashboard = () => {
 const [grades, setGrades] = React.useState(generateMockGrades())

 const calculateAverage = (semesterIndex) => {
    const semesterGrades = grades[semesterIndex]
    const total = semesterGrades.reduce((acc, val) => acc + val, 0)
    return total / semesterGrades.length
 }

 const renderTableData = () => {
    return grades.map((semesterGrades, semesterIndex) => (
      <tr key={semesterIndex}>
        <td>{semesterIndex + 1}</td>
        {semesterGrades.map((grade, subjectIndex) => (
          <td key={subjectIndex}>{grade}</td>
        ))}
        <td>{calculateAverage(semesterIndex).toFixed(2)}</td>
      </tr>
    ))
 }

 return (
    <div>
      <h1>Dashboard</h1>
      <table className= "dashboard-table">
        <thead>
          <tr>
            <th>Semester</th>
            {subjects.map((subject, index) => (
              <th key={index}>{subject}</th>
            ))}
            <th>Average</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
 )
}

export default Dashboard
