import React from "react";
import "../Styles/DashboardPage.css";
import GradesTable from "../Components/GradesTable";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DashboardPage = () => {
  const currentGrades = [
    { subject: "DCIT 102", grade: "B" },
    { subject: "STAT 112", grade: "B+" },
    { subject: "MATH 122", grade: "A" },
    { subject: "MATH 126", grade: "C" },
    { subject: "UGRC 120", grade: "A" },
  ];

  const missingGradeAlerts = [{ subject: "DCIT 103", alert: "Missing Grade" }];

  return (
    <div className="Page-content">
      <Navbar />
      <div className="dashboard-page">
        <h1> My Dashboard</h1>
        <div className="grade-overview">
          <h2>Current Grades</h2>
          <GradesTable grades={currentGrades} />
        </div>
        <div className="missing-grade-alerts">
          <h2>Missing Grade Alerts</h2>
          <GradesTable grades={missingGradeAlerts} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
