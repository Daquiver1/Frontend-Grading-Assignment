import React, { useState } from "react";
import "./Missinggrade.css";
import san from '../images/jane.jpeg'

const MissingGradeForm = () => {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [missingGrade, setMissingGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Student: ${studentName}, Course: ${course}, Missing Grade: ${missingGrade}`);
    // You can add further functionality here, like sending a request to report the missing grade
  };

  return (
    <>
      <section className="newser">
        <section className='hero'>
          <h1 className="h1">Welcome To Missing Grade Form Page</h1>
          <form onSubmit={handleSubmit} className="missing-grade-form">
            <div className="form-group">
              <label htmlFor="studentName">Student Name</label>
              <input
                type="text"
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course</label>
              <input
                type="text"
                id="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="missingGrade">Missing Grade</label>
              <input
                type="text"
                id="missingGrade"
                value={missingGrade}
                onChange={(e) => setMissingGrade(e.target.value)}
              />
            </div>
            <button className="btm" type="submit">Report Missing Grade</button>
          </form>
        </section>
          <section>
            <img src={san} alt="img"/>
          </section>
      </section>
    </>
  );
};

export default MissingGradeForm;
