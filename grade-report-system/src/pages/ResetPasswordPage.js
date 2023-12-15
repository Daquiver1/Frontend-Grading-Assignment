import React, { useState } from "react";
import { Link } from "react-router-dom";
import {MdArrowBack} from "react-icons/md";


import InputField from "../components/InputField";


const SignUp = () => {
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("\nPassword : " + password, "\nNew Password : " + newPassword);
    
 
  };

  return (
    <div className="w-full h-screen flex flex-row bg-[#ece3e9]">
      <header className="absolute inset-x-0 top-0 z-50 ">
          <nav className="flex items-center justify-between p-6 lg:px-8 h-[80px] bg-[#000435] fixed w-full" aria-label="Global" >
          <h1 className='text-4xl text-[#fff]'><b>University of Ghana</b></h1> 
              <div className="flex lg:flex-1 pt-[15px]">
                  <a href="#" className="-m-1.5 p-1.5">
                      <img
                      className="h-[100px] w-auto"
                      src={require("../assets/uglogo.png")}
                      alt=""
                      />
                  </a>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <Link to="/login" className="text-sm font-semibold leading-6 text-[#fff]">
                  Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
              </div>
          </nav>
      </header>
      <div className="w-[1000px] h-screen sm:px-[200px] flex flex-col justify-center relative px-4 ml-[550px]">
        <Link
          to="/login"
          className=" w-[50px] h-[50px] rounded-full flex items-center justify-center absolute top-[36px] sm:left-[36px]"
        >
          <MdArrowBack size={25} />
        </Link>
        <form>
          <h2 className="text-[32px] mb-[38px]">Reset Pin</h2>
          <InputField
            placeholder="Pin"
            value={newPassword}
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className="mb-[32px]">{""}</div>
          <InputField
            placeholder="New pin"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mb-[60px]">{""}</div>

          <button
            onClick={onSubmitHandler}
            className="bg-[#06b6d4] text-white w-full h-[40px] rounded-lg"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
