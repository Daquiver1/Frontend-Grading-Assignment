import { FaHome, FaUser} from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { NavLink, useParams } from "react-router-dom";




const Sidebar = () => {
    const{id}=useParams();
return ( 
<div className="">
<div className="main w-72 h-[50rem]">
<div className="">
<nav className="space-y-1 ">
<div className="home flex gap-x-2 pl-4 hover:bg-[#F39C12] hover:text-white p-3 w-full rounded-r-full items-center">
<FaHome size={27} />
<NavLink to='' >
<h2 className="text-2xl">Home</h2>
</NavLink>
</div>
<div className="profile flex gap-x-2 pl-4 hover:bg-[#F39C12] hover:text-white p-3 w-full rounded-r-full items-center ">
<FaUser size={30}/>
<NavLink to=''>
<h2 className="text-2xl">Profile</h2>
</NavLink>
</div>
<div className="quizzes flex gap-x-2 pl-4 hover:bg-[#F39C12] hover:text-white p-3 w-full rounded-r-full items-center">
<MdMenuBook size={30}/>
<NavLink to='transcript'>
<h2 className="text-2xl">Transcript</h2>
</NavLink>
</div>
<div className="dasboard flex gap-x-2 pl-4 hover:bg-[#F39C12] hover:text-white p-3 w-full rounded-r-full items-center">
<IoStatsChart size={30}/>
<NavLink to='report'>
<h2 className="text-2xl">Report</h2>
</NavLink>
</div>
<div className="logout flex gap-x-2 pl-4 hover:bg-[#F39C12] hover:text-white p-3 w-full rounded-r-full items-center">
<LuLogOut size={30}/>
<NavLink to='/'>
<h2 className="text-2xl">Logout</h2>
</NavLink>
</div>
</nav>
</div>

</div>
</div>
);
}
export default Sidebar;