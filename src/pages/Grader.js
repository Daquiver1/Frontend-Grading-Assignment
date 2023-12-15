import React from "react";
import "./Grade.css"
import Tmage from '../images/panic.jpg'


export const Grader = () => {

  return (
    <div class="main">
      <div className="grade-table">
        <h1>Grade Records</h1>
        <div className="imgcont">
        <img className="MainI" src={Tmage} alt='Dmage' />
        </div>

        <h2>Year: 2023</h2>
        <h3>Semester: First</h3>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Course Name</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DCIT 201</td>
              <td>Introduction to computational Logic</td>
              <td>96</td>
              <td>A+</td>
            </tr>
            <tr>
              <td>DCIT 202</td>
              <td>Introduction to computer science II</td>
              <td>74</td>
              <td>B</td>
            </tr>
            <tr>
              <td>DCIT 203</td>
              <td>Programming fandamentals</td>
              <td>77</td>
              <td>B+</td>
            </tr>
            <tr>
              <td>DCIT 204</td>
              <td>calculusI</td>
              <td>85</td>
              <td>A</td>
            </tr>
            <tr>
              <td>DCIT 205</td>
              <td>Maths for IT professionals</td>
              <td>83</td>
              <td>A</td>
            </tr>
            <tr>
              <td>UGRC 110</td>
              <td>Academic writing</td>
              <td>95</td>
              <td>A+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grade-table">
        <h2>2023</h2>
        <h3>Semester: Second</h3>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Course Name</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DCIT 211</td>
              <td>E-Business Achitecture</td>
              <td>82</td>
              <td>A</td>
            </tr>
            <tr>
              <td>DCIT 223</td>
              <td>Introduction to computational Logic</td>
              <td>66</td>
              <td>C+</td>
            </tr>
            <tr>
              <td>DCIT 233</td>
              <td>Web and data analysis</td>
              <td>67</td>
              <td>C+</td>
            </tr>
            <tr>
              <td>DCIT 214</td>
              <td>Data science</td>
              <td>78</td>
              <td>B+</td>
            </tr>
            <tr>
              <td>DCIT 215</td>
              <td>Advance calculus</td>
              <td>93</td>
              <td>A+</td>
            </tr>
            <tr>
              <td>DCIT 226</td>
              <td>Computational statistics</td>
              <td>90</td>
              <td>A+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};