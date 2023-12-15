"use client";
import { useState } from "react";
import { notifySuccess } from "../utils";

export function ReportForm() {
  const [error, setError] = useState("");
  const [missingGradeDetails, setMissingGradeDetails] = useState({});

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setMissingGradeDetails({ ...missingGradeDetails, [name]: value });
  };

  const handleSubmitMissingGrade = (event) => {
    event.preventDefault();
    // Check for no empty field
    if (
      missingGradeDetails.courseName == "" ||
      missingGradeDetails.expectedGrade == "" ||
      missingGradeDetails.explanation == ""
    ) {
      setError("Empty field(s)");
      return;
    }
    notifySuccess("Missing grade reported!");
    // Reset form
    resetForm();
  };
  const resetForm = () => {
    setMissingGradeDetails({});
  };
  return (
    <section className="flex justify-center items-center col-span-3">
      <section>
        <header className="my-10">
          <h1 className="text-3xl">Report a Missing Grade</h1>
          <p className="text-slate-400 text-sm">
            Fill in the fields to report a missing grade
          </p>
        </header>
        <form onSubmit={handleSubmitMissingGrade}>
          <div>
            <p className="text-red-400">{error}</p>
          </div>
          <div className="flex flex-col my-5 ">
            <label htmlFor="courseName" className="my-2">
              Course Name
            </label>
            <input
              type="text"
              className="border p-2"
              name="courseName"
              onChange={handleInputChange}
              value={missingGradeDetails.courseName}
            />
          </div>
          <div className="flex flex-col  my-5 ">
            <label htmlFor="expectedGrade" className="my-2">
              Expected Grade
            </label>
            <input
              type="text"
              id="expectedGrade"
              name="expectedGrade"
              className="border p-2"
              onChange={handleInputChange}
              value={missingGradeDetails.expectedGrade}
            />
          </div>
          <div className="flex flex-col  my-5 ">
            <label htmlFor="instructorsName" className="my-2">
              Instructors name
            </label>
            <input
              type="text"
              id="instructorsName"
              name="instructorsName"
              className="border p-2"
              onChange={handleInputChange}
              value={missingGradeDetails.instructorsName}
            />
          </div>
          <div className="flex flex-col  my-5 ">
            <label htmlFor="explanation" className="my-2">
              Explanation
            </label>
            <textarea
              type="text"
              id="explanation"
              className="border p-2"
              name="explanation"
              onChange={handleInputChange}
              value={missingGradeDetails.explanation}
            ></textarea>
          </div>
          <div className="flex my-5">
            <button
              type="submit"
              className="bg-black text-white rounded-md p-2 hover:opacity-50 "
            >
              Report missing grade
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}
