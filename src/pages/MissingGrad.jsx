import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function MissingGrade() {
  return (
    <div className="flex flex-col items-center  justify-center  h-screen">
      <div className="w-1/2 flex justify-center items-center border border-stone-900 py-10 rounded-md shadow-2xl">
        <form className="">
                
          <div className="space-y-12 sm:space-y-16">
                    
            <div>
                        
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Report Missing Grade
              </h2>
                        
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                  Thank you for using the Missing Grade Reporting System. Please
                provide the following information to report a missing grade.
                Ensure that all details are accurate to expedite the resolution
                process.          
              </p>
                  <h1 className="mt-10 font-bold">Instructions:</h1>
              <ul className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                <li className="">
                  {" "}
                  1. Complete the form below with the necessary details.
                </li>
                    <li>2. Fields marked with * are required</li>       
              </ul>
                         
            </div>
                    
            <div>
                              
              <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                            
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  >
                                    Course name               
                  </label>
                                
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                                    
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                                  
                  </div>
                              
                </div>
                            
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  >
                           Instructor name               
                  </label>
                                
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                                    
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                                  
                  </div>
                              
                </div>
                            
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  >
                                    Expected Grade              
                  </label>
                                
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                                    
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                              <option>A</option>
                             <option>B+</option>
                             <option>B</option>
                             <option>C+</option>
                             <option>C</option>
                          <option>D+</option>
                          <option>D</option>
                                      
                    </select>
                                  
                  </div>
                              
                </div>
                            
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                  >
                                    Street address               
                  </label>
                                
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                                    
                    <input
                      row={4}
                      type="text "
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                    />
                                  
                  </div>
                              
                </div>
                                                        
              </div>
                      
            </div>
                           
          </div>
                
          <div className="mt-6 flex items-center justify-center gap-x-6">
                    
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
                        Cancel         
            </button>
                    
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-stone-900 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
                Submit form
            </button>
                  
          </div>
              
        </form>
      </div>
    </div>
  );
}
