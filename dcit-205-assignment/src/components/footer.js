export const Footer = () => {
    return (
      <footer className="sticky bottom-0 left-0 z-20 w-full p-4 bg-white border-none border-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-300 dark:border-gray-600">
        <span className="text-sm text-gray-700 sm:text-center dark:text-gray-700">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            CourseSues.io™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-700 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Course Check
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Apply
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    );
};
export default Footer;