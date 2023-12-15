import React from 'react';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import img3 from "./images/Screenshot 2023-12-15 171130.png";

const Dashboard: React.FC = () => {
  const missingGrades = [
    { subject: 'DCIT 103 Office Productivity Tools' },
    { subject: 'ECON 102 Introduction to Economics II' },
    { subject: 'DCIT 203 Digital and Logic System Design' },
  ];

  const missingGradestable = [
    { grades: "A", total: '9' },
    { grades: "B+", total: '3' },
    { grades: "B", total: '1' },
    { grades: "C+", total: '1' },
    { grades: "Missing Grades", total: '3' }

  ];

  return (
    <>
      <div className="dashboard-container">
        <h1>Dashboard</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Subject with Missing Grades</th>
            </tr>
          </thead>
          <tbody>
            {missingGrades.map((grade, index) => (
              <tr key={index}>
                <td>{grade.subject}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Grades</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {missingGradestable.map((grade, index) => (
              <tr key={index}>
                <td>{grade.grades}</td>
                <td>{grade.total}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
     
      <div className="graph">
          <img className="imgg" src={img3} alt="pic" />
        </div>
    </>
  );
};

export default Dashboard;
