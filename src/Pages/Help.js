import React from "react";
import LandingHeader from "../Components/pageheader";
import LandingFooter from "../Components/pagefooter";

function Help(){
    const buttonify1=() =>{
        alert('Technical Assistance Request Sent Succesfully!');
};
    return (
        <div>
                 <LandingHeader/>
            <div>
                <p className="text-[23pt] text-[#191970] font-bold">MISSING GRADE REPORT SYSTEM--FAQ</p>
                <div className="text-[15pt]">
                    <hr/>
                    <div className="flex">
                        <div className="mt-[30px]">
                    <h2>1. What should I do if my grade report is missing?</h2>
    <p>If your grade report is missing, please follow these steps:</p>
    <ul>
                    
        
        <li>Double-check your student portal or online platform where grades are usually posted.</li>
        <li>Contact your instructor or course coordinator to inquire about the missing grade report.</li>
        <li>If the issue persists, reach out to the school's administrative office for further assistance.</li>
    </ul>
    </div>
    <img  className="w-[370px] ml-[95px] h-[200px]" alt="Help media resource" src="../Media_Files/reception-img1.jpg"/>
    </div>
<hr/>
    <h2>2. How long does it take for grades to be posted?</h2>
    <p>The time it takes for grades to be posted can vary. Generally, grades should be available shortly after the end of the semester. If there are delays, please be patient and check regularly for updates on the grading system.</p>
<hr/>
    <h2>3. Can I request a copy of my grade report?</h2>
    <p>Yes, you can request a copy of your grade report from the school's administrative office. Make sure to provide the necessary information, such as your student ID, course details, and any other required documentation.</p>
<hr/>
    <h2>4. What if there is an error on my grade report?</h2>
    <p>If you notice an error on your grade report, immediately inform your instructor or course coordinator. They will guide you through the process of resolving any inaccuracies. It's essential to address any discrepancies as soon as possible to ensure an accurate record of your academic performance.</p>
<hr/>
    <h2>5. Is there a deadline for grade submissions?</h2>
    <p>Grade submission deadlines are typically set by the academic institution. Inquire about these deadlines from your instructor or check the academic calendar for the relevant dates. If the deadline has passed, follow up with the instructor or administrative office for guidance.</p>
<hr/>
    <h2>6. How can I check for updates on my missing grade report?</h2>
    <p>Regularly check your student portal or the designated platform for grade updates. If there are any announcements or notifications regarding missing grade reports, pay close attention to those and follow the provided instructions.</p>
<hr/>
    <p>For further assistance, please contact us using the form below.</p>
                
            </div>
            <div>
                <p className=" ml-[450px] text-[22pt] text-[#191977] font-bold">Technical Assistance Request.</p>
                <div className="bg-[#f1f1f5] p-2 ml-[350px] shadow-xl mt-[35px] w-[660px] h-[500px]">
                <form className="grid ml-[45px] mb-[100px] mt-[15px]">
                    <p className="text-[19pt] ml-[133px] font-bold text-[#191970]">Technical Support Form</p>
                    <div className="mt-[3px]">
                        <label className="text-[15pt]" for="Course name">Student Email:</label>
                        <input type="text" className="ml-[30px] w-[300px] border-[2px]" placeholder='Enter your Email....' />
                    </div>
                    <div>
                        <label className="text-[15pt] ml-[5px] mt-[3px]" for="Course name">Full Name:</label>
                        <input type="text"  className="ml-[57px] w-[300px] border-[2px]" placeholder="Enter your full name..." />
                    </div>
                    <div>
                        <label className="text-[15pt] ml-[5px] mt-[3px]" for="Course name">Current Level:</label>
                        <input type="text"  className="ml-[29px] w-[300px] border-[2px]" placeholder="Your current level eg. Level 200 ..." />
                    </div>
                    <div className="grid mt-[10px]">
                        <label className="text-[15pt]" for="Course name">Description:</label>
                        <textarea cols="10" rows="10" className="w-[550px] mt-1 border-[4px]" placeholder='Describe your issue here.......' />
                    </div>
                
                <button id="sendbutton" onClick={buttonify1} className= "font-semibold text-green-50 bg-[#346754] rounded-xl ml-[210px] mt-[10px] w-[150px]">Send</button>
                </form>
                </div>
                
            </div>
            <div className="mb-[-100px] ml-[25px]">
            <LandingFooter/>
            </div>
        </div>
        </div>
       
    )
}

export default Help;