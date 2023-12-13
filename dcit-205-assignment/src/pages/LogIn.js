import logo from "../components/logo.svg"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function LogIn() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-screen w-full items-center justify-center  text-white bg-white pt-10">
        {/* component */}
        <section className="flex w-[30rem] flex-col space-y-10">
          
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Student Id
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
            />
          </div>
          <Link
            to="/dashboard"
            className="transform rounded-lg bg-indigo-600 py-3 font-bold duration-300 hover:bg-indigo-400 text-center"
          >
            LOGIN
          </Link>
          <a
            href="/missing-grades"
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >
            FORGOT PASSWORD?
          </a>
          <p className="text-center text-lg text-black">
            Don't have an account?{" "}
            <Link
              to="/missing-grades"
              className="font-medium text-indigo-500 underline-offset-4 hover:underline"
            >
              Create One
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );}