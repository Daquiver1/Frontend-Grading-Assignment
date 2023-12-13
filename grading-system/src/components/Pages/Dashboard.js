import Alert1 from "./Alert1";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Alert1 />
      <div className="table-div">
        <h4>
          ACADEMIC YEAR: &nbsp; &nbsp; 2022/2023 &nbsp; &nbsp; FIRST SEMESTER{" "}
        </h4>
        <br />
        <table>
          <thead>
            <tr>
              <th> CODE</th>
              <th>COURSE TITLE</th>
              <th>CREDIT</th>
              <th>GRADE</th>
              <th>GPT</th>
            </tr>
          </thead>
          <tbody id="grade-list">
            <tr>
              <td>DCIT 101</td>
              <td>INTRODUCTION TO COMPUTER SCIENCE</td>
              <td>3</td>
              <td>B+</td>
              <td>10.5</td>
            </tr>
            <tr>
              <td>DCIT 103</td>
              <td>OFFICE PRODUCTIVITY TOOLS</td>
              <td>3</td>
              <td>A</td>
              <td>12</td>
            </tr>
            <tr>
              <td>MATH 121</td>
              <td>ALGEBRA AND TRIGONOMETRY</td>
              <td>3</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>MATH 123</td>
              <td>VECTORS AND GEOMETRY</td>
              <td>3</td>
              <td>B</td>
              <td>9</td>
            </tr>
            <tr>
              <td>STAT 111</td>
              <td>INTRODUCTION TO STATISTICS AND PROBABILITY I</td>
              <td>3</td>
              <td>A</td>
              <td>12</td>
            </tr>
            <tr>
              <td>UGRC 150</td>
              <td>CRITICAL THINKING AND PRACTICAL REASONING</td>
              <td>3</td>
              <td>A</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
        <br /> <br />
        <h4>
          ACADEMIC YEAR: &nbsp; &nbsp; 2022/2023 &nbsp; &nbsp; SECOND SEMESTER{" "}
        </h4>
        <br />
        <table>
          <thead>
            <tr>
              <th> CODE</th>
              <th>COURSE TITLE</th>
              <th>CREDIT</th>
              <th>GRADE</th>
              <th>GPT</th>
            </tr>
          </thead>
          <tbody id="grade-list">
            <tr>
              <td>DCIT 102</td>
              <td>COMPUTER HARDWARE FUNDAMENTALS AND CIRCUITS</td>
              <td>3</td>
              <td>B</td>
              <td>9</td>
            </tr>
            <tr>
              <td>DCIT 104</td>
              <td>PROGRAMMING FUNDAMENTALS</td>
              <td>3</td>
              <td>B+</td>
              <td>10.5</td>
            </tr>
            <tr>
              <td>MATH 122</td>
              <td>CALCULUS I</td>
              <td>3</td>
              <td>A</td>
              <td>12</td>
            </tr>
            <tr>
              <td>MATH 126</td>
              <td>ALGEBRA AND GEOMETRY</td>
              <td>3</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>STAT 112</td>
              <td>INTRODUCTION TO STATISTICS AND PROBABILITY II</td>
              <td>3</td>
              <td>A</td>
              <td>12</td>
            </tr>
            <tr>
              <td>UGRC 110</td>
              <td>ACADEMIC WRITING I </td>
              <td>3</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <br /> <br />
        <h4>
          ACADEMIC YEAR: &nbsp; &nbsp; 2023/2024 &nbsp; &nbsp; FIRST SEMESTER{" "}
        </h4>
        <br />
        <table>
          <thead>
            <tr>
              <th> CODE</th>
              <th>COURSE TITLE</th>
              <th>CREDIT</th>
              <th>GRADE</th>
              <th>GPT</th>
            </tr>
          </thead>
          <tbody id="grade-list">
            <tr>
              <td>CBAS 210</td>
              <td>ACADEMIC WRITING II</td>
              <td>3</td>
              <td>A</td>
              <td>12</td>
            </tr>
            <tr>
              <td>DCIT 201</td>
              <td>PROGRAMMING I</td>
              <td>3</td>
              <td>A</td>
              <td>12</td>
            </tr>
            <tr>
              <td>DCIT 203</td>
              <td>DIGITAL AND LOGIC SYSTEM DESIGN</td>
              <td>3</td>
              <td>A</td>
              <td>12</td>
            </tr>
            <tr>
              <td>DCIT 205</td>
              <td>MULTIMEDIA AND WEB DESIGN</td>
              <td>3</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>DCIT 207</td>
              <td>COMPUTER ORGANIZATION & ARCHITECTURE</td>
              <td>3</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>MATH 223</td>
              <td>CALCULUS II </td>
              <td>3</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Dashboard;
