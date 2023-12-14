import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Reports() {
  return (
    <div className="w-full px-3 mt-5">
      <h1 className=" text-3xl font-bold text-primary_blue">
        Your Reported Grades
      </h1>
      <p className=" py-1 flex flex-row gap-2  px-2 bg-blue-200 mt-2 rounded-md font-normal text-blue-900">
        <span className="">
          <FaCircleInfo size={22} className=" " />
        </span>
        <span className=" text-[14px]">
          This is your grades report. Theses are the grades that are recorded in
          your academic profile. If you find any missing grades, please report
          them using the{" "}
          <Link to={"./add-missing-grade"}>Report Missing Grade</Link> option.
          You can see your course name with code, Grade, GPA, Credit hours and
          Instructor name.
        </span>
      </p>

      <p className=" mt-8 font-medium text-2xl text-primary_blue">Filter By:</p>
      <form className="ml-3 w-full 400px:w-[9.5cm]  grid grid-cols-2">
        <div>
          <p className=" text-xl">Academic Year</p>
          <div>
            <label htmlFor="year1" className=" flex gap-2">
              <input type="checkbox" name="year1" id="year1" />
              <span>Year 1</span>
            </label>

            <label htmlFor="year2" className=" flex gap-2">
              <input type="checkbox" name="year2" id="year2" />
              <span>Year 2</span>
            </label>

            <label htmlFor="year3" className=" flex gap-2">
              <input type="checkbox" name="year3" id="year3" />
              <span>Year 3</span>
            </label>
            
            <label htmlFor="year4" className=" flex gap-2">
              <input type="checkbox" name="year4" id="year4" />
              <span>Year 4</span>
            </label>

          </div>
        </div>
      
        <div>
          <p className=" text-xl">Semesters</p>
          <div>
            <label htmlFor="sem1" className=" flex gap-2">
              <input type="checkbox" name="sem1" id="sem1" />
              <span>Semester 1</span>
            </label>

            <label htmlFor="sem2" className=" flex gap-2">
              <input type="checkbox" name="sem2" id="sem2" />
              <span>Semester 2</span>
            </label>


          </div>
        </div>

      </form>
    </div>
  );
  ``;
}

export default Reports;
