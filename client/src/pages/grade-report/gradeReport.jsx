
  export default function GradeReport() {
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


    return (
      <div className="px-4 my-10 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Grades Report</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all your grades from the time you were enrolled in this school
            </p>

            <div className="flex mt-6 gap-8">
                <div className="">
                   <h1 className="text-base font-semibold leading-6 text-gray-900">Selected level </h1><span className="text-sm font-medium text-gray-600"> Level 200</span>
                </div>

                <div className="">
                   <h1 className="text-base font-semibold leading-6 text-gray-900">Selected semester </h1><span className="text-sm font-medium text-gray-600">Second Semester</span>
                </div>
            </div>
          </div>

          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Select level
            </button>
            <button
              type="button"
              className="mt-4 block rounded-md bg-red-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Select semester
            </button>
          </div>
        </div>
        <div className="-mx-4 mt-8 sm:-mx-0">
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
        </div>
      </div>
    )
  }
  