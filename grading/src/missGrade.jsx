import './miisGrade.css';




function Miss() {
  return (
   
   
    <div>
      
      
    <div >
      <br></br>
  
  <h1>Report Form </h1>

    </div>



   < div class="signup-form">
    <h2>Report Grade</h2>
    <form action="#" method="post">
      <div class="form-group">
        <label for="username">Student ID:</label>
        <input type="text" id="username" name="username" placeholder="Username" required />
      </div>
      <div class="form-group">
        <label for="Grade">Grade:</label>
        <input type="value" 
          placeholder="Expected Grade" required />
      </div>
      <div class="form-group">
        <label for="instructor">Instructor:</label>
        <input type="text" id="password" placeholder="Instructor" required />
      </div>
      <div class="form-group computer-sciences-course">
        <label for="course">Select Course:</label>
        <select id="course" name="course">
          <option value="computer-sciences" class="computer-sciences-course">Computer Sciences</option>
          <option value="other">Web Development</option>
          <option value="other">Python Development</option>
          <option value="other">Java Development</option>
          <option value="other">PHP Courses</option>
          <option value="other">APP development Courses</option>
        </select>
        <div class="form-group">
        <label for="Explanation">Explain:</label>
        <input type="text" 
          placeholder="Explain" required />
      </div>
      </div>

      <div class="form-group">
        <input type="submit" value="Report"/>
      </div>
    </form>
  </div>
   
   



    </div>
    
    
  );
}

export default Miss;

