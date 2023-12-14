import React from 'react'
import Chart from "react-apexcharts";
import './dashboard.css'

function dashboard() {
 const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ["Course1", "Course2", "Course3", "Course4", "Course5", "Course6"]
    }
 };

 const series = [
    {
      name: "1st Sem",
      data: [ 45, 50, 49, 60, 70, 91]
    },
    {
        name: "2nd Sem",
        data: [ 35, 70, 29, 10, 60, 71]
      }
 ];
 
 return (
    <div className='chart'>
        <h1 className='hhh'>Dashboard</h1>
        <p>This is the analysis on your first and second semester courses</p>
        <div className="row1">
            <div className="col-4">
            <Chart
              options={options}
              series={series}
              type="bar"
              width="500"
            />
            </div>
            <div className="col-4">
            <Chart
              options={options}
              series={series}
              type="area"
              width="500"
            />
            </div>
        </div>
        <div className="text-area">
            <ul>
                <li><strong>Total Marks : 85/100</strong></li>
            </ul>
        </div>
        <div className='container1'>
        <div class="sidebar">
            <h2>Menu</h2>
             <a href="/dashboard">Dashboard</a>
             <a href="/gradepage">Grade Page</a>
             <a href="/contact">Lecturer Contact</a>
             <a href="/help">Help and Support</a>
        </div>
        </div>
    </div>
 );
};

export default dashboard;