import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [missingGradesCount, setMissingGradesCount] = useState(0);

  useEffect(() => {
    setMissingGradesCount(3);
  }, []);

  return (
    <div>
      <header>
        <b>MISSING GRADE REPORTING SYSTEM</b>
      </header>

      <main>
        <section className="dashboard-section">
          <h2>Welcome to Your Dashboard</h2>

          <div className="grades-overview">
            <h3>Grades Overview</h3>
            <p>Your grades are currently being processed and will be available soon.</p>
          </div>

          <div className="alerts-section">
            <h3>Alerts</h3>
            <div className="missing-grades">
              <p>You have {missingGradesCount} missing grade(s).</p>
              <p>Please submit your report here <Link to="/MissingGradeForm">Missing Grade Form</Link>.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <b> MISSING GRADE REPORTING SYSTEM</b>
      </footer>
    </div>
  );
};

export default Dashboard;
