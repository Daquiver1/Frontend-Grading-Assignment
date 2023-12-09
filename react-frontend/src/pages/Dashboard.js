import React, { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import Profile from "../assets/profile-pic.jpg";
import "../styles/Dashboard.css";

function Dashboard() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <div className="dashboard">
      {loading ? (
        <div className="loader-container">
          <BounceLoader color={"#0e1225"} loading={loading} size={30} />
        </div>
      ) : (
        <>
          <header>
            <h1>Student Details</h1>
          </header>
          <main class="grid-container">
            <article class="featured">
              <img src={Profile} alt="profile" />
              <div>
                <h2>NA</h2>
                <p>Level: NA</p>
                <p>ID: NA</p>
                <p>Programme: NA</p>
                <p>Gender: NA</p>
              </div>
            </article>
          </main>
          <section class="wrapper-main">
            <table>
              <tr>
                <th>Registered Courses</th>
                <th>Lecturer</th>
                <th>Lecture Venue</th>
                <th>Lecture Time</th>
              </tr>
              <tr>
                <td>DCIT205(Web Design)</td>
                <td>Nana Aseye</td>
                <td>JQB19</td>
                <td>Monday (7:30am - 9:20am)</td>
              </tr>
              <tr>
                <td>DCIT201(Programming)</td>
                <td>Paul Nii Tackie Ammah</td>
                <td>LOT2</td>
                <td>Monday (1:30am - 3:20am)</td>
              </tr>
              <tr>
                <td>DCIT203(Computer Hardware and Logic Cicuit Design)</td>
                <td>Abdullai-Dwumfour</td>
                <td>JQB23</td>
                <td>Wednesday (1:30am - 3:20am)</td>
              </tr>
              <tr>
                <td>DCIT207(Computer Archeitecture)</td>
                <td>Dr. Ben-Bright Benuwa</td>
                <td>JQB19</td>
                <td>Thursday (7:30am - 9:20am)</td>
              </tr>
              <tr>
                <td>DCIT209(E-Business Archeitecture)</td>
                <td>Dr. Benjamin Ghansah</td>
                <td>JQB19</td>
                <td>Thursday (7:30am - 9:20am)</td>
              </tr>
              <tr>
                <td>CBAS210(Academic Writing II)</td>
                <td>PBA</td>
                <td>JQB14</td>
                <td>Monday (9:30am - 11:20am)</td>
              </tr>
            </table>
          </section>
        </>
      )}
    </div>
  );
}

export default Dashboard;
