import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GradesOverview from "../components/GradesOverview";
import "../components/StudentDashboard.css";

const StudentDashboard = ({ grades, missingGrades }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertButtonClick = () => {
    setShowAlert(!showAlert);
  };

  const backgroundImage = (
    <img src={process.env.PUBLIC_URL + "./images/dashboard-image.avif"} />
  );

  const pageContent = (
    <>
      <h1 className="dashboard-header">Welcome To Your Dashboard</h1>
      <GradesOverview grades={grades} />
    </>
  );

  return (
    <>
      <div id="liveAlertPlaceholder"></div>
      <div className="button-container">
        <Button
          type="button"
          className="btn btn-primary"
          id="liveAlertBtn"
          onClick={handleAlertButtonClick}
        >
          Check for any missing grade
        </Button>
      </div>

      <Alert
        show={showAlert}
        variant="danger"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        <Alert.Heading>Missing Grades Alert!</Alert.Heading>
        <p>
          {missingGrades.length > 0
            ? `You have missing grades for the following courses: ${missingGrades.join(
                ", "
              )}`
            : "No missing grades. Good job!"}
        </p>
      </Alert>
      <Navbar />
      <HeroSection
        backgroundImage={backgroundImage}
        pageContent={pageContent}
      />
    </>
  );
};

export default StudentDashboard;
