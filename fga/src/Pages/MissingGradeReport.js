import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/PageStyles/MissingGradeReport.css";
import "../Pages/InstructorContactPage";
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";



const Content = () => {

    return (
        <>
            <div>
                <p>Use the form below to report any missing grade</p>
                <p>You can also reach your instructors by clicking this link 
                <Link to = "/Pages/InstructorContactPage" > here</Link>
                </p>
            </div>
        </>
    )
}

const GradeReportForm = () => {
    const [formData, setFormData] = useState({
        courseName: '',
        instructorName: '',
        expectedGrade: '',
        explanation: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
         
    };

    


    return (
        <>
        <Header />
        <SideNav />
        <div className="form">
        <Content />
            <h2>Report Missing Grade</h2>
            <form id="missingGradeForm" onSubmit={handleSubmit}>
                <label htmlFor="courseName">Course Name:</label>
                <input
                    type="text"
                    id="courseName"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="instructorName">Instructor Name:</label>
                <input
                    type="text"
                    id="instructorName"
                    name="instructorName"
                    value={formData.instructorName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="expectedGrade">Expected Grade:</label>
                <input
                    type="text"
                    id="expectedGrade"
                    name="expectedGrade"
                    value={formData.expectedGrade}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="explanation">Explanation:</label>
                <textarea
                    id="explanation"
                    name="explanation"
                    rows="4"
                    value={formData.explanation}
                    onChange={handleChange}
                    required
                ></textarea>

                <input type="submit" value="Submit" />
            </form>

            if (submitted) {
            <div className="confirmation-message">
                    <p>Grade reported successfully!</p>
                </div>
            }


            
        </div>
        <Footer />
        </>
    )
}

export default GradeReportForm;
