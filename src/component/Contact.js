import React from "react";
import backgroundImage from "./contact.jpg";
import backgroundImage1 from "./coco.jpg";
import { FaMapLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  const sectionStyle1 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const sectionStyle2 = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="text-[#232590] md:ml-[15rem] mt-[5rem]">
      <section
        className="h-80 m-11 rounded-md md:ml-[10rem] md:mr-[10rem] mt-11 flex justify-center items-center "
        style={sectionStyle1}
      >
        {/* Your content goes here */}
        <div className="text-white text-4xl text-center font-bold ">
          WE'D LOVE TO HEAR <br />
          FROM YOU AGAIN
        </div>
      </section>
      <section className="block justify-center items-center m-[3rem]  ">
        <h1 className="md:ml-[10rem] md:mr-[10rem] p-2 font-semibold text-lg">Enhancing User Experience with our Help Desk</h1>
        <p className="p-2 md:ml-[10rem] md:mr-[10rem]">
          At GradeSleuth, we understand the importance of providing timely and
          effective support to our valued users. Our dedicated Help Desk is here
          to ensure a seamless and enriching experience for you.
        </p>
        <h2 className="md:ml-[10rem] md:mr-[10rem] p-2 font-semibold text-lg">Why Choose Our Help Desk?</h2>
        <ul className="md:ml-[10rem] md:mr-[10rem]">
          <li className="p-2">
            Responsive Assistance: Our team of experienced support professionals
            is committed to responding promptly to your queries and concerns.
            Whether you're facing technical issues, need guidance, or have
            general inquiries, we're here to help.
          </li>
          <li className="p-2">
            Responsive Assistance: Our team of experienced support professionals
            is committed to responding promptly to your queries and concerns.
            Whether you're facing technical issues, need guidance, or have
            general inquiries, we're here to help.
          </li>
        </ul>
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
              allowing faculty and administrators to address the issues
              promptly.
            </p>
          </div>
        </div>
      </section>

      <section
        className="h-80 m-11 rounded-md md:ml-[10rem] md:mr-[10rem] mt-11 flex justify-center items-center "
        style={sectionStyle2}
      >
        <h1 className="text-white text-[5rem] text-center font-bold ">
          Help Desk
        </h1>
      </section>

      <section className="flex md:m-[15rem] m-[rem]">
        <form className="w-[30rem]">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-medium "
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Name"
            className="bg-gray-100 h-10 p-3 w-full"
          />
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mt-[1rem]"
          >
            E-mail
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="E-mail"
            className="bg-gray-100 h-10 p-3 w-full"
          />
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mt-[1rem]"
          >
            Message
          </label>
          <textarea
            type="textarea"
            id="name"
            name="Name"
            placeholder="Message"
            className="bg-gray-100 h-[13rem] p-3 w-full"
          />
        </form>

        <div className="flex-1block gap-[5rem] justify-end items-center m-[5rem]">
          <h1 className="flex  text-3xl gap-[1rem] m-1">
            <FaMapLocationDot size={30} /> Address
          </h1>
          <p className="mb-4">Computer Science Department</p>
          <h1 className="flex  text-3xl gap-[1rem]">
            <FiPhone size={30} /> Phone
          </h1>
          <p>055-125-8689</p>
          <p className="mb-4">055-125-8689</p>
          <h1 className="flex text-3xl gp-[1rem] ">
            <MdAlternateEmail size={30} /> E-mail Us
          </h1>
          <p>albertquaye735@gmail.com</p>
          <p className="mb-4">albertquaye735@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
