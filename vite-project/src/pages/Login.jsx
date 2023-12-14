import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';



const Login = () => {

    

 

    


    return(
        <section className="px-5 lg:px-0">
            <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 ">
                    Hello! <span className="text-primaryColor">Welcome</span>Back 🎉</h3>

                    <form className="py md:py-0" >
                        <div className="mb-5">
                            <input type="id" 
                            placeholder="Enter Your ID" 
                            name="id" 
                            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor
                             cursor-pointer"
                            required
                            />

                        </div>

                        <div className="mb-5">
                            <input type="password" 
                            placeholder="Pin" 
                            name="password" 
                            className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor
                             cursor-pointer"
                            required
                            />

                        </div>


                        <div className="mt-7">
                            <button type="submit"
                            className="w-full bg-primaryColor text-white text-[18px] leading-[38px] rounded-lg px-4 py-3">Sign In
                                </button>
                        </div>


   


                    </form>
            </div>

        </section>
    );
};

export default Login;