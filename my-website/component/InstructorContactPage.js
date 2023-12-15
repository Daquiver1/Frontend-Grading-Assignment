// src/components/InstructorContactPage.js
import React from 'react';

function InstructorContactPage() {
    // Mock data (replace with actual data from API or state management)
    const instructors = [
        { name: 'John Doe', email: 'john.doe@example.com' },
        // Add more instructors...
    ];

    const sendSimulatedEmail = (instructor) => {
        // Simulated email sending logic (replace with actual email sending logic)
        alert(`Simulated email sent to ${instructor.name}`);
    };

    return (
        <div>
            <h2>Instructor Contact Page</h2>
            <ul>
                {instructors.map((instructor, index) => (
                    <li key={index}>
                        {instructor.name} - {instructor.email}
                        <button onClick={() => sendSimulatedEmail(instructor)}>Send Email</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InstructorContactPage;
