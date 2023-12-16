import { useState } from "react";

const HelpSupportPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending support request...");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Help and Support</h1>
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <strong>Question:</strong> How do I report my grades?
          <p>
            <strong>Answer:</strong> To report your grades, log in to your
            account and navigate to the "Grades" section. Click on the "Report
            Grades" button and follow the instructions to submit your grades.
          </p>
        </li>
      </ul>

      <h2>Contact Technical Support</h2>
      {submitted ? (
        <div>
          <p>Thank you for contacting us! We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default HelpSupportPage;
