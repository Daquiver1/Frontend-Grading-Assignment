
function CurrentGrade(){

    return(
        <>
        <h2 className="current-grade">Current Grades</h2>
            <table>
               <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>GPT</th>
                </tr>
                <tr>
                    <td>DCIT205</td>
                    <td>Multimedia and Web Design</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>

                </tr> 
                <tr>
                    <td>DCIT201</td>
                    <td>Programming 1</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>DCIT203</td>
                    <td>Logic Design and Circuits</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>DCIT207</td>
                    <td>Computer Architeture and Organization</td>
                    <td>2</td>
                    <td>A</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>MATH223</td>
                    <td>Calculus 2</td>
                    <td>3</td>
                    <td>A</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>CBAS210</td>
                    <td>Academic Writing II</td>
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
            </table>
        </>
    )
}
export default CurrentGrade