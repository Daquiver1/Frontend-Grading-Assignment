import React from "react";
import { Link } from "react-router-dom";
//This is the help and support page to assist users of the site on how to surf the site

const Help = () => {
  return (
    <>
      <div className="container">
        <div className="">
          <p>ABOUT PEP&apos;S GRADE REPORT SYSTEM</p>
          <p>
            Pep&apos;s Grade Report System is a system designed to connect
            students to lecturers. This site helps to make complaints to
            lecturers concerning their grades. This helps to easily reach
            lecturers since reaching lecturers is somewhat a dificult task using
            traditional methods. Get to know more about us here
            <Link to="/about" className="custom-link">
              About us.
            </Link>
          </p>
          <p>GETTING STARTED</p>
          <div className="main-details">
            <p>CREATING AN ACCOUNT</p>
            <ul className="list">
              <li className="lists">
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
            <p>OGGING IN</p>
            <ul>
              <li>
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
            <p>ADDING COURSES</p>
            <ul>
              <li>
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
            <p>MAKING COMPLAINTS/ REPORTS TO LECTURERS</p>
            <ul>
              <li>
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
            <p>REVIEW DETAILS</p>
            <ul>
              <li>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
