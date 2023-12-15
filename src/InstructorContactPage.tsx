import React from 'react';
import './InstructorContactPage.css'
import 'bootstrap/dist/css/bootstrap.css'


const InstructorContactPage: React.FC = () => {
  // data for instructors
  const instructors = [
    { name: 'Dr. Abena Smith', email: 'abena.smith@university.edu', phone:  ' 555-1234' },
    { name: 'Prof. Ernest Adu', email: 'ernest.adu@university.edu', phone: ' 555-5678' },
    
  ];

  const handleEmailClick = (instructorEmail: string) => {
    alert(`Simulated email to: ${instructorEmail}`);
  };

  return (
    <div className="instructor-contact-page">
      <h2 className="page-title">Instructor Contacts</h2>
      <ul className="instructor-list">
        {instructors.map((instructor, index) => (
          <li key={index} className="instructor-item">
            <div className="instructor-info">
              <span>{instructor.name}</span>
              <span>Email: <a href={`mailto:${instructor.email}`} onClick={() => handleEmailClick(instructor.email)}>{instructor.email}</a></span>
              <span>Phone: {instructor.phone}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorContactPage;