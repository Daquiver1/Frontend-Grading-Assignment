import React from "react";
import "./help.css"

function Help() {
    return(
        <div className="help-page">
            <h1>Help Page</h1>

            <div id="faq">
                <h3>FAQ</h3>
                <p>Why is my grade not showing?</p>
                <p>Have the grades been released by the lecturer?</p>
                <p>How can I get a reamark of my paper?</p>
                <p>Do I need to retake the course if my grade isn't showing?</p>
                <p>How long does it take for grades to be released?</p>
                <p>How do I get in contact with a the course instructor?</p>
                <p>How do I know if the grades have been released?</p>
            </div>

            <div id="contact">
                <h3>Contact Form</h3>
                <fieldset>
                    <label htmlFor="name">
                        Name
                        <input type="text" name="name" id="name" />
                    </label>
                    <label htmlFor="contact">
                        Contact
                        <input type="text" name="contact" id="contact" />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input type="email" name="email" id="email" />
                    </label>
                    <label htmlFor="issue">
                        Issue
                        <textarea placeholder="Enter any issues you may have..." />
                    </label>
                </fieldset>
                <button id="submit">Submit</button>
            </div>
        </div>
    )
}

export default Help