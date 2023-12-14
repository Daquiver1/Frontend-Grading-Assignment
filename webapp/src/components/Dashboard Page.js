import React from "react";
import "./Dashboard.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard=()=>{
    const notify=()=>{
    toast.info(' YOU HAVE 3 MISSING GRADES!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        toast.info(' YOUR ASSIGNMENT ON PROGRAMMNG IS DUE TODAY!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        
   const data = [
   {name:"Programming I",value :7},
  {name:"Calculus II",value :3},
   {name:"Web Design ",value :5},
   {name:"Academic Writing",value :8},
   {name:" Computational Mathematics",value :15},
   {name:"Vector Mechanics ",value :9},
  ];
 
  


    return(
        <div>
            
             <div className="student">
               <h1 className="ui teal inverted segment">  STUDENT ID: 11056149</h1>
            </div>
            <section className="arrangement">
            <p>
            <div className="courses">
                 <h3 className="welcome-text">Webdesign and Multimedia (DCIT 205)</h3>
                 <p className="welcome-text">Welcome to the exciting world of Web Design and Multimedia! This course is designed to provide 
                 students with a comprehensive understanding of the principles and practices involved in creating visually stunning, 
                 interactive, and engaging content for the web.</p>
            </div>
            </p>
            <p>
            <div className="courses">
                 <h3 className="welcome-text">Calculus II (Math 223)</h3>
                 <p className="welcome-text">Welcome to the exciting world of Web Design and Multimedia! This course is designed to provide 
                 students with a comprehensive understanding of the principles and practices involved in creating visually stunning, 
                 interactive, and engaging content for the web.</p>
            </div>
            </p>
            <p>
            <div className="courses">
                 <h3 className="welcome-text">Programming one (DCIT 201)</h3>
                 <p className="welcome-text">Welcome to the exciting world of Web Design and Multimedia! This course is designed to provide 
                 students with a comprehensive understanding of the principles and practices involved in creating visually stunning, 
                 interactive, and engaging content for the web.</p>
            </div>
            </p>
            <div className="welcome">
                <button className="ui teal inverted segment" onClick={notify}>Notifications</button>
            </div>
            
                
                 
                
            
            </section> 
            
            <div className="ui raised very padded text container segment "> 
                 <h3 className="welcome1">Missing Grades Analysis</h3>
                
            <LineChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        
        </LineChart>
         
            </div>
            
        </div>

    )
}

export default Dashboard; 