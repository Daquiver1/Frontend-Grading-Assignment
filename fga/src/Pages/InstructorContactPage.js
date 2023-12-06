import React from 'react';
import '../Styles/PageStyles/InstructorContactPage.css';
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";


const instructorsData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '987-654-3210',
    },
    // Add more instructors as needed
];

const InstructorContactPage = () => {
    const sendEmail = (email) => {
        // Simulated email feature (console log for demonstration purposes)
        console.log(`Sending email to ${email}`);
    };

    return (
        <>
        <Header />
        <SideNav />
        <div className="container">
            <h2>Instructor Contact Information</h2>
            <ul className="instructor-list">
                {instructorsData.map((instructor) => (
                    <li key={instructor.id}>
                        <div className="instructor-info">
                            <h3>{instructor.name}</h3>
                            <p>Email: {instructor.email}</p>
                            <p>Phone: {instructor.phone}</p>
                        </div>
                        <button onClick={() => sendEmail(instructor.email)}>Send Email</button>
                    </li>
                ))}
            </ul>
        </div>
        <Footer />
        </>
    );
};

export default InstructorContactPage;
