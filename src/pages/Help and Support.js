import React from 'react';
import Navbar from '../components/Navbar';
import Landing from './footer';
import './Help.css'


export const Help = () => {
  return (
    <>
    <Navbar></Navbar>
      <h1>Help And Support</h1>

      {/* FAQ Section */}
      <div>
        <h2>FAQ</h2>
        <p>Q: [How to location result report?]</p>
        <p>A: [On the navigation bar select Grade Report]</p>
        <p>Q: [How go about missing grade]</p>
        <p>A: [On the navigation bar select "Missing Grade" and fill the neccessary details]</p>
        {/* Add more Q&A pairs as needed */}
      </div>

      {/* Contact Form */}
      <div>
        <h2 style={{textAlign:"center"}}>Contact Form</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Landing />
    </>
  );
};
