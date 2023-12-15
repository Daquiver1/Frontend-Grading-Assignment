// src/components/GradeReportPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const GradeReportPage: React.FC = () => {
  return (
    <div>
      <h2>Grade Report</h2>
      {/* Add grade report content */}
      <nav>
        <Link to="/missinggradeformpage">MissingGradeForm</Link>
      </nav>
    </div>
  );
};

export default GradeReportPage;
