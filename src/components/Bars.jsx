import React, { useState } from "react";
import MobileNav from "./pages/MobileNav";

const Bars = () => {
  const [shown, setShown] = useState(false);
  const setShowValue = () => {
    setShown(!shown);
  };
  const showNav = () => {
    return (
      shown && (
        <div>
          <MobileNav></MobileNav>
        </div>
      )
    );
  };
  return (
    <>
      <div className="container">
        {showNav()}
        <div className="absolute right-10 top-10">
          <button onClick={setShowValue} className="hover:cursor-pointer xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Bars;
