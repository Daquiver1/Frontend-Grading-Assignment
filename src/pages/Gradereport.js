import React from "react"
import './Gradereport.css'

const Gradereport = () => {
  return (
    <>
      <section class="student-info">
      <h2 className="oh2">Student Information</h2>
      <div class="info">
        <p><strong>Name:</strong> Ninyung Augustine</p>
        <p><strong>Student ID:</strong> 11358176</p>
        <p><strong>Level:</strong> 100</p>
      </div>
    </section>
    <section class="report">
      <h2>Grade-Report First-Semester </h2>
      <table>
        <tr>
          <th>Subject</th>
          <th>Score</th>
          <th>Grade</th>
        </tr>
        <tr>
          <td>UGRC 150	Critical Thinking and Practical Reasoning</td>
          <td>95</td>
          <td>A+</td>
        </tr>
        <tr>
          <td>MATH 123	Vectors and Geometry</td>
          <td>88</td>
          <td>A</td>
        </tr>
        <tr>
          <td>MATH 121	Algebra and Trigonometry</td>
          <td>75</td>
          <td>B</td>
        </tr>
        <tr>
          <td>DCIT 101	Introduction to Computer Science</td>
          <td>75</td>
          <td>B</td>
        </tr>
        <tr>
          <td>DCIT 103	Office Productivity Tools</td>
          <td>75</td>
          <td>B</td>
        </tr>
        <tr>
          <td>STAT 111	Introduction to Statistics and Probability I</td>
          <td>75</td>
          <td>B</td>
        </tr>
      </table>
    </section>
    <section class="report">
      <h2>Grade-Report Second-Semester </h2>
      <table>
        <tr>
          <th>Subject</th>
          <th>Score</th>
          <th>Grade</th>
        </tr>
        <tr>
          <td>UGRC 110	Academic Writing I</td>
          <td>95</td>
          <td>A+</td>
        </tr>
        <tr>
          <td>UGRC 131-136	Understanding Human Society</td>
          <td>88</td>
          <td>A</td>
        </tr>
        <tr>
          <td>MATH 122	Calculus </td>
          <td>75</td>
          <td>B</td>
        </tr>
        <tr>
          <td>STAT 112	Introduction to Statistics and Probability II</td>
          <td>75</td>
          <td>B</td>
        </tr>
        <tr>
          <td>DDCIT 104	Programming</td>
          <td>75</td>
          <td>B</td>
        </tr>
        <tr>
          <td>DCIT 102	Computer Hardware Fund. and Circuits</td>
          <td>75</td>
          <td>B</td>
        </tr>
      </table>
    </section>
      <div className="bcontainer">
        <button className="neb"> Scroll Down For More</button>
      </div>
    </>
  )
}
export default Gradereport
