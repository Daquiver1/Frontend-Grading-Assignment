import React, { useState } from 'react';
import './help.css'

const Tech = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted:', formData);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
    };




  return (
    <div className='contact-form-container'>
      <h2>Contact Technical Support</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='ex: Bless Adeti'
            required
          />
        </div>
        <div>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='example@st.ug.edu.gh'
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder='ex: DCIT205'
            required
          />
        </div>
        <div>
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder='Type here...'
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" className='buttons'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Tech
