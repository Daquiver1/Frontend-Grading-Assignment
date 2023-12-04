import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function LogIn() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-screen w-full items-center justify-center  text-white bg-white">
        {/* component */}
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium text-black">Log In</div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Email or Username"
              className="w-full border-none bg-transparent outline-none placeholder:bold focus:outline-none text-black"
            />
          </div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:bold focus:outline-none text-black"
            />
          </div>
          <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
            LOG IN
          </button>
          <a
            href="#"
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >
            FORGOT PASSWORD?
          </a>
          <p className="text-center text-lg text-black">
            Don't have an account?{" "}
            <Link
              to="/signup"
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