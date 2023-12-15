import React, { useState }from 'react'
import Home from "../components/Home"
import Footer from "../components/Footer"
import faq1 from "../assets/faq1.jpeg"
import faq2 from "../assets/faq2.jpeg"
import { NavLink } from 'react-router-dom'

const HelpAndSupportPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

    if (formData.name && formData.email && formData.message) {
      reportMissingGrade();
    }
  };

  const reportMissingGrade = () => {
    alert('🚀 Help Form has been submitted successfull! 🎉');

    setFormData({
      name: '',
      email: '',
      message:'',
    });
  }

  return (
    <div>
      <div className='help-page'>
      <div>
        <Home />
      </div>
      <hr />
    <div> <img src={faq1} id='image1' alt="" /></div>
    <br />
    <aside className="faq">
      <h3 style={{textDecoration:"underline", fontWeight:"bold"}}>Frequently Asked Questions.</h3>
      <p className='faq-question'>Q: Can I view my current grades?</p>
      <p className="faq-answer">A: Yes, you can view your current grades on the Dashboard.</p>
      <p className='faq-question'>Q: How can I report a missing grade?</p>
      <p className="faq-answer">A: You can report a missing grade using the missing grade form available on the Navigation menu.</p>
      <p className='faq-question'>Q: How soon should i report a missing grade?</p>
      <p className="faq-answer">A: Report a missing grade as soon as you notice it. Timely reports
      allows us to investigate and address the issue promptly..</p>
      <p className='faq-question'>Q: Can I report missing grades for multiple courses at once?</p>
      <p className="faq-answer">A: Yes, you can submit missing grade reports for multiple courses. Please ensure you provide accurate details for each course.</p>
    </aside>
    <div> <img src={faq2} id='image2' alt="" /></div>
    <br />


    <div>
    <div>
      <form className='contact-form' onSubmit={handleSubmit}>
			<h3 style={{textDecoration:"underline", fontWeight:"bold"}}>Contact Technical Support</h3>
			<label for="name">Name:</label>
			<input type="text" id="email" name="name" onChange={handleChange} required />

			<label for="email">Email:</label>
			<input type="email" id="email" name="email" onChange={handleChange} required />

			<label for="message">Message:</label>
			<textarea id="message" name="message" rows="4"onChange={handleChange} required></textarea>
      <br />
			<button type="button"><NavLink to="/" className="cancel"> Cancel</NavLink></button>
      <button className="cancel">Submit</button>
      <br />
      </form>
      <br />
      <br />
		</div>
    </div>
   </div>
   <div>
        <Footer />
      </div>
    </div>
  )
}

export default HelpAndSupportPage
