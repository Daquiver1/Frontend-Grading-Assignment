import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [missingGradesCount, setMissingGradesCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setMissingGradesCount(3);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <header>
        <b className="text-2xl font-bold">MISSING GRADE REPORTING SYSTEM</b>
  <nav>
    <ul className="navbar flex">
      <li><a href="#" className="px-4 py-2 text-indigo-600">Home</a></li>
      <li><a href="Dashboard" className="px-4 py-2 text-indigo-600">Dashboard</a></li>
      <li><a href="grade-report" className="px-4 py-2 text-indigo-600">Grade Report</a></li>
      <li><a href="missing-grade-form" className="px-4 py-2 text-indigo-600">Missing Grade Form</a></li>
      <li><a href="instructor-contact" className="px-4 py-2 text-indigo-600">Instructor Contact</a></li>
      <li><a href="help-support" className="px-4 py-2 text-indigo-600">Help and Support</a></li>
    </ul>
  </nav>

      </header>

      <main className="mt-8">
        <section className="dashboard-section bg-white rounded-md p-8">
          <h2 className="text-3xl font-bold">Welcome to Your Dashboard</h2>

          <div className="grades-overview mt-4">
            <h3 className="text-xl font-bold">Grades Overview</h3>
            <p>Your grades are currently being processed and will be available soon.</p>
          </div>

          <div className="alerts-section mt-8">
            <h3 className="text-xl font-bold">Alerts</h3>
            <div className="missing-grades mt-4">
              <p>You have {missingGradesCount} missing grade(s).</p>
              <p>Please submit your report here <Link to="/missing-grade" className="underline">Missing Grade Form</Link>.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-8">
        <b className="text-xl">MISSING GRADE REPORTING SYSTEM BY THE 11112468Company</b>
      </footer>
    </div>
  );
};

export default Dashboard;