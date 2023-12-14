import React,{useState} from 'react';
import './Help.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

const faqs = [
  { question: 'How can I access my grades?', answer: 'You can access your grades through the student portal. If you have trouble logging in, please contact technical support.' },
  { question:' What is the grading scale?', answer: 'The grading scale is as follows: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60).'},
  { question: 'What should I do if I think there is an error in my grade?' ,answer: "If you believe there is an error in your grade, please contact your instructor directly."}
];

const HelpSupport = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (event) => {
    setContactForm({ ...contactForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Navbar></Navbar>
    <div className="help-support">
      <h1 className='help-header'>Help & Support</h1>
      <h2 help-subhead>FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
      <h2 className='call-support'>Contact Us for Technical Support</h2>
      <form className='help-form' onSubmit={handleSubmit}>
        <label className='help-label'>
          Name:
          <input type="text" name="name" value={contactForm.name} onChange={handleInputChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={contactForm.email} onChange={handleInputChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={contactForm.message} onChange={handleInputChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
        <Footer></Footer>
    </div>
  );
}

export default HelpSupport;
