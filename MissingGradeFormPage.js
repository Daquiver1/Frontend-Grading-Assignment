
import React, { useState, useEffect } from 'react';
import './MissingGradeFormPage.css';

const MissingGradeFormPage = () => {
  const [courses, setCourses] = useState([]);
  const [missingGradeInfo, setMissingGradeInfo] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const simulatedCourses = [
      { id: 1, name: 'Math 223', instructor: 'Prof. Seba' },
      { id: 2, name: 'Dcit 201', instructor: 'Dr. Tackie' },
      { id: 3, name: 'Dcit 205', instructor: 'Dr. Soli' },
      { id: 4, name: 'Dcit 203', instructor: 'Dr. Adziz' },
      { id: 5, name: 'Dcit 207', instructor: 'Dr.' },
      { id: 6, name: 'CBAS', instructor: 'Dr' },
    ];

    setCourses(simulatedCourses);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMissingGradeInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    
    console.log('Submitting:', missingGradeInfo);
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Report Missing Grade</h1>

      {submitted ? (
        <p>Grade reported successfully. Thank you!</p>
      ) : (
        <form>
          <div className="mb-4">
            <label htmlFor="courseName" className="block text-sm font-bold mb-2">
              Course Name:
            </label>
            <select
              id="courseName"
              name="courseName"
              className="form-input"
              onChange={handleInputChange}
              value={missingGradeInfo.courseName}
            >
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course.id} value={course.name}>
                  {course.name} - {course.instructor}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="instructorName" className="block text-sm font-bold mb-2">
              Instructor Name:
            </label>
            <input
              type="text"
              id="instructorName"
              name="instructorName"
              className="form-input"
              onChange={handleInputChange}
              value={missingGradeInfo.instructorName}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="expectedGrade" className="block text-sm font-bold mb-2">
              Expected Grade:
            </label>
            <input
              type="text"
              id="expectedGrade"
              name="expectedGrade"
              className="form-input"
              onChange={handleInputChange}
              value={missingGradeInfo.expectedGrade}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="explanation" className="block text-sm font-bold mb-2">
              Explanation:
            </label>
            <textarea
              id="explanation"
              name="explanation"
              className="textarea-input"
              rows="4"
              onChange={handleInputChange}
              value={missingGradeInfo.explanation}
            />
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default MissingGradeFormPage;
