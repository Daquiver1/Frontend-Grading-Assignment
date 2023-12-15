// import React from "react";
import NavBar from "../includes/Navigation bar";
import Footer from "../includes/footer";
import React, { useState } from "react";

const Help = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ID, setID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", { name, email, ID, message });

    setName("");
    setEmail("");
    setID("");
    setMessage("");
  };
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h2 className="Heading3">Frequently Asked Questions</h2>
      </div>

      <div className="InstructorContactPage">
        <div>
          <div class="accordion" id="Accordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong>
                    What is the Missing Grade Reporting System, and how does it
                    work?
                  </strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  The Missing Grade Reporting System is a platform designed to
                  assist students in tracking and reporting grades that are not
                  reflected in their academic profiles. It allows students to
                  submit information about missing grades for resolution.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong>
                    What should I do if I have a question about my grade?
                  </strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  If you have a question or concern about your grade, the first
                  step is to contact our instructor. They will be able to review
                  your grade and explain how it was calculated. To contact our
                  instructors, you can contact any of out instructors on our
                  <a href="/Contact">contact page</a>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <strong>How can I access my grades</strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  You can access your grades through the student portal. Log in
                  to the portal using your student ID and pin. Once logged in,
                  navigate your Dashboard to view your grades
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <strong>
                    When should I use the Missing Grade Reporting System?
                  </strong>
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  You should use the system when you notice that a grade is
                  missing from your academic records after a reasonable amount
                  of time has passed since the completion of an assessment or
                  assignment.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <strong>
                    Can I track the status of my reported missing grade?
                  </strong>
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Yes, you can track the status of your reported missing grade
                  through the system. The platform provides regular updates on
                  the progress of resolving reported missing grades.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="Heading2">Technical Support</h1>
          <p className="p2">
            If you are experiencing any technical difficulties, please contact
            our technical support team. We are available to help you with a
            variety of issues, including:
          </p>
          <ul className="ul1">
            <li>Logging into your portal</li>
            <li>Accessing your grades</li>
            <li>Reporting missing grades</li>
            <li>Using online tools and resources</li>
            <li>Contacting an instructor</li>
          </ul>
          <div className="help">
            <div className="auth-form-container">
              <h1>Contact Us</h1>
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="auth-form-container">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label htmlFor="ID">ID:</label>
                  <input
                    type="ID"
                    id="ID"
                    value={ID}
                    onChange={(e) => setID(e.target.value)}
                    required
                  />

                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="Mes">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    placeholder="Do you need any technical support......."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <div className="submit-div">
                  <button className="submit" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Help;
