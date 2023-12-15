import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function GradeReport() {
 const [semester, setSemester] = useState('')
 const [academicYear, setAcademicYear] = useState('')
 const [filteredGrades, setFilteredGrades] = useState([])

 const grades = [
    {
      id: 1,
      course: 'DCIT 201',
      grade: 'A',
      semester: '1st Semester',
      academicYear: '2021'
    },
    {
      id: 2,
      course: 'DCIT 207',
      grade: 'B',
      semester: '2nd Semester',
      academicYear: '2022'
    },
    {
      id: 3,
      course: 'DCIT 205',
      grade: 'B',
      semester: '2nd Semester',
      academicYear: '2023'
    },
    // ...
 ]

 useEffect(() => {
    if (semester || academicYear) {
      setFilteredGrades(
        grades.filter(
          grade =>
            (semester ? grade.semester === semester : true) &&
            (academicYear ? grade.academicYear === academicYear : true)
        )
      )
    } else {
      setFilteredGrades(grades)
    }
 }, [semester, academicYear])

 return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <select
              className="form-select"
              value={semester}
              onChange={e => setSemester(e.target.value)}
            >
              <option value="">Select Semester</option>
              <option value="Fall">1st Semester</option>
              <option value="Spring">2nd Semester</option>
            
            </select>
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={academicYear}
              onChange={e => setAcademicYear(e.target.value)}
            >
              <option value="">Select Academic Year</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                 <th>Course</th>
                 <th>Grade</th>
                 <th>Semester</th>
                 <th>Academic Year</th>
                </tr>
              </thead>
              <tbody>
                {filteredGrades.map(grade => (
                 <tr key={grade.id}>
                    <td>{grade.course}</td>
                    <td>{grade.grade}</td>
                    <td>{grade.semester}</td>
                    <td>{grade.academicYear}</td>
                 </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
 )
}

