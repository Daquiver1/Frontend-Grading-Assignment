import "./App.css";

function App() {
  return (
    <>
      <header id="HM">
        <div className="jm">
          <div className="pg">
            <img src="src/pictures/download.png" width="300px" height="150px" />
          </div>
          <div className="UN">
            <h1>
              <p>Grade Report</p>
            </h1>
          </div>
        </div>
        <hr />
      </header>
      <div className="container">
        <div className="sidenav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className="main">
          <div className="select">
            <div className="LL">
              <label htmlFor="level">Level: </label>
              <select id="level">
                <option value="all" selected>
                  All
                </option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
              </select>
              <br />
            </div>
            <div className="LL">
              <label htmlFor="level">Semester: </label>
              <select id="level">
                <option value="all" selected>
                  All
                </option>
                <option value="100">First</option>
                <option value="200">Second</option>
              </select>
            </div>
            <div className="LL">
              <label htmlFor="level">Semester: </label>
              <select id="level">
                <option value="all" selected>
                  All
                </option>
                <option value="100">2023</option>
                <option value="200">2024</option>
                <option value="200">2025</option>
                <option value="200">2026</option>
              </select>
            </div>
          </div>
          <br />
          <hr />
          <div className="grade">
            <table>
              <thead>
                <tr>
                  <th className="gd">Course</th>
                  <th>Grade</th>
                  <th>Level</th>
                  <th>Semester</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="gd">Critical Thinking and Practical Reasoning </td>
                  <td>A</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
                <tr>
                  <td className="gd">Introduction to Computer Science</td>
                  <td>N/A</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
                <tr>
                  <td className="gd">Office Productivity Tools</td>
                  <td>B</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
                <tr>
                  <td className="gd">Mathematics for IT Professionals</td>
                  <td>A</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
                <tr>
                  <td className="gd">Introduction to Statistics and Probability</td>
                  <td>A</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
                <tr>
                  <td className="gd">Algebra and Trigonometry</td>
                  <td>B+</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
                <tr>
                  <td className="gd">Vectors and Geometry</td>
                  <td>C+</td>
                  <td>100</td>
                  <td>First Semester</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
