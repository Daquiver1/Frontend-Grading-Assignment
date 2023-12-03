import React from "react";
import "./help.css"


/* function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

} */

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
                <form id="contact-form" action="">
                    <fieldset>
                        <label htmlFor="name">
                         Name
                            <input type="text" name="name" id="name" required/>
                        </label>
                        <label htmlFor="contact">
                            Contact
                            <input type="text" name="contact" id="contact" required/>
                        </label>
                        <label htmlFor="email">
                            Email
                            <input type="email" name="email" id="email" required/>
                        </label>
                        <label htmlFor="issue">
                            Issue
                            <textarea placeholder="Enter any issues you may have..." required/>
                        </label>
                    </fieldset>
                    <input type="submit" id="submit" onSubmit={"Message Sent!"}/>
                </form>
                {/* <div class="message">
                <div class="success" id="success">Your Message Successfully Sent!</div>
                <div class="danger" id="danger">Feilds Can't be Empty!</div>
                </div> */}
            </div>
        </div>
    )
}

export default Help