import React, { useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function Header() {
 
  return (
    <div className='w-full border-b p-4 flex justify-between items-center shadow sticky top-0 bg-white/90 backdrop-blur'>
      <div>
          <input type="text" placeholder='search ' className='border p-2 px-4'/>
      </div>

      <div className='flex justify-center items-center gap-1'>
        <div className='w-[30px] h-[30px] active:bg-black/5 cursor-pointer rounded-full active:animate-ping duration-300 flex justify-center items-center relative' >
            <NotificationsNoneOutlinedIcon />
            <div className='absolute w-[20px] h-[20px] flex justify-center items-center rounded-full shadow-xl text-white bg-red-400 -right-1 -top-2'>4</div>
          </div>

        <div className='w-[30px] h-[30px] active:bg-black/5 cursor-pointer rounded-full active:animate-ping duration-300 flex justify-center items-center' ><SettingsOutlinedIcon /></div>
        <div className='w-[30px] h-[30px]  cursor-pointer rounded-full active:bg-black/5 active:animate-ping duration-300 flex justify-center items-center' ><PersonOutlineOutlinedIcon /></div>
      </div>
    </div>
  )
}

export default Header
