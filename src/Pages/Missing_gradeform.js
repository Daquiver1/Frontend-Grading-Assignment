import React from "react";
import Landing_header from "../Components/pageheader";
import Landing_footer from "../Components/pagefooter";
import { click } from "@testing-library/user-event/dist/click";



function Missing_gradeform(){

    const buttonify=() =>{
            alert('Form submitted successfully!');
    };
    return (
        <>
            <Landing_header />
            <p className="text-[19pt] font-extrabold text-[#191970]">MISSING GRADE FORM</p>
            <p className="text-xl">Our Missing Grade Form website is designed to streamline the process of reporting and addressing missing and or unrecorded grades. Easily submit details about any missing grades, ensuring that your academic record remains accurate and up-to-date.<br/><br/>Kindly fill ut the form below to lodge a complaint for missing grades. </p>
        <div className="bg-[#f1f1f5] p-2 ml-[290px] shadow-xl mt-[15px] w-[660px] h-[500px]">
            <form className="grid ml-[45px] mt-[15px]">
                <p className="text-[19pt] ml-[133px] font-bold text-[#191970]">Missing Grade Report Form</p>
                <div className="mt-[3px]">
                    <label className="text-[15pt]" for="Course name">Course Name/Title:</label>
                    <input type="text" className="ml-[30px] w-[300px] border-[2px]" placeholder='Enter Course Name' />
                </div>
                <div>
                     <label className="text-[15pt] mt-[3px]" for="Course name">Instructor Name:</label>
                     <input type="text"  className="ml-[50px] w-[300px] border-[2px]" placeholder='Instructor Name' />
                </div>
                <div>
                     <label className="text-[15pt] mt-[3px]" for="Course name">Expected Grade:</label>
                     <input type="Text" className="ml-[54px] w-[300px] border-[2px]" placeholder='Example, B+' />
                </div>
                <div className="grid mt-[10px]">
                     <label className="text-[15pt]" for="Course name">Explanation:</label>
                     <textarea cols="10" rows="10" className="w-[550px] mt-1 border-[4px]" placeholder='Please explain your grievance.......' />
                </div>
            
            <button id="submitbutton" onClick={buttonify} className= "font-semibold text-green-50 bg-[#346754] rounded-xl ml-[210px] mt-[10px] w-[150px]">Send</button>
            </form>
            <div className="mt-[270px] align-bottom mb-[-10px]  ml-[-273.3px] mr-[=10px]">
                <Landing_footer />
            </div>
        </div>
        </>
        

        
            

    )
}
   export default Missing_gradeform;