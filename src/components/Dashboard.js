const Dashboard = () => {
    return (
        <>
        <div className="dashboard">
            <div className="notification">
                <div className="card card-one">
                    <span className="notification-name">Missing Grade(s):</span>    
                    <span className="notification-value">0</span>    
                </div>
                <div className="card card-one">
                    <span className="notification-name">Current GPA:</span>    
                    <span className="notification-value">3.50</span>    
                </div>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Code</th>
                        <th>Course title</th>
                        <th>Credit</th>
                        <th>Grade</th>
                        <th>GPT</th>
                    </tr>
                    <tr>
                        <td>CBAS210</td>
                        <td>ACADEMIC WRITING II</td>
                        <td>3</td>
                        <td>A</td>
                        <td>12</td>
                        
                    </tr>
                    <tr>
                        <td>DCIT201</td>
                        <td>PROGRAMING</td>
                        <td>3</td>
                        <td>B</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>DCIT203</td>
                        <td>DIGITAL & LOGIC SYSTEM DESIGN</td>
                        <td>3</td>
                        <td>B+</td>
                        <td>11.5</td>
                    </tr>
                    <tr>
                        <td>DCIT205</td>
                        <td>MULTI MEDIA AND WEB DESIGN</td>
                        <td>3</td>
                        <td>A</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>DCIT209</td>
                        <td>E-BUSINESS ARCHITECTURES</td>
                        <td>3</td>
                        <td>A</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>DCIT207</td>
                        <td>COMPUTER ARCHITECTURE</td>
                        <td>3</td>
                        <td>A</td>
                        <td>12</td>
                    </tr>
                </table>
            </div>
        </div>
        </>
    );
}
 
export default Dashboard;