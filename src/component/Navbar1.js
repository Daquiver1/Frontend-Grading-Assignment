import React from "react";
import { IoSearch } from "react-icons/io5";

import { IoNotificationsOutline } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
      <p className="font-bold text-[1.5rem] cursor-pointer text-[#232590] ">
        GRADE<span className="text-[#cfa460]">SLEUTH</span>
      </p>
     
        <div >
        <IoMenu size={35} className="lg:hidden"/>
      </div>
    

      <div className="hidden flex-1 md:flex items-center justify-end">
        <ul className="flex items-center space-x-40">
          <li className="flex gap-3">
            <span className="mt-2">
              <IoSearch size={30} />
            </span>
            <input
              type="search"
              placeholder="search..."
              className="ring-2 ring-blue-500/[.55] p-2 rounded-full w-96 shadow-sm bg-transparent"
            />
          </li>

          <div>
            <ul className="flex justify-center items-center gap-5">
              <li>
                <IoNotificationsOutline size={26} />
              </li>
              <li>
                <IoChatbubblesOutline size={26} />
              </li>
              <li>
                <IoCalendarNumberOutline size={26}  />
              </li>
              <Link to="/profile">
                <li>
                  <img
                    class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    src={require("./mugshot.jpg")}
                    alt="Bordered avatar"
                  />
                </li>
              </Link>
            </ul>
          </div>
        </ul>
      </div>
    </div>


    </div>
    
  );
};

export default Navbar1;
