export default function Instructors() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">

            <input
              type="text"
              name="instructor"
              placeholder="Professor ..."
              className="py-2.5 px-1.5 border-0 ring-2 ring-inset ring-yellow-200 text-gray-600 rounded-lg shadow-sm w-full focus:ring-2 focus:ring-purple-600 outline-none"
            />
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Prof. Silas Quansah</h2><br />
                <p><b>Tel:</b> 02898278328</p>
                <p><b>Email:</b> jwlk@gmail.com</p>
              </div>
             
          
          </div>
        </div>
      </div>
    )
  }
  