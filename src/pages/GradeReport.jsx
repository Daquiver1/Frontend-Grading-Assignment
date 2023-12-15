import { Fragment } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";



const days = [
  {
    

  
    date: "First Semester - 2023-03-22",
    dateTime: "2023-03-22",
    transactions: [
      {
        id: 1,
        courseName: " Programming Fundamentals",
        courseCode: "DCIT 104 ",
        icon: ArrowUpCircleIcon,
        grade: "A",
      },
      {
        id: 3,
        courseName: "Introduction to computer Science",
        courseCode: "DCIT 101",
        icon: ArrowUpCircleIcon,
        grade: "N/A",
      },
      {
        id: 4,
        courseName: "Web Design Development",
        courseCode: "DCIT 205",
        icon: ArrowUpCircleIcon,
        grade: "A+",
      },
      {
        id: 5,
        courseName: " Academic Writing II",
        courseCode: "CBAS 210",
        icon: ArrowUpCircleIcon,
        grade: "A+",
      },
      {
        id: 6,
        courseName: "Digital and logic system designs",
        courseCode: "DCIT 203",
        icon: ArrowUpCircleIcon,
        grade: "A+",
      },
      {
        id: 7,
        courseName: "Computer Organization and Architecture",
        courseCode: "DCIT 207",
        icon: ArrowUpCircleIcon,
        grade: "N/A",
      },
      {
        id: 8,
        courseName: " Programming 1",
        courseCode: "DCIT 201",
        icon: ArrowUpCircleIcon,
        grade: "A",
      },
      
    ],
    
    
  },
];




export default function GradeReport() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
        <h2  style={{display: 'inline-block'}} className="mx-auto max-w-2xl text-xl font-bold leading-6 mt-4 text-gray-900 lg:mx-0 lg:max-w-none">
          Student Academic Record
        </h2>
        <button type="button" className="btn-btn" style={{paddingTop: 10, paddingLeft:'50px', paddingRight:'50px', display:'inline-block', marginLeft:'600px'}}>Print
        <svg style={{display:"flex"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
  <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
</svg>
        </button>
      </div>
      <div className="mt-6 overflow-hidden border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table className="w-full text-left">
              <thead className="sr-only">
                <tr>
                  <th>Amount</th>
                  <th className="hidden sm:table-cell">Client</th>
                  <th>More details</th>
                </tr>
              </thead>
              <tbody>
                {days.map((day) => (
                  <Fragment key={day.dateTime}>
                    <tr className="text-sm leading-6 text-gray-900">
                      <th
                        scope="colgroup"
                        colSpan={3}
                        className="relative isolate py-2 font-semibold"
                      >
                        <time dateTime={day.dateTime}>{day.date}</time>
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                      </th>
                    </tr>
                    {day.transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="relative py-5 pr-6">
                          <div className="flex gap-x-6">
                            <transaction.icon
                              className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                              aria-hidden="true"
                            />
                            <div className="flex-auto">
                              <div className="flex items-start gap-x-3">
                                <p className="text-sm font-medium leading-6 text-gray-900">
                                  {transaction?.courseName}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                          <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                        </td>
                        <td className="hidden py-5 pr-6 sm:table-cell">
                          <div className="mt-1 text-lg leading-5 text-gray-600">
                            {transaction?.courseCode}
                          </div>
                        </td>
                        <td className="py-5 text-right">
                          <div className="mt-1 text-xs leading-5 text-gray-500">
                            <span className="text-gray-900 text-xl font-bold">
                              {transaction?.grade}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    
  );
}
