import React from 'react'
import { Fragment, useState} from 'react'
import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import Footer from './FooterPage'

import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  BookmarkIcon,
  QuestionMarkCircleIcon,

  
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import unknown from '../images/unknown.jpg'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid'
const days = [
  { date: '2023-12-27', events: [] },
  { date: '2023-12-28', events: [] },
  { date: '2023-12-29', events: [] },
  { date: '2023-12-30', events: [] },
  { date: '2023-01-01', isCurrentMonth: true, events: [] },
  { date: '2023-01-02', isCurrentMonth: true, events: [] },
  {
    date: '2023-01-03',
    isCurrentMonth: true,
    events: [
      { id: 1, name: 'Prom night', time: '10AM', datetime: '2023-01-03T10:00', href: '/' },
    ],
  },
  { date: '2023-01-04', isCurrentMonth: true, events: [] },
  { date: '2023-01-05', isCurrentMonth: true, events: [] },
  { date: '2023-01-06', isCurrentMonth: true, events: [] },
  {
    date: '2023-01-07',
    isCurrentMonth: true,
    events: [{ id: 3, name: 'Quiz 1', time: '6PM', datetime: '2023-01-08T18:00', href: '/' }],
  },
  { date: '2023-01-08', isCurrentMonth: true, events: [] },
  { date: '2023-01-09', isCurrentMonth: true, events: [] },
  { date: '2023-01-10', isCurrentMonth: true, events: [] },
  { date: '2023-01-11', isCurrentMonth: true, events: [] },
  {
    date: '2023-01-12',
    isCurrentMonth: true,
    isToday: true,
    events: [{ id: 6, name: " Science Practicals", time: '2PM', datetime: '2023-01-25T14:00', href: '/' }],
  },
  { date: '2023-01-13', isCurrentMonth: true, events: [] },
  { date: '2023-01-14', isCurrentMonth: true, events: [] },
  { date: '2023-01-15', isCurrentMonth: true, events: [] },
  { date: '2023-01-16', isCurrentMonth: true, events: [] },
  { date: '2023-01-17', isCurrentMonth: true, events: [] },
  { date: '2023-01-18', isCurrentMonth: true, events: [] },
  { date: '2023-01-19', isCurrentMonth: true, events: [] },
  { date: '2023-01-20', isCurrentMonth: true, events: [] },
  { date: '2023-01-21', isCurrentMonth: true, events: [] },
  {
    date: '2023-01-22',
    isCurrentMonth: true,
    isSelected: true,
    events: [
      { id: 5, name: 'Mid-Semester Exam', time: '7PM', datetime: '2023-01-22T19:00', href: '/' },
    ],
  },
  { date: '2023-01-23', isCurrentMonth: true, events: [] },
  { date: '2023-01-24', isCurrentMonth: true, events: [] },
  { date: '2023-01-25', isCurrentMonth: true, events: [] },
  { date: '2023-01-26', isCurrentMonth: true, events: [] },
  { date: '2023-01-27', isCurrentMonth: true, events: [] },
  { date: '2023-01-28', isCurrentMonth: true, events: [] },
  { date: '2023-01-29', isCurrentMonth: true, events: [] },
  { date: '2023-01-30', isCurrentMonth: true, events: [] },
  { date: '2023-02-01', events: [] },
  { date: '2023-02-02', events: [] },
  { date: '2023-02-03', events: [] },
  {
    date: '2023-02-04',
    events: [{ id: 7, name: 'End of Semester Exam', time: '9PM', datetime: '2023-02-04T21:00', href: '/' }],
  },
  { date: '2023-02-05', events: [] },
  { date: '2023-02-06', events: [] },
]
const selectedDay = days.find((day) => day.isSelected)

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: false },
  { name: 'Dashboard', href: '/Dashboard', icon: BookmarkIcon, current: true },
  { name: 'Login', href: '/Login', icon: UsersIcon, current: false },
  { name: 'Grade Report', href: '/GradeReport', icon: ChartPieIcon, current: false },
  { name: 'Help', href: '/HelpPage', icon: QuestionMarkCircleIcon, current: false },
]
const teams = [
  { id: 1, name: 'Assignments', href: '/', initial: 'A', current: false },
  { id: 2, name: 'Labs Sessions', href: '/', initial: 'L', current: false },
  { id: 3, name: 'Tests & Quizzes', href: '/', initial: 'T', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '/' },
  { name: 'Sign out', href: '/Login' },
]
const data=[
    {name:"Introduction to Math", value: 93},
    {name:"Introduction to Management", value: 0},
    {name:"Science Basics", value: 88},
    {name:"Art History", value: 70},
    {name:"Math & Numbers", value: 34},
    {name:"English Writing", value: 40},
    {name:"Philosophy of Science", value: 95},
]


