import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full relative">
      {/*Navlinks*/}
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">UGGT</h1>
        </div>
        <div className="  px-4 ">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className=" px-4">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
        <div className=" px-4 ">
          <NavLink to="/report">Report</NavLink>
        </div>
        <div className="  px-4 ">
          <NavLink to="/missinggradesform">Missing Grade Form</NavLink>
        </div>
        <div className="  px-4 ">
          <NavLink to="/Help">Help</NavLink>
        </div>
        <div className="  px-4 ">
          <NavLink to="/Contact">Contact</NavLink>
        </div>
        <div>
         <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>
          <NavLink to="/LoginPage">Login</NavLink></button>
        </div>
      </div>
    </div>

    
  );
};

export default Navbar;
