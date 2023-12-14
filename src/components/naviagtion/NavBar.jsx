import React from "react";
import { HiBars2 } from "react-icons/hi2";
import { AiTwotoneBell } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import Logo from "../../assets/images/student_avater.png";

function NavBar({handleClick}) {
  return (
    <header className="w-full px-2 h-[1.5cm] items-center bg-[#ffffff96] backdrop-blur-lg flex flex-row justify-between">
      <div className="hidden text-secondary font-semibold 769px:flex flex-row gap-2 justify-center items-center">
        <span>
          <FaRegCalendarAlt size={23} />
        </span>
        <p>Today</p>
      </div>

      <button type="button" onClick={handleClick} className=" 769px:hidden px-1 bg-gray-100 cursor-pointer rounded-md text-primary_blue">
        <HiBars2 size={32} />
      </button>

      <div className=" px-2 flex flex-row justify-between items-center gap-3">
        <div className=" px-2 py-1 bg-gray-100 cursor-pointer rounded-md text-primary_blue">
          <MdMessage size={26} />
        </div>

        <div className="  px-2 py-1 bg-gray-100 cursor-pointer rounded-md text-primary_blue">
          <AiTwotoneBell size={26} />
        </div>

        <div className=" w-[2.5cm] h-[1.3cm] gap-2 flex flex-row items-center rounded-lg px-2">
          <img
            src={Logo}
            className="w-[1.1cm] col-span-1 border rounded-full bg-white"
          />
          <p className=" text-primary_blue font-bold col-span-3 flex justify-center items-center">
            O.
          </p>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
