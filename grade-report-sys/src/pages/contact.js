import React from "react";
import "./main.css";
import Collapsible from "../components/collapsible-list/collapsible-contacts";
import Footer from "../components/footer/footer";
import EmailForm from "../components/email/emailform";
 
const Contact = () => {
    return (
        <div>
        <div className="Home">
            <div>
                <Collapsible />
            </div>
    </div>
    <h2 className="subheader">Or send an email here:</h2>
    <div className="item">
                <EmailForm />
            </div>
        <div>
        <Footer />
        </div>
        
    </div>
    );
};
 
export default Contact;