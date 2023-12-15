import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminNavBar from '../components/Navbars/AdminNavbar';

test('renders AdminNavBar with correct brand text', () => {
  render(
    <MemoryRouter initialEntries={['/admin/dashboard']}>
      <AdminNavBar />
    </MemoryRouter>
  );

  // Check if the brand text is present and correct
  const brandText = screen.getByText(/Dashboard/i);
  expect(brandText).toBeInTheDocument();
});


test('renders logout link with correct href', () => {
  render(
    <MemoryRouter initialEntries={['/admin/dashboard']}>
      <AdminNavBar />
    </MemoryRouter>
  );

  // Check if the logout link is present and has the correct href
  const logoutLink = screen.getByRole('link', { name: 'Log out' });
  expect(logoutLink).toBeInTheDocument();
  expect(logoutLink).toHaveAttribute('href', '/');
});
