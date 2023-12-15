import React from "react";
import Contact_det from "../../contactdetails/Contact_det";
import Header from "../../header/Header";


const Contact = () => {
  return(
    <div className="header">
      <Header/>
      <div className="contact">
      <Contact_det />
      </div>
    </div>
  );
};

export default Contact;