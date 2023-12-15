import CurrentGrade from "./CurrentGrade"

function ReportCard(){
    return(
        <>
        
        <h2 className="level1">Level 100 First Semester</h2><br />
        <table>
         <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>GPT</th>
         </tr>
         <tr>
                    <td>DCIT101</td>
                    <td>Introduction to Computer Science</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
         </tr> 
         <tr>
                    <td>DCIT103</td>
                    <td>Office Tools Productivity</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
         </tr> 
         <tr>
                    <td>MATH121</td>
                    <td>Algebra and Trigonometry</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
         </tr> 
         <tr>
                    <td>MATH123</td>
                    <td>Vectors and Algebra</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
         </tr> 
         <tr>
                    <td>STAT111</td>
                    <td>Stattistics and Probability I</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
         </tr> 
         <tr>
                    <td>UGRC150</td>
                    <td>Critical Thinking and Practical Reasoning</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
         </tr> 
         <tr>
                    <th>CCT: 18</th>
                    <th>CCP: 17</th>
                    <th>CGPA: 4.0</th>
                    <th> First Class</th>
                    </tr>  
        </table><br /><br />
        <h2 className="level1">Level 100 Second Semester</h2><br />
        <table>
         <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>GPT</th>
         </tr>
         <tr>
                    <td>DCIT102</td>
                    <td>Logic Design and Circuit</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
         </tr> 
         <tr>
                    <td>DCIT104</td>
                    <td>Introduction to Programming</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
         </tr> 
         <tr>
                    <td>MATH122</td>
                    <td>Calculus I</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
         </tr> 
         <tr>
                    <td>MATH126</td>
                    <td>Algebra and Geometry</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
         </tr> 
         <tr>
                    <td>STAT112</td>
                    <td>Stattistics and Probability II</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
         </tr> 
         <tr>
                    <td>UGRC110</td>
                    <td>Academic Writing I</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
         </tr> 
         <tr>
                    <th>CCT: 18</th>
                    <th>CCP: 18</th>
                    <th>CGPA: 4.0</th>
                    <th> First Class</th>
                    </tr>  
        </table><br /><br />

        <CurrentGrade></CurrentGrade>
        </>
    )

}
export default ReportCard