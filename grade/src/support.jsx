import React from "react";
import"./support.css";
import Footer from "./footer";
import Header from "./header";
import Picture from "./FAQ.jpeg";




export default function Support(){
    return(
        <div>
            <Header/>
            <img src={Picture} className="faq-pic"/>
            <h1>FAQ - Grade Reporting</h1>
            <div className="main-content">
                <div>
                    <h3>
                        Q: How often are grades updated in the grading system?
                    </h3>
                    <p>
                        A: Grades in the grading system are typically updated in real-time or on a regular basis, depending on the specific system. This ensures that you have the most up-to-date information about your website's performance 
                    </p>
                    <h3>
                        Q: Can I view the history of grade changes for my website?
                    </h3>
                    <p>
                        A: Yes, most grading systems provide a history log or dashboard that allows you to track the changes in your website's grades over time. This feature enables you to monitor progress and identify trends in your website's performance.

                    </p>
                    <h3>
                        Q: What factors are considered when assigning grades in the grading system?
                    </h3>
                    <p>
                    A: Grades in the grading system are based on various factors, including design aesthetics, usability, responsiveness, content quality, and search engine optimization. These factors are evaluated using specific criteria and methodologies to provide a comprehensive assessment of your website.
                    </p>
                </div>
                <div>
                    <h3>
                        Q: How can I improve my website's grades in the grading system?
                    </h3>
                    <p>
                        A: To improve your website's grades, it's recommended to review the detailed evaluation reports provided by the grading system. These reports typically offer actionable insights and recommendations for each evaluated area. By implementing the suggested improvements, you can enhance your website's performance and overall grade.
                    </p>
                    <h3>
                        Q: Can I compare my website's grades with competitors or industry benchmarks?
                    </h3>
                    <p>
                        A: Yes, many grading systems offer benchmarking capabilities, allowing you to compare your website's grades with competitors or industry standards. This comparison helps you understand how your website performs relative to others and identify areas where you can strive for excellence.
                    </p>
                    <h3>
                        Q: How can I ensure the accuracy and reliability of the grading system?
                    </h3>
                    <p>
                        A: The grading system employs robust methodologies and evaluation criteria to ensure accuracy and reliability. However, if you have concerns about the grading system's results, it's recommended to reach out to the technical support team for further assistance.
                    </p>
                </div>
                

            </div>
            <h4>
             For technical support or any other inquiries, please fill out the form below:

            </h4>
            <form className="contact-form">
                 <div className="form-group">
                    <label for="first-name">First Name:</label>
                    <input type="text" id="first-name" name="first-name" required/>
                </div>
            
                <div className="form-group">
                    <label for="last-name">Last Name:</label>
                    <input type="text" id="last-name" name="last-name" required/>
                </div>
            
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                
                <div className="form-group">
                    <label for="inquiry">Nature of Inquiry:</label>
                    <select id="inquiry" name="inquiry">
                        <option value="General">General</option>
                        <option value="Technical">Technical</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            
                <div className="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
            
                <button type="submit">Submit</button>
            </form>
            <br />
            <Footer/>                
        </div>
    )

}