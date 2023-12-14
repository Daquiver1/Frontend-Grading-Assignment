import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const InstructorPage = () => {
  const instructors = [
    {
      name: 'Christian Wemegah Edem',
      email: 'christian.edem@example.com',
      officeHours: 'Monday and Wednesday, 2:00 PM - 4:00 PM',
    },
    {
      name: 'Jessica Asamoah',
      email: 'jessica.asamoah@example.com',
      officeHours: 'Tuesday and Thursday, 10:00 AM - 12:00 PM',
    },
    {
      name: 'Michael Abroakwah',
      email: 'michael.abrokwah@example.com',
      officeHours: 'Friday, 3:00 PM - 5:00 PM',
    },
    {
      name: 'Sarah Adjei',
      email: 'sarah.adjei@example.com',
      officeHours: 'Monday and Thursday, 1:00 PM - 3:00 PM',
    },
    {
      name: 'John Agyemang',
      email: 'john.agyemang@example.com',
      officeHours: 'Wednesday, 10:00 AM - 12:00 PM',
    },
    {
      name: 'Prisca Akorsu',
      email: 'prisca.akorsu@example.com',
      officeHours: 'Tuesday and Friday, 2:00 PM - 4:00 PM',
    },
  ];

  const handleGradeIssues = (instructorName) => {
    console.log(`Handling grade issues with students as ${instructorName}...`);
   
  };


    
  
    return (
      <div>
        <Navbar />
        <div className="InstructorPage">
          <h1 className="instructor-heading" style={{ color: '#35d8f1' }}>
            Instructor Page
          </h1>
  
          <div className="instruction-content">
            {instructors.map((instructor, index) => (
              <div key={index} className="profile-box" style={{ border: '1px solid #35d8f1', padding: '15px', marginBottom: '20px' }}>
                <h2 style={{ color: '#35d8f1' }}>Profile - {instructor.name}</h2>
                <p>
                  Welcome, {instructor.name}! This page is designed to help you address and communicate with students about any grade-related issues.
                </p>
                <p>
                  <strong>Email:</strong> <a href={`mailto:${instructor.email}`}>{instructor.email}</a>
                </p>
                <p>
                  <strong>Office Hours:</strong> {instructor.officeHours}
                </p>
                <button
                  onClick={() => handleGradeIssues(instructor.name)}
                  style={{ backgroundColor: '#35d8f1', color: 'white', border: 'none', padding: '8px', cursor: 'pointer' }}
                >
                  Handle Grade Issues
                </button>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default InstructorPage;
  