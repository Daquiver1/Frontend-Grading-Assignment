import React, {useState} from 'react';
import Chart from "react-apexcharts";
import './dashboard.css'

function Dashboard() {
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
 
 const [sidebarOpen, setSidebarOpen] = useState(false);

 const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
 };;
 
 return (
    <div className='chart'>
        <h1 className='hhh'>Dashboard</h1>
        <p className='parag'>This is the analysis on your first and second semester courses</p>
        <div className="row1">
    <div className="col-4">
        <Chart
            options={options}
            series={series}
            type="bar"
            width="500"
            className="float-right" 
        />
    </div>
    <div className="col-4">
        <Chart
            options={options}
            series={series}
            type="area"
            width="500"
            className="float-right" 
        />
    </div>
</div>
        <div className="text-area">
            <ul>
                <li className="float-right"><strong>Total Marks : 85/100</strong></li>
            </ul>
        </div>
        <div className="sidebar">

        <button onClick={toggleSidebar}>Menu</button>
      <div id="sidebar" className={sidebarOpen ? 'sidebar open' : 'sidebar'}>
        <ul>
        <li><a href="/dashboard">Dashboard Page</a></li>
        <li><a href="/gradepoint">Grade Page</a></li>
        <li><a href="/contact">Lecturer Contact</a></li>
        <li><a href="/help">Help and Support</a></li>
        </ul>
      </div>
    </div>
    </div>
    
 );
};
export default Dashboard;