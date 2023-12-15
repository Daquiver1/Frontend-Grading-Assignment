import React, { useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { NavLink } from 'react-router-dom';
import { Close, Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [nav,setNav] = useState(false)
  const navigate = useNavigate()
 
  const logout = () => {
    navigate('/login')
 }

  return (
    <div className='w-full border-b p-4 flex justify-between items-center shadow sticky top-0 bg-white/90 backdrop-blur'>
      <div className='flex items-center gap-2'>
          <button className='md:hidden' onClick={()=>setNav(!nav)}>{nav? <Close fontSize='large'/> :<Menu fontSize='large'/>}</button>
          <input type="text" placeholder='search ' className='hidden sm:block border p-2 px-4'/>
      </div>

      <div className='flex justify-center items-center gap-1'>
        <div className='w-[30px] h-[30px] active:bg-black/5 cursor-pointer rounded-full active:animate-ping duration-300 flex justify-center items-center relative' >
            <NotificationsNoneOutlinedIcon />
            <div className='absolute w-[20px] h-[20px] flex justify-center items-center rounded-full shadow-xl text-white bg-red-400 -right-1 -top-2'>4</div>
          </div>

        <div className='w-[30px] h-[30px] active:bg-black/5 cursor-pointer rounded-full active:animate-ping duration-300 flex justify-center items-center' ><SettingsOutlinedIcon /></div>
        <div className='w-[30px] h-[30px]  cursor-pointer rounded-full active:bg-black/5 active:animate-ping duration-300 flex justify-center items-center' ><PersonOutlineOutlinedIcon /></div>
      </div>


      <div className='md:hidden w-full flex flex-col gap-2 mt-5 text-blue-950 text-lg absolute top-[-1000%] left-0 bg-white shadow-2xl p-4 duration-300'  style={{top: nav? "50px" : "-1000%"}}>
                <NavLink onClick={()=>setNav(!nav)} to='/home' className={'flex whitespace-nowrap items-center gap-2 p-2 '} >
                    <DashboardOutlinedIcon fontSize="medium"/>
                    <span>Student Dashboard </span>
                </NavLink>
                <NavLink onClick={()=>setNav(!nav)} to='/home/courses' className={'flex whitespace-nowrap items-center gap-2 p-2 '} >
                    <MenuBookOutlinedIcon fontSize="medium" />
                    <span>Courses </span>
                </NavLink>
                <NavLink onClick={()=>setNav(!nav)} to='/home/contact' className={'flex whitespace-nowrap items-center gap-2 p-2 '} >
                    <CallOutlinedIcon fontSize="medium" />
                    <span>Contact Instructor</span>
                </NavLink>
                <NavLink onClick={()=>setNav(!nav)} to='/home/missinggradeform' className={'flex whitespace-nowrap items-center gap-2 p-2 '} >
                    <ReportGmailerrorredIcon fontSize="medium" />
                    <span>Report Grade</span>
                </NavLink>
                <NavLink onClick={()=>setNav(!nav)} to='/home/help' className={'flex whitespace-nowrap items-center gap-2 p-2 '} >
                    <HelpOutlineOutlinedIcon fontSize="medium" />
                    <span>Help </span>
                </NavLink>
                
                <p onClick={logout} className={'flex whitespace-nowrap items-center gap-2 p-2 cursor-pointer '} >
                    <LogoutIcon fontSize="medium" />
                    <span>Logout</span>
                </p>
            </div>
    </div>
  )
}

export default Header
