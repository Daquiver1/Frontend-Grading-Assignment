import React, { useState } from 'react';

const MissingGradeForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <header>
        <b className="text-2xl font-bold">HAVE A MISSING GRADE? SUBMIT YOUR REPORT HERE</b>
      </header>

      <main className="mt-8">
        <section className="missing-grade-form-section bg-white rounded-md p-8">
          <h2 className="text-3xl font-bold mb-4">Report Missing Grade</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="courseName" className="font-medium">Course Name:</label>
              <input type="text" id="courseName" name="courseName" required className="border border-gray-300 p-2 rounded-md w-full" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="instructorName" className="font-medium">Instructor Name:</label>
              <input type="text" id="instructorName" name="instructorName" required className="border border-gray-300 p-2 rounded-md w-full" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="expectedGrade" className="font-medium">Expected Grade:</label>
              <input type="text" id="expectedGrade" name="expectedGrade" required className="border border-gray-300 p-2 rounded-md w-full" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="explanation" className="font-medium">Explanation:</label>
              <textarea id="explanation" name="explanation" rows="4" required className="border border-gray-300 p-2 rounded-md w-full"></textarea>
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">Submit</button>
          </form>

          {isSubmitted && <p className="mt-4 text-green-600">Your missing grade report has been submitted!</p>}
        </section>
      </main>

      <footer className="mt-8">
        <b className="text-xl">MISSING GRADE REPORTING SYSTEM BY THE 11112468Company</b>
      </footer>
    </div>
  );
};

export default MissingGradeForm;