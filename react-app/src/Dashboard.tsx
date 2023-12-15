import './Dashboard.css'
import stats from './images/stats.jpeg'
import Footer from './component/Footer';
import React from 'react';

const Dashboard: React.FC = () => {
  return (
      <>
      <img className='stats' src={stats} alt='' />
      
      <div className='things'>
      
      <section >
        <h2 className='tl'>System Statistics</h2>

        <p>Total Missing Grades: 110</p>
        <p>Resolved Missing Grades: 75</p>
        <p>Unresolved Missing Grades: 35</p>
      </section>
      
      <section >
        <h2 className='tl'>
          Recent Missing Grades</h2>
        <ul>
          <li>
            <strong>Student:</strong> Kathy Agyeman
            <br />
            <strong>Recent Missing Courses:</strong>  -DCIT 201 Programming I<br></br>
            -DCIT 203 Digital and Logic System
            <br />
          </li>
        </ul>

      </section>

    </div>
    <Footer/></>
  );
};

export default Dashboard;