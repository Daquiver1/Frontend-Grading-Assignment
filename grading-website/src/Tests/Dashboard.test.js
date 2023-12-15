import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StudentDashboard from "../pages/StudentDashboard";

test("renders StudentDashboard component", () => {
  render(<StudentDashboard grades={[]} missingGrades={[]} />);
  expect(screen.getByText("Welcome To Your Dashboard")).toBeInTheDocument();
});

test("displays missing grades alert on button click", () => {
  const missingGrades = ["Math 101", "English 202"];
  render(<StudentDashboard grades={[]} missingGrades={missingGrades} />);

  const checkMissingGradeButton = screen.getByText(
    "Check for any missing grade"
  );
  fireEvent.click(checkMissingGradeButton);

  const missingGradesAlert = screen.getByText("Missing Grades Alert!");
  expect(missingGradesAlert).toBeInTheDocument();

  missingGrades.forEach((course) => {
    expect(
      screen.getByText(
        `You have missing grades for the following courses: ${course}`
      )
    ).toBeInTheDocument();
  });
});

test("displays no missing grades alert when there are no missing grades", () => {
  render(<StudentDashboard grades={[]} missingGrades={[]} />);

  const checkMissingGradeButton = screen.getByText(
    "Check for any missing grade"
  );
  fireEvent.click(checkMissingGradeButton);

  const missingGradesAlert = screen.getByText("Missing Grades Alert!");
  expect(missingGradesAlert).toBeInTheDocument();

  expect(screen.getByText("No missing grades. Good job!")).toBeInTheDocument();
});
