import React from "react";
import "./Dashboard.css"

export const Dashboard = () => {
  return (
    <div className="container">
       <section className="main">
         <section className="attendance">
           <div className="attendance-list">
             <h1>DASHBOARD</h1>
             <table className="table">
               <thead>
                 <tr>
                   <th> /</th>
                   <th>Task</th>
                   <th>Course</th>
                   <th>Date</th>
                   <th>Join Time</th>
                   <th>Logout Time</th>
                   <th>Details</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>01</td>
                   <td>quiz</td>
                   <td>web design</td>
                   <td>04-08-23</td>
                   <td>8:00AM</td>
                   <td>12:00PM</td>
                   <td><button>View</button></td>
                 </tr>
                 <tr className="active">
                   <td>02</td>
                   <td>Assignment</td>
                   <td>programming</td>
                   <td>23-09-23</td>
                   <td>9:00AM</td>
                   <td>10:00AM</td>
                   <td><button>View</button></td>
                 </tr>
                 <tr>
                   <td>03</td>
                   <td>Mid-sem</td>
                   <td>testing</td>
                   <td>30-09-23</td>
                   <td>8:00AM</td>
                   <td>3:00PM</td>
                   <td><button>View</button></td>
                 </tr>
                 <tr>
                   <td>04</td>
                   <td>quiz</td>
                   <td>computer architecture</td>
                   <td>06-10-23</td>
                   <td>7:00PM</td>
                   <td>10:00PM</td>
                   <td><button>View</button></td>
                 </tr>
                   <td>05</td>
                   <td>assignment</td>
                   <td>Calculus II</td>
                   <td>08-10-23</td>
                   <td>6:00AM</td>
                   <td>7:43AM </td>
                   <td><button>View</button></td>
                 <tr >
                   <td>06</td>
                   <td>mid-sem</td>
                   <td>computational logic</td>
                   <td>14-10-23</td>
                   <td>9:00PM</td>
                   <td>4:00AM</td>
                   <td><button>View</button></td>
                 </tr> 
               </tbody>
             </table>
           </div>
           <div className="attendance-lists">
             <h1>ACTIVITIES</h1>
             <table className="table">
               <thead>
                 <tr>
                   <th>/</th>
                   <th>activity</th>
                   <th>course</th>
                   <th>Date</th>
                   <th>begginer</th>
                   <th>Moderate</th>
                   <th>Pro League</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>01</td>
                   <td>hackaton</td>
                   <td>programming</td>
                   <td>03-09-23</td>
                   <td></td>
                   <td></td>
                   <td>***</td>
                 </tr>
                 <tr className="active">
                   <td>02</td>
                   <td>coding</td>
                   <td>programming</td>
                   <td>08-09-23</td>
                   <td>***</td>
                   <td></td>
                   <td></td>
                 </tr>
                 <tr>
                   <td>03</td>
                   <td>lab works</td>
                   <td>computational logic</td>
                   <td>12-09-23</td>
                   <td></td>
                   <td>***</td>
                   <td></td>
                 </tr>
                 <tr>
                   <td>04</td>
                   <td>lab works</td>
                   <td>computer architeccture</td>
                   <td>18-09-23</td>
                   <td></td>
                   <td></td>
                   <td>***</td>
                 </tr>
                   <td>05</td>
                   <td>project</td>
                   <td>web design</td>
                   <td>08-10-23</td>
                   <td>***</td>
                   <td></td>
                   <td></td>
                 <tr >
                   <td>06</td>
                   <td>coding</td>
                   <td>java II</td>
                   <td>11-10-23</td>
                   <td></td>
                   <td></td>
                   <td>***</td>
                 </tr> 
               </tbody>
             </table>
           </div>
         </section>
       </section>
     </div>
  );
};