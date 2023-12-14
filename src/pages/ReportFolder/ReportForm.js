import React from 'react';
import './ReportStyles.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

function ReportForm() {
  return (
   <div>
    <div className='report'>
         <Navbar></Navbar>
        <h1 className='report-title'>Missing Grade Report Form</h1>
	<p className='report-title'>Please fill  out this form with the required informationss</p>

	<form action="WhereTheFormIsDelivered" method="post">
		<fieldset>
			<label for="course-name">
			Enter Your Course Name: <input id="first-name" type="text" name="course-name" required></input>
		    </label>
			<label for="instructor-name">
			Enter Your Instructor Name: <input id="instructor-name" type="text" name="instructor-name" required></input>
		    </label>
			<label for="expected-grade">
			Enter Your Expected Grade: <input id="expected-grade" type="text" name="expected-grade" required></input>
		    </label>
		    <label for="explanation">Explanation Field: 
				<textarea placeholder="I'd like to report..." name="explanation" id="explanation" rows="9" cols="30"></textarea>			
			</label>
		</fieldset>
		<input type="submit" value="Submit"></input>
	</form>
    </div>
	<Footer></Footer>
	</div>
  )
}

export default ReportForm;