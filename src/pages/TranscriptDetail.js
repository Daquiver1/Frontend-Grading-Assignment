import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Transcript = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [showSemesters, setShowSemesters] = useState(true);

  const levels = [
    {
      id: 100,
      semesters: [  
        {
          id: 'First Semester',
          courses: [
            { code: 'DCIT101', name: 'Introduction to Computer Science', grade: 'A' },
            { code: 'DCIT103', name: 'Office Productivity Tools', grade: 'B+' },
            { code: 'DCIT105', name: 'Mathematics for IT Professionals', grade: 'A' },
            { code: 'ECON101', name: 'Intrduction to Economics I', grade: 'A' },
            { code: 'STAT111', name: 'Introduction to Statistics and Probability I', grade: 'B' },
            { code: 'UGRC150', name: 'Critical Thinking and Practical Reasoning', grade: 'A' },
          ],
        },
        {
          id: 'Second Semester',
          courses: [
            { code: 'UGRC110', name: 'Academic Writing I', grade: 'B' },
            { code: 'DCIT102', name: 'Computer Hardware Fund. and Circuits', grade: 'B' },
            { code: 'DCIT104', name: 'Programming Fundamentals', grade: 'A' },
            { code: 'ECON102', name: 'Intrduction to Economics II', grade: 'B' },
            { code: 'STAT112', name: 'Introduction to Statistics and Probability II', grade: 'A' },
            { code: 'MATH122', name: 'Calculus I', grade: 'A' },
          ],
        },
      ],
    },
    {
      id: 200,
      semesters: [
        {
          id: 'First Semester',
          courses: [
            { code: 'CBAS210', name: 'Academic Writing II', grade: 'B' },
            { code: 'DCIT201', name: 'Programming I', grade: 'A' },
            { code: 'DCIT203', name: 'Digital and Logic Systems Design', grade: 'A' },
            { code: 'DCIT205', name: 'Multi Media and Web Design', grade: 'B' },
            { code: 'DCIT207', name: 'Computer Architecture & Organisation', grade: 'B+' },
            { code: 'DCIT209', name: 'E-Business Architectures', grade: 'A' },
          ],
        },
        {
          id: 'Second Semester',
          courses: [
            { code: 'UGRC220', name: 'Introduction to African Studies', grade: 'B' },
            { code: 'DCIT200', name: 'Internship', grade: 'A' },
            { code: 'DCIT202', name: 'Mobile Application Development', grade: 'A' },
            { code: 'DCIT204', name: 'Data Structures & Algorithm I', grade: 'B' },
            { code: 'DCIT206', name: 'Systems Administration', grade: 'B+' },
            { code: 'DCIT208', name: 'Software Engineering', grade: 'A' },
          ],
        },
      ],
    },
    {
      id: 300,
      semesters: [
        {
          id: 'First Semester',
          courses: [
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
          ],
        },
        {
          id: 'Second Semester',
          courses: [
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
          ],
        },
      ],
    },
    {
      id: 400,
      semesters: [
        {
          id: 'First Semester',
          courses: [
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
          ],
        },
        {
          id: 'Second Semester',
          courses: [
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
            { code: '', name: '', grade: '' },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    if (!selectedLevel && !selectedSemester) {
      setSelectedLevel(100);
      setSelectedSemester('First Semester');
      setShowSemesters(true); // Ensure semesters are shown when default values are set
    }
  }, [selectedLevel, selectedSemester]);

  const handleLevelClick = (level) => {
    if (selectedLevel === level) {
      setShowSemesters(!showSemesters);
    } else {
      setSelectedLevel(level);
      setShowSemesters(true);
    }
  };


  const handleSemesterClick = (semester) => {
    setSelectedSemester(semester);
    setShowSemesters(true);
  };


  return (
    <div className="transcript">
        <Header />
    <div className='transcript-section'>
        <Sidebar />
        <div className='sidebar-right'>
            <h1>TranscriptDetail</h1>
         <ul className='transcript-ul'>
            {levels.map((level) => (
            <li key={level.id}>
                <div
                className={`level-container ${selectedLevel === level.id && showSemesters ? 'expanded' : ''}`}
                onClick={() => handleLevelClick(level.id)}
                >
                <span>
                    Level {level.id}
                </span>
                <span>
                    {selectedLevel === level.id && showSemesters ? '-' : '+'}
                </span>
                </div>
                {selectedLevel === level.id && showSemesters && (
                <ul className="semester-list">
                    {level.semesters.map((semester, index) => (
                    <li key={index} onClick={() => handleSemesterClick(semester.id)}>
                        {semester.id}
                    </li>
                    ))}
                </ul>
                )}
            </li>
            ))}
         </ul>
        </div>

      {selectedSemester && (
        <div className="results">
          <h2>Results for Level {selectedLevel} {selectedSemester}</h2>
          <table>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {levels
                .find((level) => level.id === selectedLevel)
                .semesters.find((semester) => semester.id === selectedSemester)
                .courses.map((course, index) => (
                  <tr key={index}>
                    <td className='course-code'>{course.code}</td>
                    <td className='course-name'>{course.name}</td>
                    <td className='course-grade'>{course.grade}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
};

export default Transcript;
