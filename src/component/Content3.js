import React from "react";

const Content3 = () => {
  return (
    <div className="md:ml-[15rem] ">
      <div className="flex justify-center items-center ">
        <img
          src={require("./FAQs-rafiki.png")}
          alt=""
          className="w-[25%] max-w-none h-70"
        />
      </div>

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

      <div className="md:flex m-[2rem] gap-[2rem] mt-11">
        <div className="bg-transparent shadow-md rounded-2xl p-[1rem]">
          <h1 className="font-bold text-[1rem] p-3 text-[#e9c792]">
            Who benefits from the Missing Grade Report System?
          </h1>
          <p>
            <ul>
              <li>
                <span className="font-bold text-[#cfa460]">Educators:</span>{" "}
                Easily identify and address missing grades to maintain accurate
                and up-to-date records.
              </li>
              <li>
                <span className="font-bold text-[#cfa460]">
                  {" "}
                  Administrators:
                </span>{" "}
                Ensure compliance with grading deadlines and improve overall
                academic integrity.
              </li>
              <li>
                <span className="font-bold text-[#cfa460]"> Students:</span>{" "}
                Access to timely and accurate grade information, promoting a
                fair and transparent learning environment.
              </li>
            </ul>
          </p>
        </div>
        <div className="bg-transparent shadow-md rounded-2xl p-[1rem] ">
          <h1 className="font-bold text-[1.3rem] p-3 text-[#e9c792]">
            Can faculty members be notified of missing grades automatically?
          </h1>
          <p>
            The Missing Grade Report System is a software application designed
            to track and manage missing grades for students in an educational
            institution. It helps identify courses or assignments where grades
            are not submitted within the expected timeframe.
          </p>
        </div>
        <div className=" flex justify-center items-center  p-[1rem] ">
          <img
            src={require("./Questions-rafiki.png")}
            alt=""
            className="w-[75%] max-w-none h-auto"
          />
        </div>
      </div>

      <div className="md:flex m-[2rem] gap-[2rem] mt-11">
        <div className="bg-transparent shadow-md rounded-2xl p-[1rem]">
          <h1 className="font-bold text-[1.3rem] p-3 text-[#e9c792]">
            {" "}
            How does the system handle grade disputes?
          </h1>
          <p>
            The Missing Grade Report System is not designed to handle grade
            disputes directly. However, it facilitates transparency, making it
            easier for students and faculty to identify and address missing
            grades promptly, potentially minimizing disputes.
          </p>
        </div>

        <div className="bg-transparent shadow-md rounded-2xl p-[1rem] ">
          <h1 className="font-bold text-[1.3rem] p-3 text-[#e9c792]">
            How can an institution implement the Missing Grade Report System?
          </h1>
          <p>
            The implementation process involves integrating the system with the
            institution's existing student information system or grading
            platform. A dedicated IT team can work with the system provider to
            ensure a seamless setup.
          </p>
          <p>
            Remember, the details of a Missing Grade Report System can vary
            based on the specific software used and the policies of the
            educational institution implementing it.
          </p>
        </div>
        <div className="bg-transparent shadow-md rounded-2xl p-[1rem] ">
          <h1 className="font-bold text-[1.3rem] p-3 text-[#e9c792]">
            Is the system customizable for different grading policies?
          </h1>
          <p>
            Yes, the system can be configured to send automated notifications to
            faculty members reminding them of impending grade submission
            deadlines and alerting them if any grades are missing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content3;
