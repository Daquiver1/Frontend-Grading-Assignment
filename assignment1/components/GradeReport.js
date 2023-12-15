import React from "react";
import Button from "./Button";

function GradeReport() {
  return (
    <>
      <div className="object-center bg-gray-400 m-10">
        <h2 className="text-center mt-3 p-3">
          DO YOU THINK YOUR GRADES NEED TO BE REVIEWED , CLICK ON THE BUTTON
          BELOW TO GET YOUR GRADES REVIEWED
        </h2>

        <Button text={"Review Grades"} destination={"/ReviewForm"} />
      </div>
    </>
  );
}

export default GradeReport;
