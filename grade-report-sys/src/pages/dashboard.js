import React from "react";
import "./main.css";
import Footer from "../components/footer/footer";
import GradeTable from "../components/tables/gradetable";
import Alerts from "../components/collapsible-list/collapsible-alerts";

const Dashboard = () => {
    const studentGrades = [
      { year: '2023/2024', sem: '1', cct: 18, ccp:18, cgpa: 3.4 },
    ];
  
    return (
      <div>
        <div className="Home">
        <h2 className='subheader'>Academic Performance Overview</h2>
        <GradeTable grades={studentGrades} />
        

        <div>
            <Alerts />
        </div>

        </div>

        

        <div>
            <Footer />
        </div>
        
      </div>
    );
  };

export default Dashboard;
