import React from 'react';

function MissingGradeFormPage() {
 const handleSubmit = (event) => {
    event.preventDefault();
    alert('Missing grade reported!');
 };

 return (
    <form onSubmit={handleSubmit}>
      <label>
        Course name:
        <input type="text" name="courseName" />
      </label>
      <label>
        Instructor name:
        <input type="text" name="instructorName" />
      </label>
      <label>
        Expected grade:
        <input type="text" name="expectedGrade" />
      </label>
      <label>
        Explanation:
        <textarea name="explanation" />
      </label>
      <input type="submit" value="Submit" />
    </form>
 );
}

export default MissingGradeFormPage;