import React, { useState } from 'react';
import './yearFilter.css';
import * as ReactBootStrap from "react-bootstrap";


const YearFilterDropdown = ({ onChange }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, index) => currentYear - index);

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value, 10);
    setSelectedYear(selectedYear);
    onChange(selectedYear);
  };

  return (
    <>
    <div className='containerYearFilter'>
      <label htmlFor="yearFilter" className='label1'><span className='selectYear'>Select Year:</span></label>
      <select id="yearFilter" value={selectedYear} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
    <div className='alertCont'>
        <ReactBootStrap.Alert variant="success">
      <ReactBootStrap.Alert.Heading>No Academic Year Selected !!!</ReactBootStrap.Alert.Heading>
      <p >
        Select to view the grades of the respective Academic Year. <br />
        <i className='bi bi-exclamation-triangle p-2 fs-1'></i>
        <p>Missing Grade for Course: STAT111    Academic Year : 2019/2020 </p>
        <p>Missing Grade for Course: MATH223    Academic Year : 2020/2021 </p>

      </p>
      
      
    </ReactBootStrap.Alert>
    </div>
    </>
  );
};

export default YearFilterDropdown;
