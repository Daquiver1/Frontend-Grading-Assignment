import React from "react";
import { IoSearch } from "react-icons/io5";

import { IoNotificationsOutline } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";

import { IoChatbubblesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="hidden lg:flex items-center w-full  xl:max-w-[1250px] mx-auto px-4 mt-4 ">
      <p className="font-bold text-[1.5rem] cursor-pointer text-[#232590] ">
        GRADE<span className="text-[#cfa460]">SLEUTH</span>
      </p>

      <div className="flex-1 flex items-center justify-end">
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
                <IoCalendarNumberOutline size={26} />
              </li>
              <Link to="/profile">
                <li>
                  <img
                    src={require("./mugshot.jpg")}
                    alt=""
                    className=" w-50 h-11  rounded-full"
                  />
                </li>
              </Link>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar1;
