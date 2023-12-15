import Link from "next/link";
import React from "react";

function dropdown() {
  return (
    <>
      <label for="FAQ">EXPLORE FAQ:</label>
      <select name="questions" id="cars">
        <option>
          <Link href="/help/#answer1">HOW DO I GET STARTED</Link>
        </option>
        <option>HOW DO I REPORT MISSING GRADE</option>
        <option>HOW WILL I CREATE AN ACCOUNT </option>
        <option>CAN ONE STUDENT HAVE ACCESS TO MULTIPLE ACCOUNTS </option>
      </select>
    </>
  );
}

export default dropdown;
