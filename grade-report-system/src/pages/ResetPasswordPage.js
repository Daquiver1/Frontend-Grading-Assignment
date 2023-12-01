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
    <div className="w-full h-screen flex flex-row">
      <div className="sm:inline-block hidden h-full w-[1000px] bg-[#e0f2fe] pl-[64px] pt-[64px]">
        <div
          className="h-full w-full flex flex-col text-[#805420];"
        >
          <img
            src={require("../assets/uglogo.png")}
            alt="logo"
            className="w-[200px] mt-[-50px]"
          />
          <h2 className="text-[28px] mt-[-30px] text-[#05014a] font-semibold">
            UG Grade Report
          </h2>
          <p className="text-[20px] mt-2 text-[#05014a]">
            University of Ghana Academic Record System
          </p>
          <img src={require("../assets/nice.png")} className="h-full" alt="nice"/>
        </div>
      </div>
      <div className="w-full h-screen sm:px-[200px] flex flex-col justify-center relative px-4">
        <Link
          to="/login"
          className=" w-[50px] h-[50px] rounded-full flex items-center justify-center absolute top-[36px] sm:left-[36px]"
        >
          <MdArrowBack size={25} />
        </Link>
        <form>
          <h2 className="text-[32px] mb-[38px]">Reset Pin</h2>
          <InputField
            placeholder="New password"
            value={newPassword}
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className="mb-[32px]">{""}</div>
          <InputField
            placeholder="password"
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
