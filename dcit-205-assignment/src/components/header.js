import logo from './logo.svg'
import { Link } from "react-router-dom";
export default function Header (){
    return (
      <header className="fixed top-0 left-0 right-0 bg-gray-100 z-50">
        <nav
          class=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div class="flex lg:flex-1">
            <Link to="" class="-m-1.5 p-1.5">
              <span class="sr-only">UG | Course Complaint</span>
              <img class="h-8 w-auto" src={logo} alt="" />
            </Link>
          </div>
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <div class="relative">
              <Link
              to="/home"
                class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                aria-expanded="false"
              >
                Home
              </Link>
            </div>

            <Link
              to="/"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              About
            </Link>
            <Link
              to="/"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              Course Check
            </Link>
            <Link
              to="/signup"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              Sign Up
            </Link>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/login"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>
    );
}