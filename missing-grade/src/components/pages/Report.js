import React, { useState } from 'react';

function Report () {
 
  const gradesData = [
    { course: 'DCIT101', grade: 'A', semester: 'L100 - First Semester' },
    { course: 'DCIT103', grade: 'B', semester: 'L100 - First Semester' },
    { course: 'ECON101', grade: 'C', semester: 'L100 - First Semester' },
    { course: 'DCIT104', grade: 'B', semester: 'L100 - Second Semester' },
    { course: 'DCIT102', grade: 'A', semester: 'L100 - Second Semester' },
    { course: 'MATH122', grade: 'N/A', semester: 'L100 - Second Semester' },
    { course: 'DCIT205', grade: 'C', semester: 'L200 - First Semester' },
    { course: 'DCIT201', grade: 'A', semester: 'L200 - First Semester' },
    { course: 'DCIT203', grade: 'B', semester: 'L200 - First Semester' },
    { course: 'DCIT202', grade: 'C', semester: 'L200 - Second Semester' },
    { course: 'DCIT204', grade: 'N/A', semester: 'L200 - Second Semester' },
    { course: 'DCIT206', grade: 'B', semester: 'L200 - Second Semester' },
    { course: 'DCIT301', grade: 'A', semester: 'L300 - First Semester' },
    { course: 'DCIT303', grade: 'B', semester: 'L300 - First Semester' },
    { course: 'DCIT305', grade: 'C', semester: 'L300 - First Semester' },
    { course: 'DCIT304', grade: 'N/A', semester: 'L300 - Second Semester' },
    { course: 'DCIT302', grade: 'A', semester: 'L300 - Second Semester' },
    { course: 'DCIT308', grade: 'B', semester: 'L300 - Second Semester' },
    { course: 'DCIT405', grade: 'C', semester: 'L400 - First Semester' },
    { course: 'DCIT401', grade: 'A', semester: 'L400 - First Semester' },
    { course: 'DCIT403', grade: 'B', semester: 'L400 - First Semester' },
    { course: 'DCIT402', grade: 'N/A', semester: 'L400 - Second Semester' },
    { course: 'DCIT404', grade: 'A', semester: 'L400 - Second Semester' },
    { course: 'DCIT406', grade: 'B', semester: 'L400 - Second Semester' },
    
  ];

  const missingGrades = [
    { course: 'MATH122', status: 'Missing', semester: 'L100 - Second Semester' },
    { course: 'DCIT204', status: 'Missing', semester: 'L200 - Second Semester' },
    { course: 'DCIT304', status: 'Missing', semester: 'L300 - Second Semester' },
    { course: 'DCIT402', status: 'Missing', semester: 'L400 - Second Semester' },
   
  ];

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [includeMissingGrades, setIncludeMissingGrades] = useState(false);
  const [filteredGrades, setFilteredGrades] = useState([]);

  const handleFilter = () => {
    let filteredData = gradesData;

    if (selectedYear) {
      filteredData = filteredData.filter(
        (grade) => grade.semester.startsWith(selectedYear)
      );
    }

    if (selectedSemester) {
      filteredData = filteredData.filter(
        (grade) => grade.semester.includes(selectedSemester)
      );
    }
   if (includeMissingGrades) {
      const missingCourses = missingGrades.map((missing) => missing.course);
      filteredData = filteredData.filter(
        (grade) => missingCourses.includes(grade.course)
      );
    }

    setFilteredGrades(filteredData);
  };

  return (
    <div >
      <h1 className="text-center mb-4">Grade Report</h1>
        <div className="text-center mb-4">
          <div>
          <label>Select Year:</label>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="">-- Select Year --</option>
          <option value="L100">L100</option>
          <option value="L200">L200</option>
          <option value="L300">L300</option>
          <option value="L400">L400</option>
        </select>
          </div>
       
        <div className='mt-3'>
        <label>Select Semester:</label>
        <select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
          <option value="">-- Select Semester --</option>
          <option value="First Semester">First Semester</option>
          <option value="Second Semester">Second Semester</option>
        </select>
        </div>
        

        <label className='mt-3'>
          View Missing Grades:
          <input type="checkbox" checked={includeMissingGrades} onChange={(e) => setIncludeMissingGrades(e.target.checked)}/>
        </label>
        </div>
         <div className="text-center">
         <button onClick={handleFilter} className="btn btn-primary justify-content-center text-center"style={{ width: '30%' }}>Filter</button>
        </div>
        <section>
     
        {filteredGrades.length > 0 ? (
          <table className='table'>
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
               <th>Year&Semester</th>
              </tr>
            </thead>
            <tbody>
              {filteredGrades.map((grade, index) => (
                <tr key={index}>
                  <td>{grade.course}</td>
                  <td>{grade.grade}</td>
                 <td>{grade.semester}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='text-center mt-4'>No missing grades found for the selected filter.</p>
        )}
      </section>
    </div>
  );
};

export default Report;
