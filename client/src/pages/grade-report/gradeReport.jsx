
  export default function GradeReport() {
      //grades
      const grades = [
        {
            code:"DCIT-205",
            grade:"A"
        },
        {
            code:"DCIT-205",
            grade:"A"
        },
        {
            code:"DCIT-205",
            grade:"A"
        },
        {
            code:"DCIT-205",
            grade:"A"
        },
        {
            code:"DCIT-205",
            grade:"A"
        },
        {
            code:"DCIT-205",
            grade:"A"
        },
        {
            code:"DCIT-205",
            grade:"A"
        },
        
    ]


    return (
      <div className="px-4 my-10 sm:px-6 lg:px-8">
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
  