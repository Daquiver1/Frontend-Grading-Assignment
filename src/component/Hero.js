import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center pt-8 px-4 xl:flex-row xl:h-screen xl:p-10 xl:pt-3 gap-2 ">
      <div className="flex items-center justify-center flex-1 w-full xl:w-auto md:ml-[3rem] ">
        <img
          src={require("./Data-rafiki.png")}
          alt=""
          className="motion-reduce:animate-bounce  w-[70%] h-auto "
        />
      </div>
      <div className="flex flex-col flex-1 items-center xl:items-start justify-center text-center xl:text-start space-y-4 xl:mb-4 md:mr-[5rem]">
        <h1 className="font-bold text-lg xl:text-2xl">
          Welcome to the Missing Grade Reporting System
        </h1>
        <p className="font-normal text-sm xl:text-md  ">
          Explore academic clarity with our Missing Grade Reporting System.
          Quickly view grades, report missing ones, and communicate seamlessly.
          Get started by logging in or creating an account.
        </p>

        <h2 className="font-bold text-md text-[#cfa460]">
          Ready to Take Control?
        </h2>

        <p className="font-normal text-sm xl:text-md md:mr-[20rem] text-justify">
          Join a community dedicated to maintaining accurate academic records.
          Login or create an account to get started on the path of academic
          empowerment.
        </p>
        <Link to="/login">
          <button className=" lg:w-[8rem] w-[6rem] font-bold text-[1rem] py-2 bg-gradient-to-tr from-[#232590] to-[#CCCCCC] text-white rounded-full">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
