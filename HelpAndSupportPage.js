import React, { useState } from 'react';
import './HelpAndSupportPage.css'

const HelpAndSupportPage = () => {
  const [supportMessage, setSupportMessage] = useState('');

  const handleSupportSubmit = () => {
    // Simulated support submission logic - replace with your actual support submission logic
    console.log('Support Message:', supportMessage);
    alert('Support message submitted. Thank you!');
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Help and Support</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
        <div>
          <p><strong>Q: How do I report a missing grade?</strong></p>
          <p>A: Visit the "Report Missing Grade" page and fill out the form with the necessary details.</p>
        </div>
        {/* Add more FAQs as needed */}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Contact Technical Support</h2>
        <p>If you need further assistance, please fill out the form below:</p>

        <form>
          <div className="mb-4">
            <label htmlFor="supportMessage" className="block text-sm font-bold mb-2">Your Message:</label>
            <textarea
              id="supportMessage"
              name="supportMessage"
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              onChange={(e) => setSupportMessage(e.target.value)}
              value={supportMessage}
            />
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSupportSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpAndSupportPage;
