import React, { useState } from 'react';


function Form ()  {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      courseName,
      instructorName,
      expectedGrade,
      explanation,
    });
    setSubmitted(true);
    setCourseName('');
    setInstructorName('');
    setExpectedGrade('');
    setExplanation('');
  };

  return (
    <div className="container mt-5">
         <div className="row justify-content-center">
        <div className="col-md-6">
      <div className='card'>
      <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{ height: '50%' }}>
      <h2 className="text-center mb-4 text-primary">Report Missing Grade</h2>
      {submitted && <div className="alert alert-success">Form submitted successfully!</div>}
      <form onSubmit={handleSubmit}  className='text-center w-75'>
        <div className="mb-3 ">
          <label htmlFor="courseName" className="form-label">Course Name:</label>
          <input
            type="text"
            className="form-control form-group w-50%"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="instructorName" className="form-label">Instructor Name:</label>
          <input
            type="text"
            className="form-control"
            id="instructorName"
            value={instructorName}
            onChange={(e) => setInstructorName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expectedGrade" className="form-label">Expected Grade:</label>
          <input
            type="text"
            className="form-control"
            id="expectedGrade"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="explanation" className="form-label">Explanation:</label>
          <textarea
            className="form-control"
            id="explanation"
            rows="4"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{width:'50%'}}>Submit</button>
      </form>
    </div>

      </div>
      </div>
      </div>
      </div>
  );
};

export default Form;
