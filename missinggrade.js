import React from 'react'
import '../styles/missinggrade.css'

const missinggrade = () => {
  
    const [courseName, setCourseName] = useState('');
    const [instructorName, setInstructorName] = useState('');
    const [expectedGrade, setExpectedGrade] = useState('');
    const [explanation, setExplanation] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can perform any validation or submission logic here
      // For this example, we'll just set a confirmation message
      setIsSubmitted(true);
    };
  
    return (
      <div className="missing-grade-form-container">
        <h2>Missing Grade Report Form</h2>
        {isSubmitted ? (
          <p className="confirmation-message">Grade report submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="courseName">Course Name:</label>
              <input
                type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="instructorName">Instructor Name:</label>
              <input
                type="text"
                id="instructorName"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expectedGrade">Expected Grade:</label>
              <input
                type="text"
                id="expectedGrade"
                value={expectedGrade}
                onChange={(e) => setExpectedGrade(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="explanation">Explanation:</label>
              <textarea
                id="explanation"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  };

export default missinggrade
