import { useState } from 'react';
import './HelpAndSupport.css'; // Import the CSS file

const HelpAndSupport = () => {
    const [faqData] = useState([
        {
            id: 1,
            question: 'How do I report a missing grade?',
            answer: 'You can report a missing grade on the "Missing Grade Reporting" page.',
        },
        {
            id: 2,
            question: 'Can I contact my instructor directly?',
            answer: 'Yes, you can contact your instructor through the "View Grades" page.',
        },
        {
            id: 3,
            question: 'What should I do if I forgot my password?',
            answer: 'You can reset your password on the login page by clicking on the "Forgot Password" link.',
        },
        {
            id: 4,
            question: 'How often are grades updated?',
            answer: 'Grades are typically updated by instructors at the end of each assignment or examination period.',
        },
        {
            id: 5,
            question: 'Can I appeal a grade?',
            answer: 'Yes, you can appeal a grade by contacting the academic administration and following the appeal process.',
        },
        {
            id: 6,
            question: 'Is there a mobile app for grade tracking?',
            answer: 'Currently, we do not have a dedicated mobile app. However, you can access our website from your mobile browser.',
        },
        {
            id: 7,
            question: 'How do I download a copy of my transcript?',
            answer: 'You can download a copy of your transcript from the "Transcript" section of your profile.',
        },
        // Add more FAQ items as needed
    ]);

    const [supportFormData, setSupportFormData] = useState({
        name: '',
        email: '',
        issue: '',
    });

    const handleSupportInputChange = (e) => {
        const { name, value } = e.target;
        setSupportFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSupportSubmit = (e) => {
        e.preventDefault();
        // Simulate sending support request (for demonstration purposes)
        console.log('Support request submitted:', supportFormData);
        // Reset form data after submission
        setSupportFormData({
            name: '',
            email: '',
            issue: '',
        });
    };

    return (
        <div className="help-and-support-container">
            <header>
                <h1>Help and Support</h1>
                <p>Your go-to resource for assistance and information.</p>
            </header>

            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <ul>
                    {faqData.map((item) => (
                        <li key={item.id}>
                            <strong>{item.question}</strong>
                            <p>{item.answer}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="contact-form">
                <h2>Contact Technical Support</h2>
                <form onSubmit={handleSupportSubmit}>
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={supportFormData.name}
                        onChange={handleSupportInputChange}
                        required
                        placeholder="Enter your name"
                    />

                    <label htmlFor="email">Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={supportFormData.email}
                        onChange={handleSupportInputChange}
                        required
                        placeholder="Enter your email"
                    />

                    <label htmlFor="issue">Describe Your Issue:</label>
                    <textarea
                        id="issue"
                        name="issue"
                        value={supportFormData.issue}
                        onChange={handleSupportInputChange}
                        required
                        placeholder="Describe your issue"
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </section>

            <footer>
                <p>&copy; 2023 Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HelpAndSupport;

