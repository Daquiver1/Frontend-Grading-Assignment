import React, { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'


function Contact() {
  let selectedInstructor = null;
  let emailContent = '';
  let emailSent = false;

  useEffect(() => {
    // Simulate fetching instructor data
    console.log('Fetching instructor data...');
  }, []);

  const instructors = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Dr. Mensah Smith', email: 'DrMensah.smith@example.com' },
    { id: 3, name: 'Dr. Joseph Smith', email: 'Joe.Smith@example.com' },
  ];

  const handleInstructorSelect = (instructor) => {
    selectedInstructor = instructor;
    emailContent = '';
    emailSent = false;
    // Force re-render (not recommended in a real application)
    forceUpdate();
  };

  const handleEmailChange = (e) => {
    emailContent = e.target.value;
    // Force re-render (not recommended in a real application)
    forceUpdate();
  };

  const handleSendEmail = () => {
    // Simulate sending email (display in console for demonstration)
    console.log(`Simulating sending email to ${selectedInstructor.email}`);
    console.log('Email Content:', emailContent);

    // Set emailSent to true for display purposes
    emailSent = true;
    // Force re-render (not recommended in a real application)
    forceUpdate();
  };

  // Function to force a re-render (not recommended in a real application)
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <>
    <Header></Header>
    <div className="instructor-contact-container">
      <h2 className='topic'>Instructor Contact Page</h2>

      <div className="instructor-list">
        <h3 className='nowt'>List of Instructors</h3>
        <ul>
          {instructors.map((instructor) => (
            <li key={instructor.id}>
              <button onClick={() => handleInstructorSelect(instructor)}>
                {instructor.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedInstructor && (
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>Name: {selectedInstructor.name}</p>
          <p>Email: {selectedInstructor.email}</p>

          <h3>Send Email</h3>
          <textarea
            rows="4"
            cols="50"
            placeholder="Type your email content here..."
            value={emailContent}
            onChange={handleEmailChange}
          ></textarea>
          <br />
          <button className='buttunn' onClick={handleSendEmail}>Send Email</button>

          {emailSent && <p>Email sent successfully!</p>}
        </div>
      )}
    </div>
    <Footer></Footer>
    </>
  );
}


export default Contact
