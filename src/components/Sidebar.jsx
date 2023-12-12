import React from 'react'
import {FcDepartment} from 'react-icons/fc'

export default function Sidebar() {
  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
      <div classname='flex items-center gap-2 px-1 py-3'>
          <FcDepartment fontSize={24} />
          <span className='text-neutral-100 text-lg'>GradesReport</span>
      </div>
      <div className='flex-1'></div>
      <div>bottom part</div>
    </div>
  )
}
