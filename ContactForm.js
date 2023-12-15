import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='contact-tech-support'>
        <form className='technical-support-form'onSubmit={handleSubmit}>
            <div className='tech-text-box'>
                <h2 className='faq-head'>Contact Technical Support</h2>
                <label htmlFor="name">Name:</label>
                    <input
                    className='textbox'
                    placeholder='Enter Student ID'
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                    className='textbox'
                    placeholder='Enter Student Email'
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                    className='textarea'
                    placeholder='Enter Message'
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
            </div>
            <button className='submit-button'type="submit">Submit</button>
        </form>
    </div>
  );
};

export default ContactForm;