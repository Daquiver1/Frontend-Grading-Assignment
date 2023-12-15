import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Faq = () => {
 return (
    <div className="mb-4">
      <h3 className="text-xl font-bold mb-2">How can I access my grades?</h3>
      <p className="mb-2">
        To access your grades, simply log in to your account on our platform.
        Once logged in, navigate to the 'Grades' section in the navigation bar.
      </p>

      <h3 className="text-xl font-bold mb-2">What is the reporting timeframe for grades?</h3>
      <p className="mb-2">
        The reporting timeframe for grades depends on your institution.
        Please check with your educational institution for more details.
      </p>
    </div>
 );
};

const ContactForm = () => {
 const [formData, setFormData] = useState({ name: '', email: '', message: '' });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sending a simulated email...\n\n${formData.name}\n${formData.email}\n\n${formData.message}`);
 };

 return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <label className="block mb-2">Name</label>
      <input className="border border-gray-300 p-2 w-full mb-4" type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label className="block mb-2">Email</label>
      <input className="border border-gray-300 p-2 w-full mb-4" type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label className="block mb-2">Message</label>
      <textarea className="border border-gray-300 p-2 w-full mb-4" name="message" value={formData.message} onChange={handleChange} required />

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Send Message
      </button>
    </form>
 );
};

const HelpAndSupportPage = () => {
 return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold mb-4">Help and Support</h1>
      <Faq />
      <ContactForm />
    </div>
 );
};

export default HelpAndSupportPage;