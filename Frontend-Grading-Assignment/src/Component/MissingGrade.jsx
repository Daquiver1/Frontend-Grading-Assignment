// src/components/MissingGradeFormPage.js
import { useState } from 'react';
import './MissingGrade.css'; // Import the stylesheet

const MissingGrade = () => {
    const [formData, setFormData] = useState({
        courseName: '',
        instructorName: '',
        expectedGrade: '',
        explanation: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary actions (e.g., send data to backend)
        setIsSubmitted(true);
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <ul className="sidebar-nav">
                    <li className="sidebar-item">🏠 Home</li>
                    <li className="sidebar-item">📚 View Grades</li>
                    <li className="sidebar-item active">📢 Report Missing Grades</li>
                    <li className="sidebar-item">✉️ Contact Us</li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <section className="report-section">
                    <h1 className="main-heading">📢 Report Missing Grades</h1>
                    {isSubmitted ? (
                        <p className="confirmation-message">🎉 Thank you for reporting the missing grade!</p>
                    ) : (
                        <form onSubmit={handleSubmit} className="report-form">
                            <div className="form-group">
                                <label htmlFor="courseName">📚 Course Name</label>
                                <input
                                    type="text"
                                    id="courseName"
                                    name="courseName"
                                    value={formData.courseName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="instructorName">👨‍🏫 Instructor Name</label>
                                <input
                                    type="text"
                                    id="instructorName"
                                    name="instructorName"
                                    value={formData.instructorName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expectedGrade">📈 Expected Grade</label>
                                <input
                                    type="text"
                                    id="expectedGrade"
                                    name="expectedGrade"
                                    value={formData.expectedGrade}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="explanation">✍️ Explanation</label>
                                <textarea
                                    id="explanation"
                                    name="explanation"
                                    value={formData.explanation}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-button">
                                🚀 Report
                            </button>
                        </form>
                    )}
                </section>
            </main>
            <footer />
        </div>
    );
};

export default MissingGrade;
