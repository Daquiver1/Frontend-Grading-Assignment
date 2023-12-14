export const Dashboard = () => {
  return (
    <>
      <div className="mt-4 p-3 bg-teal-500 text-white  dark:text-white rounded-md mb-4">
        Some grades are missing. Please fill the missing grade report form
      </div>
      <header className="font-bold text-3xl  mb-10">
        STUDENT'S CURRENT GRADES
      </header>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Course Title
              </th>
              <th scope="col" class="px-6 py-3">
                Student Grade
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                DCIT 201 - PROGRAMMING 1
              </th>
              <td class="px-6 py-4">A</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                DCIT 203 - DIGITAL AND LOGIC SYSTEM DESIGN
              </th>
              <td class="px-6 py-4">N/A</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                DCIT 205 - MULTI MEDIA AND WEB DESIGN
              </th>
              <td class="px-6 py-4">N/A</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                DCIT 207 - COMPUTER ORGANIZATION & ARCHITECTURE
              </th>
              <td class="px-6 py-4">A</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                DCIT 209 - E-BUSINESS ARCHITECTURES
              </th>
              <td class="px-6 py-4">A</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                CBAS 210 - ACADEMIC WRITING
              </th>
              <td class="px-6 py-4">A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
