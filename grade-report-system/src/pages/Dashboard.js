import React,{useState} from 'react';
import { Link } from "react-router-dom";
import {FaEnvelope, FaRegBell, FaSearch,FaMapMarkerAlt,FaCalendarAlt, FaFacebookMessenger} from "react-icons/fa"
import {IoSettingsSharp} from 'react-icons/io5';
import niceImage from '../assets/nice.png';

const Dashboard = () => {
  const [open, setOpen]= useState(true);
  const [selectedPage, setSelectedPage] = useState('Home page')
  const Menus =[
    {title: "Dashboard",src: "Chart_fill", path:"/dashboard"},
    {title: "Missing Grade Form", src: "Search", path: "/search"},
    {title: "Grade Report", src: "Chart", path:"/Report"},
    {title: "Instructor Contact", src: "Folder", gap: true, path:"/Contact"},
    {title: "Help and Support", src: "Chat", path:"/Support"},
  ]
  const handleMenuClick = (title) => {
    setOpen(!open);
  };
  return (
    <div className="flex">
      <div className={`${open? "w-72" :"w-20"} duration-300 h-screen bg-[#000435] relative`}>
        <img src={require("../assets/control.png")} 
        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-[#000435] ${!open && "rotate-180"}`}
        onClick={()=> setOpen(!open)}
        />
        <div>
            <img src={require("../assets/uglogo.png")} className= {`cursor-poiter duration-500`} />
            <h1 className={`text-white mt-[-50px] ml-[85px] font-medium text-xl duration-300 ${!open && 'hidden'}`}>UG|Ghana</h1>
        </div>
        <ul>
            {Menus.map((menu,index)=>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap? "mt-9" : "mt-2"}`}>
                <Link to={menu.path} onClick={() => handleMenuClick(menu.title)}>
                  <img src={require(`../assets/${menu.src}.png`)} onClick={() => handleMenuClick(menu.title)}/>
                </Link>
                <Link to={menu.path} onClick={() => handleMenuClick(menu.title)}>
                  <span className={`${!open && 'hidden'} origin-left duration-200`} onClick={() => handleMenuClick(menu.title)} >{menu.title}</span>
                </Link>
              </li>)}
        </ul>
      </div>
      <div className="p-7 text-2x1 font-semibold flex-1 h-screen bg-[#ece3e9]">
        <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px]">
          <div className="flex items-center rounded-[5px]">
            <input type="text" className= "bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal" placeholder="Search for..." />
            <div className='bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
              <FaSearch color="white"/>
            </div>
          </div>
          <div className='flex items-center gap-[25px] relative'>
            <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
              <FaRegBell />
              <FaEnvelope />
            </div>
            <div className="flex items-center gap-[15px] relative">
              <p>Bayat Osman</p>
              <div>
                <img className='h-[50px] w-[50px] rounded-full bg-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative' src={require("../assets/gabimaru.jpg")} alt="" />
              </div>
            </div> 
          </div>
        </div>
        <div className="pt-[10px]">
          <div className="flex gap-4">
            <div className="bg-white rounded-md  p-4 flex-1 border border-gray-200 flex items-center">
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500"><FaCalendarAlt  className="text-2xl text-white"/></div>
              <div class='pl-4'><span className="text-sm text-black-500 font-light">Academic Calendar</span></div>
            </div>
            <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500"><FaMapMarkerAlt  className="text-2xl text-white"/></div>
              <div class='pl-4'><span className="text-sm text-black-500 font-light">Campus Map and Places</span></div>
            </div>
            <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500"><FaFacebookMessenger  className="text-2xl text-white"/></div>
              <div class='pl-4'><span className="text-sm text-black-500 font-light">UG Social Media</span></div>
            </div>
            <div className="bg-white rounded-md p-4 flex-1 border border-gray-200 flex items-center">
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500"><IoSettingsSharp  className="text-2xl text-white"/></div>
              <div class='pl-4'><span className="text-sm text-black-500 font-light">Settings</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
