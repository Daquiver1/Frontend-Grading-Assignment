
import React from 'react';
import Layout from './Layout';
import './InstructorContact.css';

const instructors = [
  { name: 'Dr. Michael Soli', email: 'dr.solimike@dcs.ug.edu' },
  { name: 'Prof. Benoit Sebha', email: 'prof.johnson@dcs.ug.edu' },
  { name: 'Dr Okomfo Anokye', email: 'dranokye@dcs.ug.edu' },
  { name: 'Dr Aziz ABdulai', email: 'drabdulaidwumk@dcs.ug.edu' },
 
 
];

class InstructorContactPage extends React.Component {
  sendEmail = (instructorName) => {
   
    console.log(`Sending email to ${instructorName}`);
  };

  render() {
    return (
      <Layout>
        <div className="instructor-contact-container">
          <h2>Instructor Contact</h2>

          <ul>
            {instructors.map((instructor, index) => (
              <li key={index}>
                <strong>{instructor.name}</strong>
                <p>Email: {instructor.email}</p>
                <button onClick={() => this.sendEmail(instructor.name)}>Send Email</button>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default InstructorContactPage;
