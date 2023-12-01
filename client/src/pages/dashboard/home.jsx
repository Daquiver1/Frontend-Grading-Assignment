import { ArrowDownOnSquareIcon, ClockIcon } from "@heroicons/react/20/solid"
import { ArrowDownLeftIcon, ArrowUturnLeftIcon, TrashIcon } from "@heroicons/react/24/outline"

  export default function Home() {
    //grades
    const grades = [
        {
            code:"DCIT-205",
            grade:"A"
        },
        {
            code:"DCIT-241",
            grade:"A"
        },
        {
            code:"DCIT-203",
            grade:"A"
        },
        {
            code:"PHYS-205",
            grade:"A"
        },
        {
            code:"PHYS-245",
            grade:"A"
        },
        {
            code:"PHYS-241",
            grade:"A"
        },
        {
            code:"UGRC-222",
            grade:"A"
        },
    ]



    //notifications
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
        
        <h1 className="mt-4 headline-text2">Current Grades</h1>
        <div className="flex justify-between p-4 flex-wrap items-center grow">
            <p className="body-text font-[600]">Level 200 first semester</p>

            <button className="body-text outline-btn rind-red-400 avg-flex bg-blue-500">Download Transcript <ArrowDownOnSquareIcon className="h-6 w-auto text-blue-400"/></button>
        </div>

        <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  Course code
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Grade
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {grades.map((grades) => (
                <tr key={grades.code}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {grades.code}
                  </td>
                  <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    {grades.grade}
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        

        {/* notifications */}
     <br />
        <p className="font-[600] body-text">Unread notifications</p>

        <div className="flex flex-col gap-2">
            {notifications.map(not => {
                return(
                    <div key={not.title} className="cursor-pointer flex flex-col ring-1 ring-inset ring-gray-100 shadow-md rounded-lg p-4 my-2">
                      <div className="flex justify-between">
                         <p className="body-text font-[600]">{not.title}</p><span className="text-gray-950 font-[600]"> - {not.sender}</span>
                      </div>

                      <p className="body-text">{not.desc}</p>

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
  