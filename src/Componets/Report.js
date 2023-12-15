import React from 'react'
import "./Report.css"


const Report = () => {
  return (
    <div>
      

      
   
   

    <div class="form">
        <div class="title-div">
         <h1>Form for Missing grades</h1><br></br>


            <h2>Report all missing grades here</h2>
            <p>Students associated with grade point are to make it a priority to report on their missing grades, as this constitutes to the overall performance of our students</p>
            <p class="required">*Required</p>
        </div>
           
        <div class="name-div">
            <div class="name">Enter Student ID<span class="required">*</span></div>
            <div class="input-div"><input type="input" name="answer" placeholder="Your Answer" /></div>
            </div>

           


                <div class="gmail-div">
                    <div class="name">Enter your email.</div>
                    <div class="input-div"><input type="input" name="answer" placeholder="Your email" /></div>
                    </div>
                    
                    <div class="mobile-div">
                        <div class="name">Instructor Name</div>
                        <div class="input-div"><input type="input" name="answer" placeholder="Your Answer" /></div>
                        </div>

                        <div class="mobile-div">
                            <div class="name">Caurse</div>
                            <div class="input-div"><input type="input" name="answer" placeholder="caurse with missing grade" /></div>
                            </div>


                            <div class="mobile-div">
                            <div class="name">Expected Grade</div>
                            <div class="input-div"><input type="input" name="answer" placeholder="caurse with missing grade" /></div>
                            </div>

                           
                           
                        <div class="mobile-div">
                            <div class="name">Enter Department</div>
                            <div class="input-div"><input type="input" name="answer" placeholder="Your Answer" /></div>
                            </div>

                            <div class="mobile-div">
                                <div class="name">Level</div>
                                <div class="input-div"><input type="input" name="answer" placeholder="Your Answer" /></div>
                                </div>
                                
            
                         <div>
                            <input class="btn" type="submit" name="submit" />   
                         </div>

                         <div class="last-div">
                            <p class="never">Never submit password through Google Forms</p>
                            <p class="term">This content is neither created nor endorsed by google, Report Abuse - Terms of service - Policy</p>
                          <h2>Google Forms</h2>
                        </div>
    </div>
        </div>
    
    
  )
}

export default Report
