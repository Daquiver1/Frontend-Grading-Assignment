import React, { useEffect, useState } from "react";
import Header from "./header";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Dashboard = () => {
  const [madeReport, setMadeReport] = useState(true);
  const [totalReportsMade, setTotalReportsMade] = useState(5);
  const [notCourseEmpty, setCourseEmpty] = useState("Biology");
  const defineMember = () => {
    return madeReport ? (
      <div className="flex place-items-center gap-5 mt-10 ml-44 container">
        <p className="text-xl sliding-semi-text text-red-600">Status</p>
        <p className="bg-blue-500 w-[2px] h-[24px]"></p>
        <p className="text-xl sliding-semi-text text-green-600">
          <div className="flex gap-2">
            Made {totalReportsMade}
            {totalReportsMade > 1 ? (
              <p> reports so far</p>
            ) : (
              <p> report so far</p>
            )}
          </div>
        </p>
      </div>
    ) : (
      <div className="flex place-items-center gap-5 mt-10 ml-44 container">
        <p className="text-xl sliding-semi-text text-green-600">Status</p>
        <p className="bg-blue-500 w-[2px] h-[24px]"></p>
        <p className="text-xl sliding-semi-text text-red-600">
          No reports Made Yet
        </p>
      </div>
    );
  };

  const getTotalReportsMade = () => {
    return totalReportsMade ? (
      <div className="w-80 bg-yellow-50 h-44 justify-center place-items-center container">
        <div className="flex gap-5 place-items-center justify-center">
          <p className="text-3xl text-red-500">{totalReportsMade} </p>
          <p className="sliding-semi-text text-red-500 italic">Reports</p>
        </div>
        <p className="bg-green-500 w-36 h-[3px] mt-5 ml-14"></p>
        <p className="text-2xl text-blue-700 mt-5 ml-5 italic">
          Total Reports Made
        </p>
      </div>
    ) : (
      <div className="container flex gap-5 place-items-center justify-center bg-yellow-50 h-44 w-72">
        <p className="text-3xl text-red-500">No Reports Made yet </p>
      </div>
    );
  };
  const getCourseOverview = () => {
    return notCourseEmpty ? (
      <div className="bg-yellow-50 h-44 w-80 justify-center place-items-center container">
        <div className="flex gap-5 place-items-center justify-center flex-col">
          <p className="text-3xl text-red-500">Course Overview </p>
        </div>
        <p className="bg-green-500 w-36 h-[3px] mt-5 ml-14"></p>
        <p className="text-2xl text-blue-700 mt-5 ml-5 italic">
          <Link to="/course" className="hover:opacity-75">
            Click to see course overview
          </Link>
        </p>
      </div>
    ) : (
      <div className="container flex gap-5 place-items-center justify-center bg-yellow-50 h-44 w-72">
        <p className="text-3xl text-red-500">No Reports Made yet </p>
      </div>
    );
  };
  return (
    <>
      <Header />
      <TopBar />
      {defineMember()}
      <div className="container mt-10 grid-view ml-44 gap-5">
        {getTotalReportsMade()}
        {getCourseOverview()}
        {getCourseOverview()}
        {getCourseOverview()}
        {getCourseOverview()}
        {getCourseOverview()}
        {getCourseOverview()}
        {getCourseOverview()}
        {getCourseOverview()}
        {getCourseOverview()}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Dashboard;
