import {PencilIcon, XMarkIcon} from "@heroicons/react/20/solid"

const engagements = [
    {
        id: 10834230,
        patientName: "Ben Sam",
        dateOfAppt: "2nd April 2023",
        profAssigned: "Dr. Samuel Akon",
    },
    {
        id: 10834231,
        patientName: "Ben Sam",
        dateOfAppt: "2nd April 2023",
        profAssigned: "Dr. Samuel Akon",
    },
    {
        id: 10834232,
        patientName: "Ben Sam",
        dateOfAppt: "2nd April 2023",
        profAssigned: "Dr. Samuel Akon",
    },
    {
        id: 10834233,
        patientName: "Ben Sam",
        dateOfAppt: "2nd April 2023",
        profAssigned: "Dr. Samuel Akon",
    },
    {
        id: 10834234,
        patientName: "Ben Sam",
        dateOfAppt: "2nd April 2023",
        profAssigned: "Dr. Samuel Akon",
    }
  ]
  
  export default function Table() {
    return (
      <div className=" sm:px-6 lg:px-8 ">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-base font-semibold leading-6 text-gray-900">Recent Engagements</h2>
          </div>
         
        </div>
        <div className="mt-8 flow-root bg-white px-4 rounded-lg">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      ID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Patient Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date of Appt
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Prof Assigned
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {engagements.map((engagement) => (
                    <tr key={engagement.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {engagement.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{engagement.patientName}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{engagement.dateOfAppt}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{engagement.profAssigned}</td>
                      <td className="flex items-center justify-center gap-x-4 relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" className="text-red-500 hover:text-red-900 w-3/5 md:w-1/5">
                            <PencilIcon />
                        </a>
                        <a href="#" className="w-3/5 md:w-1/5 text-green-500 hover:text-green-800">
                            <XMarkIcon />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  