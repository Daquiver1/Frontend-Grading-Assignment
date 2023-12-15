import React from "react";
import NavBar from "../Components/Header2";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

const GradeReport = () => {
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <Sidebar />
        </div>

        <div className="col-md-12 col-lg-8">
          <div className="container mt-5">
            <p className="text-center mt-5 fs-2 fw-bolder text-info ">
              OVERVIEW OF ALL YOUR COURSE GRADES
            </p>

            <h4 className="text-decoration-underline mb-3">LEVEL 100 </h4>
            <h4 className="text-decoration-underline mb-3 text-center">
              First Semester
            </h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Course Code</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Grade Point</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">DCIT 101</th>
                  <td>Introduction to Computer Science</td>
                  <td>B+</td>
                  <td>10.5</td>
                </tr>
                <tr>
                  <th scope="row">DCIT 103</th>
                  <td>Office Productivity Tool</td>
                  <td>A</td>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">MATH 121</th>
                  <td>Algebra & Trigonometry</td>
                  <td>B</td>
                  <td>9</td>
                </tr>
                <tr>
                  <th scope="row">MATH 123</th>
                  <td>Vectors & Geometry</td>
                  <td>B+</td>
                  <td>10.5</td>
                </tr>
                <tr>
                  <th scope="row">STAT 111</th>
                  <td>Introduction to Statistics and Probability</td>
                  <td>A</td>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">UGRC 150</th>
                  <td>Critical Thinking</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>

            <h4 className="text-decoration-underline mb-3 text-center mt-3">
              Second Semester
            </h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Course Code</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Grade Point</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">DCIT 102</th>
                  <td>Computer Hardware Fundamental</td>
                  <td>B+</td>
                  <td>10.5</td>
                </tr>
                <tr>
                  <th scope="row">DCIT 104</th>
                  <td>Programming Fundamentals</td>
                  <td>A</td>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">MATH 122</th>
                  <td>Calculus I</td>
                  <td>B</td>
                  <td>9</td>
                </tr>
                <tr>
                  <th scope="row">MATH 126</th>
                  <td>Algebra & Geometry</td>
                  <td>B+</td>
                  <td>10.5</td>
                </tr>
                <tr>
                  <th scope="row">STAT 112</th>
                  <td>Introduction to Statistics and Probability II</td>
                  <td>A</td>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">UGRC 110</th>
                  <td>Academic Writing</td>
                  <td>A</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>

            <h4 className="text-decoration-underline mb-3 mt-5">LEVEL 200</h4>
            <h4 className="text-decoration-underline mb-3 text-center mt-3">
              First Semester
            </h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Course Code</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Grade Point</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">DCIT 203</th>
                  <td>Digital and Logic Design System</td>
                  <td>B+</td>
                  <td>10.5</td>
                </tr>
                <tr>
                  <th scope="row">MATH 225</th>
                  <td>Vectors and Mechanics</td>
                  <td>B+</td>
                  <td>10.5</td>
                </tr>
                <tr>
                  <th scope="row">DCIT 201</th>
                  <td>Programming I</td>
                  <td>A</td>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">MATH 223</th>
                  <td>Calculus II</td>
                  <td>B</td>
                  <td>9</td>
                </tr>
                <tr>
                  <th scope="row">DCIT 205</th>
                  <td>Multi Media and Web Design</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <th scope="row">MATH 220</th>
                  <td>Introduction to Computer Mathematics</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <th scope="row">UGRC 210</th>
                  <td>Academic Writing II</td>
                  <td>A</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>

             </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GradeReport;
