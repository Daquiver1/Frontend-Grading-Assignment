import React from 'react';

function InstructorContactPage() {
 // Replace this with actual data
 const instructors = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Doe', email: 'jane.doe@example.com' },
    // ...
 ];

 const handleEmail = (email) => {
    alert(`Email sent to ${email}!`);
 };

 return (
    <div>
      <h1>Instructor Contact</h1>
      {instructors.map((instructor, index) => (
        <div key={index}>
          <p>{instructor.name}: {instructor.email}</p>
          <button onClick={() => handleEmail(instructor.email)}>Email</button>
        </div>
      ))}
    </div>
 );
}

export default InstructorContactPage;