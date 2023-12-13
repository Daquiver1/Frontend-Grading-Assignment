import React, {useState } from 'react';
import Navigation from './Navigation';


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
        <div className="missinggrade">
             <Navigation/>
            <h2>Report Missing Grade</h2>
            <form onSubmit = {handleSubmit}>
                <label>
                    Name:
                    <input type = "text"
                    name = "coursename"
                    value = {formData.courseName}
                    onChange = {handleChange}
                    required/>
                </label>
               
                <label>
                    Surname:
                    <input type = "text"
                    name = "coursename"
                    value = {formData.courseName}
                    onChange = {handleChange}
                    required/>
                </label>
                <br/>
                <label>
                    ID:
                    <input type = "text"
                    name = "coursename"
                    value = {formData.courseName}
                    onChange = {handleChange}
                    required/>
                </label>
                <br/>
                <br/>
                <label>
                    Course Code:
                    <input type = "text"
                    name = "coursename"
                    value = {formData.courseName}
                    onChange = {handleChange}
                    required/>
                </label>
                <br/>
                <label>
                    Instructor Name:
                    <input type = "text"
                    name = "instructorName"
                    value = {formData.instructorName}
                    onChange = {handleChange}
                    required/>
                </label>
                <br/>
                <label>
                Expected Grade:
                    <input type = "text"
                    name = "expectedGrade"
                    value = {formData.expectedGrade}
                    onChange = {handleChange}
                    required/>
                </label>
                <br/>
                <label>
                Explanation:
                    <textarea 
                    name = "explanation"
                    value = {formData.explanation}
                    onChange = {handleChange}
                    required/>
                </label>
                <br/>
                <button type = "submit">Report</button>
            </form>
        </div>
    );
}
export default MissingGradeForm;