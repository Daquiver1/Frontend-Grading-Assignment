import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard() {
    const [alert, setAlert] = useState(false);

    const subjects = [
        { id: 1, name: 'DCIT 201', grade: 'A' },
        { id: 2, name: 'DCIT 205', grade: 'B' },
        { id: 3, name: 'DCIT 203', grade: 'C' },
        { id: 4, name: 'DCIT 207', grade: null },
    ];

    const checkMissingGrades = () => {
        const missingGrades = subjects.some((subject) => subject.grade === null);
        setAlert(missingGrades);
    };

    return (
        <div>
            <Navbar />
            <h1>Dashboard</h1>
            <div>
                {subjects.map((subject) => (
                    <div key={subject.id}>
                        <h3>{subject.name}</h3>
                        <p>Grade: {subject.grade ? subject.grade : 'N/A'}</p>
                    </div>
                ))}
            </div>
            {alert && <p>Alert: You have missing grades.</p>}
            <button onClick={checkMissingGrades}>Check Missing Grades</button>
            <Footer />
        </div>
    );
}