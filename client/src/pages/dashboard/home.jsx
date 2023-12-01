import { ArrowDownOnSquareIcon, ClockIcon } from "@heroicons/react/20/solid"
import { ArrowDownLeftIcon, ArrowUturnLeftIcon, TrashIcon } from "@heroicons/react/24/outline"

  export default function Home() {
    const notifications = [
        {
            title:"Come for remarking",
            sender:"Dr. Mark",
            desc:"I am very sorry for any your undeserved grade. Kindly come for remarking at Math dept. Room 51",
            date:"12-11-2023"
        },
        {
            title:"Login from another devices",
            sender:"UG",
            desc:"We have detected a login from a different device. Check your email to verify if it was you.",
            date:"02-11-2023"
        },
        {
            title:"Rejected proposal",
            sender:"UG",
            desc:"Dear 11231984, you didn't adhere to the rule for submitting this complaint therefore your request is rejected",
            date:"12-11-2023"
        },
        {
            title:"Come for remarking",
            sender:"Prof Sheba",
            desc:"i am very sorry for any your undeserved grade. Kindly come for remarking at Math dept. Room 51",
            date:"12-11-2023"
        },
    ]
    return (
      <div className="text-left">
        <h1 className="text-left !important headline-text">Current Grades</h1>
        <div className="flex justify-between p-4 flex-wrap items-center grow">
            <p className="font-[600]">Level 200 first semester</p>

            <button className="outline-btn rind-red-400 avg-flex bg-blue-500">Select semester <ArrowDownOnSquareIcon className="h-6 w-auto text-blue-400"/></button>
        </div>

        <table className="text-center my-12 w-3/4 ring-1 ring-inset ring-gray-200 p-2 rounded-md my-4">
            <thead>
                <tr className="shadow-sm">
                    <th className="font-[600]">Course Code</th>
                    <th className="font-[600]">Grade</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>DCIT_201</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>DCIT_205</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>PHYS_241</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>PHYS_245</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>PHYS_205</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>MATH_223</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>UGRC_222</td>
                    <td>A</td>
                </tr>
            </tbody>
        </table>
        

        {/* notifications */}
     <br />
        <p className="font-[600] mt-6 mb-4 ">Unread notifications</p>

        <div className="flex flex-col gap-2">
            {notifications.map(not => {
                return(
                    <div className="cursor-pointer flex flex-col ring-1 ring-inset ring-gray-100 shadow-md rounded-lg p-4 my-2">
                      <div className="flex justify-between">
                         <p className="text-gray-950 font-[600]">{not.title}</p><span className="text-gray-950 font-[600]"> - {not.sender}</span>
                      </div>

                      <p className="text-gray-500 text-sm p-1.5 tracking-[0.2px] my-4">{not.desc}</p>

                      <div className="flex items-center justify-start gap-8">
                         <p className="text-purple-500 outline-btn text-[12px] flex gap-2 items-center justify-center"><ClockIcon className="h-4 w-auto"/> {not.date}</p>

                         <div className="flex items-center justify-center">
                            <TrashIcon className="text-red-200 h-8 w-auto "/>
                            <ArrowUturnLeftIcon  className="text-blue-200 h-6 w-auto "/>
                         </div>
                      </div>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
  