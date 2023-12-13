import logo from "../components/logo.svg";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { webiste } from "../scripts/data";
export default function MissingGrades() {
  return (
    <>
      <Header />
      <section className="mx-auto  p-6  rounded-md shadow-md bg-slate-200 mt-20">
        <h1 className="text-5xl  text-black text-center capitalize font-bold mb-3">
          Report Missing Grades
        </h1>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-black " htmlFor="username">
                Student ID
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-white  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-black" htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md  dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-black" htmlFor="password">
                Full Name
              </label>
              <input
                id="password"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md  dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-black" htmlFor="passwordConfirmation">
                Lecturer's Name
              </label>
              <input
                id="passwordConfirmation"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md  dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-black" htmlFor="passwordConfirmation">
                Programme
              </label>
              <select className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md  dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>Computer Science</option>
                <option>Information Technology</option>
                <option>Mathematical Science</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-black" htmlFor="passwordConfirmation">
                Date
              </label>
              <input
                id="date"
                type="date"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md  dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-black" htmlFor="passwordConfirmation">
                Your Report Here
              </label>
              <textarea
                id="textarea"
                type="textarea"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md  dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                defaultValue={""}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-black"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-black">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer  rounded-md font-medium bg-blue-600 text-white hover:text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-black">or drag and drop</p>
                  </div>
                  <p className="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Link to="/home">
              <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}
