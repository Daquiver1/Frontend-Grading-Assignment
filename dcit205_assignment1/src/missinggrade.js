import React from "react";
import './MissingGrade.css';
import { Link } from 'react-router-dom';


const MissingGradeForm = () => {
  return ( 
    <div className='Report' >
    <h1>Report Missing Grade Here</h1>
    <input  className='COURSENAME' type='text' placeholder='Name of Instructor'/>
    <input className='INSTRUCTOR' type='text' placeholder='Course Name'/>
    <input className='XPGRADE' type='text' placeholder='Expected Grade'/>
    <input className='REASON' type='text' placeholder='Why?'/>

    <div> <Link to='/GradeReport'><input className='Submitbtn' type='button' value={'Submit'}/></Link></div> 
</div>



   );
}
 
export default MissingGradeForm;