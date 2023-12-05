import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div>
      <Navigation />

      <div className="container mt-5">
        <h1 className="mb-4">Help and Support</h1>

        <section className="mb-5">
          <h2>Frequently Asked Questions (FAQ)</h2>
          <ul>
            <li>
              <strong>Q: How can I report a missing grade?</strong>
              <br />
              A: You can report a missing grade on the{" "}
              <a href="/missing-grade-form">Missing Grade Form</a> page.
            </li>
            <li>{/* Add more FAQs as needed */}</li>
          </ul>
        </section>

        <section>
          <h2>Contact Technical Support</h2>
          <p>
            If you need further assistance, please fill out the form below, and
            our technical support team will get back to you.
          </p>

          {/* Mock-up contact form */}
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-control"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
