import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home'

const homeLinks = [
  { text: "Apply Here", location: "/login" },
  { text: "Get started", location: "/missing-grades" },
];

test.each(homeLinks)("Check if Home Links are working",(link) => {
  render(
    <BrowserRouter>
    <Home />
    </BrowserRouter>
  );
  const homeDOM = screen.getByText(link.text);
  expect(homeDOM).toHaveAttribute("href", link.location);
});
