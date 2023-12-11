import './Dashboard.css'

import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Missing Grade System Dashboard</h1>
      <p>Welcome to the dashboard. Here, you can manage missing grades.</p>

      <ul>
        <li>
          <Link to="/dashboard/missing-grades">View Missing Grades</Link>
        </li>
        <li>
          <Link to="/dashboard/add-grade">Add Missing Grade</Link>
        </li>
        {/* Add more links based on your requirements */}
      </ul>
    </div>
  );
};

export default Dashboard;
