import './InstructorContactPage.css';

const InstructorContactPage = () => {
  const instructors = [
    { name: " Agbo Soli Tettey", email: "agbosoli@example.com", phone: "123-456-7890" },
    { name: "Paul Nii", email: "niipaul@example.com", phone: "055-654-3210" },
    { name: "Abdullai Dwumfour", email: "aad@example.com", phone: "055-555-5555" },
    { name: "E. K. S. Eyram", email: "eas@example.com", phone: "024-222-3333" },
    { name: "Bennoit Serbah", email: "bs@example.com", phone: "050-888-7777" },
    { name: "Eugene Adjei", email: "eaadjei@example.com", phone: "024-333-2222" },
    { name: "B. S. Peter", email: "sbpeter@example.com", phone: "029-666-5555" },
  ];

  const sendEmail = (email) => {
    
    alert("Simulated email sent to: " + email);
  };

  return (
    <div className="container">
      <h1>Instructor Contact Page</h1>

      <div className="instructor-list">
        {instructors.map((instructor, index) => (
          <div key={index} className="instructor">
            <h2>{instructor.name}</h2>
            <p>Email: {instructor.email}</p>
            <p>Phone: {instructor.phone}</p>
            <button className="send-email-btn" onClick={() => sendEmail(instructor.email)}>
              Send Email
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorContactPage