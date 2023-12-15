import React from "react";
import Layout from '../Layout/layout';


export default function Dashboard(){

  const handleMissing = ()=>{


    alert("Successfully Posted")
  }

  return(
    <Layout>
      <form>
      <div className="space-y-12">
      <h2 class="mb-4 mt-6 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Report Missing Grade</h2>

        <div className="border-gray-900/10 pb-12">
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Fill the form below for any missing grade.
          </p>

          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="course-name" className="block text-sm font-medium leading-6 text-gray-900">
                Course name
              </label>
              <div className="">
              <select
                  id="course-name"
                  name="course-name"
                  size={'large'}
                  autoComplete="course-name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                >
                  <option>Course One</option>
                  <option>Course Two</option>
                  <option>Course Three</option>
                  <option>Course Four</option>
                  <option>Course Five</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="instructor" className="block text-sm font-medium leading-6 text-gray-900">
              Instructor Name
              </label>
              <div className="">
              <select
                  id="instructor"
                  name="instructor"
                  autoComplete="instructor"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Select Instructor"
                >
                  <option>Instructor One</option>
                  <option>Instructor Two</option>
                  <option>Instructor Three</option>
                  <option>Instructor Four</option>
                  <option>Instructor Five</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="expected_grade" className="block text-sm font-medium leading-6 text-gray-900">
              Expected grade
              </label>
              <div className="mt-2">
                <input
                  id="expected_grade"
                  name="expected_grade"
                  type="text"
                  autoComplete="expected_grade"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  placeholder="Enter expected grade"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="explanation" className="block text-sm font-medium leading-6 text-gray-900">
              Explanation
              </label>
              <div className="mt-2">
                <input
                  id="explanation"
                  name="explanation"
                  type="text"
                  autoComplete="explanation"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  placeholder="Enter expected grade"
                />
              </div>
            </div>


       

            
          </div>


          <div className="float-right m-5">  
                <button
                onClick={handleMissing}
                  class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                 >
                  Submit
                </button>
            </div>
        </div>


       
      </div>

 
    </form>

    </Layout>
  )
}