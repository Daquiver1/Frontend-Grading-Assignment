import React from 'react'
import { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import comScience_logo from "../Images/comScience_logo.png"
import "../Styling/login.css"


function Login(props) {

  

  
  var [pin,SetPin] = useState();
  var [sid,setSid] = useState();
  var [authstate,SetAuth] = useState("N/A");
 
  

  const Loguin = () => {
    
        if (pin==undefined || sid ==undefined) {
          SetAuth("False");
        }
        else {
          SetAuth("True");
        }
      
  }

  return (
    <div className='Main'>
       {(authstate=="True")?(

          <Redirect to="/Dashboard" />
       ):(
          <div className='Main0'>  
          <div className='Form'>
          <img className='logo' height="50px" width="35px" src={comScience_logo}></img>
               <h1>MGRS</h1>
               <text id='text00'> SID: </text>
               <input id='input'  onChange={(event)=>setSid(event.target.value)} />
               <text id='text00'> PIN: </text>
               <input id='input'  onChange={(text)=>{SetPin(text.target.value)}} />
               <button id='Login' onClick={()=>Loguin()}>Login</button>
               {
                (authstate=="False")?(

                                      <div>
                                           Incorrect or empty SID or PIN!
                                      </div>

                                     ):(
                                      <text>MGRS V1.0</text>
                                     )
               }
          </div>
          </div>

       )}
    </div>
  )
}

export default Login