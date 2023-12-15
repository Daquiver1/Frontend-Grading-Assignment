import React from "react";
import Sidebar from "./Sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}

export default RootLayout;
