import React, { useState, useEffect } from 'react';
import "./styles/Dashboard.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ResponsiveContainer } from "recharts";
import { BarChart, Bar } from "recharts";
import StudentImage from '../Assets/login.avif'; // This is correct

function Dashboard() {
  const studentData = [
    {
      subject: "DCIT 203",
      grade: "A",
      pictureId: "john_doe_picture",
      score: 89,
    },
    {
      subject: "DCIT 201",
      grade: NaN,
      score: 78,
    },
    {
      subject: "DCIT 209",
      grade: "A",
      score: 84,
    },
    {
      subject: "CBAS 201",
      grade: "B+",
      score: 74,
    },
    {
      subject: "DCIT 207",
      grade: NaN,
      score: 85,
    },
    {
      subject: "DCIT 205",
      grade: "A",
      score: 89,
    },
  ];

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Simulate missing grades alert
    setShowAlert(true);

    // Hide the alert after 5 seconds (adjust the timing as needed)
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main className="main-container">
      {showAlert && (
        <div className="alert top">
          <strong> Alert!</strong> You have missing grades.
        </div>
      )}
  <div className="main-title">
        <h1>STUDENT DASHBOARD</h1>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
          <img src={StudentImage} alt="" />
          </div>
        </div>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>STANLEY BOATENG</h3>
          </div>
          <h1>{studentData.length} courses</h1>
        </div>
      </div>

      

      <div className="table-container">
      <table className="student-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr key={index}>
                <td>{student.subject}</td>
                <td>{student.score}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={studentData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={studentData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </main>
      );
    }
    
    export default Dashboard;



    
    
  

