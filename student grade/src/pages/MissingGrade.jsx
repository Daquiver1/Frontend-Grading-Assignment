import React from 'react';
import Layout from '../layouts';
import { useEffect } from 'react';
import Alpine from 'alpinejs'

const MissingGrade = () => {
       // Alpine.js logic
  useEffect(() => {
    Alpine.start();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const courseName = document.getElementById('Course name').value;
    const instructorName = document.getElementById('Instructor').value;
    const message = document.getElementById('message').value;

    if (!courseName || !instructorName || !message) {
      alert('Please fill in all the fields before submitting');
    } else {
      alert('Form submitted successfully!');
    }
  };
  

  return (
      <Layout>
        <main className="bg-ash-700 p-8 rounded-lg shadow-md" style={{marginLeft:'30px', marginRight: '30px'}}>
            <h2 className="text-2xl font-bold mb-8 text-center">Missing Grade</h2>
            <div>
              <form onSubmit={handleSubmit} x-data="{ submitted: false }">
                <legend className="text-lg font-bold mb-4">Fill the Form To Report Missing Grade</legend>
              
              <div className="mb-4">
                <label htmlFor="coursename" className="block mb-1">Course Name: </label>
                <input type="text" id="Course name" required className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="Instructor" className="block mb-1">Instructors Name: </label>
                <input type="text" id="Instructor" required className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1">Message: </label>
                <textarea id="message" required className="w-full p-2 border border-gray-300 rounded"></textarea>
              </div>
              <div className='text-center'>
                <button type="submit" x-show="!submitted" x-on:click="submitted = true" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">Submit</button>
              </div>
              <div x-show="submitted" className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">Form submitted successfully!</div>
              </form>
            </div>
        </main>
      </Layout>
  );
};

export default MissingGrade;
