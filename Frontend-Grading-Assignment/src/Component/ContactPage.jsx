import { useState } from 'react';
import './ContactPage.css'; // Import the CSS file

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [selectedInstructor, setSelectedInstructor] = useState(null);

    const instructors = [
        {
            id: 1,
            name: 'Dr. Smith',
            email: 'dr.smith@example.com',
        },
        {
            id: 2,
            name: 'Prof. Johnson',
            email: 'prof.johnson@example.com',
        },
        {
            id: 3,
            name: 'Dr. Williams',
            email: 'dr.williams@example.com',
        },
        {
            id: 4,
            name: 'Prof. Davis',
            email: 'prof.davis@example.com',
        },
        {
            id: 5,
            name: 'Dr. Jones',
            email: 'dr.jones@example.com',
        },
        {
            id: 6,
            name: 'Prof. Miller',
            email: 'prof.miller@example.com',
        },
        {
            id: 7,
            name: 'Dr. Wilson',
            email: 'dr.wilson@example.com',
        },
        {
            id: 8,
            name: 'Prof. Brown',
            email: 'prof.brown@example.com',
        },
        {
            id: 9,
            name: 'Dr. Taylor',
            email: 'dr.taylor@example.com',
        },
        {
            id: 10,
            name: 'Prof. Anderson',
            email: 'prof.anderson@example.com',
        },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleInstructorClick = (instructor) => {
        setSelectedInstructor(instructor);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary actions (e.g., send data to backend)
        console.log('Form submitted:', formData);
    };

    const handleSendEmail = () => {
        // Simulate sending email (for demonstration purposes)
        console.log(`Sending email to ${selectedInstructor.name}: ${formData.message}`);
        // Reset state after sending email
        setSelectedInstructor(null);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <ul className="sidebar-nav">
                    <li className="sidebar-item">🏠 Home</li>
                    <li className="sidebar-item">📚 View Grades</li>
                    <li className="sidebar-item active">📢  Missing Grades</li>
                    <li className="sidebar-item">✉️ Grade Report</li>
                    <li className="sidebar-item">✉️ Help&Support</li>
                    <li className="sidebar-item">✉️Dashboard</li>

                </ul>
            </aside>
            <div className="contact-container">

                <header>
                    <h1>Contact Us</h1>
                </header>


                <section className="instructor-section">
                    <h2>Instructors</h2>
                    <ul>
                        {instructors.map((instructor) => (
                            <li key={instructor.id} onClick={() => handleInstructorClick(instructor)}>
                                {instructor.name}
                            </li>
                        ))}
                    </ul>

                    {selectedInstructor && (
                        <div className="email-form">
                            <h3>Contact {selectedInstructor.name}</h3>
                            <p>Email: {selectedInstructor.email}</p>

                            <label htmlFor="emailContent">Email Content:</label>
                            <textarea
                                id="emailContent"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder={`Type your message to ${selectedInstructor.name} here...`}
                            ></textarea>
                            <button onClick={handleSendEmail}>Send Email</button>
                        </div>
                    )}
                </section>
                {/* <section className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>

                        <button type="submit">Submit</button>
                    </form>
                    </section>*/}

                <footer>
                    <p>&copy; 2023 Your Company Name. All rights reserved.</p>
                </footer>
            </div>


        </div>
    );
};

export default ContactPage;


