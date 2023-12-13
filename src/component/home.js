import React from "react"
import iStockImage from '../images/iStock.jpg'
const Home = () => {
    return ( 
         
        <div>
    
            <div>
            <img src={iStockImage} alt="Missing Grade Reporting System" className="img-fluid" />
              <h1>Welcome to the Missing Grade Reporting System</h1>
              <p>This system is designed to help students track and report grades that are not recorded in their academic profiles.</p>
              <p>With our user-friendly interface, you can easily view your grades, report missing grades, and communicate with your instructors or academic administration.</p>
              <a href="/login" className="btn btn-primary">Get Started</a>
            </div>
        
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>View Grades</h2>
              <p>Get an overview of your current grades and track your academic progress.</p>
            </div>
            <div className="col-md-4">
              <h2>Report Missing Grades</h2>
              <p>Easily report any missing grades that are not recorded in your academic profile.</p>
            </div>
            <div className="col-md-4">
              <h2>Contact Instructors</h2>
              <p>Communicate with your instructors or academic administration regarding missing grades or other concerns.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2022 Missing Grade Reporting System. All rights reserved.</p>
        </div>
      </footer>
      </div>

     );
}
 
export default Home;