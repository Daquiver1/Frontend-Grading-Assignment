import React from "react";
import Sidebar from "../Components/Sidebar";
import NavBar from "../Components/Header2";
import Footer from "../Components/Footer";

const AcademicReport = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="row">
        <div className="col-md-12 col-lg-4">
          {/* <Sidebar /> */}
        </div>
        <div className="col-md-12 col-lg-8">
          <div className="container">
            <form className="d-flex">
              <input
                className="form-control me-2 mt-3"
                type="search"
                placeholder="Filter Year"
                aria-label="Search"
              />
              <button className="btn btn-outline-success mt-3" type="submit">
                Search
              </button>
            </form>

            <div className="container-fluid">
              <p className="text-center mt-5 fs-3 fw-900 text-decoration-underline">
                STUDENT'S ACADEMIC REPORT
              </p>

              <h4>Your Progress So Far!!!</h4>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "78%" }}
                  aria-valuenow="78"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="btn-group">
              <button
                type="button"
                className="btn btn-info dropdown-toggle mt-4 mb-4 ms-5"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CURRENT YEAR
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    2019
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    2020
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    2021
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    2022
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    2023
                  </a>
                </li>
              </ul>
            </div>

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
          </div>
        </div>
      </div>

      {/* <Footer/> */}
    </>
  );
};

export default AcademicReport;
