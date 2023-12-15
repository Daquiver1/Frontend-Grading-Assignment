import React, {useState} from "react";
import LandingFooter from "../Components/pagefooter";
import LandingHeader from "../Components/pageheader";


function Gradereport(){   
    const buttonify2=() =>{
        alert('Report Filtered!');
};   
    return(    
                <div>
                    <LandingHeader/>
                    <div>
                        <p className="text-[23pt] font-bold text-[#191970]">Grade Report</p>
                        <hr/>
                        <div  className="flex text-[23pt]">
                        <p>John Doe Jnr</p>
                        <p className="ml-[50px]">Level 200</p>
                        <p className="ml-[50px]">Computer Science </p>
                        <form  className="ml-[50px]">
        <label>
            <input type="radio" name="level" value="100" /> Level 100
        </label>

        <label className="ml-[50px]">
            <input type="radio" name="level" value="200" /> Level 200
        </label>

        <button onClick={buttonify2} className="ml-[45px] text-green-50 rounded-lg bg-[#5f5fdf]" id="submit">Filter</button>
    </form>
                        </div>
                        <hr/>
                    </div>
                    <div>
                        <p>Level 100 First Semester</p>
                        <hr/>
                    <table classname="w-full border border-collapse border-gray-300">
                        
            <thead>
                <tr classname="bg-gray-200">
                    <th classname="py-2 px-4">Course Title</th>
                    <th classname="py-2 px-4">Course Name</th>
                    <th classname="py-2 px-4">Course Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT101</td>
                    <td classname="py-2 px-4">Introduction to Programming</td>
                    <td classname="py-2 px-4">A</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT102</td>
                    <td classname="py-2 px-4">Data Structures and Algorithms</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT103</td>
                    <td classname="py-2 px-4">Database Management</td>
                    <td classname="py-2 px-4">A-</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT104</td>
                    <td classname="py-2 px-4">Computer Networks</td>
                    <td classname="py-2 px-4">C</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT105</td>
                    <td classname="py-2 px-4">Software Engineering</td>
                    <td classname="py-2 px-4">B</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT106</td>
                    <td classname="py-2 px-4">Operating Systems</td>
                    <td classname="py-2 px-4">A+</td>
                </tr>
<hr/>
                
                <tr classname="border-t border-gray-300">
                    <td colspan="3" classname="py-2 px-4"><strong>Second Semester</strong></td>
                </tr>

                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT201</td>
                    <td classname="py-2 px-4">Advanced Programming</td>
                    <td classname="py-2 px-4">A</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                
                <tr classname="border-t border-gray-300">
                    <td colspan="3" classname="py-2 px-4"><strong>Level 200, First Semester</strong></td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>

                <br/>
                    <tr classname="border-t border-gray-300">
                    <td colspan="3" classname="py-2 px-4"><strong>Second Semester</strong></td>
                </tr>

                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
                <tr classname="border-t border-gray-300">
                    <td classname="py-2 px-4">DCIT202</td>
                    <td classname="py-2 px-4">Web Development</td>
                    <td classname="py-2 px-4">B+</td>
                </tr>
            </tbody>
        </table>
                    </div>
                    <div className="ml-[25px] mb-[-10px]">
                        <LandingFooter/>
                    </div>
                </div>
                
     
    )
}

export default Gradereport;