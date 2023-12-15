import React, {useState} from "react";
import NavBar from "../Components/Header2";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";



const GradeForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    courseCode: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log('Form Submitted:', formData);
  };


  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <Sidebar />
        </div>

        <div className="col-md-12 col-lg-8">
          <div className="container mt-5">
            <h2 className="text-center fs-1 fw-bolder text-info">
              REPORT YOUR COMPLAINT
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="courseName" className="form-label ms-2 fs-4">
                  Course Name:
                </label>
                <br />
                <select
                  name="courseName"
                  id="courseName"
                  className="bg-transparent border-1 border-info w-100 form-control fs-5"
                  style={{ borderRadius: "43px" }}
                  value={formData.courseName}
                  onChange={handleChange}
                >
                  <option value="Programming 1">Programming 1</option>
                  <option value="Introduction to Computer Science">
                    Introduction to Computer Science
                  </option>
                  <option value="Multi-media and Web Design">
                    Multi-media and Web Design
                  </option>
                  <option value="Calculus 1">Calculus 1</option>
                  <option value="Digital and Logical System">
                    Digital and Logical System
                  </option>
                  <option value="Office Productivity Tool">
                    Office Productivity Tool
                  </option>
                  <option value="Critical Thinking">Critical Thinking</option>
                  <option value="Algebra and Trigonometry">
                    Algebra and Trigonometry
                  </option>
                  <option value="Vectors and Geometry">
                    Vectors and Geometry
                  </option>
                  <option value="Programming Fundamental">
                    Programming Fundamental
                  </option>
                  <option value="Introduction to Probability and Statistics I">
                    Introduction to Probability and Statistics I
                  </option>
                  <option value="Introduction to Probability and Statistics II">
                    Introduction to Probability and Statistics II
                  </option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="courseCode" className="form-label ms-2 fs-4">
                  Course Code:
                </label>
                <br />
                <select
                  name="courseCode"
                  id="courseCode"
                  className="form-control bg-transparent border-1 border-info w-100 fs-5"
                  style={{ borderRadius: "43px" }}
                  value={formData.courseCode}
                  onChange={handleChange}
                >
                  <option value="DCIT 201">DCIT 201</option>
                  <option value="DCIT 101">DCIT 101</option>
                  <option value="DCIT 205">DCIT 205</option>
                  <option value="MATH 223">MATH 223</option>
                  <option value="DCIT 203">DCIT 203</option>
                  <option value="DCIT 103">DCIT 103</option>
                  <option value="UGRC 150">UGRC 150</option>
                  <option value="MATH 121">MATH 121</option>
                  <option value="MATH 123">MATH 123</option>
                  <option value="DCIT 104">DCIT 104</option>
                  <option value="STAT 111">STAT 111</option>
                  <option value="STAT 112">STAT 112</option>
                </select>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="instructorName"
                  className="form-label ms-2 fs-4"
                >
                  Instructor's Name:
                </label>
                <br />
                <select
                  name="instructorName"
                  id="instructorName"
                  className="form-control bg-transparent border-1 border-info w-100 fs-5"
                  style={{ borderRadius: "43px" }}
                  value={formData.instructorName}
                  onChange={handleChange}
                >
                  <option value="Micheal Agbo Soli Tettey">
                    Micheal Agbo Soli Tettey
                  </option>
                  <option value="Mark Atta Mensah">Mark Atta Mensah</option>
                  <option value="Aziz Dwumfour Abdullai">
                    Aziz Dwumfour Abdullai
                  </option>
                  <option value="Paul Armah Nii-Tackie">
                    Paul Armah Nii-Tackie
                  </option>
                  <option value="Ferdinard Katriku">Ferdinard Katriku</option>
                  <option value="Seth Sarfo">Seth Sarfo</option>
                  <option value="Ralph Twum">Ralph Twum</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="expectedGrade" className="form-label ms-2 fs-4">
                  Expected Grade:
                </label>
                <br />
                <select
                  name="expectedGrade"
                  id="expectedGrade"
                  className="form-control bg-transparent border-1 border-info w-100 fs-5"
                  style={{ borderRadius: "43px" }}
                  value={formData.expectedGrade}
                  onChange={handleChange}
                >
                  <option value="A">A</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="C+">C+</option>
                  <option value="C">C</option>
                  <option value="D+">D+</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="explanation" className="form-label ms-2 fs-4">
                  Explanation Field:
                </label>
                <textarea
                  name="explanation"
                  id="explanation"
                  cols="30"
                  rows="5"
                  className="form-control bg-transparent border-1 border-info w-100 ps-4 fs-5"
                  style={{ borderRadius: "43px" }}
                  value={formData.explanation}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-outline-info fw-bold shadow mt-3 fs-4 mb-4"
                >
                  SUBMIT REPORT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GradeForm;
