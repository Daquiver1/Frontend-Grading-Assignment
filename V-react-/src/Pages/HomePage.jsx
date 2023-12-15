
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
const Home = () => {

  const [showGrade, setShowGrades] = useState(Array(11).fill(false)); // Assuming there are 11 courses;

  const handleToggleGrade = (index) => {
    setShowGrades((prev) => {
      const newShowGrades = [...prev];
      newShowGrades[index] = !newShowGrades[index];
      return newShowGrades;

  });
    }
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Student Grading Report System</h1>

      <p className="text-lg mb-6">
        Access your grades, track your performance, and stay updated with your academic progress.
      </p>

      <div className="flex flex-col gap-4">
        {/* First Course Card */}
        <div key={0} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Mathematics 101</h2>
          <p className="text-gray-600">Instructor: Prof. Smith</p>
          <button onClick={() => handleToggleGrade(0)} className="text-blue-500 mt-2">
            {showGrade[0] ? 'Hide Grade' : 'View Grade'}
          </button>
          {showGrade[0] && <p className="text-green-600 mt-2">Grade: A</p>}
        </div>
      

            {/* Second Course Card */}
            <div key={1} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Computer Science 202</h2>
          <p className="text-gray-600">Instructor: Dr.Johnson</p>
          <button onClick={() => handleToggleGrade(1)} className="text-blue-500 mt-2">
            {showGrade[1] ? 'Hide Grade' : 'View Grade'}
          </button>
          {showGrade[1] && <p className="text-green-600 mt-2">Grade: B+</p>}
        </div>

        {/* Sample Course Card 3 */}
        <div key={2} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">English Literature 301</h2>
          <p className="text-gray-600">Instructor: Prof. Davis</p>
          <button onClick={() => handleToggleGrade(2)} className="text-blue-500 mt-2">
            {showGrade[2] ? 'Hide Grade' : 'View Grade'}
          </button>
          {showGrade[2] && <p className="text-green-600 mt-2">Grade: B+</p>}
        </div>


        {/* Sample Course Card 4 */}
        <div key={3} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Chemistry 201</h2>
          <p className="text-gray-600">Instructor: Dr. Miller</p>
          <button onClick={() => handleToggleGrade(3)} className="text-blue-500 mt-2">
            {showGrade[3] ? 'Hide Grade' : 'View Grade'}
          </button>
          {showGrade[3] && <p className="text-yellow-600 mt-2">Grade: C+</p>}
        </div>


        {/* Sample Course Card 5 */}
        <div key={4} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">History 102</h2>
          <p className="text-gray-600">Instructor: Prof. Anderson</p>
          <button onClick={() => handleToggleGrade(4)} className="text-blue-500 mt-2">
            {showGrade[4] ? 'Hide Grade' : 'View Grade'}
          </button>
          {showGrade[4] && <p className="text-green-600 mt-2">Grade: B+</p>}
        </div>

        <div key={5} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">French 312</h2>
          <p className="text-gray-600">Instructor: Prof. Gima</p>
          <button onClick={() => handleToggleGrade(5)} className="text-blue-500 mt-2">
            {showGrade[5] ? 'Hide Grade' : 'View Grade'}
          </button>
          {showGrade[5] && <p className="text-red-600 mt-2">Grade: F</p>}
        </div>


        {/* Add more course cards as needed */}

      

      </div>
    </div>
  );
};


export default Home;