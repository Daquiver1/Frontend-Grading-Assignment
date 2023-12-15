import React from "react";
import "./main.css";
import GradeReport from "../components/filterable/gradedetails";
import Footer from "../components/footer/footer";
import GradeTable from "../components/tables/gradetable";

 
const Report = () => {
    const studentGrades = [
        { year: '2023/2024', sem: '1', cct: 18, ccp:18, cgpa: 3.4 },
      ];
    return (
        <div className="Home">

            <GradeTable grades={studentGrades} />

            <div>
            <GradeReport />
            </div>

            <div>
                <Footer />
            </div>
            
        </div>
        );
};
 
export default Report;