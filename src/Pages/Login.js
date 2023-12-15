import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Landingpage from './Landingpage';
import Help from './Help';
import Landing_footer from "../Components/pagefooter";


//Login authentication
function validateLogin(){
            var studentId = document.getElementById('student-id').value;
            var pin = document.getElementById('pin').value;
            // Example: Check if both fields are not empty
            if (studentId !== '' && pin !== '') {
                alert('Login successful!')}
                // You can redirect or perform other actions here
            else {
                alert('Please enter both Student ID and PIN.')
            }   
        }              

function Login(){
    return (   
        <body className="bg-[#747070] bg-opacity-[0.6] h-[770px] mt-[-25px] ml-[-10px] mr-[-10px]">
        <br/>
            <div className="items-center justify-center  shadow-2xl w-[500px] h-[300px] bg-[#fdfdfd] align-middle px-4 p-4 ml-[430px] mt-[150px]">
                <form>
                    <div className="ml-[120px]">
                        <img className="h-[70px] mt-[20px]"src="/Media_Files/unilogo.png"/>
                        <div className="mt-[15px] ml-[-40px]">
                            <label className="ml-[5px] text-[15pt]" for="student-id">ID:</label>   
                            <input placeholder="Enter your Student Id..." className="border-[2px] ml-[5px] w-[260px] rounded-[12px] p-1" type="text" name="student-id" />
                        </div>
                        <div className="mt-[5px] ml-[-40px]">
                            <label className="text-[15pt] w-[200px]" for="pin">PIN:</label>
                            <input placeholder="Enter your pin... "className="border-[2px] ml-[0px] rounded-[12px] w-[260px] p-1" type="password" name="pin" />
                        </div>
                        <div className="flex mt-3">
                        <Link to="/Landingpage">
                        <button className="mt-[20px] bg-[#37377c] rounded-md text-purple-50 text-[14pt] p-[5px] ml-[47px]">
                            Log In
                        </button>
                        </Link>
                        <Link to ="/Help">
                        <button className="mt-[20px] bg-[#3e3e91] rounded-md text-purple-50 text-[14pt] p-[5px] ml-[13px]">
                            Help
                        </button>
                        </Link>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/Help" element={<Help/>} />
                        <Route path="/Landingpage" element={<Landingpage />} />
                    </Routes>
                </form>
                <div className="mt-[300px] ml-[-422px]">
                    <Landing_footer/> 
                </div>            
            </div>
        </body>
        
    )
}

export default Login;