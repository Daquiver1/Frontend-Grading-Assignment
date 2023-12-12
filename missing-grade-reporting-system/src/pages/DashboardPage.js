import {useState} from 'react';
import { BsSearch } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import golden_boy from '../images/golden_boy.jpg';
import Calendar from './calendar.js';
import { MdOutlinePayments } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { SiFormstack } from "react-icons/si";
import bgdashboard1 from '../images/bg-dashboard1.jpeg';
import Sidebar from '../components/Sidebar';



const Dashboard = () => {
  const [open, /*setOpen*/] = useState(true);

  return (
    <div className="flex">
      <Sidebar/>

      <div className="p-7 flex">
        <div className="bg-gray-100 min-h-screen ">
          <div className="bg-white p-2 flex">
            <h1 className=" flex-1 text-xl font-bold">Student Dashboard</h1>
            <div className={`flex items-center rounded-md -mt-4 bg-Thistle] bg-lavender-grey ${!open ? "px-2.5" : "px-4"} py-2`}>
            <BsSearch className={`text-gray-500 bg-gray-100 text-2xl rounded-lg md:text-3xl mt-2 float-left cursor-pointer ${open && "mr-2"}`} />


            <input
              type={"search"}
              placeholder="search"
              className={`text-base bg-gray-100 w-80 -ml-2 pr-2 mt-2 text-gray-500 rounded-lg focus:outline-none p-1 ${!open && "hidden"}`}>
          </input>
        </div>
          </div>
          <div className="bg-Thistle rounded-lg p-4 bg-cover bg-no-repeat  relative" style={{ backgroundImage: `url(${bgdashboard1})` }}>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full bg-cover bg-no-repeat  relative" style={{ backgroundImage: `url(${golden_boy})` }}></div>
              <div className="flex justify-between">
                <div className="">
                  <h2 className="text-lg font-bold">
                    Precious Amenuveve Tsewoo
                  </h2>
                  <p className="text-gray-600">BSc. Computer Science</p>
                </div>
                <div className="flex ml-80 pl-60 mt-3">
                  <IoNotificationsSharp className="rounded-full text-4xl cursor-pointer mr-12" />
                  <BiSolidMessageDetail className="rounded-full text-4xl cursor-pointer mr-12" />
                  <IoSettings className="rounded-full text-4xl cursor-pointer mr-12" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4">
            <br/>
          <h1 className=" text-xl font-bold">Access vital academic insights and effortlessly navigate your educational path. <br/></h1>
          <br/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-200 p-4 rounded-lg">
                <h3 className="text-lg font-bold">Account Balance</h3>
                <p className="text-gray-700">GH₵1960</p>
              </div>
              <div className="bg-green-200 p-4 rounded-lg">
                <h3 className="text-lg font-bold">Hall of Residence</h3>
                <p className="text-gray-700">Percher</p>
              </div>
              <div className="bg-red-200 p-4 rounded-lg">
                <h3 className="text-lg font-bold">Position held</h3>
                <p className="text-gray-700">Common Floor Member</p>
              </div>
              <div className="bg-lavenderGrey p-4 rounded-lg">
                <h3 className="text-lg font-bold">Payment History</h3>
                <MdOutlinePayments className="rounded-full text-2xl cursor-pointer mr-12" />
              </div>
              <div className="bg-Tiger-Eye p-4 rounded-lg">
                <h3 className="text-lg font-bold">Timetable</h3>
                <GrSchedules className="rounded-full text-2xl cursor-pointer mr-12"/>
              </div>
              <div className="bg-Charcoal p-4 rounded-lg">
                <h3 className="text-lg font-bold">Student Services</h3>
                <SiFormstack className="rounded-full text-2xl cursor-pointer mr-12"/>
              </div>
            </div>
          </div>
          <div className="bg-white p-4">
  <h2 className="text-xl font-bold">Activity</h2>
    <Calendar/>
</div>

        </div>
      </div>
    </div>
  );
    
}

export default Dashboard;