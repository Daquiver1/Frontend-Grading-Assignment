import React from 'react';

const MissingGrade = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Missing Grade</h2>
        <p className="text-gray-600">
          Sorry, you are missing a grade. Please contact your instructor for more information.
        </p>
      </div>
    </div>
  );
};

export default MissingGrade;
