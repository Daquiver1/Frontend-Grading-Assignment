import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Login";

test("renders Login component", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  expect(screen.getByText("Student ID")).toBeInTheDocument();
});

test("displays error when submitting empty form", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const loginButton = screen.getByTestID("login-button");
  fireEvent.click(loginButton);

  expect(screen.getByText("Please fill out this field")).toBeInTheDocument();
});

test("logs in with correct credentials", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const studentIdInput = screen.getByPlaceholderText("Student ID");
  const pinInput = screen.getByPlaceholderText("Pin");
  const loginButton = screen.getByTestID("login-button");

  fireEvent.change(studentIdInput, { target: { value: "11019735" } });
  fireEvent.change(pinInput, { target: { value: "1234" } });
  fireEvent.click(loginButton);

  expect(screen.getByText("Welcome, 11019735!")).toBeInTheDocument();
});
