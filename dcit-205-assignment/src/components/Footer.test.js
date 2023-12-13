import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import webiste from "../scripts/data";

const footerLinks = [
{text: "About", location: "/"},
{text: "Course Check", location: "/"},
{text: "Apply", location: "/signup"},
{text: "Contact", location: "/"}
];

test.each(footerLinks)("Check if the Footer Bar Has Links.", (link) => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const linkDom = screen.getByText(link.text);
  expect(linkDom).toHaveAttribute("href", link.location);
});