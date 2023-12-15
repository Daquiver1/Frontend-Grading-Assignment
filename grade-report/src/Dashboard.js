import Nav from './Nav';
import {useState} from 'react';

const Dashboard = () => {
    const [grades, setGrades] = useState([
        {id: 1, course: "DCIT 201" , grade: "A" },
        {id: 2, course: "DCIT 203" , grade: "A" },
        {id: 3, course: "DCIT 205" , grade: "A" },
        {id: 4, course: "DCIT 207" , grade: "A" },
        {id: 5,course: "MATH 223" , grade: "A" },
        {id: 6,course: "CBAS 210" , grade: "A" }
    ]);

    return (
        <main className="dashboard-body">
            <Nav />
            <div className="dashboard-container">
                <h3>Current Grades</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Course</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.id}</td>
                                <td>{entry.course}</td>
                                <td>{entry.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Dashboard