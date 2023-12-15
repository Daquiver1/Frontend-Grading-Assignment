import "./Login.css"
import React from 'react'




const LoginC = () => {
  return (
    <div>
  
        

        

        <div className="loginbox">
        

   <h1 className="h1">student's login credentials</h1>
<form className="form1">
    <br/><p>Student ID</p>
    <input type="text" name="" placeholder="" required />
    <p>PIN</p> 
    <input className="special" type="password" name="" placeholder="" required />
    <br/>
    
       <button className="bss">Login</button>
       <button className="bss">Forget Pin</button>
       

</form>
<div>
<div className="aspan"><span className="aspan1">Prospective Student</span></div>
<span>Apply, Register, Change personal information, get academic and other information and make payments.</span>

</div>
</div>




    </div>
  )
}

export default LoginC
