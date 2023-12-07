import Layout from './layout';
import schlogo from './schlogo.png';
import grade from './grade.jpg';
import Missing from './Missing';



const Out = () => {
      return (
        <>
        
      <br></br>
      <br></br>
      <h3 style={{color:"#BD9C6C"}}>Log In</h3>
      <div id="flexbox">
        <form style={{alignContent:"center",alignSelf:"center",justifyContent:"center",marginLeft:"300px"}}>
            <label>Student ID: <input type="text" placeholder="StudentID" maxLength={8}></input>  </label><br></br>
            <label>PIN: <input type="password" placeholder="PIN" maxLength={5}></input></label><br></br>
            
            <button Onclick={Missing}>Login</button>
                           
        </form>
      </div>
      <br></br>
      <br></br>
      <h3 style={{color:"#BD9C6C"}}>Overview of the system</h3>
       <div id="bflexbox">
        <div id="flexitem">
          <p style={{width:"600px"}}>
           This system helps students to access their grade reports, a detailed view of the grades scored for all
           courses.The system also reports noticifications to students to alert 
           them on missing grades for a particular course or courses,
           this allows students  make complains to the instructors
           of the course if their grade is not showing. A missing grade report
           form is filled by the student and submitted to the instructor to solve any problem regarding the grades for a particular 
           course. There is also an instructor contact page that allows students to contact and seek for information regarding 
           grade issues personally from their instructor through mail.
          </p>
        </div>
        <div id="flexitem">
          <p style={{width:"600px"}}>
           This system has and will continue to help this institution handle grade reporting issues as it makes the job very easy
           and all instructors responsible to make sure that they upload the grade of each student that offered their course in during
           a particular period of study. This hass reduced the stress that students have to go through when they can't access their grades
           for a particular course.
          </p>
        </div>
       </div>
       <div id="imgbox">
        <img src={grade} alt="eg of grades"></img>
       </div>
      
    
        </>

      )
    };
    
    export default Out;