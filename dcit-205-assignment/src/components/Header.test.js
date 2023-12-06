import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

const links = [
  { text: "Home", location: "/home" },
  { text: "Log in", location: "/login" },
  { text: "Report", location: "/missing-grades" },
];

test.each(links)("Check if the Nav Bar Has Links.", (link) => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkDom = screen.getByText(link.text);
  expect(linkDom).toHaveAttribute("href", link.location);
});

test("Check if have the logo has a link to the home page", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const logoDom = screen.getByTestId(/logo/);
  expect(logoDom).toHaveAttribute("href", "/home");
  expect(screen.getByAltText(/logo/)).toBeInTheDocument();
});
