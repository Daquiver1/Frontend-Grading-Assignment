import { records3 } from "./records"

const Dashboard = () => {
  return (
    <div className="text-slate-500">
        
            <ul className={`m-4 border-2 border-slate-500 rounded p-2`}>
              <li className="text-lg font-bold">Current Grades</li>
              <li className="text-sm grid grid-cols-[7%_34%_5%_5%_5%] border-solid border-slate-500 border-b-2 mb-3">
                <p className="text-md font-semibold">2023/24</p>
                <p className="text-md font-semibold">First Semester</p>
                <p className="text-md font-semibold">CCP</p>
                <p className="text-md font-semibold">CCT</p>
                <p className="text-md font-semibold">CGPA</p>
              </li>
              <li className="text-sm grid grid-cols-[7%_34%_5%_5%_5%] border-solid border-slate-500 border-b-2">
                <p className="">Code</p>
                <p className="">Course Title</p>
                <p className="">Credit</p>
                <p className="">Grade</p>
                <p className="">GPT</p>
              </li>
              
            {records3.map((record) => (
              <li key={record.code} className="text-sm grid grid-cols-[7%_35%_5%_5%_5%]">
                <p className="">{record.code}</p>
                <p className="">{record.title}</p>
                <p className="">{record.credit}</p>
                <p className="">{record.grade}</p>
                <p className="">{record.gpt}</p>
              </li>
            ))}
          </ul>
          <div>
              <div className="m-4 flex border-2 border-slate-500 rounded">
                <p className="text-2xl p-4">FGPA:</p>
                <p className="text-2xl p-4">3.00</p>
              </div>
              <div className="m-4 border-2 border-slate-500 rounded">
                <p>Missing Grades</p>

              </div>
          </div>
    </div>
  )
}

export default Dashboard