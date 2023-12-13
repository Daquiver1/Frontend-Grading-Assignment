// src/components/EmailModal.js
import React, { useState } from 'react';

const EmailModal = ({ instructorEmail, onClose }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

  
    const emailDetails = {
      to: instructorEmail,
      subject,
      message,
    };


    console.log('Sending email:', emailDetails);
    

    
    onClose();

    setTimeout(() => {
        console.log('Sending email:', emailDetails);

        setSuccessMessage('Email successfully sent!');

     
        setSubject('');
        setMessage('');
    }, 1000);

    setTimeout(() => {
        onClose();
        setSuccessMessage('');
    }, 3000);
  };


   

   

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Send Email to Instructor</h2>
        {successMessage && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 p-2 rounded">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Subject:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter email subject"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 border rounded text-gray-600"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-yellow-500 text-white rounded">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;