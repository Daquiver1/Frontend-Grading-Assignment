import React from "react";
import { Link } from "react-router-dom";

const MinFooter = () => {
  const dateValue = new Date();
  const dateYear = dateValue.getFullYear();
//This is a footer for smaller screens
  return (
    <>
      <div className="container flex  flex-col place-items-center bg-blue-800 w-full justify-center relative bottom-0">
        {/*Specify position when using directions like right, left etc*/}
        <div className="left- flex flex-col place-items-center gap-5">
          <img className="rounded-full w-16 h-16" src="/coat-arms.jpg" alt="" />
          <Link className="text-blue-100" to="/legal-section">
            Legal Docs
          </Link>
          <Link className="text-blue-100" to="/faqs">
            FAQS
          </Link>
          <Link className="text-blue-100" to="/privacy">
            Data Privacy
          </Link>
          <Link className="text-blue-100" to="/policy">
            Our Policies
          </Link>
          <Link className="text-blue-100" to="/partner">
            Become a Partner
          </Link>
          <Link className="text-blue-100" to="/guidelines">
            Guidelines
          </Link>
        </div>
        <div className="date-year text-red-400 ml-5 mr-5 mt-5">
          <p>Copyright &copy; {dateYear} Pep&apos;s Grade Report System</p>
        </div>
        <div className="contact-section flex flex-col place-items-center gap-5 mt-5">
          <div className="flex">
            <button className="block w-6 h-6 text-blue-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </button>
            <p className="text-blue-100">0551875432</p>
          </div>
          <a href="https://wa.me/+233551875432">
            <img
              className="h-6 w-6 rounded-full"
              src="/xap-icon.jpeg"
              alt="An image of the whatsapp icon"
              title="Connect on whatsapp"
            />
          </a>
          <a href="">
            <img
              className="h-6 w-6 rounded-full"
              src="/facebook-icon.jpeg"
              alt="The facebook icon"
              title="Connect on facebook"
            />
          </a>
          <a href="">
            <img
              className="h-6 w-6 rounded-full"
              src="/x-icon.png"
              alt="X icon"
              title="Connect on X"
            />
          </a>
          <a href="mailto:peprahdickson187@gmail.com">
            <img
              className="h-6 w-6 rounded-full"
              src="/email-icon.png"
              alt="Image of email icon"
              title="Click to send an email"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default MinFooter;
