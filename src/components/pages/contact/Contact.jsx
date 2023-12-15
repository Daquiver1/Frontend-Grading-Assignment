import React from "react";
import Contact_det from "../../contactdetails/Contact_det";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";


const Contact = () => {
  return(
    <div className="header">
      <Header/>
      <div className="contact">
      <Contact_det />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;