import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import VideoHelp from "../components/VideoHelp";

const About = () => {
  // Define inline styles
  const containerStyle = {
    maxWidth: "800px",
    margin: "auto",
  };

  const headingStyle = {
    color: "#333",
  };

  const sectionHeadingStyle = {
    color: "#01FFFF",
  };

  const formStyle = {
    maxWidth: "600px",
    margin: "auto",
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#01FFFF",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  };
  const textHello = {
    color: "#fff",
  };

  return (
    <div>
      <div style={containerStyle}>
        <Navigation />
      </div>
      <div>
        <VideoHelp />
      </div>

      <div style={{ ...containerStyle, marginTop: "5rem" }}>
        <h1 style={{ ...headingStyle, marginBottom: "4rem" }}>
          Help and Support
        </h1>

        <section style={{ marginBottom: "5rem" }}>
          <h2 style={sectionHeadingStyle}>Frequently Asked Questions (FAQ)</h2>
          <ul>
            <li>
              <strong>Q: How can I report a missing grade?</strong>
              <br />
              A: You can report a missing grade on the{" "}
              <a href="/MissingGradeFormPage">Missing Grade Form</a> page.
            </li>
            <li>{/* Add more FAQs as needed */}</li>
          </ul>
        </section>

        <section>
          <h2 style={sectionHeadingStyle}>Contact Technical Support</h2>
          <p style={textHello}>
            If you need further assistance, please fill out the form below, and
            our technical support team will get back to you.
          </p>

          {/* Mock-up contact form */}
          <form style={formStyle}>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="name" style={labelStyle}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                style={{
                  width: "100%",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
                required
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="email" style={labelStyle}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={{
                  width: "100%",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
                required
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="message" style={labelStyle}>
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                style={{
                  width: "100%",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
                required
              ></textarea>
            </div>

            <button type="submit" style={buttonStyle}>
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
