import React from "react";
import activeGrades from "../assets/data/activeCources";
import { FaCircleInfo } from "react-icons/fa6";
import GradeCard from "../components/dashboard/gradeCard";

function Dashboard() {
  return (
    <div className="w-full px-3 py-5">
      <p className=" text-primary_blue font-bold text-3xl">
        Your Current Grades
      </p>
      <p className=" bg-emerald-200 px-3 py-1 text-[14px] flex flex-row gap-2 items-center mt-2 text-emerald-900 rounded-md">
        <FaCircleInfo />
        List of your current grades in all semesters
      </p>
      <div className="px-2 py-2 w-full flex flex-row flex-wrap mt-5 gap-5 justify-center 500px:justify-start">
        {activeGrades.map((g) => (
          <GradeCard name={g.name} dateTaken={g.dateTaken} code={g.code} />
        ))}
      </div>

      <p className="mt-10 text-primary_blue font-bold text-3xl">
        Your Missing Grades
      </p>
      <p className=" bg-red-200 px-3 py-1 text-[14px] flex flex-row gap-2 items-center mt-2 text-red-900 rounded-md">
        <FaCircleInfo />
        List of your unreported grades
      </p>

      <div className="px-2 rounded-md py-2 w-full bg-red-100 flex flex-row flex-wrap mt-5 gap-5 justify-center 500px:justify-start">
        {activeGrades.map((g) => (
          <GradeCard name={g.name} dateTaken={g.dateTaken} code={g.code} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
