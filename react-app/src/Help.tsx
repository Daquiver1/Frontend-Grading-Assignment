import './Help.css'
import help from './images/help.webp'
import React, { useState } from 'react';
import Footer from './component/Footer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const HelpAndSupportPage: React.FC = () => {
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log('Contact form submitted:', contactFormData);
    
    setContactFormData({ name: '', email: '', message: '' });
    
  };
 

  return (
    <>
  
    <div>
      <section>
        
      </section>
      <h2 className='headie'>Contact Us</h2>
        <p>If you need further assistance, please use the form below to contact our support team.</p>
        <img className='help-pic' src={help} alt='' />
        
      <section className='help'>
        <form  onSubmit={handleContactFormSubmit}>
          <label className='labs'>
            Your Name:
            <input
              type="text"
              name="name"
              value={contactFormData.name}
              onChange={handleContactFormChange}
              required
            />
          </label>
<br></br>
          <label className='labs'>
            Your Email:
            <input
              type="email"
              name="email"
              value={contactFormData.email}
              onChange={handleContactFormChange}
              required
            />
          </label>
<br></br>
          <label className='labs'>
            Message:
            <textarea
              name="message"
              value={contactFormData.message}
              onChange={handleContactFormChange}
              required
            />
          </label>
          
        </form>
        <button className='button' type="submit">Submit</button>
      </section>
      
    </div>
    <Footer/>
    </>
  );
};

export default HelpAndSupportPage;