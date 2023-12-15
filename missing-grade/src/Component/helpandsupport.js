// Helpandsupport.jsx
import React, { useState, useEffect, useRef } from "react";
import "./styles/help.css";

const Helpandsupport = () => {
  const [search, setSearch] = useState("");
  const [scrollHeight, setScrollHeight] = useState(0);
  const articleRef = useRef(null);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const calculateHeight = () => {
    const element = articleRef.current;
    const distanceFromTop = element.offsetTop;
    const contentHeight = element.clientHeight;
    const visibleContent = contentHeight - window.innerHeight;
    const start = Math.max(0, window.scrollY - distanceFromTop);
    const percent = (start / visibleContent) * 100;
    setScrollHeight(percent);
  };

  useEffect(() => {
    const element = articleRef.current;
    window.addEventListener("scroll", calculateHeight);

    return () => {
      window.removeEventListener("scroll", calculateHeight);
    };
  }, []);

  return (
    <>
      <div id="the-article" ref={articleRef}>
        {/* Your article content here */}
        <h1>Help and Support</h1>
        <p>
          Welcome to our Help and Support page. Here you can find answers to
          common questions and get in touch with us for technical support.
        </p>

        {/* FAQ Section */}
        <section>
          <h2>FAQ - Grade Reporting</h2>
          <ul>
            <li>
              <strong>Q: How can I view my grades?</strong>
              <p>
                A: You can view your grades by logging into your account and
                navigating to the grades section.
              </p>
            </li>
            <li>
              <strong>Q: When are grades usually updated?</strong>
              <p>
                A: Grades are typically updated at the end of each grading
                period. Check the academic calendar for specific dates.
              </p>
            </li>
            <li>
              <strong>Q: Can I appeal a grade?</strong>
              <p>
                A: Yes, you can submit a grade appeal. Contact the academic
                affairs office for more information.
              </p>
            </li>
            <li>
              <strong>Q: What do I do if I see an error in my grades?</strong>
              <p>
                A: Please contact our support team immediately with details
                about the error, and we will assist you in resolving the issue.
              </p>
            </li>
            <li>
              <strong>Q: How can I calculate my GPA?</strong>
              <p>
                A: GPA is calculated by dividing the total grade points by the
                number of credit hours. Each grade has a corresponding point
                value.
              </p>
            </li>
            <li>
              <strong>Q: Can I request a transcript online?</strong>
              <p>
                A: Yes, you can request a transcript through the online portal.
                Follow the instructions on the transcripts page.
              </p>
            </li>
            <li>
              <strong>Q: Are there any fees for transcript requests?</strong>
              <p>
                A: Transcript fees may apply. Check the transcripts page for
                current fee information.
              </p>
            </li>
            <li>
              <strong>Q: How can I dispute a grade?</strong>
              <p>
                A: If you believe a grade is incorrect, you can file a grade
                dispute. Contact the registrar's office for more details.
              </p>
            </li>
            <li>
              <strong>
                Q: What happens if I miss the grade dispute deadline?
              </strong>
              <p>
                A: Late grade disputes may not be accepted. It's important to
                adhere to the specified deadlines for grade-related matters.
              </p>
            </li>
            <li>
              <strong>Q: Can I access my grades after graduation?</strong>
              <p>
                A: Yes, you should retain access to your student portal even
                after graduation to view and print your academic records.
              </p>
            </li>
          </ul>
        </section>

        {/* Contact Form */}
        <section>
          <h2>Contact Technical Support</h2>
          <form className="form1">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>
      </div>

      <div
        style={{ maxHeight: `${scrollHeight}%` }}
        className="fixed h-screen w-1 hover:bg-gray-200 top-0 left-0 bg-gray-300"
      >
        <div className="h-full bg-green-400"></div>
      </div>
    </>
  );
};

export default Helpandsupport;
