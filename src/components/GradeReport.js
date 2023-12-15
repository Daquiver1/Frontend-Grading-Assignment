import "../components-css/GradeReport.css"

const semestersData = [
    {
      id: 1,
      semester: 'First Semester',
      gpa: 3.5,
      ccpa: 3.5,
    },
    {
      id: 2,
      semester: 'Second Semester',
      gpa: 3.8,
      ccpa: 3.7,
    },
    // Add more semesters as needed
  ];
const GradeReport = () => {
    return (
        <>
            <div className="gradeReport">
                <div className="container">
                    <header>
                        <h1>Grade Report</h1>
                    </header>

                    <div className="section">
                        <p>
                        Welcome to your Grade Report. Below is a summary of your academic
                        performance for each semester.
                        </p>
                    </div>

                    <div className="section">
                        {semestersData.map((semester) => (
                        <div key={semester.id} className="cardStyle">
                            <h3>{semester.semester}</h3>
                            <p>
                            GPA: {semester.gpa} | CCPA: {semester.ccpa}
                            </p>
                        </div>
                        ))}
                    </div>

                    {/* Your existing table of courses can go here */}

                </div>
                <div className="academicTable">
                    <center>Grade Report</center>
                    <table>
                        <tbody>
                            <tr>
                                <th className="thead" colSpan={5}>Level 100 [First Semester]</th>
                                
                            </tr>
                            <tr className="titles">
                                <th>Course Title</th>
                                <th>Course Code</th>
                                <th>Credit</th>
                                <th>Grade</th>
                                <th>GPT</th>
                            </tr>
                            <tr>
                                <td>Office Productivity Tools</td>
                                <td className="code">DCIT 103</td>
                                <td>3</td>
                                <td>B</td>
                                <td className="gpt">3.0</td>
                            </tr>
                            <tr>
                                <td>Introduction To Computer Science</td>
                                <td className="code">DCIT 101</td>
                                <td>3</td>
                                <td>A</td>
                                <td className="gpt">4.0</td>
                            </tr>
                            <tr>
                                <td>Introduction to Statistic and Probability I</td>
                                <td className="code">STAT 111</td>
                                <td>3</td>
                                <td>B+</td>
                                <td className="gpt">3.5</td>
                            </tr>
                            <tr>
                                <td>Algebra And Trigonometry</td>
                                <td className="code">MATH 121</td>
                                <td>3</td>
                                <td>c+</td>
                                <td className="gpt">2.5</td>
                            </tr>
                            <tr>
                                <td>Critical Thinking And Practical Reasoning</td>
                                <td className="code">UGRC 150</td>
                                <td>3</td>
                                <td>A</td>
                                <td className="gpt">4.0</td>
                            </tr>
                            <tr>
                                <td>Vector And Geometry</td>
                                <td className="code">MATH 123</td>
                                <td>3</td>
                                <td>C</td>
                                <td className="gpt">2.0</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <th className="thead" colSpan={5}>Level 100 [second Semester]</th>
                            </tr>
                            <tr className="titles">
                                <th>Course Title</th>
                                <th>Course Code</th>
                                <th>Credit</th>
                                <th>Grade</th>
                                <th>GPT</th>
                            </tr>
                            <tr>
                                <td>Office Productivity Tools</td>
                                <td className="code">DCIT 103</td>
                                <td>3</td>
                                <td>B</td>
                                <td className="gpt">3.0</td>
                            </tr>
                            <tr>
                                <td>Introduction To Computer Science</td>
                                <td className="code">DCIT 101</td>
                                <td>3</td>
                                <td>A</td>
                                <td className="gpt">4.0</td>
                            </tr>
                            <tr>
                                <td>Introduction to Statistic and Probability I</td>
                                <td className="code">STAT 111</td>
                                <td>3</td>
                                <td>-</td>
                                <td className="gpt">-</td>
                            </tr>
                            <tr>
                                <td>Algebra And Trigonometry</td>
                                <td className="code">MATH 121</td>
                                <td>3</td>
                                <td>B</td>
                                <td className="gpt">4.0</td>
                            </tr>
                            <tr>
                                <td>Critical Thinking And Practical Reasoning</td>
                                <td className="code">UGRC 150</td>
                                <td>3</td>
                                <td>-</td>
                                <td className="gpt">-</td>
                            </tr>
                            <tr>
                                <td>Vector And Geometry</td>
                                <td className="code">MATH 123</td>
                                <td>3</td>
                                <td>A</td>
                                <td className="gpt">4.0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
 
export default GradeReport;