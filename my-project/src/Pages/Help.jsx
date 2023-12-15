import React from "react";

const Help = () => {
  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0 8% 0 8%;
            background-color: #f5f5dc;
          }
        `}
      </style>
      <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#01027d",
          }}
        >
          Help and Support
        </h2>

        <section>
          <h3 style={{ color: "#01027d" }}>Frequently Asked Questions (FAQ)</h3>
          <ul>
            <li>
              <strong>Q:</strong> How do I report a missing grade?
              <br />
              <strong>A:</strong> To report a missing grade, navigate to the
              Grades page and use the Missing Grade Report Form.
            </li>
            {/* Add more FAQ items as needed */}
          </ul>
        </section>

        <section style={{ marginTop: "40px" }}>
          <h3 style={{ color: "#01027d" }}>Contact Technical Support</h3>
          <p>
            If you need further assistance, please fill out the form below, and
            our technical support team will get back to you.
          </p>

          <form style={{ maxWidth: "500px", margin: "auto" }}>
            <label htmlFor="name" style={{ color: "#01027d" }}>
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
              required
            />

            <label htmlFor="email" style={{ color: "#01027d" }}>
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
              required
            />

            <label htmlFor="message" style={{ color: "#01027d" }}>
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
              required
            ></textarea>

            <button
              type="submit"
              style={{
                backgroundColor: "#01027d",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Help;
