import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';

function GradeForm() {
    const [courseName, setCourseName] = useState('');
    const [instructorName, setInstructorName] = useState('');
    const [expectedGrade, setExpectedGrade] = useState('');
    const [explanation, setExplanation] = useState('');
    const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic can be added here

    // Create a new course object
    const newCourse = {
      courseName,
      instructorName,
      expectedGrade,
      explanation,
    };


    // Clear the form fields
    setCourseName('');
    setInstructorName('');
    setExpectedGrade('');
    setExplanation('');

    setSubmitted(true);

    // Reset the submitted state after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <div>
        <Sidebar />
        <div className="p-4 sm:ml-64">
            
            <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-50">
                <h1 className='font-bold text-2xl mb-4'>Missing Grade Report Forms</h1>

                {submitted && (
                    <div className="mb-4 bg-green-100 border border-green-400 text-green-700 p-2 rounded">
                    Course successfully submitted!
                    </div>
                )}

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">Fill the forms</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Course Name:</label>
                        <input
                        type="text"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter course name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Instructor Name:</label>
                        <input
                        type="text"
                        value={instructorName}
                        onChange={(e) => setInstructorName(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter instructor name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Expected Grade:</label>
                        <input
                        type="text"
                        value={expectedGrade}
                        onChange={(e) => setExpectedGrade(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter expected grade"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Explanation:</label>
                        <textarea
                        value={explanation}
                        onChange={(e) => setExplanation(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter explanation"
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full p-2 bg-yellow-500 text-white rounded">
                        Submit
                    </button>
                </form>


                <div className='mt-24'>
                    <p className='text-2xl'>
                    !!!Please note that this form can only be submitted twice per semester. Ensure that you provide accurate information in each submission.
                    Thank you for your cooperation
                    </p>
                </div>
                
            </div>
           
            </div>
    </div>
  )
}

export default GradeForm