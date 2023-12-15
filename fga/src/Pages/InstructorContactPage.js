import React from 'react';
import '../Styles/PageStyles/InstructorContactPage.css';
import Header from "../Components/Header";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";


const instructorsData = [
    {
        id: 1,
        name: 'Mark Attah Mensah',
        email: 'mrmark@st.ug.edu.gh',
        phone: '0247890288',
    },
    {
        id: 2,
        name: 'Micheal Agbo Tetteh Soli',
        email: 'mast@st.ug.edu.gh',
        phone: '0348473939',
    },
    {
        id: 3,
        name: 'Aziz Abdullah Dwumfour',
        email: 'ada@st.ug.edu.gh',
        phone: '0475399949'
    },
    
];

const InstructorContactPage = () => {
    const sendEmail = (email) => {
        // Simulated email feature (console log for demonstration purposes)
        alert(`Sending email to ${email}`);
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
