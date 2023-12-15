import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MissingGradeFormPage from "../pages/MissingGradeFormPage";

test("renders MissingGradeFormPage component", () => {
  render(<MissingGradeFormPage />);
  expect(
    screen.getByText("Report Any Missing Grade To Your Instructor")
  ).toBeInTheDocument();
});

test("submits form with valid data", () => {
  render(<MissingGradeFormPage />);

  const courseNameInput = screen.getByPlaceholderText("Enter course name");
  const instructorNameInput = screen.getByPlaceholderText(
    "Enter instructor's name"
  );
  const gradeInput = screen.getByPlaceholderText("Grade");
  const explanationTextarea = screen.getByPlaceholderText(
    "Provide an explanation"
  );
  const submitButton = screen.getByText("Submit");

  fireEvent.change(courseNameInput, { target: { value: "Math 101" } });
  fireEvent.change(instructorNameInput, { target: { value: "Dr. Smith" } });
  fireEvent.change(gradeInput, { target: { value: "A" } });
  fireEvent.change(explanationTextarea, {
    target: { value: "Test explanation" },
  });
  fireEvent.click(submitButton);
});

test("displays error message for empty fields", () => {
  render(<MissingGradeFormPage />);

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
});
