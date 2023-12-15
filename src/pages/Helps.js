import React, { useState } from 'react';
import './Helps.css';
import Imat from '../images/0.jpeg'

export const Helps = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className='help-section'>
      <div className='help-content'>
        <h2>How Can We Help?</h2>
        <p>We are here to assist you. Please let us know your concerns, and we'll do our best to provide support.</p>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <textarea
              placeholder='Your Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type='submit'>Submit</button>
        </form>
        <img
          src={Imat}
          alt='Image Description'
          className='help-image'
        />
      </div>
    </section>
  );
};