import { useState } from 'react';
import React from 'react';
import './LoginPage.css';
import Header from './Header.js';
import Footer from './Footer.js';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    studentID: '',
    studentPin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send an email, log the message, etc.)
    console.log('Form submitted:', formData);
    setFormData({ studentID: '', studentPin: '' });
  };
  return (
    <div className="login-page">
      <Header />
      <div className="page-body">
        <div className="welcome">
          Login
        </div>
        <section>
          <form className='login-form'>
            <div className='login-text-box'>
              <input 
              className='student-id' 
              type="number" 
              placeholder='Student ID'
              id="studentID"
              name="studentID"
              value={formData.studentID} 
              onChange={handleChange}
              required
              />

              <input className='pin'
              type="number" 
              placeholder='Pin'
              id="studentPin"
              name="studentPin"
              value={formData.studentPin}
              onChange={handleChange}
              required
              />

              <button className='login-button' type='submit' onSubmit={handleSubmit}>Login</button>
            </div>
          </form>
        </section>
      </div>
      <Footer/>
    </div>
  );
}



export default LoginPage;