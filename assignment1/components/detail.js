import React from "react";
import GradeCard from "./gradeCard";
// import { userInfo } from "./data";

function Detail() {
  let userInfo = {
    name: "Muhammed Aminu Umar",
    Student_Id: "11027493",
    Programme: "Computer Science",
    Level: "200",
  };

  return (
    <>
      <GradeCard
        Level={"200"}
        Programme={"Maths-minor"}
        name={"Selasie"}
        Student_Id={33233223}
      />
    </>
  );
}

export default Detail;
