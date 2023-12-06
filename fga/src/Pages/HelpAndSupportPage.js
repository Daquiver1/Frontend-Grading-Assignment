import React, { useState } from 'react';
import './HelpAndSupportPage.css';
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";


const faqsData = [
    {
        id: 1,
        question: 'How do I reset my password?',
        answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page.',
    },
    {
        id: 2,
        question: 'How can I contact support?',
        answer: 'You can contact support by filling out the contact form on this page or by sending an email to support@example.com.',
    },
    // Add more FAQs as needed
];

const HelpAndSupportPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Simulated support form submission (console log for demonstration purposes)
        console.log('Support Form Submitted:', formData);
    };

    return (
        <>
        <Header />
        <SideNav />
        <div className="container">
            <h2>Help and Support</h2>

            <section className="faqs-section">
                <h3>Frequently Asked Questions</h3>
                <ul className="faqs-list">
                    {faqsData.map((faq) => (
                        <li key={faq.id}>
                            <div className="faq">
                                <h4>{faq.question}</h4>
                                <p>{faq.answer}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="contact-form-section">
                <h3>Contact Support</h3>
                <form id="supportForm" onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                    ></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </section>
        </div>
        <Footer />
        </>
    );
};

export default HelpAndSupportPage;
