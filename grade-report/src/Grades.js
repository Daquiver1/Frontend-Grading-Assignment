import Nav from './Nav';
import {useState} from 'react';

const Grades = () => {
    const [grades, setGrades] = useState([
        {course: "DCIT 201" , grade: "A" },
        {course: "DCIT 203" , grade: "A" },
        {course: "DCIT 205" , grade: "A" },
        {course: "DCIT 207" , grade: "A" },
        {course: "MATH 223" , grade: "A" },
        {course: "CBAS 210" , grade: "A" }
    ]);

    return (
        <>
        <Nav />
        <div>
        <h3>Grades</h3>
        <table>
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {grades.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.course}</td>
                        <td>{entry.grade}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </>
    )
}
export default Grades