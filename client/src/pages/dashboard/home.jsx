
  export default function Home() {
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
      <div className="text-left">
        
        <h1 className="mt-4 headline-text2">Your grades this semester</h1>
        <div className="flex justify-between p-4 flex-wrap items-center grow">
        </div>

        <table className="ring-1 ring-yellow-600/20 p-4 min-w-full divide-y divide-gray-300">
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
    )
  }
  