import React from "react";
import CourseGrade from "./CourseGrade";

function Result() {
  return (
    <>
      <div className="mt-14 ml-6  border-2 flex justify-center">
        <table className="table-auto ">
          <thead>
            <tr className="border-2">
              <th className=" border-3 p-2 text-centerr">COURSE CODE</th>
              <th className=" border-3 p-2 text-center">CORSE NAME</th>
              <th className=" border-3 p-2 text-center">CREDIT HOURS</th>
              <th className=" border-3 p-2 text-center">GRADE</th>
            </tr>
          </thead>
          <tbody>
           
            <CourseGrade
              courseCode={" DCIT 111"}
              courseName={"INTRODUCTION TO PROGRAMMING"}
              creditHours={"4"}
              grade={"A"}
            />

            <CourseGrade
              courseCode={" DCIT 112"}
              courseName={"INTRODUCTION TO NETWORKING"}
              creditHours={"4"}
              grade={"A"}
            />

            <CourseGrade
              courseCode={" DCIT 113"}
              courseName={"HARDWARE FUNDAMENTALS"}
              creditHours={"4"}
              grade={"B+"}
            />

            <CourseGrade
              courseCode={" DCIT 114"}
              courseName={"SOFTWARE ENGINEERING"}
              creditHours={"3"}
              grade={"B+"}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Result;
