// DashboardPage.js
import React from "react";
import Header from "../components/Header";

const DashboardPage = () => {

     return (
      <div>
        <div>
          <Header />
        </div>
    
	<main>
	   <p className="title">ACADEMIC RECORD</p>
	    <p>Student Name: John Doe<span>Date of Birth: 01/01/2000</span></p>
	    <p>Student ID: ABC123<span><b>Gender:</b> Male</span></p>
	    <p><span>Level: 200</span></p>
	 <br/>
	<hr/>

	<nav>
	<p>ACADEMIC YEAR: 2022/2023 </p>  
	<p>  SECOND SEMESTER </p>     
	<p> CCT: 18 </p>
	<p> CCP: 18 </p>
	<p> CGPA: 3.83</p>
    </nav>
	<table>
		<thead>
			<tr>
				<th>CODE</th>
				<th>COURSE TITLE</th>
				<th>CREDIT</th>
				<th>GRADE</th>
				<th>GPT</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>UGRC 220</td>
				<td>Introduction to African Studies</td>
				<td>3</td>
				<td>A</td>
				<td>12</td>
			</tr>
			<tr>
				<td>DCIT 202</td>
				<td>Mobile Application Development</td>
				<td>3</td>
				<td>A</td>
				<td>12</td>
			</tr>
			<tr>
				<td>DCIT 204</td>
				<td>Data Structures and Algorithm</td>
				<td>3</td>
				<td>B+</td>
				<td>10.5</td>
			</tr>
			<tr>
				<td>DCIT 206</td>
				<td>Systems Administration</td>
				<td>3</td>
				<td>B+</td>
				<td>10.5</td>
			</tr>
			<tr>
				<td>DCIT 208</td>
				<td>Software Engineering</td>
				<td>3</td>
				<td>A</td>
				<td>12</td>
			</tr>
			<tr>
				<td>DCIT 212</td>
				<td>Numerical and Computational Methods</td>
				<td>3</td>
				<td>A</td>
				<td>12</td>
			</tr>
			{/* <!-- Add more rows for other courses --> */}
		</tbody>
	</table>
</main>
</div>

     )
};

export default DashboardPage