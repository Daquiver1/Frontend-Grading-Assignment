import React, { useState } from 'react';

const HelpAndSupportPage = () => {
  const [contactFormData, setContactFormData] = useState({
    name: 'Abdul Haafiz',
    email: 'absulemana003@ug.edu.gh',
    subject: '',
    message: '',
    studentID: '11140508',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submitting the contact form (display confirmation)
    setShowConfirmation(true);
  };

  return (
    <div className="container mt-4">
      <h2 class="display-1">Help and Support</h2>

      {/* First Row: Contact Form for Technical Support */}
      <div className="row">
        <div className="col-md-6">
          <h3>Contact Technical Support</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                value={contactFormData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                value={contactFormData.email}
                onChange={handleInputChange}
                required
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="studentID" className="form-label">
                Student ID
              </label>
              <input
                type="text"
                className="form-control"
                id="studentID"
                value={contactFormData.studentID}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                className="form-control"
                name="subject"
                value={contactFormData.subject}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                id="message"
                className="form-control"
                rows="4"
                name="message"
                value={contactFormData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        {/* Second Row: FAQ Section */}
        <div className="col-md-6">
          <h3>Frequently Asked Questions</h3>
          <div class="accordion" id="faqAccordion">
          <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Q: What computer science programs does the University of Ghana offer?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      A: The University of Ghana offers undergraduate and postgraduate programs in Computer Science, including Bachelor's, Master's, and Ph.D. degrees.      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>

      {/* Confirmation message popup */}
      {showConfirmation && (
        <div className="mt-4 alert alert-success">
          <p>Your message has been submitted. Our technical support team will get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default HelpAndSupportPage;