export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>

      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4 ring-1 ring-white/10">
                   
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">Activities</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="/"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                          >
                            <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
            <div className="text-lg" style={{color:'white'}}>
            <b>
              GradeQuest
            </b>
          </div>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">Activities</div>
                  <ul className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="/"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src={unknown}
                      alt="unknown"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        Doreen 
                      </span>
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main>
            <div>
                <div style={{paddingLeft: '40px',background:'whitesmoke', paddingTop:'40px', marginLeft:'40px', marginRight:'40px', marginTop:'20px'}}>
                  <b className='text-3xl' >
                    Courses
                  </b>
                </div>
                <div className='text-lg pl-10'  style={{background:'whitesmoke', paddingBottom:'40px', marginLeft:'40px', marginRight:'40px'}}>
                  <ol>
                    <li>Introduction to Math</li> 
                    <li>Introduction to Management</li>                 
                    <li>Science Basics</li>
                    <li>Arts History</li>
                    <li>Math & Numbers</li> 
                    <li>English Writing</li>  
                    <li>Philosophy of Science</li>  
                  </ol>               
                </div>
                <div style={{marginLeft: '40px', marginTop:'40px'}}>
                    <b className='text-3xl'>Grades</b>
                </div>
                <div className='grid lg:grid-cols-6 md:grid-cols-2 space-x-3 mx-4' style={{marginTop:'20px', marginLeft: '40px'}}>
                    <div className='text-center  shadow-xl'  style={{ border: '1px solid lightgray', borderRadius: '2px', padding: '2px', width:'120px'}}>1st Semester</div>
                    <div className='text-center  shadow-xl' style={{ border: '1px solid lightgray', borderRadius: '2px', padding: '2px', width:'120px'}}>2nd Semester</div>
                    <div className='text-center  shadow-xl' style={{ border: '1px solid lightgray', borderRadius: '2px',padding: '2px', width:'120px'}}>3rd Semester</div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <table  style={{ border: '1px solid lightgray', width:'90%', height:'400px', marginLeft:'40px', marginTop: '16px', padding:'40px'}} className='text-center shadow-2xl' >
                        <tr className='px-22'style={{borderBottom: '1px solid lightgray'}} >
                            <td><b>Class</b></td>
                            <td><b>Exam1</b></td>
                            <td><b>Exam2</b></td>
                            <td><b>Exam3</b></td>
                            <td><b>Final Paper</b></td>
                            <td><b>Final Grade</b></td>
                        </tr>
                        <tr style={{borderBottom: '1px solid lightgray', padding:'20px'}}>
                            <td>Introduction to Maths</td>
                            <td>86</td>
                            <td>90</td>
                            <td>100</td>
                            <td>94</td>
                            <td><b>93(A)</b></td>
                        </tr>
                        <tr style={{borderBottom: '1px solid lightgray'}}>
                            <td>Introduction to Management</td>
                            <td>100</td>
                            <td>82</td>
                            <td>98</td>
                            <td>Not</td>
                            <td><b>N/A</b></td>
                        </tr>
                        <tr style={{borderBottom: '1px solid lightgray'}}>
                            <td>Science Basics</td>
                            <td>75</td>
                            <td>85</td>
                            <td>94</td>
                            <td>96</td>
                            <td><b>88(B)</b></td>
                        </tr>
                        <tr style={{borderBottom: '1px solid lightgray'}}>
                            <td>Art History</td>
                            <td>Not</td>
                            <td>80</td>
                            <td>60</td>
                            <td>72</td>
                            <td><b>70(C)</b></td>
                        </tr>
                        <tr style={{borderBottom: '1px solid lightgray'}}>
                            <td>Math & Numbers</td>
                            <td>26</td>
                            <td>48</td>
                            <td>28</td>
                            <td>34</td>
                            <td><b>34(E)</b></td>
                        </tr>
                        <tr style={{borderBottom: '1px solid lightgray'}}>
                            <td>English Writing</td>
                            <td>20</td>
                            <td>Not</td>
                            <td>50</td>
                            <td>48</td>
                            <td><b>40(E)</b></td>
                        </tr>
                        <tr style={{borderBottom: '1px solid lightgray'}}>
                            <td>Philosophy of Science</td>
                             <td>92</td>
                            <td>100</td>
                            <td>100</td>
                            <td>86</td>
                            <td><b>95(A)</b></td>
                        </tr>
                    </table>
                </div>
                <div style={{textAlign:'center', marginTop:'40px'}}>
                  <strong className='text-3xl' >In Perspective</strong>
                </div>
                <div className='lg:grid grid-cols-2 md:grid-cols-1' style={{display:'flex', marginTop:'70px'}}>
                  <div style={{paddingTop:'2px'}}>
                      <PieChart width={400} height={400}>
                        <Pie
                          dataKey="value"
                          isAnimationActive={false}
                          data={data}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          label
                        />
                        <Tooltip />
                      </PieChart>
                  </div>
                  <div>
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                    barSize={20}
                  >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
                  </BarChart>
                  </div>
                  
                </div>
            
            
            
            </div>
        
                <div className="lg:flex lg:h-full lg:flex-col">
            <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none mx-20">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                <time dateTime="2023-01">December 2023</time>
              </h1>
              <div className="flex items-center">
                <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
                  <button
                    type="button"
                    className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous month</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
                  >
                    Today
                  </button>
                  <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
                  <button
                    type="button"
                    className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
                  >
                    <span className="sr-only">Next month</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="hidden md:ml-4 md:flex md:items-center">
                  <Menu as="div" className="relative">
                    <Menu.Button
                      type="button"
                      className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Month view
                      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Day view
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Week view
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Month view
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Year view
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <div className="ml-6 h-6 w-px bg-gray-300" />
                  <button
                    type="button"
                    className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add event
                  </button>
                </div>
                <Menu as="div" className="relative ml-6 md:hidden">
                  <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Open menu</span>
                    <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Create event
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Go to today
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Day view
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Week view
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Month view
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Year view
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </header>
            <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
              <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
                <div className="bg-white py-2">
                  M<span className="sr-only sm:not-sr-only">on</span>
                </div>
                <div className="bg-white py-2">
                  T<span className="sr-only sm:not-sr-only">ue</span>
                </div>
                <div className="bg-white py-2">
                  W<span className="sr-only sm:not-sr-only">ed</span>
                </div>
                <div className="bg-white py-2">
                  T<span className="sr-only sm:not-sr-only">hu</span>
                </div>
                <div className="bg-white py-2">
                  F<span className="sr-only sm:not-sr-only">ri</span>
                </div>
                <div className="bg-white py-2">
                  S<span className="sr-only sm:not-sr-only">at</span>
                </div>
                <div className="bg-white py-2">
                  S<span className="sr-only sm:not-sr-only">un</span>
                </div>
              </div>
              <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
                <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
                  {days.map((day) => (
                    <div
                      key={day.date}
                      className={classNames(
                        day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500',
                        'relative px-3 py-2'
                      )}
                    >
                      <time
                        dateTime={day.date}
                        className={
                          day.isToday
                            ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'
                            : undefined
                        }
                      >
                        {day.date.split('-').pop().replace(/^0/, '')}
                      </time>
                      {day.events.length > 0 && (
                        <ol className="mt-2">
                          {day.events.slice(0, 2).map((event) => (
                            <li key={event.id}>
                              <a href={event.href} className="group flex">
                                <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                                  {event.name}
                                </p>
                                <time
                                  dateTime={event.datetime}
                                  className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                                >
                                  {event.time}
                                </time>
                              </a>
                            </li>
                          ))}
                          {day.events.length > 2 && <li className="text-gray-500">+ {day.events.length - 2} more</li>}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
                <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
                  {days.map((day) => (
                    <button
                      key={day.date}
                      type="button"
                      className={classNames(
                        day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                        (day.isSelected || day.isToday) && 'font-semibold',
                        day.isSelected && 'text-white',
                        !day.isSelected && day.isToday && 'text-indigo-600',
                        !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                        !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-500',
                        'flex h-14 flex-col px-3 py-2 hover:bg-gray-100 focus:z-10'
                      )}
                    >
                      <time
                        dateTime={day.date}
                        className={classNames(
                          day.isSelected && 'flex h-6 w-6 items-center justify-center rounded-full',
                          day.isSelected && day.isToday && 'bg-indigo-600',
                          day.isSelected && !day.isToday && 'bg-gray-900',
                          'ml-auto'
                        )}
                      >
                        {day.date.split('-').pop().replace(/^0/, '')}
                      </time>
                      <span className="sr-only">{day.events.length} events</span>
                      {day.events.length > 0 && (
                        <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                          {day.events.map((event) => (
                            <span key={event.id} className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                          ))}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {selectedDay?.events.length > 0 && (
              <div className="px-4 py-10 sm:px-6 lg:hidden">
                <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
                  {selectedDay.events.map((event) => (
                    <li key={event.id} className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
                      <div className="flex-auto">
                        <p className="font-semibold text-gray-900">{event.name}</p>
                        <time dateTime={event.datetime} className="mt-2 flex items-center text-gray-700">
                          <ClockIcon className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                          {event.time}
                        </time>
                      </div>
                      <a
                        href={event.href}
                        className="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
                      >
                        Edit<span className="sr-only">, {event.name}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )
                  }
                  <Footer/>
                  </div>
            
          </main>
        </div>
     
      </div>
    </>
  )
}


