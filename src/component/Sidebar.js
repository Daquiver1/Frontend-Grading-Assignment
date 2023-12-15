import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { IoPodiumOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 z-40 w-44 h-screen transition-transform -translate-x-full sm:translate-x-0 ">
      <ul className="flex-col space-y-7 mt-[5rem] ">
        <Link to="/grade">
          <li className="m-[1rem] w-full p-2   hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2   rounded-md flex gap-3 ">
            <IoPodiumOutline size={26} /> <p>Grade</p>
          </li>
        </Link>

        <Link to="/dashboard">
          <li className="m-[1rem] w-full p-2  hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2  rounded-md flex gap-3 ">
            <IoGridOutline size={26} />
            Dashboard
          </li>
        </Link>
          <Link to="/gradeform">
        <li className="m-[1rem] w-full p-2    hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2    rounded-md flex gap-3 ">
          <IoNewspaperOutline size={26} />
         Grade Form
        </li>
        </Link>
        <Link to="/faqs">
          <li className="m-[1rem] w-full p-2   hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2    rounded-md flex gap-3 ">
            <IoHelpCircleOutline size={26} /> Help/FAQ's
          </li>
        </Link>
          <Link to="/instructorpage">
        <li className="m-[1rem] w-full p-2   hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2    rounded-md flex gap-3 ">
          <IoCallOutline size={26} />
         Contact
        </li>
        </Link>
        <Link to="/profile">
          <li className=" m-[1rem] w-full p-2    hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2    rounded-md border-r-none flex gap-3 ">
            <IoPersonCircleOutline size={26} />
            Profile
          </li>
        </Link>
        <Link to="/">
          <li className=" m-[1rem] w-full p-2    hover:bg-[#232590] transition duration-300 ease-in-out  hover:text-white hover:p-2    rounded-md border-r-none flex gap-3 ">
          <TbLogout2 size={26} />
          Log out
          </li>
        </Link>
      </ul>
      
    </div>
  );
};

export default Sidebar;
