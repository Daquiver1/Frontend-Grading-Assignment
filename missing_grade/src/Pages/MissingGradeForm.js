import React from "react";
import './Styles/missinggrade.css'
import { useState } from "react";

const MissingGradeForm = () => {
  const [coursename, setcoursename] = useState('')
  const [instructorname, setinstructorname] = useState('')
  const [expectedgrade, setexpectedgrade] = useState('')
  const [explanation, setexplanation] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    
    setcoursename('')
    setinstructorname('')
    setexpectedgrade('')
    setexplanation('')
  }

  return ( 
    <div className="Report">
      <h2>Fill the form below to report your missing grades</h2>
      <form onSubmit={handleLogin}>
     <label><p>Course Name: </p>
         <input type="text" placeholder="Course Name" value={coursename}
           onChange={(e) => setcoursename(e.target.value)}/>
     </label>
     <label><p>Instructor Name: </p>
         <input type="text" placeholder="Instructor Name" value={instructorname}
           onChange={(e) => setinstructorname(e.target.value)}/>
     </label>
     <label><p>Expected Grade: </p>
         <input type="text" placeholder="Expected Grade" value={expectedgrade}
           onChange={(e) => setexpectedgrade(e.target.value)}/>
     </label>
     <label><p>Explanation: </p>
         <input type="text" placeholder="Explanation" value={explanation}
           onChange={(e) => setexplanation(e.target.value)}/>
     </label>
     <label>
          <button onClick={handleLogin}>Submit</button>
      </label>
     </form>
    </div>
   );
}
 
export default MissingGradeForm;