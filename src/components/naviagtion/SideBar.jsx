import { NavLink } from "react-router-dom";
import navlinks from "../../assets/data/navLinks";
import { MdLogout } from "react-icons/md";
import Logo from "../../assets/images/student_avater.png";

function SideBar() {
  return (
    <div className="side_bar overflow-y-auto py-5 px-3 relative flex flex-col">
      <div className=" text-[30px] font-bold text-primary_blue">UG</div>
      <div className=" bg-secondary py-4 w-full mt-2 grid grid-cols-4 rounded-lg px-2">
        <img src={Logo} className=" col-span-1 border rounded-full bg-white" />
        <p className=" text-primary_blue font-bold col-span-3 flex justify-center items-center">
          Esther O.
        </p>
      </div>
      <div className=" w-full py-1 mt-5 flex flex-col gap-3">
        {navlinks.map((link) => (
          <NavLink
            to={link.path}
            end
            relative="path"
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
      <button className="mt-10 px-1 w-full flex justify-center bg-secondary items-center gap-2 font-bold h-[1cm] rounded-md text-white">
        <span className=" text-xl flex justify-center items-center"><MdLogout /></span>
        <span className=" flex justify-start items-center">LOGOUT</span>
      </button>
    </div>
  );
}

export default SideBar;
