import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:h-screen items-center pt-[3rem] w-full p-[10rem] gap-[2rem]">
      <div className="flex items-center justify-center flex-1   motion-safe:animate-bounce w-8 h-6 ">
        <img src={require("./Data-rafiki.png")} alt="" />
      </div>
      <div className="flex flex-col flex-1 h-full items-center xl:items-start justify-center text-center xl:text-start space-y-5 mb-[4rem]">
        <h1 className=" font-bold  text-[1.5rem] w-full ">
          Welcome to the Missing Grade Reporting System
        </h1>
        <p className="font-md font-thin">
          Explore academic clarity with our Missing Grade Reporting System.
          Quickly view grades, report missing ones, and communicate seamlessly.
          Get started by logging in or creating an account.
        </p>

        <h2 className="font-bold text-[1rem] text-[#cfa460]">
          Ready to Take Control?
        </h2>

        <p className="font-md font-thin">
          Join a community dedicated to maintaining accurate academic records.
          Login or create an account to get started on the path of academic
          empowerment.
        </p>
        <Link to="/login">
          <button className="w-[8rem] font-bold text-[1rem] py-2 bg-gradient-to-tr from-[#232590] to-[#CCCCCC] text-white rounded-full">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
