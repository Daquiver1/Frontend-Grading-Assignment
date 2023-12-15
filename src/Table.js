
function Table(props){
    return(
        <>
        <h3 className ="reportTerm">{props.inner}</h3>
        <table>
        <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Credit</th>
            <th>Grade</th>
            <th>GPT</th>
        </tr>
        <tr>
            <td>DCIT 201</td>
            <td>PROGRAMMING 1</td>
            <td>3</td>
            <td>A</td>
            <td>12</td>
        </tr>
        <tr>
            <td>DCIT 203</td>
            <td>DIGITAL AND LOGIC SYSTEMS DESIGN</td>
            <td>3</td>
            <td>B</td>
            <td>9</td>
        </tr>
        <tr>
            <td>DCIT 205</td>
            <td>MULTIMEDIA AND WEB DESIGN</td>
            <td>3</td>
            <td>A</td>
            <td>12</td>
        </tr>
        <tr>
            <td>DCIT 207</td>
            <td>COMPUTER ORGANIZATION AND ARCHITECTURE</td>
            <td>2</td>
            <td>B+</td>
            <td>10.5</td>
        </tr>
        <tr>
            <td>CBAS 210</td>
            <td>ACADEMIC WRITING II</td>
            <td>2</td>
            <td>A</td>
            <td>12</td>
        </tr>
        <tr>
            <td>MATH 223</td>
            <td>CALCULUS 2</td>
            <td>3</td>
            <td>B+</td>
            <td>10.5</td>
        </tr>
    </table>
    </>
    );
}

export default Table;