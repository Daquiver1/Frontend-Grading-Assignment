import React, { useState } from 'react';

const InstructorContact = () => {
    // Sample data for instructors
    const instructors = [
        { id: 1, name: 'Abdul Aziz', email: 'abdulaziz20@gmail.com' },
        { id: 2, name: 'Micheal Soli', email: 'solimicheal@gmail.com' },
        // Add more instructors as needed
    ];

    const [selectedInstructor, setSelectedInstructor] = useState(null);
    const [emailSubject, setEmailSubject] = useState('');
    const [emailBody, setEmailBody] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleInstructorSelect = (instructor) => {
        setSelectedInstructor(instructor);
        setEmailSubject(`Regarding ${instructor.name}'s Course`);
        setEmailBody(`Dear ${instructor.name},\n\nI have a question about your course. Can we schedule a meeting?\n\nRegards,\n[Your Name]`);
        setIsEmailSent(false);
    };

    const handleEmailSend = () => {
        // Here you can add logic to handle the email send simulation.
        setIsEmailSent(true);
    };

    return (
        <section style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>
            <h2>Instructor Contact</h2>

            <div>
                <h3>List of Instructors</h3>
                <ul style={{ listStyle: 'none', padding: '0' }}>
                    {instructors.map((instructor) => (
                        <li key={instructor.id} style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleInstructorSelect(instructor)}>
                            {instructor.name} - {instructor.email}
                        </li>
                    ))}
                </ul>
            </div>

            {selectedInstructor && (
                <div>
                    <h3>Contact {selectedInstructor.name}</h3>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Email Subject:</label>
                        <input type="text" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} readOnly />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Email Body:</label>
                        <textarea value={emailBody} onChange={(e) => setEmailBody(e.target.value)} readOnly />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button type="button" onClick={handleEmailSend} disabled={isEmailSent}>
                            {isEmailSent ? 'Email Sent!' : 'Send Email'}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default InstructorContact;
