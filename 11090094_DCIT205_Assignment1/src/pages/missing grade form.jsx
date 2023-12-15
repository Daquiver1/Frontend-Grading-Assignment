import React, { useState } from "react";
import FooterComponent from "../components/FooterComponent";

export const Missing_Grade_Form = () => {
  const [formData, setFormData] = useState({
    course: "",
    instructor: "",
    expectedGrade: "",
    explanation: "",
  });

  const [errors, setErrors] = useState({
    course: "",
    instructor: "",
    expectedGrade: "",
    explanation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const newErrors = {};
    if (!formData.course) newErrors.course = "Please select a course";
    if (!formData.instructor)
      newErrors.instructor = "Please select an instructor";
    if (!formData.expectedGrade)
      newErrors.expectedGrade = "Please select an expected grade";
    if (!formData.explanation)
      newErrors.explanation = "Please provide an explanation";

    if (Object.keys(newErrors).length > 0) {
      // There are validation errors, update the state
      setErrors(newErrors);
    } else {
      // Validation successful, proceed with form submission
      alert("Grade report submitted successfully!");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    setErrors({
      ...errors,
      [id]: "", // Clear the error when the user starts typing
    });
  };

  return (
    <div className="container mx-auto mt-12">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h2 className="text-4xl font-bold text-teal-500 text-center mb-6">
          MISSING GRADES?
        </h2>
        <div className="mt-16 space-y-4">
          <div>
            <label
              htmlFor="course"
              className="block text-sm font-semibold mb-2">
              Select a Course
            </label>
            <select
              id="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:outline-none focus:ring focus:border-teal-500">
              <option value="">Select a course</option>
              <option value="01">DCIT 201</option>
              <option value="03">DCIT 203</option>
              <option value="05">DCIT 205</option>
              <option value="07">DCIT 207</option>
              <option value="09">DCIT 209</option>
              <option value="10">CBAS 210</option>
            </select>
            {errors.course && (
              <p className="text-red-500 text-sm mt-2">{errors.course}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="instructor"
              className="block text-sm font-semibold mb-2">
              Select your Instructor
            </label>
            <select
              id="instructor"
              value={formData.instructor}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:outline-none focus:ring focus:border-teal-500">
              <option value="">Select your Instructor</option>
              <option value="DB">David Berko</option>
              <option value="CB">Charis Boateng</option>
              <option value="SB">Seth Baidoo</option>
              <option value="ND">Nyla Darkoo</option>
              <option value="KA">Kofi Asare</option>
            </select>
            {errors.instructor && (
              <p className="text-red-500 text-sm mt-2">{errors.instructor}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="expectedGrade"
              className="block text-sm font-semibold mb-2">
              Your Expected Grade
            </label>
            <select
              id="expectedGrade"
              value={formData.expectedGrade}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:outline-none focus:ring focus:border-teal-500">
              <option value="">Your Expected Grade</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            {errors.expectedGrade && (
              <p className="text-red-500 text-sm mt-2">
                {errors.expectedGrade}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="explanation"
              className="block text-sm font-semibold mb-2">
              Explanation
            </label>
            <textarea
              id="explanation"
              value={formData.explanation}
              onChange={handleChange}
              rows="4"
              className="w-full border p-2 rounded-lg focus:outline-none focus:ring focus:border-teal-500"
              placeholder="Elaborate..."></textarea>
            {errors.explanation && (
              <p className="text-red-500 text-sm mt-2">{errors.explanation}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:shadow-outline-blue active:bg-teal-700"
              disabled={Object.values(errors).some((error) => error !== "")}>
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="mt-32">
        <FooterComponent />
      </div>
    </div>
  );
};
