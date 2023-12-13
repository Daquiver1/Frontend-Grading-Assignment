import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginFooter from "./LoginFooter";
import Header from "./header";
//This is the help and support page to assist users of the site on how to surf the site

const Help = () => {
  const [showInput, setShowInput] = useState(false);
  const [submit, setSubmit] = useState(false);
  const showInputType = () => {
    setShowInput(!showInput);
  };

  const inputShown = () => {
    return (
      showInput && (
        <div className="flex flex-col gap-5 absolute">
          <div className="flex gap-4 flex-col">
            <label htmlFor="senderName" className="text-green-900 text-lg">
              Enter your email
            </label>
            <input type="email" />
          </div>
          <div className="flex flex-col gap-3">
            <textarea
              name="messageText"
              id="messageText"
              className="name max-w-full"
              placeholder="Enter your message here"
            ></textarea>
            <button
              type="submit"
              className="text-green-900 text-lg bg-blue-500 rounded-md hover:bg-green-900 hover:text-blue-500 duration-[0.5s]"
            >
              Submit
            </button>
          </div>
        </div>
      )
    );
  };
  // const inputShown = () =>
  //   showInput ? (
  //     <div className="flex flex-col gap-5 absolute">
  //       <div className="flex gap-4 flex-col">
  //         <label htmlFor="senderName" className="text-green-900 text-lg">
  //           Enter your email
  //         </label>
  //         <input type="email" />
  //       </div>
  //       <div className="flex flex-col gap-3">
  //         <textarea
  //           name="messageText"
  //           id="messageText"
  //           className="name max-w-full"
  //           placeholder="Enter your message here"
  //         ></textarea>
  //         <button type="submit" className="text-green-900 text-lg bg-blue-500 rounded-md hover:bg-green-900 hover:text-blue-500 duration-[0.5s]">
  //           Submit
  //         </button>
  //       </div>
  //     </div>
  //   ) : (
  //     <p>I am a boy</p>
  //   );

  return (
    <>
      <Header></Header>
      <div className="container relative bg-white bg-opacity-10">
        <div className="place-items-center flex flex-col justify-center left-44 relative">
          <p className="custom-header font-black">
            NEED HELP, YOU ARE AT THE RIGHT PLACE...
          </p>
          <p className="text-size">
            Pep&apos;s Grade Report System is a system designed to connect
            students to lecturers. This site helps to make complaints to
            lecturers concerning their grades. This helps to easily reach
            lecturers since reaching lecturers is somewhat a dificult task using
            traditional methods. Get to know more about us here
            <Link to="/about" className="custom-link">
              About us.
            </Link>
          </p>
          <p className="custom-header">GETTING STARTED</p>
          <div className="main-details">
            <p className="custom-header">CREATING AN ACCOUNT</p>
            <ul className="list">
              <li className="text-size">
                Creating an account is a required and a necessity to get started
                on this app. This helps to collect data of the user for easy
                identification and to also log the user in easily whenever the
                user visits the site. Account creation on this site is not a
                complicated one as it takes just a few steps to complete and
                takes less amount of time as we value time and efficiency. We
                will require a few of your details for identification purposes,
                and note that privacy of your data is higly assured. To create
                an account, click here{" "}
                <Link to="/create-account" className="custom-link">
                  Create Account
                </Link>
              </li>
            </ul>
            <p className="custom-header">LOGGING IN</p>
            <ul>
              <li className="text-size">
                After successfully creating an account, users can login with
                their credentials into the app to easily and freely access the
                app and it&apos;s amazing features. Users can request for a
                storage of their details so the details are not enterd each time
                upon login. As stated early on, the users data is highy secured
                with us and we make users the sole owners of their data and make
                users specify what to do with their data. Once you have an
                account created, users can login via
                <Link to="/login" className="custom-link">
                  Login
                </Link>
              </li>
            </ul>
            <p className="custom-header">ADDING COURSES</p>
            <ul>
              <li className="text-size">
                On the grade report page, there is an option for students to add
                their courses, students Id, grades, as well as program of study.
                This will help keep track of the academics of the student
                {"and to also keep track of reports you make to lecturers"}
                Once a user is logged in, the user can head on to{" "}
                <Link to="/report" className="custom-link">
                  Grade Report
                </Link>{" "}
                to add their academic details on the grade report page.
              </li>
            </ul>
            <p className="custom-header">
              MAKING COMPLAINTS/ REPORTS TO LECTURERS
            </p>
            <ul>
              <li className="text-size">
                As the core purpose of this site, there is a page for users to
                make official complaints to lectureres about missiing grades.
                This will help inform lecturers about the plight of students and
                address these concerns as soon as possible. On the missing grade
                page, students enter some details which include giving a
                description of their problems and also choosing the exact
                lecturer to whom the message should go to. The message is also
                stored so it can be refernced anytime, should in case any doubts
                arise. It is highly recommended users maintain this stored data.
                They are meant for future references. There is an option for
                users to clear these data though, whichh is not recommended.
                Click here to make a report.
                <Link to="missing" className="custom-link">
                  Missing Grade
                </Link>
              </li>
            </ul>
            <p className="custom-header">REVIEW DETAILS</p>
            <ul>
              <li className="text-size">
                Once academic details have been added and complaints made to
                lecturers, students can review these details in the dashboard of
                the site located here{" "}
                <Link to="/dashboard" className="custom-link">
                  Dashboard
                </Link>
                . From here, users, can see an overview of their courses, the
                reports made, among other amzing stuff all in one place. There
                are links to redirect to the required locations where data
                requested can be found.
              </li>
            </ul>
            <ul>
              <p className="custom-header">MAKING CONTACTS</p>
              <li className="text-size">
                Whenever the need be that user contacts a lecturer, there is a
                very comfortable way of doing this through the contacts page of
                the site and this, as said is very easy and quick to do. Lodge
                all your complaints and whatever you want to make known to your
                lecturer through this page. You can click
                <Link to="/instructor" className="custom-link">
                  Contact Instructor
                </Link>
                to make your official complaints.
              </li>
            </ul>
          </div>
        </div>
        <LoginFooter></LoginFooter>
        {inputShown()}
        <div className="absolute right-0 text-blue-500 mt-24">
          <button
            onClick={showInputType}
            title="Click to send us a message"
            className="w-10 h-6 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Help;
