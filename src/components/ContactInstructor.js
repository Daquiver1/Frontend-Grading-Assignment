import { useState } from "react";
import "../components-css/ContactInstructor.css"
const instructorsData = [
    {
      id: 1,
      name: 'Michael Forson',
      email: 'michael.forson@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
    },
]
const ContactInstructor = () => {
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [instructionEmail, setInstructorEmail] = useState("")
    const [name, setName] = useState("")

    const handleSendMessage = () => {
        if(message !== "" && subject !== "" && name !== "" && instructionEmail !== ""){
            alert(`Message sent to ${instructionEmail}`);
            setMessage('');
            setSubject('');
            setInstructorEmail("")
            setName("")
        }
    };

  return (
    <div className="ContactIntructor">
      <div className="container">
      <header>
        <h1>Instructor Contact</h1>
      </header>

      <div className="section">
        <h2>Available Instructors:</h2>
        <ul>
          {instructorsData.map((instructor) => (
            <li key={instructor.id}>
              {instructor.name} - {instructor.email}
            </li>
          ))}
        </ul>
      </div>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={(e) => {
            setName(e.target.value)
        }} name="name" required />

        <label htmlFor="email">Instructor Email:</label>
        <input type="email" value={instructionEmail} onChange={(e) => {
            setInstructorEmail(e.target.value)
        }} name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" value={subject} onChange={(e) => {
            setSubject(e.target.value)
        }} name="subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => {
            setMessage(e.target.value)
        }} name="message" rows="4" required></textarea>

        <button onClick={handleSendMessage}>Send Message</button>
      </form>
    </div>
    </div>
  );
}
 
export default ContactInstructor;