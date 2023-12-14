import { useState } from "react";
import "./component.css";

function GradeReportPage() {
  const [firstGrade] = useState([
    {
      firstCode: "MATH 123",
      firstCourse: "VECTORS AND GEOMETRY",
      firstGrade: "A",
    },
    {
      firstCode: "DCIT 101",
      firstCourse: "INTRODUCTION TO COMPUTER SCIENCE",
      firstGrade: "B+",
    },
    {
      firstCode: "DCIT 103",
      firstCourse: "OFFICE PRODUCTIVITY TOOLS",
      firstGrade: "A",
    },
    {
      firstCode: "MATH 121",
      firstCourse: "ALGEBRA AND TRIGONOMETRY",
      firstGrade: "B+",
    },
    {
      firstCode: "STAT 111",
      firstCourse: "INTRODUCTION TO STATISTICS AND PROBABILITY I",
      firstGrade: "B+",
    },
    {
      firstCode: "UGRC 150",
      firstCourse: "CRITICAL THINKING AND PRACTICAL REASONING",
      firstGrade: "A",
    },
  ]);

  const [secondGrade] = useState([
    {
      secondCode: "DCIT 102",
      secondCourse: "COMPUTER HARDWARE FUNDAMENTALS AND CIRCUITS",
      secondGrade: "B+",
    },
    {
      secondCode: "DCIT 104",
      secondCourse: "PROGRAMMING FUNDAMENTALS",
      secondGrade: "B+",
    },
    { secondCode: "MATH 122", secondCourse: "CALCULUS I", secondGrade: "C+" },
    {
      secondCode: "MATH 126 ",
      secondCourse: "ALGEBRA AND GEOMETRY",
      secondGrade: "B",
    },
    {
      secondCode: "STAT 112",
      secondCourse: "INTRODUCTION TO STATISTICS AND PROBABILITY II",
      secondGrade: "B+",
    },
    {
      secondCode: "UGRC 110",
      secondCourse: "ACADEMIC WRITING I",
      secondGrade: "N/A",
    },
  ]);

  const [thirdGrade] = useState([
    {
      thirdCode: "CBAS 210",
      thirdCourse: "ACADEMIC WRITING II",
      thirdGrade: "N/A",
    },
    { thirdCode: "DCIT 201", thirdCourse: "PROGRAMMING I", thirdGrade: "N/A" },
    {
      thirdCode: "DCIT 203",
      thirdCourse: "DIGITAL AND LOGIC SYSTEMS DESIGN",
      thirdGrade: "N/A",
    },
    {
      thirdCode: "DCIT 205 ",
      thirdCourse: "MULTI MEDIA AND WEB DESIGN",
      thirdGrade: "N/A",
    },
    {
      thirdCode: "DCIT 207",
      thirdCourse: "COMPUTER ORGANIZATION & ARCHITECTURE",
      thirdGrade: "N/A",
    },
    { thirdCode: "MATH 223", thirdCourse: "CALCULUS II", thirdGrade: "N/A" },
  ]);

  const [selectedFirstCode] = useState("");
  const [selectedFirstCourse] = useState("");

  const [selectedSecondCode] = useState("");
  const [selectedSecondCourse] = useState("");

  const [selectedThirdCode] = useState("");
  const [selectedThirdCourse] = useState("");

  const filteredFirstGrades = firstGrade.filter((firstGrade) => {
    if (selectedFirstCode) {
      return firstGrade.firstCode === selectedFirstCode;
    }
    if (selectedFirstCourse) {
      return firstGrade.firstCourse === selectedFirstCourse;
    }
    return true;
  });

  const filteredSecondGrades = secondGrade.filter((secondGrade) => {
    if (selectedSecondCode) {
      return secondGrade.secondCode === selectedSecondCode;
    }
    if (selectedSecondCourse) {
      return secondGrade.secondCourse === selectedSecondCourse;
    }
    return true;
  });

  const filteredThirdGrades = thirdGrade.filter((thirdGrade) => {
    if (selectedThirdCode) {
      return thirdGrade.thirdCode === selectedThirdCode;
    }
    if (selectedThirdCourse) {
      return thirdGrade.thirdCourse === selectedThirdCourse;
    }
    return true;
  });

  return (
    <>
      <div>
        <div>
          <img
            className="logo"
            src="images/logo.png"
            alt="Logo of University of Ghana."
          />
        </div>
      </div>
      <br />
      <h1 style={{ textAlign: "center" }}>Academic Record</h1>
      <div className="record_grid">
        <div>
          <p>StudentID: 11296303</p>
          <p>Name: Ashong Kelvin Kweku Siaw</p>
        </div>
        <div>
          <p>Date of Birth: 06-APR-05</p>
          <p>Sex: Male</p>
        </div>
      </div>
      <hr /> <hr />
      <div className="record">
        <div className="inner_record">
          <b>ACADEMIC YEAR: 2022/2023</b>
        </div>
        <div className="inner_record">
          <b>FIRST SEMESTER</b>
        </div>
        <div className="inner_record">
          <b>CCT: 18</b>
        </div>
        <div className="inner_record">
          <b>CCP: 18</b>
        </div>
        <div className="inner_record">
          <b>CGPA: 3.58</b>
        </div>
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>code</th>
            <th>Course Title</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredFirstGrades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.firstCode}</td>
              <td>{grade.firstCourse}</td>
              <td>{grade.firstGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="record">
        <div className="inner_record">
          <b>ACADEMIC YEAR: 2022/2023</b>
        </div>
        <div className="inner_record">
          <b>SECOND SEMESTER</b>
        </div>
        <div className="inner_record">
          <b>CCT: 33</b>
        </div>
        <div className="inner_record">
          <b>CCP: 33</b>
        </div>
        <div className="inner_record">
          <b>CGPA: 3.28</b>
        </div>
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>code</th>
            <th>Course Title</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredSecondGrades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.secondCode}</td>
              <td>{grade.secondCourse}</td>
              <td>{grade.secondGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="record">
        <div className="inner_record">
          <b>ACADEMIC YEAR: 2023/2024</b>
        </div>
        <div className="inner_record">
          <b>FIRST SEMESTER</b>
        </div>
        <div className="inner_record">
          <b>CCT: </b>
        </div>
        <div className="inner_record">
          <b>CCP: </b>
        </div>
        <div className="inner_record">
          <b>CGPA: </b>
        </div>
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>code</th>
            <th>Course Title</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredThirdGrades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.thirdCode}</td>
              <td>{grade.thirdCourse}</td>
              <td>{grade.thirdGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </>
  );
}
export default GradeReportPage;
