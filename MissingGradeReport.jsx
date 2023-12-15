import React from 'react';
import Header from './Header'
import Footer from './Footer'

function MissingGradeForm() {
  let courseName = '';
  let instructorName = '';
  let expectedGrade = '';
  let explanation = '';
  let submitted = false;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'courseName':
        courseName = value;
        break;
      case 'instructorName':
        instructorName = value;
        break;
      case 'expectedGrade':
        expectedGrade = value;
        break;
      case 'explanation':
        explanation = value;
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    submitted = true;
    console.log({ courseName, instructorName, expectedGrade, explanation });
  };

  return (
    <>
    <Header></Header>
    <div>
      <h2 className='Missinggrade-1'>Missing Grade Form</h2>
      <form>
      <div>
      <p className='missing-intro'>
        Welcome to this page. This is the Missing Grade Form Page.Go ahead to reporting.
      </p>
    </div>
        <div  className='Missinggrade-2'>
          <label>Course Name:</label>
          <input
            type="text"
            name="courseName"
            onChange={handleInputChange}
          />
        </div>
        <div className='Missinggrade-3'>
          <label>Instructor Name:</label>
          <input
            type="text"
            name="instructorName"
            onChange={handleInputChange}
          />
        </div>
        <div className='Missinggrade-4'>
          <label>Expected Grade:</label>
          <input
            type="text"
            name="expectedGrade"
            onChange={handleInputChange}
          />
        </div>

        <div className='Missinggrade-5'>
          <label>Explanation:</label>
          <textarea
            name="explanation"
            onChange={handleInputChange}
          ></textarea>
        </div>


        <button type="button" onClick={handleSubmit} className='Missinggrade-butt'>
          SUBMIT
        </button>
      </form>

      {submitted && (
        <p className='submit'>Form submitted successfully. Thank you for reporting!</p>
      )}
    </div>
    <Footer></Footer>
    </>
  );
}

export default MissingGradeForm;
