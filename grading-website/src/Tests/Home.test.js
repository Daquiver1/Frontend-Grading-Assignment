import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("renders Home component", () => {
  render(<Home />);
  expect(screen.getByText("Overview of the System")).toBeInTheDocument();
});

test("renders Login card", () => {
  render(<Home />);
  expect(screen.getByText("Login Page")).toBeInTheDocument();
});

test("renders Instructor Contact card", () => {
  render(<Home />);
  expect(screen.getByText("Instructor Contact Page")).toBeInTheDocument();
});

test("renders Help and Support card", () => {
  render(<Home />);
  expect(screen.getByText("Help and Support Page")).toBeInTheDocument();
});
