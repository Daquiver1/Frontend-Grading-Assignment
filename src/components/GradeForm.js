import React, { useState } from 'react';

const GradeForm = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (mock-up)
    console.log('Submitting missing grade report:', { courseName, instructorName, expectedGrade, explanation });
    // Reset form fields after submission
    setCourseName('');
    setInstructorName('');
    setExpectedGrade('');
    setExplanation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} placeholder="Course Name" />
      {/* Other input fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default GradeForm;
