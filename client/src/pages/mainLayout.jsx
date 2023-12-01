import React from 'react'
import Footer from '../components/footer'
import { Link, Outlet,useLocation} from 'react-router-dom'


import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
  } from '@heroicons/react/24/outline'
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, count: '5', current: true },
    { name: 'Grade Report', href: '/grade_report', icon: UsersIcon, current: false },
    { name: 'Missing grade form', href: '/missing_grade', icon: FolderIcon, current: false },
    { name: 'Instructors\' Contact', href: '/instructors_contact', icon: CalendarIcon,  current: false },
    { name: 'Help and support', href: '/help_and_support', icon: DocumentDuplicateIcon, current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
    export default function MainLayout() {

      const path = useLocation().pathname
  return (
    <div className='flex grow gap-4'>
      <div className="sticky h-screen top-0 flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6">
        <div className="flex h-16 shrink-0 items-center">
          <img className="h-12 w-auto rounded-lg" src="https://logowik.com/content/uploads/images/university-of-ghana9757.jpg" alt="ug" />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={classNames(
                        path == item.href
                          ? 'bg-indigo-700 text-white'
                          : 'text-indigo-200 hover:text-white hover:bg-indigo-700 ',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                          'h-6 w-6 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      <span className='hidden sm:flex'>{item.name}</span>
                      {item.count ? (
                        <span
                          className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
                          aria-hidden="true"
                        >
                          {item.count}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
            </li>
            <li className="-mx-6 mt-auto">
              <a
                href="#"
                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
              >
                <img
                  className="h-8 w-8 rounded-full bg-indigo-700"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>



      <div className="w-3/4">
        <center>
          <img className="h-24 m-4 w-auto rounded-lg" src="https://logowik.com/content/uploads/images/university-of-ghana9757.jpg" alt="ug" />
        </center>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
