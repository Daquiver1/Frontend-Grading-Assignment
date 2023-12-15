import React, { useState } from "react"
import "./Hands.css";import "./Hands.css"
import Imago from "../images/illustration-box-desktop.svg"

const Hands = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex == index ? null : index);
  };

  return (
    <>
      <section classNameName='hero'>
        <section className="main-sector">
    
    <main className="wrapper">
        <div className="image__wrapper">
            <div className="image__wrapper_inner">
            <img src={Imago} alt="Imao" />
            </div>
          
        </div>
    <div className="accordion__wrapper">
        <h1 className="title__accordion">FAQ</h1>
        <div className="questions__accordions">
            <div className="question-answer__accordion">
                <div className="question">
                    <h3 className="title__question">
                    What is a student grade report system?
                    </h3>
                    
                </div>
                <div className="answer">This system manages and displays students' academic performance, typically showing grades, courses, and related information.
                </div>
            </div>

            <div className="question-answer__accordion">
                <div className="question">
                    <h3 className="title__question"> What benefit is to students?
                    </h3>
                    
                </div>
                <div className="answer ">It provides a clear overview of their academic progress, helping them track their performance in different courses and make informed decisions about their studies.
                </div>
            </div>

            <div className="question-answer__accordion">
                <div className="question">
                    <h3 className="title__question">
                        How do I reset my password?
                    </h3>
                    
                </div>
                <div className="answer ">
                    Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.
                </div>
            </div>

            <div className="question-answer__accordion">
                <div className="question">
                    <h3 className="title__question">System Usage and Access
                    </h3>
                    
                </div>
                <div className="answer ">Typically, students, instructors, and sometimes parents or guardians might have access, each with different levels of permission.
                </div>
            </div>

            <div className="question-answer__accordion">
                <div className="question">
                    <h3 className="title__question">Are grading policiesexplained in system?
                    </h3>
                    
                </div>
                <div className="answer ">Yes, the system typically provides information about grading scales, criteria, and any relevant policies for students' reference.
                </div>
            </div>

        </div>
    </div>
    </main>
      </section>
      </section>

      <section>
      <div className="container">
      <form action="#">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">First Name</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Last Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Email Address</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Website Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea rows="8" cols="80" required></textarea>
            <br />
            <div className="underline"></div>
            <label htmlFor="">Write your message</label>
            <br />
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
      </section>
    </>
  )
}

const faqData = [
  {
    question: "What is a student grade report system?",
    answer:
      "This system manages and displays students' academic performance, typically showing grades, courses, and related information.",
  },
  {
    question: "What benefit is to students?",
    answer:
      "It provides a clear overview of their academic progress, helping them track their performance in different courses and make informed decisions about their studies.",
  },
]

export default Hands
