import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Header from './Header';
import Footer from './PageFooter';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const GradeReport = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState(1);

  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleYearButtonClick = (year) => {
    setSelectedYear(year);
  };

  const yearData = {
    1: {
      1: [
        { code: 'C001', name: 'Mathematics', grade: 'A', point: 4.0 },
        { code: 'C001', name: 'Mathematics', grade: 'A', point: 4.0 },
          { code: 'C002', name: 'English', grade: 'B', point: 3.0 },
          { code: 'C003', name: 'Science', grade: 'C', point: 2.0 },
        // ... other first-semester courses for year 1
      ],
      2: [
        { code: 'C011', name: 'Subject1', grade: 'B', point: 3.0 },
        { code: 'C001', name: 'Mathematics', grade: 'A', point: 4.0 },
          { code: 'C002', name: 'English', grade: 'B', point: 3.0 },
          { code: 'C003', name: 'Science', grade: 'C', point: 2.0 },
      ],
    },
    2: {
      1: [
        { code: 'C001', name: 'Mathematics', grade: 'A', point: 4.0 },
          { code: 'C002', name: 'English', grade: 'B', point: 3.0 },
          { code: 'C003', name: 'Science', grade: 'C', point: 2.0 },
        // ... first-semester courses for year 2
      ],
      2: [
        { code: 'C001', name: 'Mathematics', grade: 'A', point: 4.0 },
          { code: 'C002', name: 'English', grade: 'B', point: 3.0 },
          { code: 'C003', name: 'Science', grade: 'C', point: 2.0 },
        // ... second-semester courses for year 2
      ],
    },
    3: {
      1: [
        { code: 'C001', name: 'Mathematics', grade: 'A', point: 4.0 },
          { code: 'C002', name: 'English', grade: 'B', point: 3.0 },
          { code: 'C003', name: 'Science', grade: 'C', point: 2.0 },
        // ... first-semester courses for year 3
      ],
      2: [
       
      ],
    },
    4: {
      
      1: [
        
      ],
      2: [],
    },
  };

  // Function to render table rows based on the selected semester
  const renderTableRows = (semester) => {
    return yearData[selectedYear][semester].map((course, index) => (
      <tr key={index}>
        <td>{course.code}</td>
        <td>{course.name}</td>
        <td>{course.grade}</td>
        <td>{course.point}</td>
      </tr>
    ));
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogoutConfirmation = (confirmed) => {
    setShowLogoutConfirmation(false);
    if (confirmed) {
      // Redirect to the LoginPage
      navigate('/'); // Update the path based on your route configuration
    }
  };

  return (
    <div>
        <Header />
    <div className="columns-grade">
      <div className="col-2">
        {/* Search bar and header */}
        <div className='Search-container'>
          <input className='search-bar' type='text' placeholder='filter year'></input>
          <button className='search-butt'>Search</button>
        </div>

        {/* Year selection buttons */}
        <div>
          {[1, 2, 3, 4].map((year) => (
            <button
              key={year}
              onClick={() => handleYearButtonClick(year)}
              className={year === selectedYear ? 'active-year-button' : 'year-button'}
            >
              Year {year}
            </button>
          ))}
        </div>

        {/* Year-specific content */}
        <div className='year-container'>
          <h2 className="year">Year {selectedYear}</h2>
          <div>
            {/* Semester selection buttons */}
            {[1, 2].map((semester) => (
              <div key={semester}>
                <p className="semester">Semester {semester}</p>
                <table>
                  <thead>
                    <tr>
                      <th>Course Code</th>
                      <th>Course Name</th>
                      <th>Grade</th>
                      <th>Grade Point</th>
                    </tr>
                  </thead>
                  {/* Render table rows based on the selected year and semester */}
                  <tbody>{renderTableRows(semester)}</tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {showLogoutConfirmation && (
          <div className="logout-confirmation-msg">
            <p>Are you sure you want to log out?</p>
            <button onClick={() => handleLogoutConfirmation(true)}>Yes</button>
            <button onClick={() => handleLogoutConfirmation(false)}>No</button>
          </div>
        )}  
    <Footer />
    </div>
  );
};

export default GradeReport;
