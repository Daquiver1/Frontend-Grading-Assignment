import React, {useState } from 'react';
import Navigation from './Navigation';
import './style.css'


function MissingGradeForm(){
    const [formData, setFormData] = 
    useState({
        courseName: '',
        instructorName:'',
        expectedGrade:'',
        explanation:'',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData ((prevData) => ({
            ...prevData,
            [name]:value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Complaint Submitted:', formData);
        setFormData({
            courseName: '',
            instructorName: '',
            expectedGrade:'',
            explanation:'',
        });
    };

    return(
        <body>
        <div>
              <Navigation/>
        <div className="missinggrade">
        <div className="form-title">
        <h2>Report Missing Grade</h2>
        </div>
            <form onSubmit = {handleSubmit}>
            <div className="namebox"> 
                <label>
                    Name<br/>
                    <input className='form-name' type = "text"
                    name = "coursename"
                    value = {formData.courseName}
                    onChange = {handleChange}
                    required/>
                </label>
               
                <label>
                    Surname <br/>
                    <input className='form-name' type = "text"
                    name = "coursename"
                    value = {formData.courseName}
                    onChange = {handleChange}
                    required/>
                </label>
                </div>
                <br/>
                <div className="id-box">
                <label>
                    ID  <br/>
                    <input className='form-name2' type = "text"
                    name = "coursename"
                    value = {formData.courseName}
                    onChange = {handleChange}
                    required/>
                </label>
                </div>
                <br/>
                <div className="id-box">
                <label>
                    Course Code  <br/>
                    <input  className='form-name2' type = "text" 
                    name = "coursename"
                    value = {formData.courseName}
                    onChange = {handleChange}
                    required/>
                </label>
                </div>
                <br/>
                <div className="id-box">
                <label>
                    Instructor Name  <br/>
                    <input className='form-name2' type = "text"
                    name = "instructorName"
                    value = {formData.instructorName}
                    onChange = {handleChange}
                    required/>
                </label>
                </div>
                <br/>
                <div className="id-box">
                <label>
                Expected Grade  <br/>
                    <input className='form-name2' type = "text"
                    name = "expectedGrade"
                    value = {formData.expectedGrade}
                    onChange = {handleChange}
                    required/>
                </label>
                </div>
                <br/>
                <div className="id-box">
                <label>
                Explanation  <br/>
                    <textarea className='form-name3'
                    name = "explanation"
                    value = {formData.explanation}
                    onChange = {handleChange}
                    required/>
                </label>
                </div>
                <br/>
                <button className="submit-button" type = "submit">Submit</button>
            </form>
        </div>
        </div>
        </body>
    );
}
export default MissingGradeForm;