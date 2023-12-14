import React, { useState } from 'react';
import logo from "../assets/images/logo.png";

const MissingGrade = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Course
              </label>
              <div className="mt-2">
                <select className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6">
                  <option>DCIT 205 - Multimedia and web design</option>
                  <option>DCIT 203 - Digital and logic system designs</option>
                  <option>DCIT 201 - Programming 1</option>
                  <option>DCIT 207 - Computer Organization and Architecture</option>
                  <option>DCIT 209 - E-Business</option>
                  <option>CBAS 210 - Academic Writing II</option>
                  <option>DCIT 104 - Programming Fundamentals</option>
                  <option>DCIT 101 - Introduction to computer Science</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Instructor Name
              </label>
              <div className="mt-2">
                <select className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6">
                  <option>Aziz Abdullai Dwumfour</option>
                  <option>Paul Amah Nii </option>
                  <option>Micheal Soli</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Expected Grade
              </label>
              <div className="mt-2">
                <select className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6">
                  <option>A</option>
                  <option>B+</option>
                  <option>B</option>
                  <option>C+</option>
                  <option>C</option>
                  <option>D+</option>
                  <option>D</option>
                  <option>E</option>
                  <option>F</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password" 
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Explanation
                </label>
                
              </div>
              <div className="mt-2" >
                <textarea
                  maxLength={100}
                  rows={6}
                  required
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                  placeholder="Enter text here"
                />
              </div>
            </div>

            <div>
              <button  className="flex w-full justify-center rounded-md bg-ugBlue p-3 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {formSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-green-600">Message has been sent successfully!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MissingGrade;
