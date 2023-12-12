

export default function MissingGradesForm() {
  return (
    <form className="mx-auto mt-20">
            <div className="sm:col-span-4">
              <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                Student id
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">id/</span>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    autoComplete="id"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="11223344"
                  />
                </div>
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                Course
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">id/</span>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    autoComplete="id"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="11223344"
                  />
                </div>
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                expected grade
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">id/</span>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    autoComplete="id"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="11223344"
                  />
                </div>
              </div>
            </div>
     
    </form>
  )
}
