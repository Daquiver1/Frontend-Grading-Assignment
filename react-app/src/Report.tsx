import  { useState } from 'react';
import './Report.css';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './component/Footer';


interface Row {
  id: number;
  Subject: string;
  Grade: string;
  Cumulative: string;
}


function Report() {
  
  const columns  = [
    {
      name: 'Subject',
      selector: (row: Row) => row.Subject,
    },
    {
      name: 'Grade',
      selector: (row: Row) => row.Grade,
    },
    {
      name: 'Cumulative Grade Point',
      selector: (row: Row) => row.Cumulative,

      cell: (row: Row) => <div style={{ textAlign: 'right' }}>{row.Cumulative}</div>,
    },
  ];
  const firstSemesterData: Row[] = [
    {
        id: 1,
        Subject: "UGRC 150 Critical Thinking and Practical Reasoning",
        Grade: "A",
        Cumulative: "12"
    },
    {
        id: 2,
        Subject: "DCIT105 Mathematics For IT Professionals ",
        Grade: "N/A",
        Cumulative: "N/A"
    },
    {
        id: 3,
        Subject: "DCIT 101 Introduction to Computer Science",
        Grade: "B+",
        Cumulative: "10.5"
    },
    {
        id: 4,
        Subject: "DCIT 103 Office Productivity Tools",
        Grade: "N/A",
        Cumulative: "N/A"
    },
    {
        id: 5,
        Subject: "STAT 111 Introduction to Statistics and Probability I",
        Grade: "A",
        Cumulative: "12"
    },
    {
        id: 6,
        Subject: "ECON 101 Introduction to Economics I",
        Grade: "C",
        Cumulative: "6"
    }
];

  


  const secondSemesterData: Row[] = [
    {
        id: 7,
        Subject: "UGRC 110 Academic Writing I",
        Grade: "B+",
        Cumulative: "10.5"
    },
    {
        id: 8,
        Subject: "MATH 122 Calculus I",
        Grade: "C",
        Cumulative: "6"
    },
    {
        id: 9,
        Subject: "ECON102 Introduction to Economics II",
        Grade: "N/A", 
        Cumulative: "N/A"
    },
    {
        id: 10,
        Subject: "Computer Hardware Fundamentals And Circuits",
        Grade: "C+",
        Cumulative: "7.5"
    },
    {
        id: 11,
        Subject: "DCIT104 Programming Fundamentals ",
        Grade: "N/A",
        Cumulative: "N/A"
    },
    {
        id: 12,
        Subject: "STAT112 Introduction to Statistics And Probability II",
        Grade: "B+",
        Cumulative: "6"
    },
    
];

  const level200FirstSemesterData: Row[] = [
    {
      id: 1,
      Subject: " CBAS210 Academic Writing I",
      Grade: "B+",
      Cumulative: "10.5",
    },
    {
      id: 2,
      Subject: "DCIT 201 Programming I",
      Grade: "N/A",
      Cumulative:"N/A",
    },
    {
      id: 3,
      Subject: "DCIT 203 Digital and Logic System Design",
      Grade: "N/A",
      Cumulative: "N/A",
    },
    {
      id: 2,
      Subject: "DCIT 205 Multi Media and Web Design",
      Grade: "B",
      Cumulative: "9",
    },
    {
      id: 2,
      Subject: "DCIT 207 Computer Organization & Architecture",
      Grade: "A",
      Cumulative: "12",
    },
    
  ];
  const level200SecondSemesterData: Row[] = [
    
    {
      id: 7,
      Subject: "DCIT 301 Operating Systems",
      Grade: "N/A",
      Cumulative: "N/A",
    },
    {
      id: 8,
      Subject: " DCIT 303 Computer Networks",
      Grade: "N/A",
      Cumulative: "N/A",
    },
    {
      id: 8,
      Subject: " DCIT 305 Database Fundamentals",
      Grade: "N/A",
      Cumulative: "N/A",
    },
    {
      id: 8,
      Subject: " DCIT 313 Introduction to Artificial Intelligence",
      Grade: "N/A",
      Cumulative: "N/A",
    },
    {
      id: 8,
      Subject: " DCIT 317 IT Project Management",
      Grade: "N/A",
      Cumulative: "N/A",
    },

  ];
 

  const [selectedLevel, setSelectedLevel] = useState<number>(200);
  
  return (
    <><>
      <div className='kat'>
        <h1 className="kf-bold">Kathy's Grade Report</h1>
      </div>
      
      <div className='top'>
        <p onClick={() => setSelectedLevel(100)} className=' level '>Level 100</p></div>
      {selectedLevel === 100 && (
        <>
          <h2 className="kf-primary">First semester</h2>
          <div className="table">
            <DataTable  columns={columns} data={firstSemesterData} />
          </div>
          <div>
            <h2 className="kf-primary">Second Semester</h2>
          </div>
          <DataTable columns={columns} data={secondSemesterData} />
        </>
      )}<div className='top'>
        <p onClick={() => setSelectedLevel(200)} className=' level'>Level 200</p></div>
      {selectedLevel === 200 && (
        <>
          <h2 className="kf-primary">First semester</h2>
          <div className="table">
            <DataTable columns={columns} data={level200FirstSemesterData} />
          </div>
          <div>
            <h2 className="kf-primary">Second Semester</h2>
          </div>
          <DataTable  columns={columns} data={level200SecondSemesterData} />
        </>)}
      <div className='top'>
        <p onClick={() => setSelectedLevel(300)} className=' level '>Level 300</p></div>
      {selectedLevel === 300 && (
        <>
          <p className='noreport'>No report available</p>
        </>)}
        <div className='top'>
        <p onClick={() => setSelectedLevel(400)} className=' level '>Level 400</p>   </div>
        {selectedLevel === 400 && (
          <>
            <p className='noreport'>No report available</p>
          </>
        )}
   

    </>
    <Footer/>
      </>  
  )}

export default Report;