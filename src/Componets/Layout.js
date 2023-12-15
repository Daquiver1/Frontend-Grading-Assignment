import React, { useState } from "react";
import { Link } from "react-router-dom";

// const Layout = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSideNav = () => setIsOpen(!isOpen);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="bg-gray-100 flex items-center justify-between px-4 py-2">
//         <button
//           onClick={toggleSideNav}
//           className="text-gray-600 hover:text-gray-700 focus:outline-none focus:shadow-sm transition-colors duration-150 ease-in-out"
//         >
//           {/* Side nav icon */}
//           {/* <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="none"
//           >
//             <path
//               d="M4 6H20V8H4V6Z"
//               className="fill-current"
//             />
//             <path
//               d="M10 8H20V10H10V8Z"
//               className="fill-current"
//             />
//             <path
//               d="M16 12H20V14H16V12Z"
//               className="fill-current"
//             />
//           </svg> */}
//         </button>
//         <span className="text-gray-600 font-bold">Log</span>
//         <img src="user-avatar.png" alt="User Avatar" className="rounded-full ml-4 h-8 w-8" />
//       </header>
//       <nav
//         className={`fixed top-0 left-0 w-64 h-screen overflow-y-auto bg-white p-4 shadow-md transition-transform duration-150 ease-in-out ${
//           isOpen ? "" : "hidden"
//         }`}
//       >
//         <ul className="space-y-4">
//           <li>
//             <Link to="/" className="text-gray-600 hover:text-gray-700 font-medium">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/login" className="text-gray-600 hover:text-gray-700 font-medium">
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="text-gray-600 hover:text-gray-700 font-medium">
//               About
//             </Link>
//           </li>
//           <li>
//             <button
//             //   onClick={() => /* Logout functionality */}
//               className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium"
//             >
//               Logout
//             </button>
//           </li>
//         </ul>
//       </nav>
//       {/* Your main content goes here */}
//       <main className="flex-grow px-4 py-6">
//         {/* ... */}
//       </main>
//     </div>
//   );
// };

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => setIsOpen(!isOpen);
  return (
        <div className="flex flex-col min-h-screen">
          <header className="bg-gray-100 flex items-center justify-between px-4 py-2">
            <button
              onClick={toggleSideNav}
              className="text-gray-600 hover:text-gray-700 focus:outline-none focus:shadow-sm transition-colors duration-150 ease-in-out"
            >
              {/* Side nav icon */}
              {/* <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 6H20V8H4V6Z"
                  className="fill-current"
                />
                <path
                  d="M10 8H20V10H10V8Z"
                  className="fill-current"
                />
                <path
                  d="M16 12H20V14H16V12Z"
                  className="fill-current"
                />
              </svg> */}
            </button>
            <span className="text-gray-600 font-bold">Log</span>
            <img src="user-avatar.png" alt="User Avatar" className="rounded-full ml-4 h-8 w-8" />
          </header>
          <nav
            className={`fixed top-0 left-0 w-64 h-screen overflow-y-auto bg-white p-4 shadow-md transition-transform duration-150 ease-in-out ${
              isOpen ? "" : "hidden"
            }`}
          >
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-700 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-gray-700 font-medium">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-700 font-medium">
                  About
                </Link>
              </li>
              <li>
                <button
                //   onClick={() => /* Logout functionality */}
                  className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
          {/* Your main content goes here */}
          <main className="flex-grow px-4 py-6">
            {/* ... */}
          </main>
        </div>
      );
}

export default Layout;
