import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <main className="px-5 py-2 flex justify-between bg-slate-200 mb-6">
      <div>
        <h1 className="cursor-pointer">Logo</h1>
      </div>

      <div className="flex-row items-center">
        <ul className="flex justify-center items-center">
          <Link href="/" className="mx-3 cursor-pointer">
            about
          </Link>
          <Link href="/login" className="mx-3 cursor-pointer">
            login
          </Link>
          <Link href="/contact" className="mx-3 cursor-pointer">
            contact
          </Link>
        </ul>
      </div>
    </main>
  );
};

export default Header;
