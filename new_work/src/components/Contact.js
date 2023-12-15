import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <p>If you have any questions or concerns, feel free to reach out to us:</p>

      <div className="row">
        <div className="col-md-6">
          <h2>Email</h2>
          <p>Email: contact@gradesupport.com</p>
        </div>
        <div className="col-md-6">
          <h2>Phone</h2>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>

      <div className="mt-4">
        <h2>Contact Form</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
