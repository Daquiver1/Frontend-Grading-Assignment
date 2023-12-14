import { NavLink } from "react-router-dom";
import navlinks from "../../assets/data/navLinks";
import { MdLogout } from "react-icons/md";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

import Logo from "../../assets/images/student_avater.png";

function SideBar({ handleClick }) {
  return (
    <div className="side_bar z-[99] border-r-4 border-r-[#23255941] overflow-y-auto py-5 px-3 relative flex flex-col">

      <div className=" text-[30px] font-bold text-primary_blue w-full flex flex-row justify-between">
        <span>UG</span>
        <button
          type="button"
          onClick={handleClick}
          className=" 769px:hidden px-2 bg-gray-100 cursor-pointer rounded-md text-primary_blue"
        >
          <HiOutlineChevronDoubleLeft size={25} />
        </button>
      </div>

      <div className=" bg-secondary py-4 w-full mt-5 grid grid-cols-4 rounded-lg px-2">
        <img src={Logo} className=" col-span-1 border rounded-full bg-white" />
        <p className=" text-primary_blue font-bold col-span-3 flex justify-center items-center">
          Esther O.
        </p>
      </div>

      <div className=" w-full py-1 mt-5 flex flex-col gap-3">
        {navlinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={handleClick}
            end
            className={({ isActive }) =>
              ` ${isActive ? "active" : null} w-full navlink`
            }
          >
            <div className=" link px-1 w-full grid grid-cols-4 gap-2 font-bold h-[1cm] rounded-md">
              <span className=" text-xl col-span-1 flex justify-center items-center">
                {link.icon}
              </span>
              <span className=" col-span-3 flex justify-start items-center">
                {link.label}
              </span>
            </div>
          </NavLink>
        ))}
      </div>

      <button className="mt-10 px-1 w-full flex justify-center bg-secondary items-center gap-2 font-bold h-[1cm] rounded-md text-white py-2">
        <span className=" text-xl flex justify-center items-center">
          <MdLogout />
        </span>
        <span className=" flex justify-start items-center">LOGOUT</span>
      </button>

    </div>
  );
}

export default SideBar;
