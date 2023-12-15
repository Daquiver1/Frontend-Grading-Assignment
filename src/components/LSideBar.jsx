import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { useNavigate } from 'react-router-dom';

function LSideBar() {
    const [collapsed,setCollapsed] = useState(false)
    const navigate = useNavigate()


const logout = () => {
   navigate('/login')
}

  return (
    <div className={" " +(collapsed? 'w-[100px] ' : "w-[300px] ") + "h-screen duration-300 flex flex-col items-center md:sticky md:top-0 border-r shadow"}>
        <button className={'w-full p-[22px] flex items-center text-blue-950 ' + (collapsed? "justify-center" : "justify-between")} onClick={() => setCollapsed(!collapsed)}>
            {!collapsed && <span className='text-xl font-bold'>STUDENT PORTAL</span>}
           { collapsed? <MenuIcon fontSize='large'/> : <ArrowBackOutlinedIcon fontSize='medium'/>}
        </button>

        <div className='w-full p-1'>
            {!collapsed && <div className='flex flex-col justify-center items-center p-2 text-blue-950'>
                <span className='text-gray-500'>Student</span>
                <h1 className='text-xl'>Ian Moone</h1>
            </div>}
            {collapsed && <p className='text-center text-2xl font-bold'>-</p>}

            <div className='w-full flex flex-col gap-2 mt-5 text-blue-950 text-lg links'>
                <NavLink to='/0' className={'flex whitespace-nowrap items-center gap-2 p-2 ' + (collapsed? "justify-center" : "")} >
                    <DashboardOutlinedIcon fontSize="medium"/>
                    {!collapsed && <span>Student Dashboard </span>}
                </NavLink>
                <NavLink to='courses' className={'flex whitespace-nowrap items-center gap-2 p-2 ' + (collapsed? "justify-center" : "")} >
                    <MenuBookOutlinedIcon fontSize="medium" />
                    {!collapsed && <span>Courses </span>}
                </NavLink>
                <NavLink to='contact' className={'flex whitespace-nowrap items-center gap-2 p-2 ' + (collapsed? "justify-center" : "")} >
                    <CallOutlinedIcon fontSize="medium" />
                    {!collapsed && <span>Contact Instructor</span>}
                </NavLink>
                <NavLink to='reportgrade' className={'flex whitespace-nowrap items-center gap-2 p-2 ' + (collapsed? "justify-center" : "")} >
                    <ReportGmailerrorredIcon fontSize="medium" />
                    {!collapsed && <span>Report Grade</span>}
                </NavLink>
                <NavLink to='help' className={'flex whitespace-nowrap items-center gap-2 p-2 ' + (collapsed? "justify-center" : "")} >
                    <HelpOutlineOutlinedIcon fontSize="medium" />
                    {!collapsed && <span>Help </span>}
                </NavLink>
                <NavLink to='profile' className={'flex whitespace-nowrap items-center gap-2 p-2 ' + (collapsed? "justify-center" : "")} >
                    <PersonIcon fontSize="medium" />
                    {!collapsed && <span>Profile</span>}
                </NavLink>
                <p onClick={logout} className={'flex whitespace-nowrap items-center gap-2 p-2 cursor-pointer ' + (collapsed? "justify-center" : "")} >
                    <LogoutIcon fontSize="medium" />
                    {!collapsed && <span>Logout</span>}
                </p>
            </div>
        </div>
    </div>
  )
}

export default LSideBar
