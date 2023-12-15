import React, {useState } from 'react';

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
        <div className='login'>
            <h2>Report Missing Grade</h2>
            <form onSubmit = {handleSubmit}>
                <label className='hold'>
                    Course Name:
                    <input type = "text" className='hold'
                    name = "coursename"
                    value = {formData.courseName}
                    onChange = {handleChange}
                    required/>
                </label>
                <br/>
                <label className='hold'>
                    Instructor Name:
                    <input type = "text" className='hold'
                    name = "instructorName"
                    value = {formData.instructorName}
                    onChange = {handleChange}
                    required/>
                </label>
                <br/>
                <label className='hold'>
                Expected Grade:
                    <input type = "text" className='hold'
                    name = "expectedGrade"
                    value = {formData.expectedGrade}
                    onChange = {handleChange}
                    required/>
                </label>
                <br/>
                <label className='hold'>
                Explanation:
                    <textarea className='hold'
                    name = "explanation"
                    value = {formData.explanation}
                    onChange = {handleChange}
                    required/>
                </label>
                <br/>
                <button  className= 'submit' type = "submit">Report</button>
            </form>
        </div>
    );
}
export default MissingGradeForm;