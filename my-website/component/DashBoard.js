// src/components/DashboardPage.js
import React from 'react';

function DashBoard() {
    // Mock data (replace with actual data from API or state management)
    const currentGrades = [
        { course: 'Math', grade: 'A' },
        { course: 'Science', grade: 'B' },
        // Add more courses...
    ];

    return (
        <div>
            <h2>Dashboard Page</h2>
            <div>
                <h3>Current Grades</h3>
                <ul>
                    {currentGrades.map((item, index) => (
                        <li key={index}>
                            {item.course}: {item.grade}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Alerts</h3>
                {/* Add logic for displaying alerts or notifications */}
                <p>No missing grades</p>
            </div>
        </div>
    );
}

export default DashBoard;