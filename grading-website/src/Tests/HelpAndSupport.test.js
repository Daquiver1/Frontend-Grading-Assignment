import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HelpAndSupport from "../pages/HelpAndSupport";

test("renders HelpAndSupport component", () => {
  render(
    <MemoryRouter>
      <HelpAndSupport />
    </MemoryRouter>
  );
  expect(
    screen.getByText("Welcome to UG Grade Report Support")
  ).toBeInTheDocument();
});

test("displays FAQ section header", () => {
  render(
    <MemoryRouter>
      <HelpAndSupport />
    </MemoryRouter>
  );
  expect(screen.getByText("FAQ Section")).toBeInTheDocument();
});

test("displays Contact Form header", () => {
  render(
    <MemoryRouter>
      <HelpAndSupport />
    </MemoryRouter>
  );
  expect(screen.getByText("Contact Form")).toBeInTheDocument();
});

test("submits contact form with valid data", () => {
  render(
    <MemoryRouter>
      <HelpAndSupport />
    </MemoryRouter>
  );

  const studentIdInput = screen.getByPlaceholderText("Enter Student ID");
  const emailInput = screen.getByPlaceholderText("Enter email");
  const messageTextarea = screen.getByPlaceholderText("Your message");
  const sendButton = screen.getByText("Send Message");

  fireEvent.change(studentIdInput, { target: { value: "11019735" } });
  fireEvent.change(emailInput, { target: { value: "example@example.com" } });
  fireEvent.change(messageTextarea, { target: { value: "Test message" } });
  fireEvent.click(sendButton);
});
