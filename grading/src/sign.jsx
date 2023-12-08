import './sign.css';







function Apps() {
  return (
   
   
    <div>
      
      
    <div >
      <br></br>
   <h1>Sign Form </h1>

    </div>



   < div class="signup-form">
    <h2>Sign In</h2>
    <form action="#" method="post">
      <div class="form-group">
        <label for="username">Student ID:</label>
        <input type="text" id="username" name="username" placeholder="Username" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"placeholder="Password" required />
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
      </div>
      <div class="form-group">
        <input type="submit" value="login"/>
      </div>
    </form>
  </div>
   
   
   

    </div>
    
    
  );
}

export default Apps;

