import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import './Missing Grade.css'
import Landing from './footer';


   


export const Missing = () => {
    const [isSent, setIsSent] = useState(false);
  
    const handleButtonClick = () => {
      setIsSent(true);
    }
    return (
            <>
               <Navbar></Navbar>
              <form>
              <h2> Missing Grade? Fill the Form Below</h2>
                 <div style={{boxSizing:'border-box'}}>
                  <h1 style={{textAlign:'center'}}>Fill  <span style={{color:'rgb(29 185 237)'}}>Form</span></h1>
                 
                  <input style={{}} type="text"  name="Course Name" id="" placeholder='Enter Course Name' />
                  <input type="text"  name="Instructor Name" id="" placeholder='Instructor Name' />
                  <input type="Text"  name="Expected Grade" id="" placeholder='Expected Grade:example, B+'/>
                  <textarea  style={{height:"260px"}} name="message" id="" cols="30" rows="10" placeholder='type here .......'/>
                  {isSent && <p style={{ color: 'blue', textAlign: 'center' }}>Sent successfully!</p>}
                   <button style={{marginLeft:"50px", marginTop:"10px" ,padding:"8px", width:"90px",fontFamily:"arial,sans-serif;",fontSize:"15px",alignItems:"center",border:"none", backgroundColor: "rgb(29 185 237)",color:"#fff"}} type='button'onClick={handleButtonClick}>send</button>
                   
                 </div>
              </form>

              <Landing />
          </>
    
    );
};