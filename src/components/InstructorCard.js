import React from "react";
import { useState } from "react";

const InstructorCard = ({ name, email, mobile, picture }) => {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSendEmail = () => {
    // Simulate sending the email, display success message and reset form
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setMessage("");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        className="w-24 h-24 rounded-full mb-4 mx-auto"
        src={picture}
        alt={name}
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="mb-2 text-sm text-gray-500">{email}</p>
      <p className="mb-2 text-sm text-gray-500">{mobile}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        onClick={handleSendEmail}
      >
        Send Email
      </button>
      {sent && (
        <div className="mt-4 text-green-500">
          Email sent! You can view the simulated message below.
        </div>
      )}
      {sent && (
        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <p>To:</p>
          <p>{email}</p>
          <p>Message:</p>
          <p>{message}</p>
        </div>
      )}
      {!sent && (
        <textarea
          className="mt-4 border rounded-lg p-2"
          placeholder="Enter your message here..."
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      )}
    </div>
  );
};

export default InstructorCard