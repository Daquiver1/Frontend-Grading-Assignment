import React from 'react'
import "../Styling/Login.css"
import { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function Login(props) {

   
  var [pin,SetPin] = useState();
  var [sid,setSid] = useState("1221");
  var [authstate,SetAuth] = useState("N/A");
  var sidd; 


  const Loguin = () => {
    
        sidd = sid
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

          <div className='Form'>
               <h1>MGRS</h1>
               <text id='text00'> SID: </text>
               <input id='input'  onChange={(event)=>setSid(event.target.value)} />
               <text id='text00'> PIN: </text>
               <input id='input'  onChange={(text)=>{SetPin(text.target.value)}} />
               <button onClick={()=>Loguin()}>Login</button>
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

       )}
    </div>
  )
}

export default Login