import React from "react";
import backgroundImage from "./contact.jpg";

const Contact = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="text-[#232590]">
      <section
        className="h-80 m-11 rounded-md md:ml-[10rem] md:mr-[10rem] mt-11 flex justify-center items-center "
        style={sectionStyle}
      >
        {/* Your content goes here */}
        <div className="text-white text-4xl text-center font-bold ">
          WE'ED LOVE TO HEAR <br />
          FROM YOU AGAIN
        </div>
      </section>

      <section className="flex md:m-[10rem]"> 
      <div className="md:flex m-[2rem] gap-[2rem] mt-1">
        <div className="bg-transparent shadow-md rounded-2xl p-[1rem]">
          <h1 className="font-bold text-[1.3rem] p-3 text-[#e9c792] ">
            What is a Missing Grade Report System?
          </h1>
          <p>
            The Missing Grade Report System is a software application designed
            to track and manage missing grades for students in an educational
            institution. It helps identify courses or assignments where grades
            are not submitted within the expected timeframe.
          </p>
        </div>
        <div className="bg-transparent shadow-md rounded-2xl p-[1rem] ">
          <h1 className="font-bold text-[1.3rem] p-3 text-[#e9c792]">
            {" "}
            Why is a Missing Grade Report System necessary?
          </h1>
          <p>
            The system ensures transparency and accountability in the grading
            process. It helps educators, administrators, and students by
            providing a centralized platform to track missing grades, allowing
            timely intervention and resolution.
          </p>
        </div>
        <div className="bg-transparent shadow-md rounded-2xl p-[1rem] ">
          <h1 className="font-bold text-[1.3rem] p-3 text-[#e9c792]">
            How does the system work?
          </h1>
          <p>
            The system integrates with the institution's grading platform to
            regularly check for missing grades. It generates reports
            highlighting courses or assignments without submitted grades,
            allowing faculty and administrators to address the issues promptly.
          </p>
        </div>
        </div>
      </section>




    </div>
  );
};

export default Contact;
