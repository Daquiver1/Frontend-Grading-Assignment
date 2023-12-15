import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components-css/Faq.css"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
    return (
        <>
            <div className="Faq">
                <div className="pageTitle">
                    Questions & Answers
                </div>
                <div className="question-answers">
                    <div className="question q-one">
                        <div className="question-asked" onClick={()=> {
                        document.querySelector(".q-one").classList.toggle("open")
                    }}>
                            <span>How can I contact my instructors through the student report system?</span>
                            <FontAwesomeIcon className="caretDown" icon={faCaretDown}/>
                        </div>
                        <div className="answer">
                            <span>
                            To contact your instructors, navigate to the "Instructor Contact" 
                            page on the student report system. Select the specific instructor 
                            you want to reach out to and use the provided form to send them a message. 
                            Make sure to provide accurate details in your message for better assistance.
                            </span>
                        </div>
                    </div>
                    <div className="question q-two">
                        <div className="question-asked" onClick={()=> {
                        document.querySelector(".q-two").classList.toggle("open")
                    }}>
                            <span>What information should I include when contacting an instructor?</span>
                            <FontAwesomeIcon className="caretDown" icon={faCaretDown}/>
                        </div>
                        <div className="answer">
                            <span>
                            When contacting an instructor, include your full name, course details, 
                            and a clear and concise message regarding your inquiry. Providing specific 
                            information will help instructors address your concerns more effectively.
                            </span>
                        </div>
                    </div>
                    <div className="question q-three">
                        <div className="question-asked" onClick={()=> {
                        document.querySelector(".q-three").classList.toggle("open")
                    }}>
                            <span>How do I report a missing grade in the student report system?</span>
                            <FontAwesomeIcon className="caretDown" icon={faCaretDown}/>
                        </div>
                        <div className="answer">
                            <span>
                            To report a missing grade, go to the "Missing Grade Report" page. 
                            Fill out the form with details such as the course name, assignment, 
                            and a brief explanation of the issue. Our system will then forward your 
                            report to the relevant department for investigation.
                            </span>
                        </div>
                    </div>
                    <div className="question form q-four">
                        <div className="question-asked" onClick={()=> {
                        document.querySelector(".q-four").classList.toggle("open")
                    }}>
                            <span>Do you have more questions?</span>
                            <FontAwesomeIcon className="caretDown" icon={faCaretDown}/>
                        </div>
                        <div className="answer">
                            <div className="answer-inputs">
                                <div className="input">
                                    <label>Full Name:</label>
                                    <input type="text" className="student-name" />
                                </div>
                                <div className="input">
                                    <label>Email:</label>
                                    <input type="text" className="student-email" />
                                </div>
                                <div className="input">
                                    <label>Question:</label>
                                    <textarea className="textarea" rows={5}>
                                    </textarea>
                                </div>
                                <div className="answer-submit">
                                    <span>Submit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Faq;