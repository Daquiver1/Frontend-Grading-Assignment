import React, { useState } from 'react';
import Header from "../components/Header"

const ContactPage = () => {

  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    message: '',
  });
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.to && formData.subject && formData.message) {
      reportMissingGrade();
    }
  };

  const reportMissingGrade = () => {
    alert('Email has been submitted successfully. 🎉');

    setFormData({
      to: '',
      subject: '',
      message:'',
    });
  }

  return (
    <div>
      <div>
        <Header />
      </div>
    <div className='missing-grade-form'>
      <h2>Contact Information</h2>
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px' }}>
        <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '10px', padding: '15px', width: '200px' }}>
          <span style={{ fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>Michael Soli</span><br />
          <span style={{ color: '#555' }}>Phone: +233-245-748-1290</span><br />
          <span style={{ color: '#555' }}>Email: michael.soli@gmail.com</span><br />
          <span style={{ color: '#555' }}>Office Room: 201</span>
        </div>

        <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '10px', padding: '15px', width: '200px' }}>
          <span style={{ fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>Prince Boakye-Sekyrehene</span><br />
          <span style={{ color: '#555' }}>Phone: +233-654-233-2210</span><br />
          <span style={{ color: '#555' }}>Email: pbs@gmail.com</span><br />
          <span style={{ color: '#555' }}>Office Room: 202</span>
        </div>

        <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '10px', padding: '15px', width: '200px' }}>
          <span style={{ fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>Mark Attah</span><br />
          <span style={{ color: '#555' }}>Phone: +233-987-654-3210</span><br />
          <span style={{ color: '#555' }}>Email: mark.attah@gmail.com</span><br />
          <span style={{ color: '#555' }}>Office Room: 203</span>
        </div>

        <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '10px', padding: '15px', width: '200px' }}>
          <span style={{ fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>Aziz Dwamena</span><br />
          <span style={{ color: '#555' }}>Phone: +233-887-554-1210</span><br />
          <span style={{ color: '#555' }}>Email: aziz.dwamani@gmail.com</span><br />
          <span style={{ color: '#555' }}>Office Room: 204</span>
        </div>


      </div>
      <br />
      <div>
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        <h5 style={{textDecoration:"underline", fontWeight:"bold", fontSize:"25px"}}>Send an Email</h5>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="to">To:</label>
          <input type="text" id="email" name="to" onChange={handleChange} required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="email" name="subject" onChange={handleChange} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" onChange={handleChange} required></textarea>
           <br />
          <button type="submit">Send Email</button>
          <br />
          <br />
          <br />
        </form>

      </div>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;