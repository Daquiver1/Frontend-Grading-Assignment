import Navbar from "../../components/navbar";

export default function Hero() {

  return (
    <div className="bg-white -z-10">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              You can access your grade results here
            </h1>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="sign-in"
                className="rounded-md bg-pink-600 px-40 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </a>
              
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}
