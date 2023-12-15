import React, { useState } from 'react';

function Help()  {
   const faqs = [
    {
        id: 1,
        question: 'How do I reset my password?',
        answer: 'You can reset your password by going to the settings page...',
      },
      {
        id: 2,
        question: 'Where can I find my grades?',
        answer: 'You can view your grades in the Dashboard section...',
      },
      {
        id: 3,
        question: 'How do I contact support?',
        answer: 'You can contact support via email at support@example.com or by filling out the form on this page.',
      },
      {
        id: 4,
        question: 'Can I change my username?',
        answer: 'Unfortunately, the username cannot be changed once created. Please contact support for further assistance.',
      },

  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Submitted:', { name, email, message });
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(true);
    }
  };

  const validateForm = () => {
    let formValid = true;
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
      formValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      formValid = false;
    } else if (!isValidEmail(email)) {
      errors.email = 'Email is invalid';
      formValid = false;
    }

    if (!message.trim()) {
      errors.message = 'Message is required';
      formValid = false;
    }

    setErrors(errors);
    return formValid;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
    <h1 className='text-center'>Help and Support</h1>
    
    <div className="row">
      <div className="col-md-6">
        <h4 style={{ color: 'blue', textAlign:'center' }}>Frequently Asked Questions (FAQs)</h4>
        <ul>
          {faqs.map((faq) => (
            <li key={faq.id}>
              <h5>{faq.question}</h5>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mt-5">
         <div className="row justify-content-center">
        <div className="col-md-6">
      <div className='card'>
      <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{ height: '50%' }}>
        <h2 style={{ textAlign:'center' }}r>Contact Support</h2>
          {submitted ? (
            <p style={{ color: 'green' }}>Thank you for your message! We'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleFormSubmit}  className='text-center w-75'>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Name:</label>
                <input type="text" className="form-control form-group w-50%" id="nameInput" value={name} onChange={(e) => setName(e.target.value)}/>
                {errors.name && <p className="error" style={{ color: 'red' }}>{errors.name}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email:</label>
                <input type="text" className="form-control form-group w-50%" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {errors.email && <p className="error" style={{ color: 'red' }}>{errors.email}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="messageInput" className="form-label">Message:</label>
                <textarea
                  className="form-control form-group w-50%" id="messageInput" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                 {errors.message && <p className="error" style={{ color: 'red' }}>{errors.message}</p>}
              </div>
             <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary"style={{ width: '50%' }}>
              Submit
                  </button>
                </div>
            </form>
          )}
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
  );
};

export default Help;