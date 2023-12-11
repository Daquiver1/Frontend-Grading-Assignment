import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full absolute tpo-2">
      {/*Navlinks*/}
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">UGGT</h1>
        </div>
        <div className="  px-4 ">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className=" px-4">
          <NavLink to="/">Dashboard</NavLink>
        </div>
        <div className=" px-4 ">
          <NavLink to="/">Report</NavLink>
        </div>
        <div className="  px-4 ">
          <NavLink to="/">Missing Grade Form</NavLink>
        </div>
        <div className="  px-4 ">
          <NavLink to="/">Help</NavLink>
        </div>
        <div className="  px-4 ">
          <NavLink to="/">Contact</NavLink>
        </div>
        <div className="mr-4 bg-[#00df9a] px-4 rounded-full items-center justify-center">
          <NavLink to="/">Login In</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
