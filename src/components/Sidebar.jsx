import React from 'react'
import {FcDepartment} from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigation'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const LinkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
  return (
    <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
      <div classname='flex items-center gap-2 px-1 py-3 '>
          <FcDepartment fontSize={24} />
          <span className='text-neutral-200 text-lg '>OpenShop</span>
      </div>
      <div className='py-8 flex flex-1 flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div>bottom part</div>
    </div>
  )
}

function SidebarLink({ item }) {
  return (
    <Link to={item.path} className={classNames('text-white' ,LinkClasses) }>
    <span className='text-xl'>{item.icon}</span>
    {item.label}
    </Link>
  )
}
