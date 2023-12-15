import { useState } from "react";
import "../components-css/MissingGrade.css"

const missingGrages = [
    {
      id: 1,
      course: 'Critical Thinking And Practical Reasoning',
      code: "UGRC150"
    },
    {
      id: 2,
      course: 'Introduction to Statistic and Probability I',
      code: "STAT111"
    }

]

const MissingGrade = () => {
    const [course, setCourse] = useState('');
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');

    const handleReportMissingGrade = () => {
        // Implement your logic to report missing grade here
        alert(`Missing grade reported for ${course} - ${code}: ${message}`);
        // You may also want to reset the form fields after reporting
        setCourse('');
        setCode('');
        setMessage('');
    };
    return (
        <>
            <div className="MissingGrade">
                <div className="container">
                    <header>
                        <h1>Report Missing</h1>
                    </header>
                    
                    <div className="section">
                        <h2>Missing Grades:</h2>
                        <ul>
                            {missingGrages.map((missing) => (
                                <li key={missing.id}>
                                    {missing.course} - {missing.code}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="section">
                        <form>
                        <label htmlFor="course">Course:</label>
                        <input
                            type="text"
                            id="course"
                            name="course"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            required
                        />

                        <label htmlFor="code">Course Code:</label>
                        <input
                            type="text"
                            id="code"
                            name="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                        />

                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>

                        <button type="button" onClick={handleReportMissingGrade}>
                            Report Missing Grade
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default MissingGrade;