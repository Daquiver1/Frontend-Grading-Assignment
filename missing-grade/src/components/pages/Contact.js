import React, { useState } from 'react';

function Contact () {
  const [instructors, setInstructors] = useState([
    { id: 1, name: 'Dr Kweku Ofori', email: 'kofori@ug.edu.gh', message: '' },
    { id: 2, name: 'Dr Solomon Adjei', email: 'sadjei@ug.edu.gh', message: '' },
    { id: 3, name: 'Ophelia Kporha', email: 'ophelk@ug.edu.gh', message: '' },
    { id: 4, name: 'Dr Jane Smith', email: 'jsmith@ug.edu.gh', message: '' },
    { id: 5, name: 'John Coffie', email: 'john@ug.edu.gh', message: '' },
    { id: 6, name: 'Benedicta Johnson', email: 'benej@ug.edu.gh', message: '' },
    
    
  ]);

  const handleInputChange = (id, value) => {
    const updatedInstructors = instructors.map((instructor) =>
      instructor.id === id ? { ...instructor, message: value } : instructor
    );
    setInstructors(updatedInstructors);
  };

  const sendEmail = (email, message) => {
    alert(`Sending email to ${email} with message: ${message}`);
  };

  const textareaStyle = {
    width: '100%',
    resize: 'vertical',
  };

  return (
    <div className='text-center'>
      <h1>Instructor Contact Page</h1>
      <p>Contact your instructors for assistance:</p>
      
      <table className='table'>
        <thead>
          <tr>
            <th>Instructor Name</th>
            <th>Email</th>
            <th>Message</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor.id}>
              <td>{instructor.name}</td>
              <td>{instructor.email}</td>
              <td>
                <textarea
                  value={instructor.message}
                  onChange={(e) => handleInputChange(instructor.id, e.target.value)}
                  rows={1}
                  cols={26}
                  style={textareaStyle}
                />
              </td>
              <td>
                <button onClick={() => sendEmail(instructor.email, instructor.message)} className="btn btn-primary">
                  Send
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    
  );
};

export default Contact;
