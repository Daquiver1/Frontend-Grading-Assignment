import React from "react";

const GradeCard = ({ name, Student_Id, Programme, Level }) => {
  //   let userInfo = {
  //     name: "Muhammed Aminu Umar",
  //     Student_Id: "11027493",
  //     Programme: "Computer Science",
  //     Level: "200",
  //   };
  return (
    <section className="bg-gray-100 shadow-sm my-3 mx-3">
      <div className="flex justify-around">
        <div className="flex-col justify-start">
          <div className="m-5 p-4 border-b-2">
            <p> NAME: {name}</p>
          </div>
          <div className="m-5 p-4 border-b-2">
            <p> STUDENT ID: {Student_Id}</p>
          </div>
        </div>
        <div className="flex-col justify-start">
          <div className="m-5 p-4 border-b-2">
            <p> PROGRAMME: {Programme}</p>
          </div>
          <div className="m-5 p-4 border-b-2">
            <p> LEVEL: {Level}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradeCard;
