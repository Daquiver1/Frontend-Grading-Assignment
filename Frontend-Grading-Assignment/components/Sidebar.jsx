import { useState } from "react";
import Dashboard from "./Dashboard";
import GradeReport from "./GradeReport"
import MissingGrade from "./MissingGrade"
import InstructorContact from "./InstructorContact"
import MainHeader from "./MainHeader";

const links = [
    {
        id:"Dashboard",
        title: "Dashboard",
    },
    {
        id: "GradeReport",
        title: "Grade Report",
    },
    {
        id: "MissingGrade",
        title: "Missing Grade Report",
    },
    {
        id: "InstructorContact",
        title: "Instructor Contact",
    }
]

const Sidebar = () => {
    const [active, setActive] = useState("Dashboard");
    const [toggle, setToggle] = useState('flase')
  return (
    <div className="sm:grid sm:grid-cols-[15%_minmax(85%,_1fr)_100px]">
        <ul className="bg-slate-500 text-slate-200 h-[100vh] py-4 md:block hidden">
            <li key={"gradereport"} className="px-2 pb-4 text-2xl">Grade Report</li>
            <li className="cursor-pointer p-2"><a href="/">Home</a></li>
           {links.map((nav) => 
           (
            <li key={nav.id} className={`cursor-pointer p-2 ${active === nav.title ? 'text-white bg-slate-700 rounded' : 'text-slate-200'}`} onClick={() => setActive(nav.title)}>
                {nav.title}
            </li>
           )
           )} 
        </ul>
        <ul className={`bg-slate-500 text-slate-200 h-[100vh] py-4 md:hidden absolute top-0 ${toggle ? 'h-2' : 'h-full'}`}>
            <li key={"gradereport"} className="px-2 pb-4 text-2xl flex justify-between">
                <p>Grade Report</p> 
                <span className="px-1">{toggle ? <p className='text-lg cursor-pointer' onClick={setToggle(!toggle)}>&#120;</p> : <p className='cursor-pointer'>&#9776;</p>}</span>
            </li>
            <li className="cursor-pointer p-2 "><a href="/">Home</a></li>
           {links.map((nav) => 
           (
            <li key={nav.id} className={`cursor-pointer p-2 ${active === nav.title ? 'text-white bg-slate-700 rounded' : 'text-slate-200'}`} onClick={() => setActive(nav.title)}>
                {nav.title}
            </li>
           )
           )} 
        </ul>
        <div>
            <MainHeader/>
            <div>
                {active === "Dashboard" ? <Dashboard/> : active === "Grade Report" ? <GradeReport /> : active === "Missing Grade Report" ? <MissingGrade/> : <InstructorContact/>}
            </div>
        </div>
    </div>
  )
}

export default Sidebar