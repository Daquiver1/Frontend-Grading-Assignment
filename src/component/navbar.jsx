import React from 'react'
import {Link} from 'react-router-dom'
import LOGO from "../uglogo.png"

const Navbar = () => {
    
    return (
        <div className="w-screen h-[84px] flex items-center justify-around  relative bg-slate-50">
          <img src={LOGO} alt='logo' className='w-24' />
          <div>
          <div className="left-[425.50px] top-[30px] justify-center items-center gap-[50px] inline-flex">
            <div className="justify-start items-center gap-2.5 flex">
            <Link to = '/'>
                <div className="text-zinc-900 text-base font-medium font-['Inter'] leading-normal">Home</div>
            </Link>
            </div>
            <div className="justify-start items-center gap-2.5 flex">
            <Link to = '/dashboard'>
                <div className="text-zinc-900 text-base font-normal font-['Inter'] leading-normal">Dashboard</div>
            </Link>
            </div>
            <div className="justify-start items-center gap-2.5 flex">
            <Link to = "/report">
              <div className="text-zinc-900 text-base font-normal font-['Inter'] leading-normal">Grade Report</div>
            </Link>
            </div>
            <div className="justify-start items-center gap-2.5 flex">
              <Link to = "/missin-grade">
                <div className="text-zinc-900 text-base font-normal font-['Inter'] leading-normal">Missing Grade</div>
              </Link>
            </div>
            <div className="justify-start items-center gap-2.5 flex">
              <Link to = "/contact">
                <div className="text-zinc-900 text-base font-normal font-['Inter'] leading-normal">Contact</div>
              </Link>
            </div>
            <div className="justify-start items-center gap-2.5 flex">
              <Link to = "/help">
                <div className="text-zinc-900 text-base font-normal font-['Inter'] leading-normal">Help</div>
              </Link>
            </div>
        </div>
        <div className="left-[105px] top-[30px]  justify-start items-center gap-2 inline-flex">
            <div className="w-[35px] h-6 relative" />
        </div>
        <div className="left-[1138px] top-[22px]  justify-start items-start gap-3.5 inline-flex">
            <div className="px-5 py-2.5 bg-slate-50 rounded-md justify-start items-center gap-2.5 flex">
              <Link to = "/login">
                <div className="text-center text-blue-500 text-sm font-medium font-['Inter'] leading-tight">Login</div>
              </Link>
            </div>
            <div className="px-5 py-2.5 bg-blue-500 rounded-md justify-start items-center gap-2.5 flex">
            <Link to = "sign">
              <div className="text-center text-white text-sm font-medium font-['Inter'] leading-tight">Sign up</div>
            </Link>
            </div>
        </div>
          </div>
        </div>
)
}

export default Navbar;