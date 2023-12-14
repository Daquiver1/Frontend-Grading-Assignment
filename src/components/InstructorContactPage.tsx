import { useState } from "react";

function InstructorContactPage() {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const instructors = [
    { name: "Mr.Samuel Mike", email: "samuelmike02@gmail.com" },
    { name: "Mr.Daniel Soley", email: "danielsoley11@gmail.com" },
    { name: "Mr.Kelvin Sarpong", email: "kelvinsarpong03@gmail.com" },
    { name: "Ms.Jane Adams", email: "janeadams32@gmail.com" },
    { name: "Mr.James Asante", email: "jamesasante13@gmail.com" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated email sending logic
    console.log("Sending email...");
    console.log("Recipient:", recipient);
    console.log("Subject:", subject);
    console.log("Message:", message);
    // Reset form fields
    setRecipient("");
    setSubject("");
    setMessage("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Contact Page</h1>
      <br />
      <div>
        <h2>Instructors</h2>
        <ul>
          {instructors.map((instructor, index) => (
            <li key={index}>
              {instructor.name} - {instructor.email}
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        <h2>Send Email</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="recipient">Recipient:</label>
            <input
              type="text"
              id="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default InstructorContactPage;
