// import React, { useEffect, useRef } from 'react';
import grade from './grade.jpg';
import './pages.css'
import helper from './helper.jpg'
import confused from './confused.jpg'


const Help = () =>{
    

// function Collapsible({ title, children }) {
//  const contentRef = useRef();
//  const collRef = useRef();

//  useEffect(() => {
//     collRef.current.addEventListener('click', handleClick);
//     return () => {
//       collRef.current.removeEventListener('click', handleClick);
//     };
//  }, []);

//  const handleClick = () => {
//     collRef.current.classList.toggle('active');
//     if (contentRef.current.style.display === 'block') {
//       contentRef.current.style.display = 'none';
//     } else {
//       contentRef.current.style.display = 'block';
//     }
//  };

//  return (
//     <div>
//       <div ref={collRef} className="collapsible">
//         {title}
//       </div>
//       <div ref={contentRef} className="content">
//         {children}
//       </div>
//     </div>
//  );
// }


//     <script>
// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   })
// }
// </script>
    return (
        <>
        <br></br>
        <br></br>
        <h1 style={{color:"#BD9C6C"}}>Do You Have  Questions ?</h1>
        <h4 style={{color:"grey"}}>We have answers (Well most of the times !) </h4>
        <p style={{color:"grey",fontSize:"15px"}}> Below you may find answers to the most common questions you may have on the Grade system application
            &amp; also please feel free to contact us if you still can't  find answers the answers you are looking for.
        </p>
        <div>
            <img src={confused} alt="confusion" style={{ width:500}}></img>
            <img src={helper} alt="helping hand" style={{}}></img>
        </div>
        <div style={{display:"flex",flex:"50%,50%"}}> 
        <div style={{marginLeft:"10px",width:"50%"}}>
            <h4 style={{color:"grey"}}>Questions From Students on Grade system user's experience </h4>
           
            <button type="button" className="collapsible">Can I send an anonymous message to an instructor?</button>
            <div>
              <p>Please no, you can't do that.This is to make sure that students are ready to be responsible for their actions when they make a complain about the grades 
                they had. This can't be done without knowing who has the problem and needs the solution.
              </p>
            </div>
            <button type="button" className="collapsible">Can I sign In if I forget my PIN</button>
            <div >
             <p>No, you can not access this grade system without your PIN. If you forget your PIN please do well to go to UGCS and file that comlain to get yourself
                back into the system corncerning accessing the grade system portal.
             </p>
            </div>
            <button type="button" className="collapsible">How long will it take for my concerns to be addressed?</button>
            <div >
              <p>Problems relating to your grade not showing for a particular course is likely to take a weeek, since there will have to be confirmation that you really
                wrote the exam for that course then the instructor is made responsible to make sure that you get your grade in no time..</p>
            </div>

            {/* <p>A Collapsible:</p>
            <button type="button" className="collapsible" style={{backgroundColor: "#777",color: "white",cursor: "pointer",padding: "18px",width: "100%",border: "none",
              textAlign: "left",outline: "none",fontSize:" 15px"}}>Open Collapsible</button>
  
  
            <div style={{padding: "0 18px",display: "none",overflow: "hidden",backgroundColor: "#f1f1f1",hover: {backgroundColor: "#555"}}}className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div> */}
        </div>
        <div style={{marginLeft:"0px",width:"50%"}}>
            <h4 style={{color:"grey"}}>Questions From Instructors on Grade system user's experience  </h4>
            
            <button type="button" className="collapsible">Can I change the grade for a student multiple times?</button>
            <div>
              <p>Yes, you can change the grade of a student multiple times with no difficulties but not anymore after 2 years.</p>
              <br></br>
              
            </div>
            <button type="button" className="collapsible">How can I accesss the number of my students that don't have a grade yet?</button>
            <div>
             <p>The notification icon on your dashboard has information on the number of students complaining of missing grades</p>
             <br></br>
             
            </div>
            <button type="button" className="collapsible">How can I get the complains the students filled in the form?</button>
            <div>
              <p>The system will send them to the complains page of your system .</p>
              <br></br>
              
            </div>
            

                   
        </div>

        </div>  
        <br></br>
            <br></br>
            <div style={{display:"flex",marginLeft:"500px",flex:"100%",justifyItems:"center",alignContent:"center",alignItems:"center"}}>
            <br></br>
            <br></br>
            <div>
               <form style={{border:"solid",borderColor:"#BD9C6C",width:"550px", alignSelf:"center",verticalAlign:"Top",textAlign:"center",}}>
                     <h2 style={{color:"#BD9C6C"}}>Contact  Us</h2>
                     <h3 style={{color:"grey",fontSize:"12px"}}>Got  a question? we would love to hear from you, send us a message and we will respond as soon as possible</h3>
                     <img src={grade} alt="examples of grades"style={{width:100}}></img>
                
                     <label>&nbsp;&nbsp;&nbsp;What can we do for you?</label><br></br>
                     <label><input type="text" placeholder="type here " ></input></label><br></br>
                     <br></br>
                     <label> Name: <input type="text" placeholder="Name" ></input></label><br></br>
                      <br></br>
                     <label>Message:<textarea>                                   </textarea> </label>
                     <br></br>
                     <br></br>
                     <br></br>
                     <button  style={{backgroundColor:"#BD9C6C",color:"#fff",borderColor:"#BD9C6C"}}>Submit</button>
               </form>
            </div>
        </div> 

        </>
    )
}
export default Help