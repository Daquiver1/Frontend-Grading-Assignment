import React from 'react';
import './GradeForms.css'

function GradeForms(){
  return (
    <div className='bg'>
      <div className='th'>
    <form action="/submit-missing-grade" method="POST">
  <label for="courseName">Course Name:</label>
  <input type="text" id="courseName" name="courseName" required />

  <label for="instructorName">Instructor Name:</label>
  <input type="text" id="instructorName" name="instructorName" required />

  <label for="expectedGrade">Expected Grade:</label>
  <input type="text" id="expectedGrade" name="expectedGrade" required />

  <label for="explanation">Explanation:</label>
  <textarea id="explanation" name="explanation" rows="4" cols="50" required></textarea>

  <button type="submit">Submit</button>
</form>
</div>

  </div>
  );
};

export default GradeForms;