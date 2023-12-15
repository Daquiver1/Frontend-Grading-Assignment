import ContactCard from "@/components/ContactCard";
import Navbar from "@/components/Navbar";
import PageTitle from "@/components/PageTitle";
import React from "react";
import Profile1 from "../../public/Profile11.jpg";
import Profile2 from "../../public/profile2.jpeg";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <PageTitle pagename={"CONTACT US"} />
      <div
        className="flex justify-between items-center m-7 p-5 
      
       border-2 w-90 h-90"
      >
        <div>
          <ContactCard
            profile={Profile1}
            name={"INSTRUCTOR ONE"}
            email={"instructor1@grade.com"}
            number={"+233 55 675 1529"}
          />
        </div>
        <div>
          <ContactCard
            profile={Profile2}
            name={"INSTRUCTOR TWO"}
            email={"instructor2@grade.com"}
            number={"+233 54 146 1529"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
