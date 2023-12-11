import React, { useState, useEffect } from 'react';

const DashboardPage = () => {
  
  const [grades, setGrades] = useState([
    { course: 'Dcit201', grade: 'A' },
    { course: 'Dcit103', grade: 'B' },
    { course: 'Dcit205', grade: 'C' },
    { course:  'Dcit203',grade: 'A' },
    { course:  'Maths123',grade: 'C+' },
    { course:  'Maths126',grade: 'B+' },
    { course:  'Stat112',grade: 'A' },
    { course:  'Ugrc150',grade: 'D' },
    { course:  'Econs101',grade: 'A' },

  ]);
  
  const [missingGrades, setMissingGrades] = useState([
    { course: 'Dcit201', message: 'Missing grade - Please submit assignment' },
    { course: 'Dcit205', message: 'Missing grade - Please submit assignment' },
    { course: 'Dcit203', message: 'Missing grade - Please submit assignment' },
    { course: 'Dcit203', message: 'Missing grade - Please submit assignment' },
    { course: 'Maths123', message: 'Missing grade - Please submit assignment' },
  ]);


  // const getValue = (e)=>{
  //   const [value, name] = e.target;
  //   setMissingGrades([missingGrades])
  // }
  

  useEffect(() => {
    
    const fetchData = async () => {
      setTimeout(() => {
        
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8 dashboard text-blue-50">
      <h2 className="text-2xl font-semibold mb-4">Dashboard - Student Overview</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Current Grades</h3>
        {grades.length === 0 ? (
          <p>No grades available</p>
        ) : (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Course</th>
                <th className="px-4 py-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{grade.course}</td>
                  <td className="border px-4 py-2">{grade.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* {missingGrades.map((missing, index)=>{
        <div key={index}>
          {missing.name} : {missing.value}
        </div>
      })} */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Missing Grades Alerts</h3>
        <button>See Missing Grades</button>
      </div>
    </div>
  );
};

export default DashboardPage;
