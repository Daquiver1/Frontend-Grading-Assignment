import React from 'react';
import MyNavbar from './Nav';

const HelpAndSupport = () => {
  return (
    <div>
      <MyNavbar />
    <div className="container mt-5 text-white">
      <h1>Help and Support</h1>

      <div className="mt-5">
        <h2>FAQ - Grade Reporting</h2>
        <div>
          <h4>Q: How do I check my grades?</h4>
          <p>A: You can check your grades by logging into your account and navigating to the "Grade Report" section.</p>
        </div>
        <div>
          <h4>Q: When are grades typically released?</h4>
          <p>A: Grades are usually released within one week after the end of the semester.</p>
        </div>
        {/* Add more FAQ items as needed */}
      </div>

      <div className="mt-5">
        <h2>Contact Technical Support</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
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
    </div>
  );
};

export default HelpAndSupport;
