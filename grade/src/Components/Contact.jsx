// AppContact.js

import React from 'react';
import './Contact.css';

const AppContact = () => {
  return (
    <div className='contact'>
      <div className="container">
        <div className="form-container">
          <form>
            <h1><span>Contact</span> Us</h1>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder='Enter your name' />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Enter your email' />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows='10' placeholder='Enter your message'></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppContact;
