import React from "react";
import LandingFooter from "../Components/pagefooter";
import LandingHeader from "../Components/pageheader";

function Dashboard(){
   

return (
    <div>
             <LandingHeader/>
        <div>
            <p className="text-[23pt] text-[#191970] font-bold">Student Grade Report.</p>
            <hr/>
            <div className="flex">
                <p className="text-[25pt] text-[#1b1b1b]">Name: John Doe</p>
                <p className="text-[23pt] ml-[25px] text-[#1b1b1b]">Level: 300</p>
                <p className="text-[23pt] ml-[25px] text-[#1b1b1b]">Program: Computer science with Psychology.</p>
                
            </div>
            <hr/>
           
            <div>
            <table>
        <thead>
            <tr className="text-[19pt]">
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody className="border-y-2 border-x-2">
            <tr className="border-y-2">
                <td className="border-x-2">MATH 389</td>
                <td>Discrete Mathematics</td>
                <td className="border-x-2">A</td>
            </tr>
            <tr className="border-y-2">
                <td className="border-x-2">DCIT 398</td>
                <td>Advanced digital circuits</td>
                <td className="border-x-2">B+</td>
            </tr>
            <tr className="border-y-2">
                <td className="border-x-2">DCIT 332</td>
                <td>Arduino Fundamentals</td>
                <td className="border-x-2">B+</td>
            </tr>
            <tr className="border-y-2">
                <td className="border-x-2">DCIT 323</td>
                <td>Advanced Databases</td>
                <td className="border-x-2">B+</td>
            </tr>
            <tr className="border-y-2">
                <td className="border-x-2">DCIT 345</td>
                <td>Networking</td>
                <td className="border-x-2">B+</td>
            </tr>
            <tr className="border-y-2">
                <td className="border-x-2">DCIT 334</td>
                <td >Human Character Interaction</td>
                <td className="border-x-2">A</td>
            </tr>
        </tbody>
    </table>
    <div>
        <p className="text-[20pt]">
            <br/>
            <hr/>
        &#9888; Missing grades
        </p>
        <hr/>
        <table className="mb-[100px]">
        <thead>
            <tr className="text-[19pt]">
                <th>Course Code</th>
                <th>Course Name</th>
            </tr>
        </thead>
        <tbody className=" border-y-2 border-x-2">
            <tr className="border-y-2">
                <td className="border-x-2">MATH 359</td>
                <td>Calculus II</td>
            </tr>
            <tr className="border-y-2">
                <td className="border-x-2">DCIT 103</td>
                <td>Office Productivity Course</td>
            </tr>
            <tr className="border-y-2">
                <td className="border-x-2">DCIT 104</td>
                <td>Programming I </td>
            </tr>

            </tbody>
            </table>

    </div>
        
            </div>
                
                <div className="mb-[-110px] ml-[24px]">
                <LandingFooter/>
                </div>
            </div>
            </div>
)
}
export default Dashboard;