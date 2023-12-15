import React from "react";

const Content1 = () => {
  return (
    <div className="md:ml-[15rem] mt-[5rem]">
      <div className="flex flex-col md:flex-row  md:ml-10 flex-1 gap-11 mt-11">
        <div className="flex-col mr-5 ml-5 bg-gradient-to-tr from-indigo-100 to-[#fffcfc] p-3 shadow-md">
          <h1 className="text-[2rem] font-semibold mb-2">Overview</h1>
          <div className="flex flex-1">
            <span>
              <p>
                Welcome to the Missing Grade Report Dashboard, designed to
                provide you with a comprehensive overview of missing grades
                across your courses. This centralized hub offers key insights,
                metrics, and tools to facilitate efficient tracking and
                management of incomplete assignments.
              </p>
              <h1 className="text-2xl font-bold mt-5">Key Frames</h1>
              <p>
                Total Number of Missing Grades: [Insert Number] Percentage of
                Missing Grades: [Insert Percentage] Visual Charts: Explore
                visual representations of missing grades trends.
              </p>
            </span>

            <img
              src={require("./Search-rafiki.png")}
              alt=""
              className="w-[25%] max-w-none h-auto"
            />
          </div>
        </div>

        <div className="  bg-transparent p-3 bg-white ">
          <img
            src={require("./2410566.jpg")}
            alt=""
            className="w-[90rem] h-auto shadow-md"
          />
        </div>
      </div>

      <section className="flex flex-wrap justify-center items-center m-[7rem] gap-5 sm:gap-10 ">
        <div className="flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 ">
          <img
            src={require("./feedback-comment-survey-support-response-bar-word.jpg")}
            alt=""
            className="w-full h-auto rounded-md"
          />
          <h1 className="m-3 text-2xl">Feedback and Improvement:</h1>
          <p className="m-3">
            We value your feedback! Share your suggestions and report issues to
            help us continually enhance and optimize the Missing Grade Report
            Dashboard.Greatness
          </p>
        </div>

        <div className="flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 ">
          <img
            src={require("./picture-young-african-man-walking-street-standing-with-arms-crossed.jpg")}
            alt=""
            className="w-full h-auto rounded-md"
          />
          <h1 className="m-3 text-2xl">Individual Student Profiles:</h1>
          <p className="m-3">
            Effortlessly navigate through student profiles to view missing
            grades on a per-student basis. Details include name, ID, and a
            comprehensive list of missing assignments.
          </p>
        </div>

        <div className="flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 ">
          <img
            src={require("./high-angle-people-working-with-laptop.jpg")}
            alt=""
            className="w-full h-auto rounded-md"
          />
          <h1 className="m-3 text-2xl">Course Progress:</h1>
          <p className="m-3">
            See an overview of each student's progress, combining completed
            assignments and grades received with missing grades. Access relevant
            comments or notes.
          </p>
        </div>
        <div className="flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 ">
          <img
            src={require("./study-group-african-people.jpg")}
            alt=""
            className="w-full h-auto rounded-md"
          />
          <h1 className="m-3 text-2xl">Actions and Remediation:</h1>
          <p className="m-3">
            Empower instructors to send reminders, access detailed assignment
            information, and mark assignments as complete directly from the
            dashboard.
          </p>
        </div>
        <div className="flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 ">
          <img
            src={require("./medium-shot-student-listening-music.jpg")}
            alt=""
            className="w-full h-auto rounded-md"
          />
          <h1 className="m-3 text-2xl">Alerts and Notifications:</h1>
          <p className="m-3">
            Stay informed with real-time alerts on new missing grades or
            updates. Take immediate action to address discrepancies.
          </p>
        </div>
        <div className="flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 ">
          <img
            src={require("./medium-shot-students-working-with-laptop.jpg")}
            alt=""
            className="w-full h-auto rounded-md"
          />
          <h1 className="m-3 text-2xl">Help and Resources:</h1>
          <p className="m-3">
            Access resources on handling missing grades, effective communication
            with students, and best practices for grading.
            Access tools for maintaining a streamlined grading process.
        </p>
        

            
        
        </div>
      </section>
      <hr></hr>

      <div className="md:flex gap-11 mt-11">
        <div className="flex flex-col md:ml-10 mr-10 flex-1">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="flex flex-col md:ml-10 mr-10 flex-1">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="">
          <table className="w-[20rem]   m-5">
            <thead className="border-b border-gray-200">
              <tr>
                <td className="p-2">Grade</td>
                <td className="p-2">GPT</td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2">A</td>
                <td className="p-2">12</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">B+</td>
                <td className="p-2">10.5</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">B</td>
                <td className="p-2">9</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">C+</td>
                <td className="p-2"> 7.5</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2">C</td>
                <td className="p-2">6</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2">D+</td>
                <td className="p-2">4.5</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2"> D</td>
                <td className="p-2">3</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2">E</td>
                <td className="p-2">1.5</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-2">F</td>
                <td className="p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Content1;
