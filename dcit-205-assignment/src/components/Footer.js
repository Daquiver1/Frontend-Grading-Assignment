//footer
import { Link } from "react-router-dom";
import webiste from "../scripts/data";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="relative bottom-0 left-0 z-20 w-full p-4 bg-white border-none border-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-300 dark:border-gray-600">
      <span className="text-sm text-gray-700 sm:text-center dark:text-gray-700">
        © {year}
        <Link to="" className="hover:underline">
          {webiste.name}™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-700 sm:mt-0">
        <li>
          <Link to="/" className="hover:underline me-4 md:me-6">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline me-4 md:me-6">
            Course Check
          </Link>
        </li>
        <li>
          <Link to="/signup" className="hover:underline me-4 md:me-6">
            Apply
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}
