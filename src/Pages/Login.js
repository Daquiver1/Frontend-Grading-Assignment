import React from 'react'
import "../Styling/Login.css"
import { useState } from 'react';
import Landing from "./Landing"

function Login() {


  const [pin,SetPin] = useState();
  const [sid,setSid] = useState();
  const [authstate,SetAuth] = useState("N/A");


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

          <div>
               <Landing />
          </div>
       ):(

          <div className='Form'>
               <h1>MGRS</h1>
               <text id='text00'> SID: </text>
               <input id='input'  onChange={(text)=>setSid(text)} />
               <text id='text00'> PIN: </text>
               <input id='input'  onChange={(text)=>SetPin(text)} />
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