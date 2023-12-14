import NavBar from './NavBar';

import './MissingGrade.css'; 
import React, { useState } from 'react';
import Footer from './Footer';


const MissingGrade = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
   
    setFormData({
      courseName: '',
      instructorName: '',
      expectedGrade: '',
      explanation: '',
    });
  };

  return (
  
    <>
    <NavBar/>
  

    <div
    style={{
      backgroundImage: 'url("/grade.jpg")',
    }}
     className="background-container">
   <form className="form1-container" onSubmit={handleSubmit}>
     <h2>Report Missing Grade</h2>
     <div>
       <label htmlFor="courseName">Course Name:</label>
       <input className='input-item'
         type="text"
         id="courseName"
         name="courseName"
         value={formData.courseName}
         onChange={handleInputChange}
         required
       />
     </div>


        <div>
          <label htmlFor="instructorName">Instructor Name:</label>
          <input className='input-item'
            type="text"
            id="instructorName"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="expectedGrade">Expected Grade:</label>
          <input className='input-item'
            type="text"
            id="expectedGrade"
            name="expectedGrade"
            value={formData.expectedGrade}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="explanation">Explanation:</label>
          <textarea
            id="explanation"
            name="explanation"
            value={formData.explanation}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default MissingGrade;

