import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../pages/Styles.css'


function InstructorCard({ name, email, phone }) {
 const handleEmail = () => {
    window.location.href = `mailto:${email}`;
 };

 return (
    <div>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button onClick={handleEmail}>Email</button>
    </div>
 );
}

export default function InstructorContactPage() {
 const instructors = [
    { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '234-567-8901' },
    { name: 'Francis Edwards', email: 'francis.edwards@example.com', phone: '234-299-8965' },
    { name: 'Jack Thompson', email: 'jack.thompson@example.com', phone: '235-966-2574' },
    { name: 'Charles Billing', email: 'charles.billing@example.com', phone: '234-528-6382' },
   
 ];

 return (
    <section>
      <Navbar />
      <u><h1>Instructor Contact Information</h1></u>
      {instructors.map((instructor, index) => (
        <InstructorCard key={index} {...instructor} />
      ))}
      <Footer />
    </section>
 );
}