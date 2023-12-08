import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StudentContext } from '../StudentContext';
import CourseCard from '../components/CourseCard';
import courses from '../data/ReportData';
import { Chart } from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { Line } from 'react-chartjs-2';

// pie chart import
import { Pie } from 'react-chartjs-2';

Chart.register(CategoryScale);

const Dashboard = () => {

    const chartData = {
        labels: courses.map((course) => course.courseCode),
        datasets: [
          {
            label: "Academic Performance",
            data: courses.map((course) => course.gpa),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "#2a71d0",
            borderWidth: 3,
          }
        ]
      };
   
    const { student } = useContext(StudentContext);
  
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Welcome {student.studentId}</h1>
                <NavLink to="/dashboard" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
                </NavLink>
            </div>

            <h4 className="h3 my-4 font-weight-bold text-success">Your Active Courses</h4>

            {/* active courses */}
            <div className="row">
                {courses.slice(0, 4).map((course, index) => (
                    <CourseCard course={course} key={index} />
                ))}
            </div>
            
           

            {/* academic performance area chart */}
            <div class="row">
                <div class="col-xl-8 col-lg-7">
                    {/* Illustrations */}
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h4 class="m-0 font-weight-bold text-success">Academic Performance</h4>
                        </div>
                        <div class="card-body">
                            <div class="chart-area">
                                <Line
                                    data={chartData} 
                                    options={{
                                        responsive: true,
                                        plugins: {
                                          title: {
                                            display: true,
                                            text: "Academic Performance from 2019 to 2021"
                                          },
                                        },
                                        scales: {
                                          y: {
                                            title: {
                                              display: true,
                                              text: "Grade"
                                            }
                                            },
                                            x: {
                                                title: {
                                                    display: true,
                                                    text: "Course Code"
                                                }
                                            }
                                        }
                                      }}
                                />
                              </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                    {/* Illustrations */}
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h4 class="m-0 font-weight-bold text-success">Academic Performance</h4>
                        </div>
                        <div class="card-body">
                            <div class="chart-pie pt-4 pb-2">
                                <Pie
                                    data={chartData} 
                                    options={{
                                        responsive: true,
                                        plugins: {
                                          title: {
                                            display: true,
                                            text: "Academic Performance from 2019 to 2021"
                                          },
                                        },
                                        scales: {
                                          y: {
                                            title: {
                                              display: true,
                                              text: "Grade"
                                            }
                                            },
                                            x: {
                                                title: {
                                                    display: true,
                                                    text: "Course Code"
                                                }
                                            }
                                        }
                                      }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;