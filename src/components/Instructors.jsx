import React from "react";
import "../styles/instructor.css";
import hod from "../assets/hod.jpeg";
import pbs from "../assets/pbs.png";
import soli from "../assets/soli.jpeg";
import mark from "../assets/mark.jpeg";
import jamal from "../assets/jamal.jpeg";
import aziz from "../assets/aziz.png";

const Instructors = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(241, 238, 238)",

        paddingTop: "50px",

        marginBottom: "40px",
      }}
    >
      <div style={{}}>
        <div
          className="card-container"
          style={{ fontFamily: "'Merriweather Sans', sans-serif" }}
        >
          <Card
            imageSrc={hod}
            title="Dr.Ebenezer Owusu"
            telephone="0271246785"
            email="ebeowusu@ug.edu.gh"
            backgroundColor="#e4e6e7"
          />
          <Card
            imageSrc={pbs}
            title="Mr.Prince Boakye "
            telephone="024267383"
            email="prince-boakye@ug.edu.gh"
            backgroundColor="#e4e6e7"
          />
          <Card
            imageSrc={soli}
            title="Mr.Michael Soli"
            telephone="0202325078"
            email="msoli@ug.edu.gh"
            backgroundColor="#e4e6e7"
          />
          <Card
            imageSrc={mark}
            title="Mr.Mark Atta"
            telephone="0262325078"
            email="mamensa@ug.edu.gh"
            backgroundColor="#e4e6e7"
          />
          <Card
            imageSrc={aziz}
            title="Mr.Abdullai Aziz"
            telephone="0262325078"
            email="mamensa@ug.edu.gh"
            backgroundColor="#e4e6e7"
          />
          <Card
            imageSrc={jamal}
            title="DR.Jamal Deen Abdullai"
            telephone="0262325078"
            email="mamensa@ug.edu.gh"
            backgroundColor="#e4e6e7"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ imageSrc, title, telephone, email, backgroundColor }) => {
  return (
    <div
      className="card"
      style={{
        border: "2px solid rgb(165, 28, 48),",

        backgroundColor,
      }}
    >
      <img
        src={imageSrc}
        className="card-image"
        style={{
          borderRadius: "12px",
          height: "264px",
          objectFit: "contain",
          width: "100%",
        }}
      />
      <div
        className="card-content "
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div style={{ color: "rgb(165, 28, 48)" }}>
          <span
            style={{ fontSize: "16px", marginRight: "6px", fontWeight: "bold" }}
          >
            {title}
          </span>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <p style={{ fontSize: "10px", marginRight: "6px" }}>
          Tel: <span className="italic">{telephone} </span>{" "}
        </p>
        <p style={{ fontSize: "10px", marginRight: "6px" }}>
          Email: <span className="italic"> {email} </span>
        </p>
      </div>
    </div>
  );
};

export default Instructors;
