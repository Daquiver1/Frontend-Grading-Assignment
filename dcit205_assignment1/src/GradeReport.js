import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';


const Dashboard = () => {


  const initialGradebook = [
    { code: 'DCIT101', title: 'INTRODUCTION TO COMPUTER SCIENCE', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 1" },
    { code: 'DCIT103', title: 'OFFICE PRODUCTIVITY TOOLS', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 1" },
    { code: 'MATH121', title: 'ALGEBRA AND TRIGONOMETRY', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 1" },
    { code: 'MATH123', title: 'VECTORS AND GEOMETRY', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 1" },
    { code: 'STAT111', title: 'INTRODUCTION TO STATISTICS AND PROBABILITY I', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 1" },
    { code: 'UGRC150', title: 'CRITICAL THINKING AND PRACTICAL REASONING', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 1"  },
    { code: 'DCIT102', title: 'COMPUTER HARDWARE FUNDAMENTALS AND CIRCUITS', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 2"  },
    { code: 'DCIT104', title: 'PROGRAMMING FUNDAMENTALS', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 2"  },
    { code: 'MATH122', title: 'CALCULUS I', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 2"  },
    { code: 'MATH126', title: 'ALGEBRA AND GEOMETRY', credit: 3, grade: 'B+', gpt: 10.5, year: "2022/2023", semester: "Semester 2"  },
    { code: 'STAT112', title: 'INTRODUCTION TO STATISTICS AND PROBABILITY II', credit: 3, grade: 'A', gpt: 12, year: "2022/2023", semester: "Semester 2"  },
    { code: 'UGRC110', title: 'ACADEMIC WRITING I', credit: 3, grade: 'A', gpt: '12', year: "2022/2023", semester: "Semester 2" },
    { code: 'CBAS210', title: 'ACADEMIC WRITING II', credit: 3, grade: 'N/A', gpt: 'N/A', year: '2023/2024', semester: 'Semester 1' },
    { code: 'DCIT201', title: 'PROGRAMMING I', credit: 2, grade: 'N/A', gpt: 'N/A', year: '2023/2024', semester: 'Semester 1' },
    { code: 'DCIT203', title: 'DIGITAL AND LOGIC SYSTEMS DESIGN', credit: 3, grade: 'N/A', gpt: 'N/A', year: '2023/2024', semester: 'Semester 1' },
    { code: 'DCIT205', title: 'MULTI MEDIA AND WEB DESIGN', credit: 3, grade: 'N/A', gpt: 'N/A', year: '2023/2024', semester: 'Semester 1' },
    { code: 'DCIT207', title: 'COMPUTER ORGANIZATION & ARCHITECTURE', credit: 3, grade: 'N/A', gpt: 'N/A', year: '2023/2024', semester: 'Semester 1' },
    { code: 'MATH223', title: 'CALCULUS II', credit: 3, grade: 'N/A', gpt: 'N/A', year: '2023/2024', semester: 'Semester 1' },
  ];
     const [gradebook, setGradebook] = useState(initialGradebook);
  

      const [selectedYear, setSelectedYear] = useState('');
      const [selectedSemester, setSelectedSemester] = useState('');
    
      const handleYearChange = (year) => {
        setSelectedYear(year);
        setGradebook(initialGradebook.filter(item => item.year === year));
      };
    
      const handleSemesterChange = (semester) => {
        setSelectedSemester(semester);
        setGradebook(initialGradebook.filter(item => (item.semester === semester) && (item.year === selectedYear)));
      };
    
      return (
        <div>
          <div className="dashboard-content">
            <Dropdown onSelect={handleSemesterChange}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Semester
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Semester 1">Semester 1</Dropdown.Item>
                <Dropdown.Item eventKey="Semester 2">Semester 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
    
            <Dropdown onSelect={handleYearChange}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Academic Year
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="2022/2023">2022/2023</Dropdown.Item>
                <Dropdown.Item eventKey="2023/2024">2023/2024</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
    <div>
      <h1 className="text-center">Grade Report</h1>
    <table className='table table-hover'>
      <thead>
        <tr>
          <th>Code</th>
          <th>Title</th>
          <th>Credit</th>
          <th>Grade</th>
          <th>GPT</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {gradebook.map((gradebook, index) => (
           <tr key={index}>
            <td>{gradebook.code}</td>
            <td>{gradebook.title}</td>
            <td>{gradebook.credit}</td>
            <td>{gradebook.grade}</td>
            <td>{gradebook.gpt}</td>
            <td>{gradebook.year}</td>
          </tr>

       
        ))}
      </tbody>
    </table>
    </div>
      </div>
  );
}

export default Dashboard;
