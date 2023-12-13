import React, { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import Profile from "../assets/profile-pic.jpg";
import "../styles/Dashboard.css";
import { Alert } from "./alert";

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
            <h1>Academic Record</h1>
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
                <th>CODE</th>
                <th>COURSE TITLE</th>
                <th>CREDIT</th>
                <th>GRADE</th>
              </tr>
              <tr>
                <td>DCIT201</td>
                <td>Objected Oriented Programming</td>
                <td>3</td>
                <td>A</td>
              </tr>
              <tr>
                <td>DCIT203</td>
                <td>Computer Hardware and logic circuit Design</td>
                <td>3</td>
                <td>NaN</td>
              </tr>
              <tr>
                <td>DCIT205</td>
                <td>Multimedia and Web Design</td>
                <td>3</td>
                <td>A</td>
              </tr>
              <tr>
                <td>DCIT207</td>
                <td>Computer Archeitecture</td>
                <td>3</td>
                <td>B</td>
              </tr>
              <tr>
                <td>DCIT209</td>
                <td>E-Business Archeitecture</td>
                <td>3</td>
                <td>NaN</td>
              </tr>
            </table>
          </section>
        </>
      )}
    </div>
  );
}

export default Dashboard;
