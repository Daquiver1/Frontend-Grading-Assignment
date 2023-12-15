import "../components-css/AcademicRecords.css"

import { useEffect, useState } from "react";

const AcademicRecords = ({setCodeValue, setGradeValue}) => {
    let [grades, setGrades] = useState([])
    let [code, setCode] = useState([])

    useEffect(() => {
        let gradesPercent = []
        let gradeArray =[]
        let codeArray = []
        document.querySelectorAll(".gpt").forEach((grade) => {
            gradeArray.push(grade.innerHTML)
        })
        document.querySelectorAll(".code").forEach((code) => {
            codeArray.push(code.innerHTML)
        })
        
        setCode(codeArray)
        for(let i = 0; i < gradeArray.length; i++){
            let num = gradeArray[i]
            if(num === "0") num = 20;
            if(num === "1.0") num = 53;
            if(num === "1.5") num = 57;
            if(num === "2.0") num = 62;
            if(num === "2.5") num = 68;
            if(num === "3.0") num = 73;
            if(num === "3.5") num = 79;
            if(num === "4.0") num = 90;
            if(num === "-") num = 2;
            gradesPercent.push(num)
        }
        setGrades(gradesPercent)
    }, [])
    setCodeValue(code)
    setGradeValue(grades)
    return (
        <>
            <div className="academicTable">
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
        </>
    );
}
 
export default AcademicRecords