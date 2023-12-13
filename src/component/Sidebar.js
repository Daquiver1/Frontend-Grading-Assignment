import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { IoPodiumOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden md:flex justify-start space-x-10  border-r border-gray-400 text-sm w-60 h-full min-h-screen  ">
      <ul className="flex-col space-y-7 mt-[5rem] ">
        <Link to="/grade">
          <li className="m-[1rem]   hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2   rounded-full flex gap-3 p-[0.4rem]">
            <IoPodiumOutline size={26} /> <p>Grade</p>
          </li>
        </Link>

        <Link to="/dashboard">
          <li className="m-[1rem]   hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2  rounded-full flex gap-3 p-[0.4rem]">
            <IoGridOutline size={26} />
            Dashboard
          </li>
        </Link>

        <li className="m-[1rem]   hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2    rounded-full flex gap-3 p-[0.4rem]">
          <IoNewspaperOutline size={26} />
          Newsletter
        </li>
        <Link to="/faqs">
          <li className="m-[1rem]   hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2    rounded-full flex gap-3 p-[0.4rem]">
            <IoHelpCircleOutline size={26} /> Help/FAQ's
          </li>
        </Link>
          <Link to="/instructorpage">
        <li className="m-[1rem]   hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2    rounded-full flex gap-3 p-[0.4rem]">
          <IoCallOutline size={26} />
         Contact
        </li>
        </Link>
        <Link to="/profile">
          <li className=" m-[1rem]    hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2    rounded-full border-r-none flex gap-3 p-[0.4rem]">
            <IoPersonCircleOutline size={26} />
            Profile
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
