import React from 'react'
import "./Login.css"
import Better from './Images/dark.jpg'

const Login = () => {
  return (
<div className="fill">
  
  <div className="mask">
   <img className="" src={Better} />

   
  </div>

  

  <div className="">
  

<h1 className="h1">student's login credentials</h1>
<form className="form1">
<br/><p>Student ID</p> <br/>
<input type="text" name="" placeholder="" required />
<p>PIN</p> <br/>
<input className="special" type="password" name="" placeholder="" required />
<br/>
<br/>
 <button className="bss">Login</button>
 <button className="bss">Forget Pin</button>
 <button className="bss">Change Pin</button>
 <button className="bss">Change Pin</button>
 <button className="bss">Forgot Student Number</button>

</form>
<div className="vhim">
<div className="aspan"><span className="aspan1">Prospective Student</span></div>
<span  className="aspan2">Ditch the g
rade-hunting blues and unlock your academic power! 
Login to your student portal and experience the ultimate learning command center.
 Track your progress with laser-focus, submit reports with a click, and stay 
 connected to your academic journey – all within a personalized dashboard that 
 fuels your success. No more paper trails, just pure academic empowerment. 
 So, unleash your inner scholar and log in today! It's time to own your grades, own your reports, and
 own your academic destiny.</span>

</div>
</div>


</div>
      
    
  )
}

export default Login
