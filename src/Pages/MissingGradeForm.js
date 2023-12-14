import React from "react";
import "../Styles/MissingGradeForm.css";

export const MissingGradeForm = () => {
  function SendReport(){
    alert("Your report has been sent!");
  }
  return (
    <div className="m-container">
      <main>
        <h1>Report Form</h1>
        <label>Course name: </label>
        <select>
          <option value="">..</option>
          <optgroup label="Computer Science">
            <option value="DCIT 101">DCIT 101</option>
            <option value="DCIT 101">DCIT 102</option>
            <option value="DCIT 101">DCIT 205</option>
            <option value="DCIT 101">DCIT 201</option>
          </optgroup>
          <optgroup label="MATH">
            <option value="MATH 223">MATH 123</option>
            <option value="MATH 223">MATH 121</option>
            <option value="MATH 223">MATH 126</option>
            <option value="MATH 223">MATH 223</option>
          </optgroup>
        </select>
        <label>Instructor name: </label>
        <select>
          <option value="">..</option>
          <option value="Dr. Mark Atta Mensah">Dr. Mark Atta Mensah</option>
          <option value="Dr. Michael Agbo Tetteh Soli">
            Dr. Michael Agbo Tetteh Soli
          </option>
          <option value="Dr. Aziz Abdullai Dwumfuor">
            Dr. Aziz Abdullai Dwumfuor
          </option>
          <option value="Prof. Ferdinand Katsriku">
            Prof. Ferdinand Katsriku
          </option>
          <option value="Prof. Benoit Sehba">Prof. Benoit Sehba</option>
        </select>
        <label>Expected Grade</label>
        <select>
          <option value="">A</option>
          <option value="">B+</option>
          <option value="">B</option>
          <option value="">C+</option>
          <option value="">C</option>
          <option value="">D+</option>
          <option value="">D</option>
          <option value="">E</option>
          <option value="">F</option>
        </select>
        <textarea
          placeholder="Your explanation here"
          name=""
          id="textarea"
          cols="27"
          rows="8"
        ></textarea>
        <button onClick={SendReport}>Submit</button>
      </main>
    </div>
  );
};
