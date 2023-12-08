import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import webiste from "../scripts/data";
export default function HelpAndSupport() {
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-gray-200 pt-11">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 ">
            Frequently asked questions
          </h1>

          <div className="mt-12 space-y-8 ">
            <div className="bg-gray-900 border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  What is {webiste.websiteName}?
                </h1>

                <span className="text-gray-400 bg-gray-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              </button>

              <hr className="border-gray-200 dark:border-gray-700" />

              <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                Welcome to {webiste.websiteName}, a platform designed to help students
                stay on top of their academic progress. Our website provides a
                range of features that enable students to check their courses
                and grades, contact instructors, file missing grade reports, and
                raise course issues and concerns. We understand that students
                have busy schedules and need a platform that is easy to use and
                navigate. That's why we have designed {webiste.websiteName} to be
                user-friendly and intuitive. Our platform is accessible from any
                device, so you can stay connected and up-to-date on the go. At {" "} 
                 {webiste.websiteName}, we are committed to providing the best possible
                experience for our users. Our team is constantly working to
                improve our platform and add new features that meet the needs of
                our users. We believe that education is the key to success, and
                we are dedicated to helping students achieve their academic
                goals. Thank you for choosing {webiste.websiteName}. We look forward to
                helping you succeed!
              </p>
            </div>

            <div className="bg-gray-900  border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  Do I need to manually create an account?
                </h1>

                <span className="text-white bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="bg-gray-900  border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  Do I need a referral?
                </h1>

                <span className="text-white bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="bg-gray-900  border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  How long does it take for processing of reports?
                </h1>

                <span className="text-white bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="bg-gray-900  border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  What can I do if I lost my Login credentials?
                </h1>

                <span className="text-white bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
