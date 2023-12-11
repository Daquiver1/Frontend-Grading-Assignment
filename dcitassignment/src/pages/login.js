import React from 'react'
import '../styles/login.css';

function Login() {
  return (
    <div>
      <div className='loginclass'>Login</div>
      <form>
        <div className='studentdiv'>
        <label className='studentid' for="studentID">Student ID: </label>
        <input className="boxes" type="text" id="studentID" placeholder='StudentID' maxLength={8} required></input>
        </div>
        <div className='passworddiv'>
        <label  className="password" for="password" >Password: </label>
        <input  className="boxes" type="password" id="password" maxLength={5} required></input>
        </div>
        <div className='submitdiv'>
          <button className='submitbutton' type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  )
}

export default Login