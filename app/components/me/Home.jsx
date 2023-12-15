"use client";
import { getCookie, hasCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ReportForm } from "./ReportForm";
import users from "../data/userData.json";
import { Dashboard } from "./Dashboard";
import { notifySuccess } from "../utils";
import { ReportedGrades } from "./ReportedGrades";
import { FAQ } from "./FAQ";

export function Home() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [currentView, setCurrentView] = useState("dashboard");
  const views = {
    dashboard: <Dashboard user={user} />,
    form: <ReportForm />,
    reported: <ReportedGrades />,
    faq: <FAQ />,
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const logout = () => {
    router.push("/");
  };
  useEffect(() => {
    if (hasCookie("user")) {
      notifySuccess("Sign in successful");
      const me = getCookie("user");
      const theUser = users.filter((user) => user.id == me)[0];
      setUser(theUser);
    } else {
      router.push("/");
    }
  }, []);

  return (
    <>
      {"id" in user == false ? (
        " "
      ) : (
        <section className="grid grid-cols-4 h-[100vh]">
          <nav className="bg-black text-white">
            <ul className="p-4 flex flex-col">
              <header className="p-4">
                <p className="text-slate-400">userId: {user.userId} </p>
                <h1 className="text-2xl">Hey, {user?.username}</h1>
                <p className="text-slate-300"> {user?.programme} </p>
              </header>
              <li className=" p-4 text-2xl transition-all underline">Menu</li>
              <li
                className="p-4 hover:text-lg transition-all cursor-pointer"
                onClick={() => handleViewChange("dashboard")}
              >
                Dashboard
              </li>
              <li
                className="p-4 hover:text-lg transition-all cursor-pointer"
                onClick={() => handleViewChange("reported")}
              >
                Grade Report
              </li>
              <li
                className="p-4 hover:text-lg transition-all cursor-pointer"
                onClick={() => handleViewChange("form")}
              >
                Missing Grade Form
              </li>
              <li
                className="p-4 hover:text-lg transition-all cursor-pointer"
                onClick={() => handleViewChange("faq")}
              >
                Help and Support
              </li>
              <li
                className="p-4 hover:text-lg transition-all cursor-pointer"
                onClick={logout}
              >
                Logout
              </li>
            </ul>
          </nav>
          {/* Alternating view section */}
          {views[currentView]}
        </section>
      )}
    </>
  );
}
