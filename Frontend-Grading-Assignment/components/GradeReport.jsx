import { records,records2 } from "./records"
import { useState } from "react"


const GradeReport = () => {
  const[active, setActive] = useState('All')
  return (
    <div>
      <div className="flex">
        <span className="flex">
          <h2>Year:</h2>
          <select name="" id="">
            <option value="" selected onClick={() => (setActive('All'))}>All</option>
            <option value="" onClick={() => (setActive('2022/23'))}>2022/23</option>
            <option value="" onClick={() => (setActive('2023/24'))}>2023/24</option>
          </select>
        </span>
        <span className="flex">
          <h2>Semester:</h2>
          <select name="" id="">
            <option value="" selected>All</option>
            <option value="">1st</option>
            <option value="">2nd</option>
          </select>
        </span>
      </div>
      <div>
        <ul className={`m-4 ${active ==="All" ? 'block' : active ==="2022/23" ? 'block' : 'hiddden'}`}>
            <li className="text-sm grid grid-cols-[7%_34%_5%_5%_5%] border-solid border-slate-500 border-b-2">
              <p className="">Code</p>
              <p className="">Course Title</p>
              <p className="">Credit</p>
              <p className="">Grade</p>
              <p className="">GPT</p>
            </li>
            
          {records.map((record) => (
            <li key={record.code} className="text-sm grid grid-cols-[7%_35%_5%_5%_5%]">
              <p className="">{record.code}</p>
              <p className="">{record.title}</p>
              <p className="">{record.credit}</p>
              <p className="">{record.grade}</p>
              <p className="">{record.gpt}</p>
            </li>
          ))}
        </ul>
        <ul className="m-4">
            <li className="text-sm grid grid-cols-[7%_35%_5%_5%_5%]">
              <p>Code</p>
              <p>Course Title</p>
              <p>Credit</p>
              <p>Grade</p>
              <p>GPT</p>
            </li>
            <hr />
          {records2.map((record) => (
            <li key={record.code} className="text-sm grid grid-cols-[7%_35%_5%_5%_5%]">
              <p className="">{record.code}</p>
              <p className="">{record.title}</p>
              <p className="">{record.credit}</p>
              <p className="">{record.grade}</p>
              <p className="">{record.gpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GradeReport