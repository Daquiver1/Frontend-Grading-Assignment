import React, { useState } from 'react';
import '../pages/missinggrade.css';

const courses = [
 { value: 'UGRC 210', label: 'Academic Writing II' },
 { value: 'DCIT 201', label: 'Programming I' },
 { value: 'DCIT 203', label: 'Digital and Logic Systems Design' },
 { value: 'DCIT 205', label: 'Multi Media and Web Design' },
 { value: 'DCIT 207', label: 'Computer Architecture & Organisation' },
 { value: 'DCIT 209', label: 'E-Business Architectures' },
];

function MissingGradeForm() {
 const [course, setCourse] = useState('');
 const [instructor, setInstructor] = useState('');
 const [expectedGrade, setExpectedGrade] = useState('');
 const [explanation, setExplanation] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    alert('Missing Grade Form Submitted');
    setCourse('');
    setInstructor('');
    setExpectedGrade('');
    setExplanation('');
 };

 return (
    <div className="App">
            <form onSubmit={handleSubmit}>
        <label>
          Course name:
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course.value} value={course.value}>
                {course.label}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Instructor name:
          <input
            type="text"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Expected grade:
          <input
            type="text"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
          />
        </label>
        <br />
        <label>
          Explanation:
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
          />
        </label>
        <br />
		<div className="send">
        <button  type="submit">Submit</button>
		</div>
      </form>
    </div>
 );
}

export default MissingGradeForm;