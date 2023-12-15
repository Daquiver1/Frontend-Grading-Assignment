import React from "react";
import Header from "./header";
import Footer from "./footer";
import './dashboard.css'
import Picture from "./grades.jpg"

export default function Dashboard(){
    return(
        <div>
            <Header/>
            <img src= {Picture} className="dashboard-pic" />
            <div className="body">
                <h3>
                    Welcome, Francis Donkor
                </h3>
                <p>
                    Grade : 12
                </p>
                <p>
                    Average Grade : 99
                </p>
                <h4>
                    Your Grades
                </h4>
                <table>
                    <tr>
                        <th> Course Name</th>
                        <th> Grade</th>
                    </tr>
                    <tr>
                        <td>DCIT 401</td>
                        <td> A</td>
                    </tr>
                    <tr>
                        <td> DCIT 403</td>
                        <td> B+</td>
                    </tr>
                    <tr>
                        <td>DCIT 406</td>
                        <td> C+</td>
                    </tr>
                    <tr>
                        <td>DCIT 407</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>DCIT 409</td>
                        <td>B+</td>
                    </tr>
                    <tr>
                        <td>DCIT 414</td>
                        <td> Not Found</td>
                    </tr>
                </table>
                <p className="missing">
                    Missing Grade
                    <p className="dcit414">
                        &#183; DCIT 414
                    </p>
                </p>
                <p>
                    Click on the button below to report missing  grade
                </p>
                <button>CLICK HERE</button>
            </div>
            <br />
            <br />
            <Footer/>
            

            

                   
        </div>
    )
}