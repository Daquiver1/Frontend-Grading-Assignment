import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const MissingGradeForm = () => {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [expectedGrade, setExpectedGrade] = useState('');
  const [explanation, setExplanation] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission, display confirmation message
    setConfirmation(true);
    // Reset form fields
    setCourseName('');
    setInstructorName('');
    setExpectedGrade('');
    setExplanation('');
  };

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    };

    scrollToTop()
  })

  return (
    <div>
      <Navbar />
      <div className="container pt-[100px] mx-auto h-screen p-4">
        <h1 className="text-3xl font-bold mb-4">Report Missing Grade</h1>

        {!confirmation ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="courseName" className="block text-sm font-semibold mb-2">Course Name:</label>
              <input
                type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="instructorName" className="block text-sm font-semibold mb-2">Instructor Name:</label>
              <input
                type="text"
                id="instructorName"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="expectedGrade" className="block text-sm font-semibold mb-2">Expected Grade:</label>
              <input
                type="text"
                id="expectedGrade"
                value={expectedGrade}
                onChange={(e) => setExpectedGrade(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="explanation" className="block text-sm font-semibold mb-2">Explanation:</label>
              <textarea
                id="explanation"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full"
                required
              ></textarea>
            </div>

            <button type="submit" className="bg-[#294671] text-white px-4 py-2 rounded hover:bg-[#4A6387]">
              Report Missing Grade
            </button>
          </form>
        ) : (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Grade Reported Successfully!</strong>
            <span className="block sm:inline">Thank you for reporting the missing grade.</span>
          </div>
        )}
      </div>
      
      <div className=' -mt-24'>
        <Footer />
      </div>
    </div>
  );
};

export default MissingGradeForm;
