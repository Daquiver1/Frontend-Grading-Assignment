import React from "react";
import FooterComponent from "../components/FooterComponent";
export const Missing_Grade_Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Grade report submitted successfully!");
  };

  return (
    <>
      <div className="container mx-auto mt-12">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-6">
            MISSING GRADES?
          </h2>
          <p>
            <small className="text-xl">
              <em>Fill out the form below to report missing grades</em>
            </small>
          </p>
          <div className="mt-16 space-y-4 ">
            <div>
              <label
                htmlFor="courses"
                className="block text-sm font-semibold mb-2">
                Select a Course
              </label>
              <select id="courses" className="w-full border p-2 rounded-lg">
                <option>Select a course</option>
                <option value="01">DCIT 201</option>
                <option value="03">DCIT 203</option>
                <option value="05">DCIT 205</option>
                <option value="07">DCIT 207</option>
                <option value="09">DCIT 209</option>
                <option value="10">CBAS 210</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="instructor"
                className="block text-sm font-semibold mb-2">
                Select your Instructor
              </label>
              <select id="instructor" className="w-full border p-2 rounded-lg">
                <option>Select your Instructor</option>
                <option value="DB">David Berko</option>
                <option value="CB">Charis Boateng</option>
                <option value="SB">Seth Baidoo</option>
                <option value="ND">Nyla Darkoo</option>
                <option value="KA">Kofi Asare</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="expectedGrade"
                className="block text-sm font-semibold mb-2">
                Your Expected Grade
              </label>
              <select
                id="expectedGrade"
                className="w-full border p-2 rounded-lg">
                <option>Your Expected Grade</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="explanation"
                className="block text-sm font-semibold mb-2">
                Explanation
              </label>
              <textarea
                id="explanation"
                rows="4"
                className="w-full border p-2 rounded-lg"
                placeholder="Elaborate..."></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-teal-500 focus:outline-none focus:shadow-outline-blue active:bg-teal-500">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-32">
        <FooterComponent />
      </div>
    </>
  );
};
