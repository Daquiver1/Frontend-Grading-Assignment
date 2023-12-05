// Footer.js
import React from "react";

const Footer = () => {
  return (
<footer style={{ marginTop: "20px" }} className="fixesd bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between ">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="/" class="hover:underline">
          StudentGrade Book
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="/" class="hover:underline me-4 md:me-6">
            About
          </a>
        </li>

        <li>
          <a href="/help-and-support" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
