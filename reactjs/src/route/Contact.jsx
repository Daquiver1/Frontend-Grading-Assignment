import React from 'react';
import './Contact.css'

const ContactPage = () => {
    return (
        <div className="containerz">
            <h1>Contact Us</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Instructor Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="3" placeholder="Enter Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ContactPage;