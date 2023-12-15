import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleReportGradeClick = () => {
    // Navigate to the Missing Grade Form page
    navigate("/form");
  };

  return (
    <div
      style={{
        textAlign: "justify",
        padding: "20px",
        backgroundColor: "#f4f4f4",
      }}
    >
      <header style={{ marginBottom: "20px", color: "#01027d" }}>
        <h1>Missing Grade Reporting System</h1>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div>
          <section style={{ marginBottom: "30px" }}>
            <p>
              Welcome to the Missing Grade Reporting System. This system is
              designed to help students track and report grades that are not
              recorded in their academic profiles.
            </p>
          </section>

          {/* Second Section */}
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ color: "#01027d" }}>Report a Missing Grade</h2>
            <p>
              If you have a missing grade that needs attention, use our
              reporting form to submit the details. We'll ensure that your
              concern is addressed promptly.
            </p>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleReportGradeClick}
            >
              Report Missing Grade
            </button>
          </section>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA976CHuWyXBhKAzlCIRRRB1RxL-hzEr67jQ&usqp=CAU"
            alt="Your Image Description"
            height="350px"
            style={{
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>

      <section style={{ marginBottom: "30px", color: "#01027d" }}>
        <h2>How It Works</h2>
        <p>
          Our system simplifies the process of reporting missing grades. Follow
          these steps:
        </p>
        <ul
          style={{
            textAlign: "left",
            margin: "0 auto",
            maxWidth: "600px",
            color: "#01027d",
          }}
        >
          <li>Log in to your account.</li>
          <li>Go to the dashboard and select "Report Missing Grade."</li>
          <li>Fill out the required information and submit the form.</li>
          <li>Our team will review your report and take appropriate action.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
