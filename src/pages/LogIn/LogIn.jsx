import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import visibility_off from './assets/visibility_off.svg';
import visibility_on from './assets/visibility_on.svg';

const LogIn = () => {
    const [studentId, setStudentId] = useState("");
    const [PIN, setPIN] = useState("");
    const [showPIN, setShowPIN] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // To show error messages if authentication fails

    const togglePINVisibility = () => {
        setShowPIN(!showPIN);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Simulated check for student ID and PIN
        if (studentId === "1234" && PIN === "1234") {
            // Authentication successful, you can redirect or perform further actions
            alert("Authentication successful");
            setErrorMessage(""); // Clear any previous error messages
        } else {
            // Authentication failed
            setErrorMessage("Invalid student ID or PIN. Please try again.");
        }
    };

    useEffect(()=>{
        const scrollToTop = () => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth', // Smooth scrolling behavior
            });
          };
          
          scrollToTop()
    })
    return (
        <>
            <Navbar />
            <div className='flex w-full h-screen justify-center items-center'>
                <div className=' smallDevice w-full xm:w-[480px] sm:w-[528px] rounded-[30px] shadow-input bg-white pt-8 pb-[36px] px-[2.875rem] relative'>

                    <div className=' mb-[29px]'>
                        <h1 className='text-[18px] font-bold '>Welcome to Report Board</h1>
                        <h1 className=' mt-1 text-[14px] text-[#707070] font-normal'>Login In details</h1>
                    </div>

                    <div className=''>
                        {/* Login form */}
                        <div className=' box-border flex flex-wrap '>
                            <div className=' box-border m-0 basis-full flex-grow-0 max-w-full '>
                                <div className='box-border m-0 basis-full flex-grow-0 max-w-full'>
                                    <form method='post' onSubmit={handleSubmit}>
                                        <div className=' box-border flex flex-wrap items-center'>
                                            {/* Student ID input */}
                                            <div className=' box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input value={studentId} onChange={(e) => setStudentId(e.target.value)} required type="text" name="studentId" id="studentId" data-cy="studentId" placeholder="Student Id" className=' focus:outline-[#294671] m-0 text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 ' />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* PIN input */}
                                            <div className=' mt-[15px] box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                <div className=' box-border flex flex-wrap w-full'>
                                                    <div className='w-full flex items-start'>
                                                        <input value={PIN} onChange={(e) => setPIN(e.target.value)} required type={showPIN ? "text" : "password"} name="PIN" id="PIN" data-cy="PIN" placeholder="PIN" className=' focus:outline-[#294671] m-0 text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 ' />
                                                        <div onClick={togglePINVisibility} className='-ml-[39px] mt-[10px] cursor-pointer '>
                                                            {showPIN ? <img src={visibility_on} alt="" /> : <img src={visibility_off} alt="" />}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Error message display */}
                                            {errorMessage && (
                                                <div className="text-red-500 text-sm mt-2">
                                                    {errorMessage}
                                                </div>
                                            )}

                                            {/* Log In button */}
                                            <button type="submit" className=' mt-[13px] bg-[#294671] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>Log In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' -mt-24'>
                <Footer/>
                
            </div>
        </>
    );
};

export default LogIn;
