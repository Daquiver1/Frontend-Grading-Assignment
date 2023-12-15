import React, { useState } from 'react';
import { FaUser, FaBook, FaCalendarAlt, FaGraduationCap, FaExclamationCircle } from 'react-icons/fa';

const Missing_grade = () => {
  const [studentInfo, setStudentInfo] = useState({
    firstName: '',
    lastName: '',
    studentId: '',
  });

  const [courseInfo, setCourseInfo] = useState({
    courseCode: '',
    examDate: '',
    semester: '',
    year: '',
    grade: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e, setter, section) => {
    setter((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // Simulate a delay (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setMessage(
        `Thank you, ${studentInfo.firstName}! We will look into the issue with your grade for ${courseInfo.courseCode} in ${courseInfo.semester} ${courseInfo.year}. Exam date: ${courseInfo.examDate}.`
      );
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearForm = () => {
    setStudentInfo({
      firstName: '',
      lastName: '',
      studentId: '',
    });

    setCourseInfo({
      courseCode: '',
      examDate: '',
      semester: '',
      year: '',
      grade: '',
    });

    setMessage('');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          <FaExclamationCircle className="text-red-600 mr-2" />
          Missing Grades Form
        </h1>
        {message && (
          <div className="mb-4 text-green-600">
            <p>{message}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Student Information:</label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center mb-2">
                <FaUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="firstName"
                  value={studentInfo.firstName}
                  onChange={(e) => handleInputChange(e, setStudentInfo, 'studentInfo')}
                  placeholder="First Name"
                  className="w-full p-2 rounded focus:outline-none border"
                  required
                />
              </div>
              <div className="flex items-center mb-2">
                <FaUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="lastName"
                  value={studentInfo.lastName}
                  onChange={(e) => handleInputChange(e, setStudentInfo, 'studentInfo')}
                  placeholder="Last Name"
                  className="w-full p-2 rounded focus:outline-none border"
                  required
                />
              </div>
              <div className="flex items-center mb-2">
                <FaGraduationCap className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="studentId"
                  value={studentInfo.studentId}
                  onChange={(e) => handleInputChange(e, setStudentInfo, 'studentInfo')}
                  placeholder="Student ID"
                  className="w-full p-2 rounded focus:outline-none border"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Course Information:</label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center mb-2">
                <FaBook className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="courseCode"
                  value={courseInfo.courseCode}
                  onChange={(e) => handleInputChange(e, setCourseInfo, 'courseInfo')}
                  placeholder="Course Code"
                  className="w-full p-2 rounded focus:outline-none border"
                  required
                />
              </div>
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <input
                  type="date"
                  name="examDate"
                  value={courseInfo.examDate}
                  onChange={(e) => handleInputChange(e, setCourseInfo, 'courseInfo')}
                  className="w-full p-2 rounded focus:outline-none border"
                  required
                />
              </div>
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="semester"
                  value={courseInfo.semester}
                  onChange={(e) => handleInputChange(e, setCourseInfo, 'courseInfo')}
                  placeholder="Semester"
                  className="w-full p-2 rounded focus:outline-none border"
                  required
                />
              </div>
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <input
                  type="number"
                  name="year"
                  value={courseInfo.year}
                  onChange={(e) => handleInputChange(e, setCourseInfo, 'courseInfo')}
                  placeholder="Year"
                  className="w-full p-2 rounded focus:outline-none border"
                  required
                />
              </div>
              <div className="flex items-center mb-2">
                <FaGraduationCap className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="grade"
                  value={courseInfo.grade}
                  onChange={(e) => handleInputChange(e, setCourseInfo, 'courseInfo')}
                  placeholder="Grade"
                  className="w-full p-2 rounded focus:outline-none border"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClearForm}
            className="w-full bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400 focus:outline-none"
          >
            Clear Form
          </button>

          <button
            type="submit"
            className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ${
              loading && 'opacity-50 cursor-not-allowed'
            } focus:outline-none`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Form'}
          </button>
        </form>
      </div>
    </div>
  );
};


export default Missing_grade
