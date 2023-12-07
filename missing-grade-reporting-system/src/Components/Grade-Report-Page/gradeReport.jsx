import React, { useEffect } from 'react';
import './gradeReport.css';

const GradeReport = () => {
  useEffect(() => {
    document.title = 'Grade Report Page';
  }, []);

  return (
    <div>
      {/* Your component content goes here */}
    </div>
  );
};

export default GradeReport;
