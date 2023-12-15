// src/ContactForm.js
import React, { useState } from 'react';

const ContactSupport = () => {
    const [confirmed,setConfirmed] = useState(false)

 const confirm = (e) => {
    e.preventDefault()
    setConfirmed(true)
 }


  return (
    <div className="container mx-auto p-8 mt-8 bg-white rounded shadow-md max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Technical Support</h2>

      <form onSubmit={confirm}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your Name</label>
          <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Your Email</label>
          <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">Your Message</label>
          <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md"></textarea>
        </div>

        <div className="flex items-center">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
          <span className="ml-2 text-gray-600">or call us at: <strong>(233) 123-4567</strong></span>
        </div>
      </form>
    </div>
  );
};

export default ContactSupport;
