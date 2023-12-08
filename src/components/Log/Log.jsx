import React from 'react'
import './Log.css'



const Log = () => {
  return (
<div>
    <div className="mask">
  
  </div>


  <div className="loginbox">

      <h1 className="h1">Login Here</h1>
    <form className="form1">
      <p>Student ID</p>
      <input type="text" name="" placeholder="Enter Student ID" required />
        <p>PIN</p>
      <input type="password" name="" placeholder="Enter PIN Here" required />
      <input type="Submit" className="log" name="" value="login" />

    </form>
  </div>

</div>
  )
}

export default Log